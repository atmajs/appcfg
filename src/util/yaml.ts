/** Simple YAML parser / serializer. */
export namespace yaml {
    export function parse(str: string) { return parser.parse(str); }
    export function serialize(mix: any) { return serializer.serialize(mix); }

    namespace parser {
        interface Line { raw: string; text: string; indent: number; number: number; }
        interface State { lines: Line[]; index: number; }

        class YamlError extends Error {
            constructor(message: string, line?: Line) {
                super(line == null ? message : `${message} at line ${line.number}`);
                this.name = 'YamlError';
            }
        }

        export function parse(input: string): any {
            let lines = tokenize(input);
            if (lines.length === 0) return null;

            let state: State = { lines, index: 0 };
            let value = parseBlock(state, lines[0].indent);
            if (state.index < lines.length) throw new YamlError('Unexpected content', lines[state.index]);
            return value;
        }

        function tokenize(input: string): Line[] {
            let result: Line[] = [];
            let blockParentIndent: number | null = null;
            input.replace(/\r\n?/g, '\n').split('\n').forEach((raw, i) => {
                let number = i + 1;
                if (blockParentIndent != null) {
                    let indent = getIndent(raw);
                    if (raw.trim().length === 0 || indent > blockParentIndent) {
                        result.push({ raw, text: raw.trimRight(), indent, number });
                        return;
                    }
                    blockParentIndent = null;
                }

                let text = stripComment(raw).trimRight();
                let trimmed = text.trim();
                if (trimmed.length === 0 || trimmed === '---' || trimmed === '...') return;

                let line = { raw, text, indent: getIndent(text), number };
                result.push(line);
                if (/[|>]$/.test(trimmed) && /(^|:)\s*[|>]$/.test(trimmed)) {
                    blockParentIndent = line.indent;
                }
            });
            return result;
        }

        function parseBlock(state: State, indent: number): any {
            let line = state.lines[state.index];
            if (line == null) return null;
            if (line.indent !== indent) throw new YamlError('Unexpected indentation', line);
            let text = line.text.slice(indent);
            if (text.charAt(0) === '-') return parseArray(state, indent);
            if (text.charAt(0) === '[' || text.charAt(0) === '{' || indexOfToken(text, ':') === -1) {
                state.index++;
                return readInlineOrScalar(text, line);
            }
            return parseObject(state, indent);
        }

        function parseObject(state: State, indent: number, target?: Record<string, any>) {
            let obj = target || {};
            while (state.index < state.lines.length) {
                let line = state.lines[state.index];
                if (line.indent < indent) break;
                if (line.indent > indent) throw new YamlError('Unexpected indentation', line);
                let text = line.text.slice(indent);
                if (text.charAt(0) === '-') break;
                let pair = readKeyValue(text, line);
                state.index++;
                obj[pair.key] = readNodeValue(state, indent, pair.value, line);
            }
            return obj;
        }

        function parseArray(state: State, indent: number) {
            let arr: any[] = [];
            while (state.index < state.lines.length) {
                let line = state.lines[state.index];
                if (line.indent < indent) break;
                if (line.indent > indent) throw new YamlError('Unexpected indentation', line);
                let text = line.text.slice(indent);
                if (text.charAt(0) !== '-') break;
                if (text.length > 1 && /\S/.test(text.charAt(1))) throw new YamlError('A sequence marker must be followed by whitespace', line);

                let value = text.slice(1).trimLeft();
                state.index++;
                if (value.length === 0) { arr.push(readNestedValue(state, indent)); continue; }

                if (isPlainKeyValue(value)) {
                    let pair = readKeyValue(value, line);
                    let obj: Record<string, any> = {};
                    obj[pair.key] = readNodeValue(state, indent, pair.value, line);
                    let next = state.lines[state.index];
                    if (next != null && next.indent > indent) parseObject(state, next.indent, obj);
                    arr.push(obj);
                    continue;
                }
                arr.push(readInlineOrScalar(value, line));
            }
            return arr;
        }

        function readNodeValue(state: State, parentIndent: number, value: string, line: Line): any {
            value = value.trim();
            if (value.length === 0) return readNestedValue(state, parentIndent);
            if (value === '|' || value === '>') return readBlockScalar(state, parentIndent, value === '>');
            return readInlineOrScalar(value, line);
        }

        function readNestedValue(state: State, parentIndent: number): any {
            let next = state.lines[state.index];
            if (next == null || next.indent <= parentIndent) return null;
            return parseBlock(state, next.indent);
        }

        function readBlockScalar(state: State, parentIndent: number, folded: boolean) {
            let rows: string[] = [], blockIndent: number | null = null;
            while (state.index < state.lines.length) {
                let line = state.lines[state.index];
                if (line.text.trim().length !== 0 && line.indent <= parentIndent) break;
                if (blockIndent == null && line.text.trim().length > 0) blockIndent = line.indent;
                let cut = blockIndent == null ? parentIndent + 1 : blockIndent;
                rows.push(line.raw.slice(Math.min(cut, line.raw.length)));
                state.index++;
            }
            if (folded === false) return rows.join('\n');
            return rows.reduce((out, row) => row.trim().length === 0 ? out + '\n' : out + (out.length === 0 || /\n$/.test(out) ? '' : ' ') + row.trim(), '');
        }

        function readInlineOrScalar(value: string, line: Line): any {
            if (value.charAt(0) === '[') return readFlowArray(value, line);
            if (value.charAt(0) === '{') return readFlowObject(value, line);
            return coerce(value, line);
        }

        function readFlowArray(value: string, line: Line) {
            let inner = unwrapFlow(value, '[', ']', line);
            return inner.trim().length === 0 ? [] : splitFlow(inner, ',').map(part => readInlineOrScalar(part.trim(), line));
        }

        function readFlowObject(value: string, line: Line) {
            let inner = unwrapFlow(value, '{', '}', line);
            let obj: Record<string, any> = {};
            if (inner.trim().length === 0) return obj;
            splitFlow(inner, ',').forEach(part => {
                let pair = readKeyValue(part.trim(), line);
                obj[pair.key] = readInlineOrScalar(pair.value.trim(), line);
            });
            return obj;
        }

        function unwrapFlow(value: string, open: string, close: string, line: Line) {
            value = value.trim();
            if (value.charAt(0) !== open || value.charAt(value.length - 1) !== close) throw new YamlError(`Expected ${open}${close} flow value`, line);
            return value.slice(1, -1);
        }

        function readKeyValue(text: string, line: Line): { key: string, value: string } {
            let index = indexOfToken(text, ':');
            if (index === -1) throw new YamlError('Expected key/value pair', line);
            let key = text.slice(0, index).trim();
            if (key.length === 0) throw new YamlError('Expected key', line);
            return { key: unquote(key, line), value: text.slice(index + 1) };
        }

        function isPlainKeyValue(value: string) {
            let first = value.charAt(0);
            return first !== '[' && first !== '{' && first !== '"' && first !== "'" && indexOfToken(value, ':') !== -1;
        }

        function splitFlow(value: string, delimiter: string) {
            let parts: string[] = [], start = 0, quote = '', depth = 0;
            for (let i = 0; i < value.length; i++) {
                let c = value.charAt(i);
                if (quote !== '') {
                    if (c === '\\') i++;
                    else if (c === quote) quote = '';
                    continue;
                }
                if (c === '"' || c === "'") { quote = c; continue; }
                if (c === '[' || c === '{') { depth++; continue; }
                if (c === ']' || c === '}') { depth--; continue; }
                if (depth === 0 && c === delimiter) {
                    parts.push(value.slice(start, i));
                    start = i + 1;
                }
            }
            parts.push(value.slice(start));
            return parts;
        }

        function indexOfToken(value: string, token: string) {
            let quote = '', depth = 0;
            for (let i = 0; i < value.length; i++) {
                let c = value.charAt(i);
                if (quote !== '') {
                    if (c === '\\') i++;
                    else if (c === quote) quote = '';
                    continue;
                }
                if (c === '"' || c === "'") { quote = c; continue; }
                if (c === '[' || c === '{') { depth++; continue; }
                if (c === ']' || c === '}') { depth--; continue; }
                if (depth === 0 && c === token) return i;
            }
            return -1;
        }

        function stripComment(line: string) {
            let quote = '';
            for (let i = 0; i < line.length; i++) {
                let c = line.charAt(i);
                if (quote !== '') {
                    if (c === '\\') i++;
                    else if (c === quote) quote = '';
                    continue;
                }
                if (c === '"' || c === "'") { quote = c; continue; }
                if (c === '#' && (i === 0 || /\s/.test(line.charAt(i - 1)))) return line.slice(0, i);
            }
            return line;
        }

        function coerce(value: string, line: Line): any {
            value = value.trim();
            if (value === 'null' || value === '~') return null;
            if (value === 'true') return true;
            if (value === 'false') return false;
            if (value === '') return '';
            if (value.charAt(0) === '"' || value.charAt(0) === "'") return unquote(value, line);
            if (/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/.test(value)) return Number(value);
            return value;
        }

        function unquote(value: string, line: Line) {
            value = value.trim();
            let quote = value.charAt(0);
            if (quote !== '"' && quote !== "'") return value;
            if (value.charAt(value.length - 1) !== quote) throw new YamlError('Unterminated quoted string', line);
            value = value.slice(1, -1);
            if (quote === "'") return value.replace(/''/g, "'");
            return value.replace(/\\(["\\/bfnrt])/g, (_, c) => {
                switch (c) {
                    case 'b': return '\b';
                    case 'f': return '\f';
                    case 'n': return '\n';
                    case 'r': return '\r';
                    case 't': return '\t';
                    default: return c;
                }
            });
        }

        function getIndent(line: string) {
            let count = 0;
            for (let i = 0; i < line.length; i++) {
                let c = line.charAt(i);
                if (c === ' ') count++;
                else if (c === '\t') count += 2;
                else break;
            }
            return count;
        }
    }

    namespace serializer {
        export function serialize(mix: any, indent = 0): string {
            let indentation = doIndent(indent);
            if (mix === null || mix === undefined) return 'null';
            if (typeof mix === 'boolean' || typeof mix === 'number') return String(mix);
            if (typeof mix === 'string') return serializeStringValue(mix, indent);
            if (Array.isArray(mix)) {
                if (mix.length === 0) return '[]';
                return mix.map(item => {
                    if (item != null && typeof item === 'object') {
                        return `${indentation}-\n${doIndent(indent + 1)}${serialize(item, indent + 1).replace(/^\s+/, '')}`;
                    }
                    return `${indentation}- ${serialize(item, indent + 1).trim()}`;
                }).join('\n');
            }
            if (typeof mix === 'object') {
                let keys = Object.keys(mix);
                if (keys.length === 0) return '{}';
                return keys.map(key => {
                    let value = mix[key];
                    if (shouldStartFromNewLine(value)) {
                        return `${indentation}${serializeKey(key)}:\n${doIndent(indent + 1)}${serialize(value, indent + 1).replace(/^\s+/, '')}`;
                    }
                    return `${indentation}${serializeKey(key)}: ${serialize(value, indent + 1).trim()}`;
                }).join('\n');
            }
            return String(mix);
        }

        function shouldStartFromNewLine(value: any) {
            return value != null && typeof value === 'object' && (Array.isArray(value) === false || value.length > 0);
        }

        function serializeKey(key: string) {
            return /^[A-Za-z0-9_\-]+$/.test(key)
                ? key
                : `"${key.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
        }

        function serializeStringValue(value: string, indent: number) {
            if (value.indexOf('\n') !== -1) {
                return `|\n${doIndent(indent + 1)}${value.split('\n').join(`\n${doIndent(indent + 1)}`)}`;
            }
            if (shouldQuoteString(value) === false) return value;
            return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
        }

        function shouldQuoteString(value: string) {
            if (value.length === 0) return true;
            if (/^\s|\s$/.test(value)) return true;
            if (/[:#\[\]\{\},\n]/.test(value)) return true;
            if (/^(true|false|null|~)$/i.test(value)) return true;
            if (/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?$/.test(value)) return true;
            return false;
        }
    }

    function doIndent(count: number) { return '  '.repeat(count); }
}




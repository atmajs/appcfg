

// export function obj_getProperty(obj, property) {
//     let chain = property.split('.'),
//         imax = chain.length,
//         i = -1;
//     while (++i < imax) {
//         if (obj == null)
//             return null;

import { is_Array, is_Object, obj_getProperty, obj_setProperty } from 'atma-utils';
import { Config } from '../Config';
import { log_error, log_warn } from './log';

//         obj = obj[chain[i]];
//     }
//     return obj;
// };
// export function obj_setProperty(obj, property, value) {
//     let chain = property.split('.'),
//         imax = chain.length,
//         i = -1,
//         key;

//     while (++i < imax - 1) {
//         key = chain[i];

//         if (obj[key] == null)
//             obj[key] = {};

//         obj = obj[key];
//     }

//     obj[chain[i]] = value;
// };
export function obj_defaults(target, defaults) {
    for (let key in defaults) {
        if (target[key] == null)
            target[key] = defaults[key];
    }
    return target;
};
export function obj_extend(target, source) {
    for (let key in source) {
        if (source[key] != null)
            target[key] = source[key];
    }
    return target;
};
export function obj_deepExtend(target, source, opts?: {
    extendArrays?: boolean
    mergeArrayItems?: Record<string, string>
 }) {
    if (target == null) {
        target = {};
    }
    if (source == null) {
        return target;
    }

    if (is_Array(target) && is_Array(source)) {
        for (let i = 0, x, imax = source.length; i < imax; i++) {
            x = source[i];

            if (x == null)
                continue;

            if (is_Object(x)) {
                target.push(obj_deepExtend({}, x, opts));
                continue;
            }
            target.push(x);
        }
        return target;
    }

    if (!is_Object(source) && !is_Object(target)) {
        log_warn('<object:deepExtend> not an object or type missmatch - Dismiss');
        return target;
    }

    for (let key in source) {
        let val = source[key];

        if (key.charCodeAt(0) === 33) {
            // !
            target[key.substring(1)] = val;
            continue;
        }

        if (val == null)
            continue;

        if (target[key] == null) {
            target[key] = val;
            continue;
        }

        if (is_Array(val)) {
            const extendArrays = opts?.extendArrays !== false;
            const idKey = opts?.mergeArrayItems?.[key];
            if (extendArrays || idKey != null) {
                if (is_Array(target[key]) === false) {
                    log_warn('<object:deepExtend> type missmatch %s %s %s - Overwrite', key, val, target[key]);
                    target[key] = val;
                    continue;
                }

                if (idKey != null) {
                    mergeArrays(target[key], val, idKey);
                    continue;
                }

                if (extendArrays) {
                    obj_deepExtend(target[key], val, opts);
                    continue;
                }
            }

            target[key] = val;
            continue;
        }

        if (is_Object(val) && is_Object(target[key])) {
            target[key] = obj_deepExtend(target[key], val, opts);
            continue;
        }

        target[key] = val;
    }

    return target;
};

function mergeArrays (targetArr, sourceArr, idKey) {
    let targetDict = targetArr.reduce((dict, item) => {
        dict[item[idKey]] = item;
        return dict;
    }, {});
    let sourceDict = sourceArr.reduce((dict, item) => {
        dict[item[idKey]] = item;
        return dict;
    }, {});
    for (let i = 0; i < targetArr.length; i++) {
        let target = targetArr[i];
        let source = sourceDict[target[idKey]];
        if (source != null) {
            targetArr[i] = {
               ...target,
               ...source
            };
        }
    }

    for (let i = 0; i < sourceArr.length; i++) {
        let source = sourceArr[i];
        let target = targetDict[source[idKey]];
        if (target == null) {
            targetArr.push(source);
        }
    }
    return targetArr;
}

export function obj_ensureProperty(obj, property, defaultVal) {

    let current = obj_getProperty(obj, property);
    if (current == null) {
        let val = defaultVal == null ? {} : defaultVal;

        obj_setProperty(obj, property, val);
        return val;
    }

    if (typeof current !== typeof defaultVal) {
        log_error(
            '<obj_ensureProperty> type missmatch',
            typeof current,
            typeof defaultVal,
            new Error().stack
        );
    }
    return current;
};
export function obj_interpolate(obj, root?: Config, isOptional?: boolean) {
    root = root || obj;

    // Interpolate strings like: ${foo} or ${bar.baz}
    // Also duble curly braces are supported, like ${{foo}}

    obj_visitStrings(obj, function (str, key, parent) {

        let arr = str.split(/\$\{\{?/g);
        if (arr.length === 1) {
            return str;
        }
        let out = arr[0];
        for (let i = 1; i < arr.length; i++) {
            let slug = arr[i];
            let endIdx = slug.indexOf('}');
            if (endIdx === -1) {
                return str;
            }
            let property = slug.substring(0, endIdx).trim();
            let value = getValueOuter(property, obj, isOptional);

            let rest = slug.substring(endIdx + 1).trim();
            if (rest[0] === '}') {
                rest = rest.substring(1);
            }
            out += value + rest;
        }
        return out;
    });
};

function getValueOuter (property: string, obj, isOptional: boolean) {
    let val = getValue(property, obj, isOptional);
    if (val == null && isOptional !== true) {
        log_warn('<config: obj_interpolate: property not exists in root', property);
    }
    return val ?? ('${{' + property + '}}');
}

function getValue (property: string, obj, isOptional: boolean) {
    if (obj == null) {
        return null;
    }
    if (typeof process !== 'undefined' && process.env != null) {
        let val = obj_getProperty(process.env, property);
        if (val != null) {
            return val;
        }
    }
    let val = obj_getProperty(obj, property);
    if (val != null) {
        return val;
    }
    if (!isOptional) {
        let defaults = obj.defaults;
        if (defaults != null) {
            return getValue(property, defaults, isOptional);
        }
    }
    return null;
}

// deep clone object and arrays
export function obj_clone(obj) {
    if (obj == null || typeof obj !== 'object')
        return obj;

    let Ctor = obj.constructor,
        clone;

    if (Array === Ctor) {
        clone = [];
        let i = -1;
        let imax = obj.length;
        while (++i < imax) {
            clone[i] = obj_clone(obj[i]);
        }
        return clone;
    }
    if (Object === Ctor || null == Ctor) {
        clone = Object.create(null);
        for (let key in obj) {
            clone[key] = obj_clone(obj[key]);
        }
        return clone;
    }
    if (Date === Ctor
        || RegExp === Ctor
        || String === Ctor
        || Number === Ctor) {

        return obj;
    }

    log_warn('Configuration contains not clonable object', obj);
    return obj;
};



export function obj_visitStrings(obj, visitorFn: (str: string, key?: string, parent?) => void) {
    if (obj == null || typeof obj !== 'object') {
        return;
    }

    let val, r;
    if (is_Array(obj)) {
        let arr = obj;
        for (let i = 0; i < arr.length; i++) {
            visit(visitorFn, arr[i], i, arr);
        }
        return;
    }

    for (let key in obj) {
        visit(visitorFn, obj[key], key, obj);
    }
};

function visit(visitorFn, val, key: string | number, parent) {
    if (val == null) {
        return;
    }

    if (typeof val === 'string') {
        parent[key] = visitorFn(val, key, parent) || val;
        return;
    }

    if (typeof val === 'object') {

        if (typeof key === 'string' && key.charCodeAt(0) === 95) {
            return;
        }
        obj_visitStrings(val, visitorFn);
    }
}



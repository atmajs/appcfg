import { log_error } from './log'

export function query_deserialize (query: string, delimiter: string = '&') {
    let obj = {};
    let parts = query.split(delimiter);

    for (let i = 0, imax = parts.length; i < imax; i++) {
        let x = parts[i].split('=');
        let key = x[0];
        let val = x[1] == null ? '' : decode(x[1]);
        if (key[key.length - 1] === ']' && key[key.length - 2] === '[') {
            key = key.substring(0, key.length - 2);
            let current = obj_getProperty(obj, key);
            if (Array.isArray(current)) {
                current.push(val);
            } else {
                obj_setProperty(obj, key, [ val ]);
            }
            continue;
        }
        obj_setProperty(obj, key, val);
    }
    return obj;
};
export function query_serialize (params, delimiter) {
    if (delimiter == null)
        delimiter = '&';

    var query = '',
        key, val;
    for(key in params) {
        val = params[key];
        if (val == null)
            continue;

        // serialize as flag
        if (typeof val === 'boolean')
            val = null;

        query = query + (query ? delimiter : '') + key;
        if (val /* unstrict */)
            query += '=' + encode(val);
    }

    return query;
};

// = private

function obj_setProperty(obj, property: string, value) {
    let chain = property.split('.');
    let i = 0
    let imax = chain.length;
    for (; i < imax - 1; i++) {
        let key = chain[i];
        if (obj[key] == null) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    obj[chain[i]] = value;
}
function obj_getProperty(obj, property: string) {
    let chain = property.split('.');
    let i = 0
    let imax = chain.length;
    for (; i < imax; i++) {
        let key = chain[i];
        if (obj[key] == null) {
            return null;
        }
        obj = obj[key];
    }
    return obj;
}


function decode(str) {
    try {
        return decodeURIComponent(str);
    } catch(error) {
        log_error('decode:URI malformed');
        return '';
    }
}
function encode(str) {
    try {
        return encodeURIComponent(str);
    } catch(error) {
        log_error('encode:URI malformed');
        return '';
    }
}

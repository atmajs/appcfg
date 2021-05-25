import { is_Array, is_Object, obj_getProperty } from 'atma-utils';
import { log_error } from './log';
import { File } from 'atma-io'

export function cfg_imports(obj) {

    rewrite(obj);
};

// === private
let key_DEFAULT = 'default';

function rewrite(obj) {

    if (is_Array(obj))
        rewriteArray(obj);

    if (is_Object(obj))
        rewriteObject(obj);

}

function rewriteObject(obj) {

    for (let key in obj) {
        let c = key.charCodeAt(0);

        if (c === 36) {
            // $ - utility properties
            continue;
        }

        let val = obj[key];

        if (isImportValue(val)) {
            obj[key] = importValue (val);
            continue;
        }


        if (is_Object(val) === false) {
            continue;
        }

        rewrite(val);
    }
}

function rewriteArray(arr) {
    let imax = arr.length,
        i = -1;
    while (++i < imax) {
        let x = arr[i];

        if (is_Object(x) === false) {
            continue;
        }
        rewrite(x);
    }
}


function isImportValue(value) {
    return typeof value === 'string' && value[0] === '#' && rgx.test(value);
}
function importValue (value: string) {
    let match =  rgx.exec(value);
    let path = match.groups.path;
    let json = File.read(path);
    if (match.groups.getter) {
        json = obj_getProperty(json, match.groups.getter);
    }
    return json;
}


const rgx = /#import(\s+)(?<path>[^\s]+)\s*(?<getter>[^\s]+)?/i;

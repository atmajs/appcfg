import { obj_setProperty } from 'atma-utils';

let cache__;

export function cli_arguments() {

    if (cache__ != null) {
        return cache__;
    }
    if (typeof process === 'undefined' || process?.argv == null) {
        // Browser
        return {
            params: {},
            args: []
        };
    }

    let argv = process.argv;
    let imax = argv.length;
    let params = {};
    let args = [];

    for (let i = 2; i < imax; i++) {
        let x = argv[i];

        if (x[0] === '-') {

            let key = x.replace(/^[\-]+/, '');
            let val;
            if (i < imax - 1 && argv[i + 1][0] !== '-') {
                val = argv[i + 1];
                i++;
            } else {
                val = true;
            }

            obj_setProperty(params, key, val);
            continue;
        }

        args.push(x);
    }

    return cache__ = {
        params: params,
        args: args
    };
};

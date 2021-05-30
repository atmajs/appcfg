import { env } from 'atma-io'
import { log_error } from './log';
import { query_deserialize } from './query';

var rgx_specialFolder = /^%(\w+)%/,
    rgx_dblSlash = /[\/]{2,}/g,
    folders = {}
    ;

export function path_handleSpecialFolder(path) {

    if (rgx_specialFolder.test(path) === false)
        return path;

    path = path_normalize(path)
        .replace(rgx_specialFolder, function (full, name) {

            name = name.toUpperCase();

            return folders[name] != null
                ? folders[name]
                : (folders[name] = getSpecialFolder(name))
                ;
        })
        .replace(rgx_dblSlash, '/')
        ;

    return 'file://' + path;
};

function path_normalize(path) {
    return path
        .replace(/\\/g, '/')
        ;
};

// PRIVATE

function getSpecialFolder(name) {

    var nodeEnv = process.env,
        path = nodeEnv[name];

    if (path != null)
        return path;

    switch (name) {
        case 'TEMP':
            path = nodeEnv.TMP || nodeEnv.TMPDIR;
            break;
        case 'APP':
            // @TODO eliminate io.env dependency
            path = env.applicationDir.toLocalDir();
            break;
        case 'APPDATA':
            path = nodeEnv.HOME;
            break;
    }

    if (path == null)
        log_error('<config:special-folder> Not resolved', name);

    return path_normalize(path || nodeEnv.HOME || name);
}

export function path_getQuery(path: string): { [key: string]: string } {
    var i = path.indexOf('?');
    if (i === -1) {
        return {};
    }
    let query = path.substring(i + 1);
    return query_deserialize(query, '&');
};

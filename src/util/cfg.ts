import { class_Uri } from 'atma-utils';
import { obj_clone, obj_deepExtend, obj_ensureProperty, obj_extend, obj_visitStrings } from './object';

/* target - config object
 * source - source config object
 */
export function cfg_merge(target, config, setterProperty: string, additionalParams: {
    extendArrays?: boolean
    mergeArrayItems?: Record<string, string>
}) {

    if (config == null) {
        return;
    }
    if (setterProperty) {
        target = obj_ensureProperty(target, setterProperty, {});
    }
    config = obj_clone(config);
    obj_deepExtend(target, config, additionalParams);
};

export function cfg_extend(target, source, deepExtend, path) {
    if (path) {
        target = obj_ensureProperty(target, path, {});
    }
    var fn = deepExtend !== false
        ? obj_deepExtend
        : obj_extend;
    fn(target, source, {
        extendArrays: false
    });
};

export function cfg_handlePaths(config) {
    var base = config.base;
    obj_visitStrings(config, function (str, key, parent) {
        if (str.charCodeAt(0) !== 126 /* ~ */)
            return null;

        if (str.charCodeAt(1) !== 47 /* / */)
            return null;

        return resolvePath(str, base);
    });
};

export function cfg_resolvePath(path, config) {
    if (path.charCodeAt(0) !== 126) {
        // ~
        return path;
    }
    return resolvePath(path, config.base);
};

function resolvePath(path, base) {
    return class_Uri.combine(base, path.substring(1));
}

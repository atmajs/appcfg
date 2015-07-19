var cfg_merge,
    cfg_extend,
    cfg_resolvePath,
    cfg_handlePaths;


(function(){

    /* target - config object
     * source - source config object
     */
    cfg_merge = function(target, config, setterProperty){

        if (config == null)
            return;

        if (setterProperty)
            target = obj_ensureProperty(target, setterProperty, {});

        config = obj_clone(config);
        obj_deepExtend(target, config);
    };

    cfg_extend = function(target, source, deepExtend, path){
        if (path)
            target = obj_ensureProperty(target, path, {});

        var fn = deepExtend !== false
            ? obj_deepExtend
            : obj_extend;
        fn(target, source);
    };

    cfg_handlePaths = function(config){
        var base = config.base;
        obj_visitStrings(config, function(str, key, parent){
            if (str.charCodeAt(0) !== 126 /* ~ */)
                return null;

            if (str.charCodeAt(1) !== 47 /* / */)
                return null;

            return resolvePath(str, base);
        });
    };

    cfg_resolvePath = function(path, config){
        if (path.charCodeAt(0) !== 126) {
            // ~
            return path;
        }
        return resolvePath(path, config.base);
    };

    function resolvePath(path, base){
        return Uri.combine(base, path.substring(1));
    }
}());
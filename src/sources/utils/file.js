var file_readSourceSync,
    file_readSourceAsync;

(function() {

    file_readSourceAsync = function(rootConfig, path, data) {
        var dfr = new Class.Deferred;
        var file = resolveFile(rootConfig, path, data.optional, data.lookupAncestors);
        if (file == null)
            return dfr.reject({ code: 404 });

        file
            .readAsync()
            .fail(dfr.rejectDelegate())
            .done(function(fileContent) {
                dfr.resolve(prepairConfig(data, file, fileContent));
            });
        return dfr;
    };

    file_readSourceSync = function(rootConfig, path, data) {
        var file = resolveFile(rootConfig, path, data.optional);
        if (file == null) {
            return null;
        }
        var content = file.read();
        return prepairConfig(data, file, content);
    };


    function resolveFile(rootConfig, path, isOptional, lookupAncestors) {
        var uri = new Uri(path),
            file;
        if (io.File.exists(uri))
            return new io.File(uri);

        if (uri.isRelative() && typeof include !== 'undefined') {
            uri = (new Uri(include.location)).combine(path);
            if (io.File.exists(uri))
                return new io.File(uri);
        }
        if (lookupAncestors) {
            if (uri.isRelative() === false) {
                uri = (new Uri(global.process.cwd())).combine(uri);
            }
            var path = uri.path();
            while (uri.cdUp() && uri.path !== path) {
                path = uri.path;
                if (io.File.exists(uri)) {
                    return new io.File(uri);
                }
            }
        }

        if (isOptional !== true) {
            log_error('Configuration file not found', path);
            log_warn('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
        }
        return null;
    }

    function prepairConfig(data, file, fileContent) {
        var config;
        if (typeof fileContent === 'string') {
            data.writable = false;
            config = module_eval(file.uri.toLocalFile(), fileContent);
        } else {
            config = fileContent;
        }

        obj_interpolate(config, config, true);
        var prop = data.getterProperty;
        if (prop) {
            config = obj_getProperty(config, prop);
        }
        return config;
    }
}());
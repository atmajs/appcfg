var file_readSourceSync,
	file_readSourceAsync;

(function(){

	file_readSourceAsync = function(rootConfig, path, data){
		var dfr = new Class.Deferred;
		var file = resolveFile(rootConfig, path, data.optional);
		if (file == null)
			return dfr.reject({ code: 404 });

		file
			.readAsync()
			.fail(dfr.rejectDelegate())
			.done(function(config){
				if (typeof config === 'string') {
					data.writable = false;
					config = module_eval(file.uri.toLocalFile(), config);
				}

				var prop = data.getterProperty;
				if (prop)
					config = obj_getProperty(config, prop);

				dfr.resolve(config);
			});
		return dfr;
	};

	file_readSourceSync = function(rootConfig, path, data){

		var file = resolveFile(rootConfig, path, data.optional);
		if (file == null) {
			return null;
		}
		
		var config = file.read();
		if (typeof config === 'string') {
			data.writable = false;
			config = module_eval(file.uri.toLocalFile(), config);
		}

		var prop = data.getterProperty;
		if (prop)
			config = obj_getProperty(config, prop);

		return config;
	};


	function resolveFile(rootConfig, path, isOptional){
		var uri = new Uri(path),
			file
			;
		if (io.File.exists(uri))
			return new io.File(uri);

		if (uri.isRelative() && typeof include !== 'undefined') {
			uri = (new Uri(include.location)).combine(path);
			if (io.File.exists(uri))
				return new io.File(uri);
		}

		if (isOptional !== true) {
			log_error('Configuration file not found', path);
			log_warn('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
		}
		return null;
	}
}());
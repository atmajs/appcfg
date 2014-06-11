var file_readSource;

(function(){
	
	file_readSource = function(rootConfig, path, data){
		var uri = new net.Uri(path),
			file
			;
		if (io.File.exists(uri))
			file = new io.File(uri);
			
		if (file == null
			&& uri.isRelative()
			&& typeof include !== 'undefined') {
			
			uri = (new net.Uri(include.location)).combine(path);
			if (io.File.exists(uri)) 
				file = new io.File(uri);
		}
		
		if (file == null) {
			if (data.optional !== true)
				logger
					.error('<config> Configuration file not found', path)
					.warn('Set `optional:true`, if configuration is not strict required')
					;
				
			return null;
		}
		
			
			
		var config = file.read();
			
		if (typeof config === 'string') {
			data.writable = false;
			config = module_eval(uri.toLocalFile(), config);
		}
			
		var prop = data.getterProperty;
		if (prop) 
			config = obj_getProperty(config, prop);
		
		return config;
	};
	
}());
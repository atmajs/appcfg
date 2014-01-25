(function(){
	
	SourceFactory.register('file', Class({
		
		Base: Class.Deferred,
		
		Static: {
			canHandle: function(data){
				var path = data.path;
				if (typeof path !== 'string') 
					return false;
				
				if (path.search(/\*\?/g) !== -1)
					// wildcards - directory source
					return false;
				
				if (path[path.length - 1] === '/')
					// directory
					return false;
				
				return true;
			},
		},
		
		Construct: function(data){
			this.data = data;
			
			data.path = path_handleSpecialFolder(data.path);
		},
		
		read: function(rootConfig){
			this.defer();
			
			var file = new io.File(this.data.path);
			if (file.exists() === false) {
				
				if (this.data.optional) 
					return this.resolve();
				
				console.error('<config> Configuration file not found', this.data.path);
				return this.reject();
			}
			
			
			this.config = file.read();
			
			if (typeof this.config === 'string') {
				this.data.writable = false;
				this.config = module_eval(this.data.path, this.config);
			}
			
			var prop = this.data.getterProperty;
			if (prop) 
				this.config = obj_getProperty(this.config, prop);
			
			cond_rewrite(this.config, rootConfig, cli_arguments().params);
			
			
			return this.resolve();
		},
		
		write: function(config){
			
			if (this.data.writable !== true) 
				return;
			
			this.config = obj_deepExtend(this.config, config);
			
			new io
				.File(this.data.path)
				.write(this.config)
				;
		}
	}));
	
	
	function module_eval(path, script){
		
		var module = {
				exports: {}
			},
			exports = module.exports
			;
			
		try {
			eval(script);
		} catch(error){
			console.error('<config> Configuration evaluation error', path, error);
		}
		
		return module.exports;
	}
	
}());
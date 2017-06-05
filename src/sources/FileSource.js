(function(){
	
	SourceFactory.register('file', Class({
		
		Base: Class.Deferred,
		
		Static: {
			canHandle: function(data){
				var path = data.path;
				if (typeof path !== 'string') 
					return false;
				
				if (path.search(/[\*\?]/g) !== -1)
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
			this.config = {};
			data.path = path_handleSpecialFolder(data.path);
		},
		
		read: function(rootConfig){
			this.defer();
			var self = this;
			
			
			file_readSourceAsync(
					rootConfig,
					this.data.path,
					this.data
				)
				.fail(this.rejectDelegate())
				.done(function(config){
					self.config = config;
					self.resolve(config);
				});
			
			return this;
		},

		readSync: function (rootConfig) {
			return this.config = file_readSourceSync(
				rootConfig,
				this.data.path,
				this.data
			);
		},
		
		write: function(config, deepExtend, setterProperty){
			this.defer();
			
			if (this.data.writable !== true) 
				return this.reject('Not writable');
			
			cfg_extend(this.config, config, deepExtend, setterProperty);
			
			var filename = this.data.path,
				cfg = getContent(this.config, filename);
			io
				.File
				.writeAsync(filename, cfg)
				.pipe(this);
			
			return this;
		}
	}));
	
	
	function getContent(config, path) {
		var hooks = io
			.File
			.getHookHandler()
			.getHooksForPath(path, 'write');
		
		if (hooks.length !== 0) 
			return config;
		
		try {
			return JSON.stringify(config);
		} catch(error) {
			return config;
		}
	}
}());
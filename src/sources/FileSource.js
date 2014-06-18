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
		
		write: function(config){
			this.defer();
			
			if (this.data.writable !== true) 
				return this.reject('Not writable');
			
			this.config = obj_deepExtend(this.config, config);
			
			
			try {
				io
					.File
					.writeAsync(
						this.data.path,
						JSON.stringify(this.config)
					)
					.pipe(this);
			} catch(error) {
				this.reject('JSON.serialization ' + String(error));
			}
			
			return this;
		}
	}));
	
	
}());
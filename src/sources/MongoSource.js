(function(){
	
	function createMongoClass(mongo, id) {
		return new (Class({
			Base: Class.Serializable,
			Store: Class.MongoStore.Single(mongo),
			
			_id: id
		}));
	}
	
	SourceFactory.register('mongo', Class({
		Base: Class.Deferred,
		Static: {
			canHandle: function(data){
				
				return 'mongo' in data;
			}
		},
		Construct: function(data){
			this.data = data;
			this.config = {};
			
			if (data.settings) 
				Class.MongoStore.settings(data.settings);
				
			if (data.writable == null) 
				data.writable = true;
		},
		
		read: function(rootConfig){
			var mongoSettings = rootConfig.mongodb;
			if (mongoSettings) 
				Class.MongoStore.settings(mongoSettings);
			
			var source = this;
			
			createMongoClass(this.data.mongo)
				.fetch()
				.done(function(){
					
					source.config = this.toJSON();
					source._id = this._id;
					
					delete source.config._id;
					
					source.resolve();
				})
				.fail(function(error){
					
					source.reject(error);
				});
			
			return source;
		},
		
		write: function(config, deepExtend, path){
			
			cfg_extend(this.config, config, deepExtend, path);
			
			var source = this;
			Class
				.MongoStore
				.resolveCollection(this.data.mongo)
				.done(function(coll){
					
					coll.update({}, source.config, {
						upsert: true,
						multi: false
					}, function(error) {
						
						if (error) 
							return source.reject(error);
						
						source.resolve();
					});
					
				});
			
			return source;
		}
	}));
	
	
}());
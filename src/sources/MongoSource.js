(function(){
	
	var MongoSourceProto = {
		
		read: function(rootConfig){
			
			var mongoSettings = rootConfig.mongodb;
			if (mongoSettings) 
				Class.MongoStore.settings(data.mongoSettings);
			
			return this.fetch();
		},
		
		write: function(config){
			
			if (this.data.writable !== true) 
				return;
			
			obj_deepExtend(this, config);
			
			this.save();
		}
	}
	
	SourceFactory.register('mongo', Class({
		
		Static: {
			canHandle: function(data){
				
				return 'mongo' in data
			}
		},
		Construct: function(data){
			
			if (data.settings) 
				Class.MongoStore.settings(data.settings);
			
			new (Class({
				Base: MongoSourceProto,
				Store: Class.MongoStore.Single(data.mongo)
			}));
		}
	}));
	
	
}());
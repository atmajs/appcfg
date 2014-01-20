(function(){
	
	var MongoSourceProto = {
		
		read: function(){
			return this.fetch()
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
			
			new (Class({
				Base: MongoSourceProto,
				Store: Class.MongoStore.Single(data.mongo)
			}));
		}
	}));
	
	
}());
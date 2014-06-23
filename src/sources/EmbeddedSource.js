(function(){
	
	SourceFactory.register('embedded', Class({
		Base: Class.Deferred,
        
		Static: {
			canHandle: function(data){
				
				return is_Object(data.config)
			}
		},
		Construct: function(data){
			this.data = data;
            this.data.writable = false;
			this.config = data.config;
		},
        
        read: function(){
        
            this.resolve();  
        },
	}));
	
	
}());
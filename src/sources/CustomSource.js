(function(){
	
	SourceFactory.register('custom', Class({
		
		Static: {
			canHandle: function(data){
				
				return typeof data === 'function'
			}
		},
		Construct: function(Ctor){
			
			return new Ctor();
		}
	}));
	
	
}());
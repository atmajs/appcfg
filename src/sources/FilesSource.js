(function(){
	
	SourceFactory.register('files', Class({
		
		Base: Class.Deferred,
		
		Static: {
			canHandle: function(data){
				
				return Array.isArray(data.files)
			},
		},
		
		Construct: function(data){
			var FileHandler = Handlers.file;
				
			return data.files.map(function(file){
				return new FileHandler({ path: file });
			});
		}
	}));
	
}());
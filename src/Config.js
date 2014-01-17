var Config = Class({
	Base: Class.Deferred,
	
	Construct: function(arr){
		
		this.data = arr;
		
	},
	
	read: function(){
		
		var that = this;
		
		SourceFactory
			.loadSources(this.data)
			.done(function(){
				
				this.each(function(source){
					
					obj_deepExtend(that, source.config);
				});
				
				that.resolve()
			})
		
		return that;
	}
});
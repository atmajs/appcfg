var Handlers = {};
var Sources = Class.Collection(Object, {
	Base: Class.Await,
	
	add: function(mix){
		
		if (mix.length && typeof mix.forEach === 'function') {
			mix.forEach(function(handler){
				
				this.push(handler);
			}, this);
			
			return;
		}
		
		this.push(mix);
		
	}
});

var SourceFactory = {
	
	loadSources: function(arr, rootConfig){
		
		var imax = arr.length,
			i = -1
			;
		var sources = new Sources,
			Handler, handlerName, data
			;
			
		outer: while( ++i < imax ){
			
			
			data = arr[i];
			
			for(handlerName in Handlers) {
				
				Handler = Handlers[handlerName];
				if (Handler.canHandle(data)) {
					sources.add(new Handler(data));
					
					continue outer;
				}
			}
			
			logger.error('<unhandled configuration source> :', data);
		}
		
		
		i = sources.length;
		while(--i > -1){
			
			sources[i]
				.read(rootConfig)
				.always(sources.delegate(null, false));
		}
		
		
		
		return sources;
	},
	
	register: function(name, Handler){
		Handlers[name] = Handler;
	}
};

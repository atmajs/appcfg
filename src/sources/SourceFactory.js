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
			Handler,
			handlerName,
			data,
			source
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
		
		var before,
			after;
		
		i = sources.length;
		while(--i > -1){
			source = sources[i];
			
			before = source.data.beforeRead;
			before &&
				before(source, rootConfig);
			
			after = source.data.afterRead;
			
			source
				.read(rootConfig)
				.done(afterDelegate(after, source, rootConfig))
				.always(sources.delegate(null, false))
				;
		}
		
		function afterDelegate(fn, source, rootConfig){
			
			if (fn == null) 
				return null;
			
			return function(){
				
				fn(source, rootConfig);
			};
		}
		
		return sources;
	},
	
	register: function(name, Handler){
		Handlers[name] = Handler;
	}
};

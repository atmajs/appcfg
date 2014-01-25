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
	},
	
	load: function(rootConfig){
		var sources = this,
			
			source, i, before, after;
		
		i = sources.length;
		while(--i > -1){
			source = sources[i];
			
			before = source.data && source.data.beforeRead;
			after = source.data && source.data.afterRead;
			
			if (before)
				before(source, rootConfig);
			
			source
				.read(rootConfig)
				;
			source
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
	}
});

var SourceFactory = {
	
	create: function(arr){
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
		
		return sources;
	},
	
	register: function(name, Handler){
		Handlers[name] = Handler;
	}
};

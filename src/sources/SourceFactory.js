var Handlers = {};
var Sources = Class.Collection(Object, {
	Base: Class.Deferred,
	
	add: function(mix){
		
		if (mix.length && typeof mix.forEach === 'function') {
			mix.forEach(function(handler){
				
				this.push(handler);
			}, this);
			
			return;
		}
		
		this.push(mix);
	},
	
	load: function(rootConfig, i){
		var sources = this,
			imax = sources.length,
			
			source, before, after;
			
		if (i == null) 
			i = -1;
		
		var count = 0,
			await = new Class.Await()
			;
		
		while( ++i < imax ){
			source = sources[i];
			
			if ( ++count > 1 ) {
				
				if (source.data.sync) {
					await.always(resume);
					break;
				}
			}
			
			before = source.data && source.data.beforeRead;
			after = source.data && source.data.afterRead;
			
			if (before)
				before(source, rootConfig);
			
			source
				.read(rootConfig)
				;
			source
				.done(afterDelegate(after, source, rootConfig))
				.always(await.delegate(null, false))
				;
		}
		function resume(){						
			sources.load(rootConfig, i - 1);
		}
		
		if (i > imax - 1) 
			await.always(sources.resolveDelegate());
		
		
		function afterDelegate(fn, source, rootConfig){
			return function(){
				
				cfg_merge(
					rootConfig
					, source.config
					, source.data.setterProperty
				);
				if (fn) 
					fn(source, rootConfig);
			};
		}
		
		return sources;
	}
});

var SourceFactory = {
	
	create: function(arr){
		if (typeof arr === 'string') {
			// file/directory/glob source
			arr = [ {path: arr} ];
		}
		if (Array.isArray(arr) === false) {
			// single source
			arr = [ arr ];
		}
		
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
			if (data == null) 
				continue;
			
			for(handlerName in Handlers) {
				
				Handler = Handlers[handlerName];
				if (Handler.canHandle(data)) {
					sources.add(new Handler(data));
					
					continue outer;
				}
			}
			
			log_error('<unhandled configuration source> :', data);
		}
		
		return sources;
	},
	
	register: function(name, Handler){
		Handlers[name] = Handler;
	}
};

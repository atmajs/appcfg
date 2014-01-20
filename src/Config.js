var Config = Class({
	Base: Class.Deferred,
	
	Construct: function(arr){
		
		this.data = arr;
	},
	
	Static: {
		
		fetch: function(arr){
			
			return new Config(arr).$read();
		}
	},
	
	
	$read: function(){
		var config = this,
			arr = this.data
			;
		
		this._sources = SourceFactory
			.loadSources(arr, config)
			.done(function(){
				
				this.each(function(source){
					
					var target = config,
						prop = source.data.setterProperty;
					
					if (prop) {
						
						obj_ensureProperty(config, prop, {});
						target = obj_getProperty(config, prop);
					}
					
					obj_deepExtend(target, source.config);
				});
				
				config.$cli = cli_arguments();
				
				var overrides = config.$cli.params,
					prop;
				for(prop in overrides){
					
					obj_setProperty(config, prop, overrides[prop]);
				}
				
				
				
				config.resolve()
			});
			
		return config;
	},
	
	$write: function(config){
		obj_deepExtend(config);
		
		var sources = this._sources,
			i = sources.length
			;
		while( --i > -1 ){
			if (sources[i].data.writable) {
				sources[i].write(config);
				return this;
			}
		}
		
		logger.error('<config:write> Writable source not defined.');
		return this;
	}
	
});
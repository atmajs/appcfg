var Config = Class({
	Base: Class.Deferred,
	
	Construct: function(data){
		this.$data = data;
		this.$sources = SourceFactory.create(data);
	},
	
	Static: {
		
		fetch: function(arr){
			
			return new Config(arr).$read();
		},
		
		create: function(arr){
			return new Config(arr);
		}
	},
	
	
	$read: function(arr){
		arr = arr || this.$data;
		
		var config = this;
		
		this.defer();
		this.$cli = cli_arguments();
		this.$sources
			.load(config)
			.done(function(){
			
				var overrides = config.$cli.params,
					prop;
				for(prop in overrides){
					
					obj_setProperty(config, prop, overrides[prop]);
				}
				
				
				obj_interpolate(config);
				
				config.resolve()
			});
			
		return config;
	},
	
	$write: function(config){
		obj_deepExtend(config);
		
		var sources = this.$sources,
			i = sources.length
			;
		while( --i > -1 ){
			if (sources[i].data.writable) {
				
				this.defer();
				sources[i]
					.write(config);
				
				sources
					.always(this.resolveDelegate());
				return this;
			}
		}
		
		var msg = '<config:write> Writable source not defined.';
		logger.error(msg);
		
		return this.reject(msg);
	},
	
	$extend: function(config){
		
		obj_deepExtend(this, config);
	},
	
	Override: {
		toJSON: function(){
			var json = this.super(),
				key;
			
			for(key in json){
				if (key[0] === '$') 
					delete json[key];
			}
			
			return json;
		}
	}
	
});
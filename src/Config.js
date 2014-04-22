var Config = Class({
	Base: Class.Deferred, //Class.Await,
	
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
	
	$get: function(path){
		return obj_getProperty(this, path);
	},
	
	$set: function(path, value){
		obj_setProperty(this, path, value);
	},
	
	$extend: function(config){
		
		obj_deepExtend(this, config);
	},
	
	$read: function(mix){
		var config = this,
			//resume = this.delegate(null, false),
			sources = mix == null
				? this.$sources
				: SourceFactory.create(mix)
				;
			
		this.$cli = cli_arguments();
		
		sources
			.load(config)
			.done(function(){
				var overrides = config.$cli.params,
					prop;
				for(prop in overrides){
					obj_setProperty(config, prop, overrides[prop]);
				}
				
				obj_interpolate(config);
				//resume();
				config.resolve(config);
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
				
				sources[i]
					.always(this.resolveDelegate());
				return this;
			}
		}
		
		var msg = '<config:write> Writable source not defined.';
		logger.error(msg);
		
		return this.reject(msg);
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
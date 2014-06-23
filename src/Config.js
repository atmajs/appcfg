var Config = Class({
	
	Base: Class.Deferred,
	Construct: function(data){
		this.$data = data;
		this.$sources = SourceFactory.create(data);
		this.$parallelReads = new Class.Await;
	},
	
	Static: {
		
		fetch: function(arr){
			return new Config(arr).$read();
		},
		
		create: function(arr){
			return new Config(arr);
		}
	},
	
	// Properties
	$parallelReads: null,
	$sources: null,
	$cli: null,
	
	// Methods
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
			resume = this.$parallelReads.delegate(null, false),
			sources = mix == null
				? this.$sources
				: SourceFactory.create(mix)
				;
		
		this.$parallelReads._always = null;
		this.$parallelReads.always(this._onComplete);
		this.$cli = cli_arguments();
		this.defer();
		
		sources
			.load(config)
			.done(function(){
				var overrides = config.$cli.params,
					prop;
				for(prop in overrides){
					obj_setProperty(config, prop, overrides[prop]);
				}
				
				obj_interpolate(config);
				cfg_conditions(config, config, config.$cli.params);
				resume();
			});
		
		
		
		return config;
	},
	
	Self: {
		_onComplete: function(){
			this.resolve(this);
		}
	},
	$write: function(config, deepExtend, path){
		cfg_extend(this, config, deepExtend, path);
		
		var sources = this.$sources,
			i = sources.length
			;
		while( --i > -1 ){
			if (sources[i].data.writable !== true)
				continue;
				
			this.defer();
			
			config = obj_clone(config);
			sources[i]
				.write(config);
			sources[i]
				.pipe(this);
			return this;
		}
		
		var msg = '<config:write> Writable source not defined.';
		log_error(msg);
		
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
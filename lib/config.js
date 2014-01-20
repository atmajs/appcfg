// source /src/license.txt
/*!
 * config v0.1.2
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, 2014
 */
// end:source /src/license.txt
// source /src/umd-head.js
(function(root, factory){
	"use strict";

	var _global = typeof window === 'undefined' || window.navigator == null
			? global
			: window
			,
		_exports
		;

    
	_exports = root || _global;
    

    function construct(){

        return factory(_global, _exports);
    };

    
    if (typeof define === 'function' && define.amd) {
        return define(construct);
    }
    
	// Browser OR Node
    construct();
	
	if (typeof module !== 'undefined') 
		module.exports = _exports.Config;
	
}(this, function(global, exports){
	"use strict";
// end:source /src/umd-head.js

	// source /src/scope-vars.js
	// library global variables
	
	var io,
		Class;
	
	(function(){
		
		Class = (global.atma && global.atma.Class) || global.Class || require('atma-libs/exports').Class;
		io = global.io || require('atma-io');
		
	}());
	
	// end:source /src/scope-vars.js
	
	// source /src/util/cli.js
	var cli_arguments;
	
	
	(function(){
		
		cli_arguments = function(){
			
			var argv = process.argv,
				imax = argv.length,
				i = 2,
				params = {},
				args = [],
				key, val, x;
			
			for (; i < imax; i++){
				x = argv[i];
				
				if (x[0] === '-') {
					
					key = x.replace(/^[\-]+/, '');
					
					if (i < imax - 1 && argv[i + 1][0] !== '-') {
						val = argv[i + 1];
						i++;
					} else {
						val = true;
					}
					
					params[key] = val;
					continue;
				}
				
				args.push(x);
			}
			
			return {
				params: params,
				args: args
			};		
		};
		
	}());
	
	// end:source /src/util/cli.js
	// source /src/util/object.js
	
	var obj_getProperty,
		obj_setProperty,
		obj_defaults,
		obj_extend,
		obj_deepExtend,
		obj_ensureProperty
		;
	
	(function(){
		
		obj_getProperty = function(obj, property) {
			var chain = property.split('.'),
				imax = chain.length,
				i = -1;
			while ( ++i < imax ) {
				if (obj == null) 
					return null;
				
				obj = obj[chain[i]];
			}
			return obj;
		};
		
		
		obj_setProperty = function(obj, property, value) {
			var chain = property.split('.'),
				imax = chain.length,
				i = -1,
				key;
		
			while ( ++i <  imax - 1) {
				key = chain[i];
				
				if (obj[key] == null) 
					obj[key] = {};
				
				obj = obj[key];
			}
		
			obj[chain[i]] = value;
		};
		
		obj_defaults = function(target, defaults) {
			for (var key in defaults) {
				if (target[key] == null) 
					target[key] = defaults[key];
			}
			return target;
		};
		
		obj_extend = function(target, source) {
			for (var key in source) {
				if (source[key] != null) 
					target[key] = source[key];
			}
			return target;
		};
		
		obj_deepExtend = function(target, source){
					
			if (source == null) 
				return target;
			
			if (Array.isArray(target) && Array.isArray(source)) {
				for (var i = 0, x, imax = source.length; i < imax; i++){
					x = source[i];
					if (target.indexOf(x) === -1) {
						target.push(x);
					}
				}
				return target;
			}
			
			if (typeof source !== 'object' && typeof target !== 'object') {
				logger.warn('<object:deepExtend> not an object or type missmatch - Dismiss');
				return target;
			}
			
			var key, val;
			for(key in source){
				val = source[key];
				
				if (target[key] == null) {
					target[key] = val;
					continue;
				}
				
				if (Array.isArray(val)) {
					if (Array.isArray(target[key]) === false) {
						logger.warn('<object:deepExtend> type missmatch %s %s %s - Overwrite', key, val, target[key]);
						
						target[key] = val;
						continue;
					}
					obj_deepExtend(target[key], val);
					continue;
				}
				
				if (typeof val === 'object' && typeof target[key] === 'object') {
					target[key] = obj_deepExtend(target[key], val);
					continue;
				}
				
				target[key] = val;
			}
			
			return target;
		};
		
		obj_ensureProperty = function(obj, property, defaultVal) {
			
			var current = obj_getProperty(obj, property);
			if (current == null) 
				return obj_setProperty(obj, property, defaultVal == null ? {} : defaultVal);
			
			if (typeof current !== typeof defaultVal) {
				logger.error(
					'<obj_ensureProperty> type missmatch',
					typeof current,
					typeof defaultVal,
					new Error().stack
				);
			}
		};
		
	}());
	// end:source /src/util/object.js
	// source /src/util/path.js
	var path_handleSpecialFolder,
		path_normalize
		;
	
	(function(){
		
		var rgx_specialFolder = /%([^%]+)%/g,
			rgx_dblSlash = /[\/]{2,}/g,
			folders = {}
			;
		
		path_handleSpecialFolder = function(path){
			
			if (rgx_specialFolder.test(path) === false) 
				return path;
			
			
			return path_normalize(path)
				.replace(rgx_specialFolder, function(full, name){
					
					name = name.toUpperCase();
					
					return folders[name] != null
						? folders[name]
						: (folders[name] = getSpecialFolder(name))
						;
				})
				.replace(rgx_dblSlash, '/')
				;
			
		};
		
		
		// PRIVATE
		
		function getSpecialFolder(name){
			
			var env = process.env,
				path = env[name];
			
			if (path != null) 
				return path;
				
			switch(name) {
				case 'TEMP':
					path = env.TMP || env.TMPDIR;
					break;
			}
			
			if (path != null) 
				return path;
			
			logger.error('<config:special-folder> Not resolved', name);
			return env.HOME || name;
		}
		
	}());
	// end:source /src/util/path.js
	
	// source /src/sources/exports.js
	var SourceFactory = (function(){
		
		// source SourceFactory.js
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
		
		// end:source SourceFactory.js
		// source FileSource.js
		(function(){
			
			SourceFactory.register('file', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						var path = data.path;
						if (typeof path !== 'string') 
							return false;
						
						if (path.search(/\*\?/g) !== -1)
							// wildcards - directory source
							return false;
						
						if (path[path.length - 1] === '/')
							// directory
							return false;
						
						return true;
					},
				},
				
				Construct: function(data){
					this.data = data;
					
					data.path = path_handleSpecialFolder(data.path);
				},
				
				read: function(rootConfig){
					this.defer();
					
					var file = new io.File(this.data.path);
					if (file.exists() === false) {
						console.error('<config> Configuration file not found', this.data.path);
						return this.reject();
					}
					
					
					this.config = file.read();
					
					if (typeof this.config === 'string') {
						this.data.writable = false;
						this.config = module_eval(this.data.path, this.config);
					}
					
					var prop = this.data.getterProperty;
					if (prop) 
						this.config = obj_getProperty(this.config, prop);
					
					cond_rewrite(this.config, rootConfig, cli_arguments().params);
					
					
					return this.resolve();
				},
				
				write: function(config){
					
					if (this.data.writable !== true) 
						return;
					
					new io.File(this.data.path).write(this.config);
				}
			}));
			
			
			function module_eval(path, script){
				
				var module = {
						exports: {}
					},
					exports = module.exports
					;
					
				try {
					eval(script);
				} catch(error){
					console.error('<config> Configuration evaluation error', path, error);
				}
				
				return module.exports;
			}
			
		}());
		// end:source FileSource.js
		// source DirectorySource.js
		(function(){
			
			
			SourceFactory.register('directory', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						
						var path = data.path;
						if (typeof path !== 'string') 
							return false;
						
						if (path.search(/\*\?/g) !== -1)
							return true;
						
						if (path[path.length - 1] === '/')
							return true;
						
						return false;
					},
				},
				
				Construct: function(data){
					var path = data.path.replace(/\\/g, '/'),
						wildCardIndex = path.search(/\*\?/g),
						index = path.lastIndexOf('/', wildCardIndex),
						
						base, pattern;
					
					if (wildCardIndex === -1) {
						base = path;
					} else{
						
						base = path.substring(0, index);
						pattern = path.substring(index + 1);
					}
					
					
					return new io
						.Directory(base)
						.readFiles(pattern)
						.files
						.map(function(file){
							
							return file.uri.toLocalFile();
						});
					
				}
			}));
			
			
		}());
		// end:source DirectorySource.js
		// source MongoSource.js
		(function(){
			
			var MongoSourceProto = {
				
				read: function(rootConfig){
					
					var mongoSettings = rootConfig.mongodb;
					if (mongoSettings) 
						Class.MongoStore.settings(data.mongoSettings);
					
					return this.fetch();
				},
				
				write: function(config){
					
					if (this.data.writable !== true) 
						return;
					
					obj_deepExtend(this, config);
					
					this.save();
				}
			}
			
			SourceFactory.register('mongo', Class({
				
				Static: {
					canHandle: function(data){
						
						return 'mongo' in data
					}
				},
				Construct: function(data){
					
					if (data.settings) 
						Class.MongoStore.settings(data.settings);
						
					if (data.writable == null) 
						data.writable = true;
					
					new (Class({
						Base: MongoSourceProto,
						Store: Class.MongoStore.Single(data.mongo)
					}));
				}
			}));
			
			
		}());
		// end:source MongoSource.js
		
		
		return SourceFactory;
	}());
	// end:source /src/sources/exports.js
	
	// source /src/sources/exports.js
	var SourceFactory = (function(){
		
		// source SourceFactory.js
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
		
		// end:source SourceFactory.js
		// source FileSource.js
		(function(){
			
			SourceFactory.register('file', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						var path = data.path;
						if (typeof path !== 'string') 
							return false;
						
						if (path.search(/\*\?/g) !== -1)
							// wildcards - directory source
							return false;
						
						if (path[path.length - 1] === '/')
							// directory
							return false;
						
						return true;
					},
				},
				
				Construct: function(data){
					this.data = data;
					
					data.path = path_handleSpecialFolder(data.path);
				},
				
				read: function(rootConfig){
					this.defer();
					
					var file = new io.File(this.data.path);
					if (file.exists() === false) {
						console.error('<config> Configuration file not found', this.data.path);
						return this.reject();
					}
					
					
					this.config = file.read();
					
					if (typeof this.config === 'string') {
						this.data.writable = false;
						this.config = module_eval(this.data.path, this.config);
					}
					
					var prop = this.data.getterProperty;
					if (prop) 
						this.config = obj_getProperty(this.config, prop);
					
					cond_rewrite(this.config, rootConfig, cli_arguments().params);
					
					
					return this.resolve();
				},
				
				write: function(config){
					
					if (this.data.writable !== true) 
						return;
					
					new io.File(this.data.path).write(this.config);
				}
			}));
			
			
			function module_eval(path, script){
				
				var module = {
						exports: {}
					},
					exports = module.exports
					;
					
				try {
					eval(script);
				} catch(error){
					console.error('<config> Configuration evaluation error', path, error);
				}
				
				return module.exports;
			}
			
		}());
		// end:source FileSource.js
		// source DirectorySource.js
		(function(){
			
			
			SourceFactory.register('directory', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						
						var path = data.path;
						if (typeof path !== 'string') 
							return false;
						
						if (path.search(/\*\?/g) !== -1)
							return true;
						
						if (path[path.length - 1] === '/')
							return true;
						
						return false;
					},
				},
				
				Construct: function(data){
					var path = data.path.replace(/\\/g, '/'),
						wildCardIndex = path.search(/\*\?/g),
						index = path.lastIndexOf('/', wildCardIndex),
						
						base, pattern;
					
					if (wildCardIndex === -1) {
						base = path;
					} else{
						
						base = path.substring(0, index);
						pattern = path.substring(index + 1);
					}
					
					
					return new io
						.Directory(base)
						.readFiles(pattern)
						.files
						.map(function(file){
							
							return file.uri.toLocalFile();
						});
					
				}
			}));
			
			
		}());
		// end:source DirectorySource.js
		// source MongoSource.js
		(function(){
			
			var MongoSourceProto = {
				
				read: function(rootConfig){
					
					var mongoSettings = rootConfig.mongodb;
					if (mongoSettings) 
						Class.MongoStore.settings(data.mongoSettings);
					
					return this.fetch();
				},
				
				write: function(config){
					
					if (this.data.writable !== true) 
						return;
					
					obj_deepExtend(this, config);
					
					this.save();
				}
			}
			
			SourceFactory.register('mongo', Class({
				
				Static: {
					canHandle: function(data){
						
						return 'mongo' in data
					}
				},
				Construct: function(data){
					
					if (data.settings) 
						Class.MongoStore.settings(data.settings);
						
					if (data.writable == null) 
						data.writable = true;
					
					new (Class({
						Base: MongoSourceProto,
						Store: Class.MongoStore.Single(data.mongo)
					}));
				}
			}));
			
			
		}());
		// end:source MongoSource.js
		
		
		return SourceFactory;
	}());
	// end:source /src/sources/exports.js
	// source /src/Config.js
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
	// end:source /src/Config.js

	return (exports.Config = Config);
}));

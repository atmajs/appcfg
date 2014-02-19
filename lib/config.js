// source /src/license.txt
/*!
 * config v0.1.15
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
	
	// source /src/util/is.js
	var is_Array,
		is_Object
		;
		
	(function(){
		
		is_Array = function(arr){
			return arr != null
				&& typeof arr.length === 'number'
				&& typeof arr.splice === 'function'
				;
		};
		
		is_Object = function(obj){
			return obj != null && typeof obj === 'object';
		};
		
	}());
	// end:source /src/util/is.js
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
		obj_ensureProperty,
		
		obj_interpolate
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
			
			if (target == null)
				target = {};
				
			if (source == null) 
				return target;
			
			if (is_Array(target) && is_Array(source)) {
				for (var i = 0, x, imax = source.length; i < imax; i++){
					x = source[i];
					
					if (x == null) 
						continue;
					
					if (is_Object(x)) {
						target.push(obj_deepExtend({}, x));
						continue;
					}
					target.push(x);
				}
				return target;
			}
			
			if (!is_Object(source) && !is_Object(target)) {
				logger.warn('<object:deepExtend> not an object or type missmatch - Dismiss');
				return target;
			}
			
			var key, val;
			for(key in source){
				val = source[key];
				
				if (key.charCodeAt(0) === 33) {
					// !
					target[key.substring(1)] = val;
					continue;
				}
				
				if (val == null) 
					continue;
				
				if (target[key] == null) {
					target[key] = val;
					continue;
				}
				
				if (is_Array(val)) {
					if (is_Array(target[key]) === false) {
						logger.warn('<object:deepExtend> type missmatch %s %s %s - Overwrite', key, val, target[key]);
						
						target[key] = val;
						continue;
					}
					obj_deepExtend(target[key], val);
					continue;
				}
				
				if (is_Object(val) && is_Object(target[key])) {
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
		
			
			
		obj_interpolate = function(obj, root){
			if (obj == null) 
				return;
			
			if (root == null) 
				root = obj;
			
			if (is_Array(obj)){
				var i = obj.length;
				while( --i > -1 )
					obj_interpolate(obj[i], root);
					
				return;
			}
			
			if (!is_Object(obj)) 
				return;
		
			
			var key, val;
			for(key in obj){
				val = obj[key];
				
				if (val == null) 
					continue;
				
				if (is_Object(val)){
					obj_interpolate(val, root);
					continue;
				}
	
				if (typeof val === 'string'){
	
					var str = val.trim();
	
					if (str.substring(0,2) !== '#[')
						continue;
					
	
					str = str.substring(2, str.length - 1).trim();
					
					obj[key] = obj_getProperty(root, str);
					if (obj[key] == null){
						console.warn('<config: obj_interpolate: property not exists in root', val);
						continue;
					}
				}
			}
		
		}
		
	}());
	// end:source /src/util/object.js
	// source /src/util/object_conditions.js
	var obj_conditions;
	
	(function(){
		
		var key_DEFAULT = 'default';
		
		var _cfg,
			_params;
		
		obj_conditions = function(obj, config, cliParams){
			
			_cfg = config;
			_params = cliParams;
			
			rewrite(obj);
		};
		
		
		
		function rewrite(obj) {
			
			if (is_Array(obj)) 
				rewriteArray(obj);
			
			if (is_Object(obj)) 
				rewriteObject(obj);
			
		}
		
		
		function rewriteObject(obj) {
			var key, val;
			for (key in obj){
				val = obj[key];
				
				if (is_Object(val) === false) 
					continue;
				
				if (isConditionProperty(key)) {
					
					if (evalConditionProperty(key)) {
						obj_deepExtend(obj, val);
					}
					
					continue;
				}
				
				if (isConditionObject(val)) {
					obj[key] = evalConditionObject(val);
					continue;
				}
				
				rewrite(val);
			}
		}
		
		function rewriteArray(arr) {
			var imax = arr.length,
				i = -1,
				x,
				extArr;
				
			while( ++i < imax ){
				x = arr[i];
				
				if (is_Object(x) === false) 
					continue;
				
				if (isConditionObject(x)) {
					
					extArr = evalConditionObject(x);
					if (extArr == null) 
						continue;
					
					if (is_Array(extArr) === false) 
						extArr = [extArr];
						
					arr.splice.apply(arr, [i, 1].concat(extArr));
					
					i--;
					imax += extArr.length;
					
					continue;
				}
				
				rewrite(x);
			}
		}
		
		
		function isConditionProperty(prop){
			
			if (prop.charCodeAt(0) !== 35) 
				// #
				return false;
			
			return prop.indexOf('#if ') === 0;
		}
		
		function isConditionObject(obj){
			for(var key in obj){
				
				if (isConditionProperty(key))
					continue;
				
				if (key === key_DEFAULT) 
					continue;
				
				return false;
			}
			
			return true;
		}
		
		
		function evalConditionProperty(prop) {
			
			var code = prop
				.replace('#if ', '')
				.replace(/\b[\w\d_$]+\b/g, function(full){
					return 'getter("' + full + '")';
				});
				
			var fn = new Function('getter', 'return !!(' + code + ')');
			
			try {
				return fn(evalGetter);
			} catch(error){
				
				logger.error('<config:condition-object> Evalulation error', prop, error);
			}
			
			return false;
		}
		
		function evalGetter(prop) {
			var r;
			
			r = obj_getProperty(_params, prop);
			if (r != null)
				return r;
			
			r = obj_getProperty(_cfg, prop);
			if (r != null) 
				return r;
			
			return null;
		}
		
		function evalConditionObject(obj) {
			
			for (var key in obj){
				
				if (key === key_DEFAULT) 
					continue;
				
				if (evalConditionProperty(key)) {
					return obj[key];
				}
			}
			
			return obj[key_DEFAULT];
		}
		
	}());
	// end:source /src/util/object_conditions.js
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
		
		path_normalize = function(path){
			return path
				.replace(/\\/g, '/')
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
				case 'APP':
					// @TODO eliminate io.env dependency
					path = io.env.applicationDir.toLocalDir();
					break;
			}
			
			if (path == null)
				logger.error('<config:special-folder> Not resolved', name);
			
			return path_normalize(path || env.HOME || name);
		}
		
	}());
	// end:source /src/util/path.js
    // source /src/util/cfg.js
    var cfg_merge;
    
    (function(){
        
        cfg_merge = function(target, source){
            
            if (source.config == null) 
                return;
            
            var prop = source.data.setterProperty;
            if (prop) {
                
                obj_ensureProperty(config, prop, {});
                target = obj_getProperty(config, prop);
            }
            
            obj_deepExtend(target, source.config);
            
        };
        
        
    }());
    // end:source /src/util/cfg.js
	
	// source /src/sources/exports.js
	var SourceFactory = (function(){
		
		// source SourceFactory.js
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
							
							await.always(function(){
								
								sources.load(rootConfig, i - 1);
							});
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
				
				if (i > imax - 1) 
					await.always(sources.resolveDelegate())
				
				
				function afterDelegate(fn, source, rootConfig){
				
					return function(){
						
						cfg_merge(rootConfig, source);
						
						if (fn) 
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
					if (data == null) 
						continue;
					
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
						
						if (path.search(/[\*\?]/g) !== -1)
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
						
						if (this.data.optional) 
							return this.resolve();
						
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
					
					obj_conditions(this.config, rootConfig, cli_arguments().params);
					
					
					return this.resolve();
				},
				
				write: function(config){
					
					if (this.data.writable !== true) 
						return;
					
					this.config = obj_deepExtend(this.config, config);
					
					new io
						.File(this.data.path)
						.write(this.config)
						;
						
					this.resolve();
				}
			}));
			
			
			function module_eval(path, script){
				
				var module = {
						exports: {}
					},
					exports = module.exports
					;
					
				try {
					
					(new Function('module', 'exports', script))(module, exports);
					
				} catch(error){
					console.error('<config> Configuration evaluation error', path, error);
				}
				
				if (Object.keys(module.exports).length === 0) {
					logger
						.error('<config> Define `module.exports = ` in a file to export configuration', path)
						.log(' - (`global.config = ` support is removed)'.yellow)
						;
				}
				
				return module.exports;
			}
			
		}());
		// end:source FileSource.js
		// source FilesSource.js
		(function(){
			
			SourceFactory.register('files', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						
						return Array.isArray(data.files)
					},
				},
				
				Construct: function(data){
					var FileHandler = Handlers.file;
						
					return data.files.map(function(file){
						return new FileHandler({ path: file });
					});
				},
				
				read: function(rootConfig){
					this.defer();
					
					var file = new io.File(this.data.path);
					if (file.exists() === false) {
						
						if (this.data.optional) 
							return this.resolve();
						
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
					
					obj_conditions(this.config, rootConfig, cli_arguments().params);
					
					
					return this.resolve();
				},
				
				write: function(config){
					
					if (this.data.writable !== true) 
						return;
					
					this.config = obj_deepExtend(this.config, config);
					
					new io
						.File(this.data.path)
						.write(this.config)
						;
						
					this.resolve();
				}
			}));
			
		}());
		// end:source FilesSource.js
		// source DirectorySource.js
		(function(){
			
			
			SourceFactory.register('directory', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						
						var path = data.path;
						if (typeof path !== 'string') 
							return false;
						
						if (path.search(/[\*\?]/g) !== -1)
							return true;
						
						if (path[path.length - 1] === '/')
							return true;
						
						return false;
					},
				},
				
				Construct: function(data){
					var path = data.path.replace(/\\/g, '/'),
						wildCardIndex = path.search(/[\*\?]/g),
						index = path.lastIndexOf('/', wildCardIndex),
						
						base, pattern;
					
					if (wildCardIndex === -1) {
						base = path;
					} else{
						
						base = path.substring(0, index + 1);
						pattern = path.substring(index + 1);
					}
					
					var files = new io
						.Directory(base)
						.readFiles(pattern)
						.files
						.map(function(file){
							
							return file.uri.toLocalFile();
						});
					
					return SourceFactory
						.create([{
							files: files
						}])
						.toArray();
				}
			}));
		}());
		// end:source DirectorySource.js
		// source MongoSource.js
		(function(){
			
			function createMongoClass(mongo, id) {
				return new (Class({
					Base: Class.Serializable,
					Store: Class.MongoStore.Single(mongo),
					
					_id: id
				}));
			}
			
			SourceFactory.register('mongo', Class({
				Base: Class.Deferred,
				Static: {
					canHandle: function(data){
						
						return 'mongo' in data
					}
				},
				Construct: function(data){
					this.data = data;
					
					if (data.settings) 
						Class.MongoStore.settings(data.settings);
						
					if (data.writable == null) 
						data.writable = true;
				},
				
				read: function(rootConfig){
					var mongoSettings = rootConfig.mongodb;
					if (mongoSettings) 
						Class.MongoStore.settings(mongoSettings);
					
					var source = this;
					
					createMongoClass(this.data.mongo)
						.fetch()
						.done(function(){
							
							source.config = this.toJSON();
							source._id = this._id;
							
							delete source.config._id;
							
							source.resolve();
						})
						.fail(function(error){
							
							source.reject(error);
						});
					
					return source;
				},
				
				write: function(config){
					
					this.config = obj_deepExtend(this.config, config);
					
					var source = this;
						
					Class
						.MongoStore
						.resolveCollection(this.data.mongo)
						.done(function(coll){
							
							coll.update({}, source.config, {
								upsert: true,
								multi: false
							}, function(error) {
								
								if (error) 
									return source.reject(error);
								
								source.resolve();
							});
							
						});
					
					return source;
				}
			}));
			
			
		}());
		// end:source MongoSource.js
		// source EmbeddedSource.js
		(function(){
			
			SourceFactory.register('embedded', Class({
				Base: Class.Deferred,
		        
				Static: {
					canHandle: function(data){
						
						return is_Object(data.config)
					}
				},
				Construct: function(data){
					this.data = data;
		            this.data.writable = false;
		            
					this.config = data.config;
				},
		        
		        read: function(){
		        
		            this.resolve();  
		        },
			}));
			
			
		}());
		// end:source EmbeddedSource.js
		// source CustomSource.js
		(function(){
			
			SourceFactory.register('custom', Class({
				
				Static: {
					canHandle: function(data){
						
						return typeof data === 'function'
					}
				},
				Construct: function(Ctor){
					
					return new Ctor();
				}
			}));
			
			
		}());
		// end:source CustomSource.js
		
		return SourceFactory;
	}());
	// end:source /src/sources/exports.js
	// source /src/Config.js
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
		
		$get: function(path){
			return obj_getProperty(this, path);
		},
		
		$set: function(path, value){
			obj_setProperty(this, path, value);
		},
		
		$extend: function(config){
			
			obj_deepExtend(this, config);
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
					
					config.resolve(config)
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
	// end:source /src/Config.js

	return (exports.Config = Config);
}));

// source /src/license.txt
/*!
 * config v0.1.40
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
    }

    
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
	var _Array_slice = Array.prototype.slice;
	var io,
		net,
		Class;
	
	(function(){
		var atma = global;
		if (atma.Class == null && global.atma) 
			atma = global.atma;
		
		if (atma.Class == null) 
			atma = require('atma-libs/exports');
			
		
		Class = atma.Class;
		net = atma.net;
		io = global.io || require('atma-io');
	}());
	
	// end:source /src/scope-vars.js
	
	// source /src/util/log.js
	var log_error,
		log_warn;
	(function(){
		log_error = function(){
			var args = _Array_slice.call(arguments);
			args.unshift('<appcfg:error>');
			
			console.error.apply(console, args);
		};
		log_warn = function(){
			var args = _Array_slice.call(arguments);
			args.unshift('<appcfg:warn>');
			
			console.warn.apply(console, args);
		};
	}());
	// end:source /src/util/log.js
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
		var cache__;
		
		cli_arguments = function(){
			
			if (cache__ != null) 
				return cache__;
			
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
					
					obj_setProperty(params, key, val);
					continue;
				}
				
				args.push(x);
			}
			
			return cache__ = {
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
		obj_interpolate,
		obj_clone,
		obj_visitStrings
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
				log_warn('<object:deepExtend> not an object or type missmatch - Dismiss');
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
						log_warn('<object:deepExtend> type missmatch %s %s %s - Overwrite', key, val, target[key]);
						
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
				log_error(
					'<obj_ensureProperty> type missmatch',
					typeof current,
					typeof defaultVal,
					new Error().stack
				);
			}
			return current;
		};
		obj_interpolate = function(obj, root){
			root = root || obj;
			
			obj_visitStrings(obj, function(str, key, parent){
				str = str.trim();
				if (str.charCodeAt(0) !== 35 /* # */) 
	                return null;
	            
	            if (str.charCodeAt(1) !== 91 /* [ */) 
	                return null;
	            
				str = str.substring(2, str.length - 1).trim();
					
				var val = obj_getProperty(root, str);
				if (val == null)
					log_warn('<config: obj_interpolate: property not exists in root', str);
				
				return val;
			});
			
			////if (obj == null) 
			////	return;
			////
			////if (root == null) 
			////	root = obj;
			////
			////if (is_Array(obj)){
			////	var i = obj.length;
			////	while( --i > -1 )
			////		obj_interpolate(obj[i], root);
			////		
			////	return;
			////}
			////
			////if (!is_Object(obj)) 
			////	return;
			////
			////
			////var key, val;
			////for(key in obj){
			////	val = obj[key];
			////	
			////	if (val == null) 
			////		continue;
			////	
			////	if (key[0] === '_') 
			////		continue;
			////	
			////	if (is_Object(val)){
			////		obj_interpolate(val, root);
			////		continue;
			////	}
			////
			////	if (typeof val === 'string'){
			////
			////		var str = val.trim();
			////
			////		if (str.substring(0,2) !== '#[')
			////			continue;
			////		
			////
			////		str = str.substring(2, str.length - 1).trim();
			////		
			////		obj[key] = obj_getProperty(root, str);
			////		if (obj[key] == null){
			////			console.warn('<config: obj_interpolate: property not exists in root', val);
			////			continue;
			////		}
			////	}
			////}
		};
		
		// deep clone object and arrays
		obj_clone = function(obj){
			if (obj == null || typeof obj !== 'object') 
				return obj;
			
			var Ctor = obj.constructor,
				clone;
				
			if (Array === Ctor) {
				clone = [];
				var i = -1,
					imax = obj.length;
				while(++i < imax){
					clone[i] = obj_clone(obj[i]);
				}
				return clone;
			}
			if (Object === Ctor) {
				clone = {};
				for(var key in obj){
					clone[key] = obj_clone(obj[key]);
				}
				return clone;
			}
			if (Date === Ctor
				|| RegExp === Ctor
				|| String === Ctor
				|| Number === Ctor) {
				
				return obj;
			}
			
			log_warn('Configuration contains not clonable object', obj);
			return obj;
		};
		
		
		(function(){
			obj_visitStrings = function(obj, fn){
				if (obj == null) 
					return;
				
				if (typeof obj !== 'object') 
					return;
				
				var val, r;
				if (is_Array(obj)) {
					var i = -1,
						imax = obj.length;
					while ( ++i < imax ){
						visit(fn, obj[i], i, obj);
					}
					return;
				}
				
				for(var key in obj){
					visit(fn, obj[key], key, obj);
				}
			};
			
			function visit(fn, val, key, parent){
				if (val == null) 
					return;
				
				if (typeof val === 'string') {
					parent[key] = fn(val, key, parent) || val;
					return;
				}
				
				if (typeof val === 'object') {
					
					if (typeof key === 'string' && key.charCodeAt(0) === 95) 
						return;
						
					obj_visitStrings(val, fn);
				}
			}
		}());
		
	}());
	// end:source /src/util/object.js
	// source /src/util/path.js
	var path_handleSpecialFolder,
		path_normalize
		;
	
	(function(){
		
		var rgx_specialFolder = /^%(\w+)%/,
			rgx_dblSlash = /[\/]{2,}/g,
			folders = {}
			;
		
		path_handleSpecialFolder = function(path){
			
			if (rgx_specialFolder.test(path) === false) 
				return path;
			
			
			path = path_normalize(path)
				.replace(rgx_specialFolder, function(full, name){
					
					name = name.toUpperCase();
					
					return folders[name] != null
						? folders[name]
						: (folders[name] = getSpecialFolder(name))
						;
				})
				.replace(rgx_dblSlash, '/')
				;
			
			return 'file://' + path;
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
				case 'APPDATA':
					path = env.HOME;
					break;
			}
			
			if (path == null)
				log_error('<config:special-folder> Not resolved', name);
			
			return path_normalize(path || env.HOME || name);
		}
		
	}());
	// end:source /src/util/path.js
    // source /src/util/cfg.js
    var cfg_merge,
        cfg_extend,
        cfg_resolvePath,
        cfg_handlePaths;
    
    
    (function(){
        
        /* target - config object
         * source - source config object
         */
        cfg_merge = function(target, config, setterProperty){
            
            if (config == null) 
                return;
            
            if (setterProperty) 
                target = obj_ensureProperty(target, setterProperty, {});
            
            config = obj_clone(config);
            obj_deepExtend(target, config);
        };
        
        cfg_extend = function(target, source, deepExtend, path){
            if (path) 
                target = obj_ensureProperty(target, path, {});
            
            var fn = deepExtend !== false
                ? obj_deepExtend
                : obj_extend;        
            fn(target, source);
        };
        
        cfg_handlePaths = function(config){
            var base = config.base;
            obj_visitStrings(config, function(str, key, parent){
                if (str.charCodeAt(0) !== 126 /* ~ */) 
                    return null;
                
                if (str.charCodeAt(1) !== 47 /* / */) 
                    return null;
                
                return resolvePath(str, base);
            });
        };
        
        cfg_resolvePath = function(path, config){
            if (path.charCodeAt(0) !== 126) {
                // ~
                return path;
            }
            return resolvePath(path, config.base);
        }
        
        
        function resolvePath(path, base){
            return net.Uri.combine(base, path.substring(1));
        }
    }());
    // end:source /src/util/cfg.js
	// source /src/util/cfg_conditions.js
	var cfg_conditions;
	(function(){
		cfg_conditions = function(obj, config, cliParams){
			
			_cfg = config;
			_params = cliParams;
			
			rewrite(obj);
		};
		
		
		var key_DEFAULT = 'default';
		var _cfg,
			_params;
		
		function rewrite(obj) {
			
			if (is_Array(obj)) 
				rewriteArray(obj);
			
			if (is_Object(obj)) 
				rewriteObject(obj);
			
		}
		
		function rewriteObject(obj) {
			var key, val, c;
			for (key in obj){
				c = key.charCodeAt(0);
				
				if (c === 36) {
					// $ - utility properties
					continue;
				}
				
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
			var has = false;
			for(var key in obj){
				if (isConditionProperty(key)){
					has = true;
					continue;
				}
				if (key === key_DEFAULT) 
					continue;
				
				return false;
			}
			return has === true;
		}
		
		
		function evalConditionProperty(prop) {
			
			var code = prop
				.replace('#if ', '')
				.replace(/\b[\w\d_$]+\b/g, function(match, index, str){
					if (isInQuotes(str, index))
						return match;
					if (str[index - 1] === '.')
						// skip property accessor
						return match;
					
					return 'getter("' + match + '")';
				});
				
			var fn = new Function('getter', 'return !!(' + code + ')');
			
			try {
				return fn(evalGetter);
			} catch(error){
				log_error('<config:condition-object> Evalulation error', prop, error);
			}
			
			return false;
		}
		
		function evalGetter(prop) {
			var r = obj_getProperty(_params, prop);
			if (r != null)
				return r;
			
			r = obj_getProperty(_cfg, prop);
			if (r != null) 
				return r;
			
			if (typeof process !== 'undefined') {
				var env = process.env;
				r = env[prop];
				if (r != null) 
					return r;
				
				r = env['NODE_' + prop];
				if (r != null) 
					return r;
				
				var ENV = env.NODE_ENV || env.ENV;
				if (ENV != null && ENV.toUpperCase() === prop.toUpperCase()) 
					return true;
			}
			
			return null;
		}
		function evalConditionObject(obj) {
			for (var key in obj){
				if (key === key_DEFAULT) 
					continue;
				if (evalConditionProperty(key)) 
					return obj[key];
			}
			return obj[key_DEFAULT];
		}
		function isInQuotes(str, index){
			var isInDouble = false,
				isInSingle = false,
				c;
			while (--index > -1) {
				c = str.charCodeAt(index);
				if (34 === c) {
					if (isInSingle)
						continue;
					if (isInDouble && str[index - 1] === '\\') 
						continue;
					isInDouble = !isInDouble;
				}
				if (39 === c) {
					if (isInDouble)
						continue;
					if (isInSingle && str[index - 1] === '\\') 
						continue;
					isInSingle = !isInSingle;
				}
			}
			return isInSingle || isInDouble;
		}	
	}());
	// end:source /src/util/cfg_conditions.js
	
	// source /src/sources/exports.js
	var SourceFactory = (function(){
		
		// source utils/module.js
		var module_eval;
		
		(function(){
			
			module_eval = function(path, code){
				
				var module = {
						exports: {}
					},
					exports = module.exports
					;
					
				try {
					
					(new Function('module', 'exports', code))(module, exports);
					
				} catch(error){
					log_error('<config> Configuration evaluation error', path, error);
				}
				
				if (module.exports === exports && Object.keys(module.exports).length === 0) {
					log_error(
						'<config> Define `module.exports = ` in a file to export configuration'
						, path)
						;
				}
				
				return module.exports;
			};
			
		}());
		// end:source utils/module.js
		// source utils/file.js
		var file_readSource,
			file_readSourceAsync;
		
		(function(){
			
			file_readSourceAsync = function(rootConfig, path, data){
				var dfr = new Class.Deferred;
				var file = resolveFile(rootConfig, path, data.optional);
				if (file == null) 
					return dfr.reject({ code: 404 });
				
				file
					.readAsync()
					.fail(dfr.rejectDelegate())
					.done(function(config){
						if (typeof config === 'string') {
							data.writable = false;
							config = module_eval(file.uri.toLocalFile(), config);
						}
						
						var prop = data.getterProperty;
						if (prop) 
							config = obj_getProperty(config, prop);
						
						dfr.resolve(config);
					});
				return dfr;
			};
			
			//@obsolete
			file_readSource = function(rootConfig, path, data){
				
				var file = resolveFile(rootConfig, path, data.optional);
				if (file == null) 
					return null;
					
					
				var config = file.read();
				if (typeof config === 'string') {
					data.writable = false;
					config = module_eval(file.uri.toLocalFile(), config);
				}
					
				var prop = data.getterProperty;
				if (prop) 
					config = obj_getProperty(config, prop);
				
				return config;
			};
			
			
			function resolveFile(rootConfig, path, isOptional){
				var uri = new net.Uri(path),
					file
					;
				if (io.File.exists(uri))
					return new io.File(uri);
					
				if (uri.isRelative() && typeof include !== 'undefined') {
					uri = (new net.Uri(include.location)).combine(path);
					if (io.File.exists(uri)) 
						return new io.File(uri);
				}
				
				if (isOptional !== true) {
					log_error('Configuration file not found', path);
					log_warn('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
				}
				return null;
			}
		}());
		// end:source utils/file.js
		
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
					this.config = {};
					data.path = path_handleSpecialFolder(data.path);
				},
				
				read: function(rootConfig){
					this.defer();
					var self = this;
					
					
					file_readSourceAsync(
							rootConfig,
							this.data.path,
							this.data
						)
						.fail(this.rejectDelegate())
						.done(function(config){
							self.config = config;
							self.resolve(config);
						});
					
					return this;
				},
				
				write: function(config, deepExtend, setterProperty){
					this.defer();
					
					if (this.data.writable !== true) 
						return this.reject('Not writable');
					
					cfg_extend(this.config, config, deepExtend, setterProperty);
					
					var filename = this.data.path,
						cfg = getContent(this.config, filename);
					io
						.File
						.writeAsync(filename, cfg)
						.pipe(this);
					
					return this;
				}
			}));
			
			
			function getContent(config, path) {
				var hooks = io
					.File
					.getHookHandler()
					.getHooksForPath(path, 'write');
				
				if (hooks.length !== 0) 
					return config;
				
				try {
					return JSON.stringify(config);
				} catch(error) {
					return config;
				}
			}
		}());
		// end:source FileSource.js
		// source FilesSource.js
		(function(){
			
			SourceFactory.register('files', Class({
				
				Base: Class.Deferred,
				
				Static: {
					canHandle: function(data){
						
						return Array.isArray(data.files);
					},
				},
				
				Construct: function(data){
					var FileHandler = Handlers.file;
						
					return data.files.map(function(file){
						return new FileHandler({ path: file });
					});
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
							
							return file.uri.toString();
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
						
						return 'mongo' in data;
					}
				},
				Construct: function(data){
					this.data = data;
					this.config = {};
					
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
				
				write: function(config, deepExtend, path){
					
					cfg_extend(this.config, config, deepExtend, path);
					
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
						
						return is_Object(data.config);
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
						
						return typeof data === 'function';
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
					cfg_handlePaths(config);
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
	// end:source /src/Config.js

	return (exports.Config = Config);
}));

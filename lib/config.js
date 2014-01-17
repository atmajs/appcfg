// source /src/license.txt
/*!
 * config v%VERSION%
 *
 * MIT license
 * http://opensource.org/licenses/MIT
 *
 * (c) 2012, %YEAR%
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
		
		Class = (global.atma && global.atma.Class) || global.Class;
		io = global.io || require('atma-io');
		
	}());
	
	// end:source /src/scope-vars.js
	
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
			
			loadSources: function(arr){
				
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
						.read()
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
				},
				
				read: function(){
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
					
					if (this.data.property) 
						this.config = obj_getProperty(this.config, this.data.property);
					
					return this.resolve();
				},
				
				write: function(){
					
					if (this.data.writable !== true) 
						return;
					
					new io.File(this.data.path).write(this.config);
				}
			}));
			
			
			function module_eval(path, script){
				
				var module = {
						exports: {}
					},
					exports = module.exports;
					
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
				
				read: function(){
					return this.fetch()
				},
				
				write: function(config){
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
		
		read: function(){
			
			var that = this;
			
			SourceFactory
				.loadSources(this.data)
				.done(function(){
					
					this.each(function(source){
						
						obj_deepExtend(that, source.config);
					});
					
					that.resolve()
				})
			
			return that;
		}
	});
	// end:source /src/Config.js

	return (exports.Config = Config);
}));

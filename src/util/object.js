
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
	obj_interpolate = function(obj, root, isOptional){
		root = root || obj;
		
		obj_visitStrings(obj, function(str, key, parent){
			str = str.trim();
			var c0 = str.charCodeAt(0),
				c1 = str.charCodeAt(1),
				has = false;
			
			if (c0 === 35 && c1 === 91) {
				// #[
				log_warn('<APPCFG: OBSOLETE: config interpolation will be changed to ${}', str);
				has = true;
			}
			if (c0 === 36 && c1 === 123) {
				// ${				
				has = true;
			}
			if (has === false) {
				return null;
			}
			
			str = str.substring(2, str.length - 1).trim();				
			var val = obj_getProperty(root, str);
			if (val == null && isOptional !== true)
				log_warn('<config: obj_interpolate: property not exists in root', str);
			
			return val;
		});		
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
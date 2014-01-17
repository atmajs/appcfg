
var obj_getProperty,
	obj_setProperty,
	obj_defaults,
	obj_extend,
	obj_deepExtend
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
	
}());
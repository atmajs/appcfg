
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
			
			if (key[0] === '_') 
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
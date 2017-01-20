var cfg_conditions,
	cfg_getEnvironmentVar;
	
(function(){
	cfg_conditions = function(obj, config, cliParams){
		
		_cfg = config;
		_params = cliParams;
		_refCount = 0;
		_refs = [];
		
		rewrite(obj);
	};
	cfg_getEnvironmentVar = function(config, prop){
		if (envCache.hasOwnProperty(prop)) 
			return envCache[prop];
		
		var r = obj_getProperty(config, prop);
		if (r != null)
			return (envCache[prop] = r);
		
		if (typeof process !== 'undefined') {
			var env = process.env;
			r = env[prop];
			if (r != null) 
				return (envCache[prop] = r);
			
			r = env['NODE_' + prop.toUpperCase()];
			if (r != null) 
				return (envCache[prop] = r);
			
			var ENV = env.NODE_ENV || env.ENV;
			if (ENV != null) {
				
				r = new RegExp('\\b' + prop + '\\b', 'i').test(ENV);
				return (envCache[prop] = r);
			}
		}
		
		return (envCache[prop] = false);
	};
	// === private
	var envCache = {};
	var key_DEFAULT = 'default';
	var _cfg,
		_params,
		_refs,
		_refCount;
	
	function rewrite(obj) {
		
		if (is_Array(obj)) 
			rewriteArray(obj);
		
		if (is_Object(obj)) 
			rewriteObject(obj);
		
	}
	
	function rewriteObject(obj) {
		var MAX_CALL_STACK = 100;
		if (++_refCount > MAX_CALL_STACK) {
			if (_refs.indexOf(obj) !== -1) {
				return;
			}
			_refs.push(obj);
		}

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
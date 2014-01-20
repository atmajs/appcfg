var cond_rewrite;

(function(){
	
	var _cfg,
		_params;
	
	cond_rewrite = function(obj, config, cliParams){
		
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
		for (var key in obj){
			
			if (is_Object(obj) === false) 
				continue;
			
			if (isConditionProperty(key)) {
				
				if (evalConditionProperty(key)) {
					obj_deepExtend(obj, obj[key]);
				}
				
				continue;
			}
			
			if (isConditionObject(obj[key])) {
				obj[key] = evalConditionObject(obj[key]);
				continue;
			}
			
			rewrite(obj[key]);
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
		
		if (prop.charCodeAt(0) !== 36) 
			// $
			return false;
		
		return prop.indexOf('$if ') === 0;
	}
	
	function isConditionObject(obj){
		for(var key in obj){
			
			if (isConditionProperty(key))
				continue;
			
			if (key === '$default') 
				continue;
			
			return false;
		}
		
		return true;
	}
	
	
	function evalConditionProperty(prop) {
		
		var code = prop
			.replace('$if ', '')
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
			
			if (key === '$default') 
				continue;
			
			if (evalConditionProperty(key)) {
				return obj[key];
			}
		}
		
		return obj['$default'];
	}
	
}());
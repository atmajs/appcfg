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
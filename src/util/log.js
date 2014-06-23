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
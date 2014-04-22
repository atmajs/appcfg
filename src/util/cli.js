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
				
				params[key] = val;
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

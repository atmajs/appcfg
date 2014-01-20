var path_handleSpecialFolder,
	path_normalize
	;

(function(){
	
	var rgx_specialFolder = /%([^%]+)%/g,
		rgx_dblSlash = /[\/]{2,}/g,
		folders = {}
		;
	
	path_handleSpecialFolder = function(path){
		
		if (rgx_specialFolder.test(path) === false) 
			return path;
		
		
		return path_normalize(path)
			.replace(rgx_specialFolder, function(full, name){
				
				name = name.toUpperCase();
				
				return folders[name] != null
					? folders[name]
					: (folders[name] = getSpecialFolder(name))
					;
			})
			.replace(rgx_dblSlash, '/')
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
		}
		
		if (path != null) 
			return path;
		
		logger.error('<config:special-folder> Not resolved', name);
		return env.HOME || name;
	}
	
}());
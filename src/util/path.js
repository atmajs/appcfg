var path_handleSpecialFolder,
	path_normalize
	;

(function(){
	
	var rgx_specialFolder = /^%(\w+)%/,
		rgx_dblSlash = /[\/]{2,}/g,
		folders = {}
		;
	
	path_handleSpecialFolder = function(path){
		
		if (rgx_specialFolder.test(path) === false) 
			return path;
		
		
		path = path_normalize(path)
			.replace(rgx_specialFolder, function(full, name){
				
				name = name.toUpperCase();
				
				return folders[name] != null
					? folders[name]
					: (folders[name] = getSpecialFolder(name))
					;
			})
			.replace(rgx_dblSlash, '/')
			;
		
		return 'file://' + path;
	};
	
	path_normalize = function(path){
		return path
			.replace(/\\/g, '/')
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
			case 'APP':
				// @TODO eliminate io.env dependency
				path = io.env.applicationDir.toLocalDir();
				break;
			case 'APPDATA':
				path = env.HOME;
				break;
		}
		
		if (path == null)
			log_error('<config:special-folder> Not resolved', name);
		
		return path_normalize(path || env.HOME || name);
	}
	
}());
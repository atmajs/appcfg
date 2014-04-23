(function(){
	
	SourceFactory.register('files', Class({
		
		Base: Class.Deferred,
		
		Static: {
			canHandle: function(data){
				
				return Array.isArray(data.files)
			},
		},
		
		Construct: function(data){
			var FileHandler = Handlers.file;
				
			return data.files.map(function(file){
				return new FileHandler({ path: file });
			});
		},
		
		//////read: function(rootConfig){
		//////	this.defer();
		//////	
		//////	var file = new io.File(this.data.path);
		//////	if (file.exists() === false) {
		//////		
		//////		if (this.data.optional) 
		//////			return this.resolve();
		//////		
		//////		console.error('<config> Configuration file not found', this.data.path);
		//////		return this.reject();
		//////	}
		//////	
		//////	
		//////	this.config = file.read();
		//////	
		//////	if (typeof this.config === 'string') {
		//////		this.data.writable = false;
		//////		this.config = module_eval(this.data.path, this.config);
		//////	}
		//////	
		//////	var prop = this.data.getterProperty;
		//////	if (prop) 
		//////		this.config = obj_getProperty(this.config, prop);
		//////	
		//////	obj_conditions(this.config, rootConfig, cli_arguments().params);
		//////	
		//////	
		//////	return this.resolve();
		//////},
		//////
		//////write: function(config){
		//////	
		//////	if (this.data.writable !== true) 
		//////		return;
		//////	
		//////	this.config = obj_deepExtend(this.config, config);
		//////	
		//////	new io
		//////		.File(this.data.path)
		//////		.write(this.config)
		//////		;
		//////		
		//////	this.resolve();
		//////}
	}));
	
}());
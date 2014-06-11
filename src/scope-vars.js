// library global variables

var io,
	net,
	Class,
	logger;

(function(){
	var atma = global;
	if (atma.Class == null && global.atma) 
		atma = global.atma;
	
	if (atma.Class == null) 
		atma = require('atma-libs/exports');
		
	
	Class = atma.Class;
	net = atma.net;
	io = global.io || require('atma-io');
	logger = global.logger || require('atma-logger');
}());

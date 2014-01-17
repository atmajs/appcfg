// library global variables

var io,
	Class;

(function(){
	
	Class = (global.atma && global.atma.Class) || global.Class;
	io = global.io || require('atma-io');
	
}());

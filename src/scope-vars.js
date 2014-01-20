// library global variables

var io,
	Class;

(function(){
	
	Class = (global.atma && global.atma.Class) || global.Class || require('atma-libs/exports').Class;
	io = global.io || require('atma-io');
	
}());

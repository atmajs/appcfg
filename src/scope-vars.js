// library global variables
var _Array_slice = Array.prototype.slice;
var io,
	Uri,
	Class;

(function(){
	var atma = global;
	if (atma.Class == null && global.atma)
		atma = global.atma;

	if (atma.Class == null)
		atma = require('atma-libs/exports');


	Class = global.Class || require('atma-class');
	Uri = require('atma-utils').class_Uri;
	io = global.io || require('atma-io');
}());

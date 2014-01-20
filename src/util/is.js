var is_Array,
	is_Object
	;
	
(function(){
	
	is_Array = function(arr){
		return arr != null
			&& typeof arr.length === 'number'
			&& typeof arr.splice === 'function'
			;
	};
	
	is_Object = function(obj){
		return obj != null && typeof obj === 'object';
	};
	
}());
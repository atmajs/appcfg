
// source ./ESM.js
import bundlerDynamic_atma_io from 'atma-io';
const bundlerDynamicRepository = {};
bundlerDynamicRepository['atma-io'] = bundlerDynamic_atma_io;
var bundlerOriginalRequire = require || function (url) { throw new Error('Not found: ' + url); };
var require = function (url) { return bundlerDynamicRepository[url] || bundlerOriginalRequire(url); };

var module = {
    exports: {}
};

var _node_modules_atma_utils_lib_utils = {};
var _src_Config = {};
var _src_ConfigNode = {};
var _src_sources_CustomSource = {};
var _src_sources_DirectorySource = {};
var _src_sources_DotEnvSource = {};
var _src_sources_EmbeddedSource = {};
var _src_sources_FileSource = {};
var _src_sources_FilesSource = {};
var _src_sources_SourceFactory = {};
var _src_sources_exports_node = {};
var _src_sources_utils_file = {};
var _src_sources_utils_module = {};
var _src_util_Await = {};
var _src_util_cfg = {};
var _src_util_cfg_conditions = {};
var _src_util_cfg_imports = {};
var _src_util_cli = {};
var _src_util_log = {};
var _src_util_object = {};
var _src_util_path = {};
var _src_util_query = {};

// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _node_modules_atma_utils_lib_utils != null ? _node_modules_atma_utils_lib_utils : {};
    var module = { exports: exports };

    (function(factory){

	var owner, property;
	if (typeof module !== 'undefined' && module.exports) {
		owner = module;
		property = 'exports';
	}
	else {
		owner = window;
		property = 'Utils';
	}

	factory(owner, property);

}(function(owner, property){

    	var _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty,
	    _Array_slice,
	    _Object_getOwnProp,
	    _Object_defineProperty;
	var is_Function,
	    is_Object,
	    is_Array,
	    is_ArrayLike,
	    is_String,
	    is_notEmptyString,
	    is_rawObject,
	    is_Date,
	    is_DOM,
	    is_NODE;
	(function(){
		is_Function = function (x) {
		    return typeof x === 'function';
		}
		is_Object = function (x) {
		    return x != null && typeof x === 'object';
		}
		is_Array = function (arr) {
		    return (arr != null &&
		        typeof arr === 'object' &&
		        typeof arr.length === 'number' &&
		        typeof arr.slice === 'function');
		}
		is_ArrayLike = is_Array;
		is_String = function (x) {
		    return typeof x === 'string';
		}
		is_notEmptyString = function (x) {
		    return typeof x === 'string' && x !== '';
		}
		is_rawObject = function (x) {
		    return x != null && typeof x === 'object' && x.constructor === Object;
		}
		is_Date = function (x) {
		    if (x == null || typeof x !== 'object') {
		        return false;
		    }
		    if (x.getFullYear != null && isNaN(x) === false) {
		        return true;
		    }
		    return false;
		}
		function is_PromiseLike(x) {
		    return x != null && typeof x === 'object' && typeof x.then === 'function';
		}
		function is_Observable(x) {
		    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
		}
		is_DOM = typeof window !== 'undefined' && window.navigator != null;
		is_NODE = !is_DOM;
		
	}());
	var obj_copyProperty,
	    obj_getProperty,
	    obj_setProperty,
	    obj_hasProperty,
	    obj_defineProperty,
	    obj_extend,
	    obj_extendDefaults,
	    obj_extendProperties,
	    obj_extendPropertiesDefaults,
	    obj_extendMany,
	    obj_create,
	    obj_defaults,
	    obj_clean,
	    obj_extendDescriptors;
	(function(){
		(function(){
			_Array_slice = Array.prototype.slice;
			var _Array_splice = Array.prototype.splice;
			var _Array_indexOf = Array.prototype.indexOf;
			var _Object_hasOwnProp = Object.hasOwnProperty;
			_Object_getOwnProp = Object.getOwnPropertyDescriptor;
			_Object_defineProperty = Object.defineProperty;
			var _global = typeof global !== 'undefined'
			    ? global
			    : window;
			var _document = typeof window !== 'undefined' && window.document != null
			    ? window.document
			    : null;
			
		}());
		var getDescriptor = Object.getOwnPropertyDescriptor;
		var defineDescriptor = Object.defineProperty;
		obj_copyProperty = getDescriptor == null
		    ? function (target, source, key) { return target[key] = source[key]; }
		    : function (target, source, key) {
		        var descr = getDescriptor(source, key);
		        if (descr == null) {
		            target[key] = source[key];
		            return;
		        }
		        if (descr.value !== void 0) {
		            target[key] = descr.value;
		            return;
		        }
		        defineDescriptor(target, key, descr);
		    };
		
		obj_getProperty = function (obj_, path) {
		    if (obj_ == null) {
		        return null;
		    }
		    if (path.indexOf('.') === -1) {
		        return obj_[path];
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length, i = -1;
		    while (obj != null && ++i < imax) {
		        var key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        obj = obj[key];
		    }
		    return obj;
		}
		;
		obj_setProperty = function (obj_, path, val) {
		    if (path.indexOf('.') === -1) {
		        obj_[path] = val;
		        return;
		    }
		    var obj = obj_, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (key.charCodeAt(key.length - 1) === 63 /*?*/) {
		            key = key.slice(0, -1);
		        }
		        var x = obj[key];
		        if (x == null) {
		            x = obj[key] = {};
		        }
		        obj = x;
		    }
		    obj[chain[i]] = val;
		}
		;
		obj_hasProperty = function (obj, path) {
		    var x = obj_getProperty(obj, path);
		    return x !== void 0;
		}
		;
		obj_defineProperty = function (obj, path, dscr) {
		    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
		    while (++i < imax) {
		        key = chain[i];
		        if (x[key] == null)
		            x[key] = {};
		        x = x[key];
		    }
		    key = chain[imax];
		    if (_Object_defineProperty) {
		        if (dscr.writable === void 0)
		            dscr.writable = true;
		        if (dscr.configurable === void 0)
		            dscr.configurable = true;
		        if (dscr.enumerable === void 0)
		            dscr.enumerable = true;
		        _Object_defineProperty(x, key, dscr);
		        return;
		    }
		    x[key] = dscr.value === void 0
		        ? dscr.value
		        : (dscr.get && dscr.get());
		}
		;
		obj_extend = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        a[key] = b[key];
		    }
		    return a;
		}
		;
		obj_extendDefaults = function (a, b) {
		    if (b == null)
		        return a || {};
		    if (a == null)
		        return obj_create(b);
		    for (var key in b) {
		        if (a[key] == null) {
		            a[key] = b[key];
		            continue;
		        }
		        if (key === 'toString' && a[key] === Object.prototype.toString) {
		            a[key] = b[key];
		        }
		    }
		    return a;
		}
		var extendPropertiesFactory = function (overwriteProps) {
		    if (_Object_getOwnProp == null)
		        return overwriteProps ? obj_extend : obj_extendDefaults;
		    return function (a, b) {
		        if (b == null)
		            return a || {};
		        if (a == null)
		            return obj_create(b);
		        var key, descr, ownDescr;
		        for (key in b) {
		            descr = _Object_getOwnProp(b, key);
		            if (descr == null)
		                continue;
		            if (overwriteProps !== true) {
		                ownDescr = _Object_getOwnProp(a, key);
		                if (ownDescr != null) {
		                    continue;
		                }
		            }
		            if (descr.hasOwnProperty('value')) {
		                a[key] = descr.value;
		                continue;
		            }
		            _Object_defineProperty(a, key, descr);
		        }
		        return a;
		    };
		};
		obj_extendProperties = extendPropertiesFactory(true);
		obj_extendPropertiesDefaults = extendPropertiesFactory(false);
		obj_extendMany = function (a, arg1, arg2, arg3, arg4, arg5, arg6) {
		    var imax = arguments.length, i = 1;
		    for (; i < imax; i++) {
		        a = obj_extend(a, arguments[i]);
		    }
		    return a;
		}
		;
		function obj_toFastProps(obj) {
		    /*jshint -W027*/
		    function F() { }
		    F.prototype = obj;
		    new F();
		    return;
		    eval(obj);
		}
		;
		var _Object_create = Object.create || function (x) {
		    var Ctor = function () { };
		    Ctor.prototype = x;
		    return new Ctor;
		};
		obj_create = _Object_create;
		obj_defaults = function (target, defaults) {
		    for (var key in defaults) {
		        if (target[key] == null)
		            target[key] = defaults[key];
		    }
		    return target;
		}
		/**
		 * Remove all NULL properties, optionally also all falsy-ies
		 */
		obj_clean = function (json, opts) {
		    var _a;
		    if (opts === void 0) { opts = {
		        removePrivate: false,
		        skipProperties: null,
		        removeEmptyArrays: false,
		        removeFalsy: false
		    }; }
		    if (json == null || typeof json !== 'object') {
		        return json;
		    }
		    if (is_ArrayLike(json)) {
		        var arr = json;
		        var i = 0;
		        var notNullIndex = -1;
		        for (; i < arr.length; i++) {
		            var val = arr[i];
		            if (val != null) {
		                notNullIndex = i;
		            }
		            obj_clean(val, opts);
		        }
		        // clean all last nullable values
		        if (notNullIndex + 1 < arr.length) {
		            arr.splice(notNullIndex + 1);
		        }
		        return json;
		    }
		    if (is_Object(json)) {
		        for (var key in json) {
		            if (opts.skipProperties != null && key in opts.skipProperties) {
		                delete json[key];
		                continue;
		            }
		            if (opts.ignoreProperties != null && key in opts.ignoreProperties) {
		                continue;
		            }
		            if (opts.removePrivate === true && key[0] === '_') {
		                delete json[key];
		                continue;
		            }
		            var val = json[key];
		            if ((_a = opts.shouldRemove) === null || _a === void 0 ? void 0 : _a.call(opts, key, val)) {
		                delete json[key];
		                continue;
		            }
		            if (isDefault(val, opts)) {
		                if (opts.strictProperties != null && key in opts.strictProperties && val != null) {
		                    continue;
		                }
		                delete json[key];
		                continue;
		            }
		            if (opts.deep !== false) {
		                obj_clean(val, opts);
		            }
		            if (opts.removeEmptyArrays && is_ArrayLike(val) && val.length === 0) {
		                delete json[key];
		            }
		        }
		        return json;
		    }
		    return json;
		}
		function isDefault(x, opts) {
		    if (x == null) {
		        return true;
		    }
		    if (opts.removeFalsy && (x === '' || x === false)) {
		        return true;
		    }
		    if (opts.removeEmptyArrays && is_ArrayLike(x) && x.length === 0) {
		        return true;
		    }
		    return false;
		}
		obj_extendDescriptors;
		var obj_extendDescriptorsDefaults;
		(function () {
		    if (getDescriptor == null) {
		        obj_extendDescriptors = obj_extend;
		        obj_extendDescriptorsDefaults = obj_defaults;
		        return;
		    }
		    obj_extendDescriptors = function (target, source) {
		        return _extendDescriptors(target, source, false);
		    };
		    obj_extendDescriptorsDefaults = function (target, source) {
		        return _extendDescriptors(target, source, true);
		    };
		    function _extendDescriptors(target, source, defaultsOnly) {
		        if (target == null)
		            return {};
		        if (source == null)
		            return source;
		        var descr, key;
		        for (key in source) {
		            if (defaultsOnly === true && target[key] != null)
		                continue;
		            descr = getDescriptor(source, key);
		            if (descr == null) {
		                obj_extendDescriptors(target, source["__proto__"]);
		                continue;
		            }
		            if (descr.value !== void 0) {
		                target[key] = descr.value;
		                continue;
		            }
		            defineDescriptor(target, key, descr);
		        }
		        return target;
		    }
		})();
		
		
	}());
	var class_create,
	    class_createEx;
	(function(){
		;
		/**
		 * create([...Base], Proto)
		 * Base: Function | Object
		 * Proto: Object {
		 *    constructor: ?Function
		 *    ...
		 */
		class_create = createClassFactory(obj_extendDefaults);
		// with property accessor functions support
		class_createEx = createClassFactory(obj_extendPropertiesDefaults);
		function createClassFactory(extendDefaultsFn) {
		    return function (a, b, c, d, e, f, g, h) {
		        var args = _Array_slice.call(arguments), Proto = args.pop();
		        if (Proto == null)
		            Proto = {};
		        var Ctor;
		        if (Proto.hasOwnProperty('constructor')) {
		            Ctor = Proto.constructor;
		            if (Ctor.prototype === void 0) {
		                var es6Method = Ctor;
		                Ctor = function ClassCtor() {
		                    var imax = arguments.length, i = -1, args = new Array(imax);
		                    while (++i < imax)
		                        args[i] = arguments[i];
		                    return es6Method.apply(this, args);
		                };
		            }
		        }
		        else {
		            Ctor = function ClassCtor() { };
		        }
		        var i = args.length, BaseCtor, x;
		        while (--i > -1) {
		            x = args[i];
		            if (typeof x === 'function') {
		                BaseCtor = wrapFn(x, BaseCtor);
		                x = x.prototype;
		            }
		            extendDefaultsFn(Proto, x);
		        }
		        return createClass(wrapFn(BaseCtor, Ctor), Proto);
		    };
		}
		function createClass(Ctor, Proto) {
		    Proto.constructor = Ctor;
		    Ctor.prototype = Proto;
		    return Ctor;
		}
		function wrapFn(fnA, fnB) {
		    if (fnA == null) {
		        return fnB;
		    }
		    if (fnB == null) {
		        return fnA;
		    }
		    return function () {
		        var args = _Array_slice.call(arguments);
		        var x = fnA.apply(this, args);
		        if (x !== void 0)
		            return x;
		        return fnB.apply(this, args);
		    };
		}
		
	}());
	var arr_remove,
	    arr_each,
	    arr_indexOf,
	    arr_contains,
	    arr_pushMany;
	(function(){
		arr_remove = function (array, x) {
		    var i = array.indexOf(x);
		    if (i === -1)
		        return false;
		    array.splice(i, 1);
		    return true;
		}
		;
		arr_each = function (arr, fn, ctx) {
		    arr.forEach(fn, ctx);
		}
		;
		arr_indexOf = function (arr, x) {
		    return arr.indexOf(x);
		}
		;
		arr_contains = function (arr, x) {
		    return arr.indexOf(x) !== -1;
		}
		;
		arr_pushMany = function (arr, arrSource) {
		    if (arrSource == null || arr == null || arr === arrSource)
		        return;
		    var il = arr.length, jl = arrSource.length, j = -1;
		    while (++j < jl) {
		        arr[il + j] = arrSource[j];
		    }
		}
		;
		function arr_distinct(arr, compareFn) {
		    var out = [];
		    var hash = compareFn == null ? obj_create(null) : null;
		    outer: for (var i = 0; i < arr.length; i++) {
		        var x = arr[i];
		        if (compareFn == null) {
		            if (hash[x] === 1) {
		                continue;
		            }
		            hash[x] = 1;
		        }
		        else {
		            for (var j = i - 1; j > -1; j--) {
		                var prev = arr[j];
		                if (compareFn(x, prev)) {
		                    continue outer;
		                }
		            }
		        }
		        out.push(x);
		    }
		    return out;
		}
		
	}());
	var str_format,
	    str_dedent;
	(function(){
		str_format = function (str_, a, b, c, d) {
		    var str = str_, imax = arguments.length, i = 0, x;
		    while (++i < imax) {
		        x = arguments[i];
		        if (is_Object(x) && x.toJSON) {
		            x = x.toJSON();
		        }
		        str_ = str_.replace(rgxNum(i - 1), String(x));
		    }
		    return str_;
		}
		;
		str_dedent = function (str) {
		    var rgx = /^[\t ]*\S/gm, match = rgx.exec(str), count = -1;
		    while (match != null) {
		        var x = match[0].length;
		        if (count === -1 || x < count)
		            count = x;
		        match = rgx.exec(str);
		    }
		    if (--count < 1)
		        return str;
		    var replacer = new RegExp('^[\\t ]{1,' + count + '}', 'gm');
		    return str
		        .replace(replacer, '')
		        .replace(/^[\t ]*\r?\n/, '')
		        .replace(/\r?\n[\t ]*$/, '');
		}
		;
		var rgxNum;
		(function () {
		    rgxNum = function (num) {
		        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
		    };
		    var cache_ = {};
		}());
		
	}());
	var error_createClass;
	(function(){
		error_createClass = function (name, Proto, stackSliceFrom) {
		    var Ctor = _createCtor(Proto, stackSliceFrom);
		    Ctor.prototype = new Error;
		    Proto.constructor = Error;
		    Proto.name = name;
		    obj_extend(Ctor.prototype, Proto);
		    return Ctor;
		}
		;
		function error_formatSource(source, index, filename) {
		    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
		    if (filename != null) {
		        str += str_format(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
		    }
		    return str + error_formatCursor(lines, lineNum, rowNum);
		}
		;
		/**
		 * @returns [ lines, lineNum, rowNum ]
		 */
		function error_cursor(str, index) {
		    var lines = str.substring(0, index).split('\n'), line = lines.length, row = index + 1 - lines.slice(0, line - 1).join('\n').length;
		    if (line > 1) {
		        // remove trailing newline
		        row -= 1;
		    }
		    return [str.split('\n'), line, row];
		}
		;
		function error_formatCursor(lines, lineNum, rowNum) {
		    var BEFORE = 3, AFTER = 2, i = lineNum - BEFORE, imax = i + BEFORE + AFTER, str = '';
		    if (i < 0)
		        i = 0;
		    if (imax > lines.length)
		        imax = lines.length;
		    var lineNumberLength = String(imax).length, lineNumber;
		    for (; i < imax; i++) {
		        if (str)
		            str += '\n';
		        lineNumber = ensureLength(i + 1, lineNumberLength);
		        str += lineNumber + '|' + lines[i];
		        if (i + 1 === lineNum) {
		            str += '\n' + repeat(' ', lineNumberLength + 1);
		            str += lines[i].substring(0, rowNum - 1).replace(/[^\s]/g, ' ');
		            str += '^';
		        }
		    }
		    return str;
		}
		;
		function ensureLength(num, count) {
		    var str = String(num);
		    while (str.length < count) {
		        str += ' ';
		    }
		    return str;
		}
		function repeat(char_, count) {
		    var str = '';
		    while (--count > -1) {
		        str += char_;
		    }
		    return str;
		}
		function _createCtor(Proto, stackFrom) {
		    var Ctor = Proto.hasOwnProperty('constructor')
		        ? Proto.constructor
		        : null;
		    return function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        obj_defineProperty(this, 'stack', {
		            value: _prepairStack(stackFrom || 3)
		        });
		        obj_defineProperty(this, 'message', {
		            value: str_format.apply(this, arguments)
		        });
		        if (Ctor != null) {
		            Ctor.apply(this, arguments);
		        }
		    };
		}
		function _prepairStack(sliceFrom) {
		    var stack = new Error().stack;
		    return stack == null ? null : stack
		        .split('\n')
		        .slice(sliceFrom)
		        .join('\n');
		}
		
	}());
	var fn_proxy,
	    fn_apply,
	    fn_doNothing,
	    fn_createByPattern;
	(function(){
		fn_proxy = function (fn, ctx) {
		    return function () {
		        var imax = arguments.length, args = new Array(imax), i = 0;
		        for (; i < imax; i++)
		            args[i] = arguments[i];
		        return fn_apply(fn, ctx, args);
		    };
		}
		;
		fn_apply = function (fn, ctx, args) {
		    var l = args.length;
		    if (0 === l)
		        return fn.call(ctx);
		    if (1 === l)
		        return fn.call(ctx, args[0]);
		    if (2 === l)
		        return fn.call(ctx, args[0], args[1]);
		    if (3 === l)
		        return fn.call(ctx, args[0], args[1], args[2]);
		    if (4 === l)
		        return fn.call(ctx, args[0], args[1], args[2], args[3]);
		    return fn.apply(ctx, args);
		}
		;
		fn_doNothing = function () {
		    return false;
		}
		;
		fn_createByPattern = function (definitions, ctx) {
		    var imax = definitions.length;
		    return function () {
		        var l = arguments.length, i = -1, def;
		        outer: while (++i < imax) {
		            def = definitions[i];
		            if (def.pattern.length !== l) {
		                continue;
		            }
		            var j = -1;
		            while (++j < l) {
		                var fn = def.pattern[j];
		                var val = arguments[j];
		                if (fn(val) === false) {
		                    continue outer;
		                }
		            }
		            return def.handler.apply(ctx, arguments);
		        }
		        console.error('InvalidArgumentException for a function', definitions, arguments);
		        return null;
		    };
		}
		;
		
	}());
	var class_Dfr;
	(function(){
		;
		class_Dfr = function () { };
		class_Dfr.prototype = {
		    _isAsync: true,
		    _done: null,
		    _fail: null,
		    _always: null,
		    _resolved: null,
		    _rejected: null,
		    defer: function () {
		        this._rejected = null;
		        this._resolved = null;
		        return this;
		    },
		    isResolved: function () {
		        return this._resolved != null;
		    },
		    isRejected: function () {
		        return this._rejected != null;
		    },
		    isBusy: function () {
		        return this._resolved == null && this._rejected == null;
		    },
		    resolve: function () {
		        var done = this._done, always = this._always;
		        this._resolved = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(done, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    reject: function () {
		        var fail = this._fail, always = this._always;
		        this._rejected = arguments;
		        dfr_clearListeners(this);
		        arr_callOnce(fail, this, arguments);
		        arr_callOnce(always, this, [this]);
		        return this;
		    },
		    then: function (filterSuccess, filterError) {
		        return this.pipe(filterSuccess, filterError);
		    },
		    done: function (callback) {
		        if (this._rejected != null)
		            return this;
		        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
		    },
		    fail: function (callback) {
		        if (this._resolved != null)
		            return this;
		        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
		    },
		    always: function (callback) {
		        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
		    },
		    pipe: function (mix /* ..methods */) {
		        var dfr;
		        if (typeof mix === 'function') {
		            dfr = new class_Dfr();
		            var done_ = mix, fail_ = arguments.length > 1
		                ? arguments[1]
		                : null;
		            this
		                .done(delegate(dfr, 'resolve', done_))
		                .fail(delegate(dfr, 'reject', fail_));
		            return dfr;
		        }
		        dfr = mix;
		        var imax = arguments.length, done = imax === 1, fail = imax === 1, i = 0, x;
		        while (++i < imax) {
		            x = arguments[i];
		            switch (x) {
		                case 'done':
		                    done = true;
		                    break;
		                case 'fail':
		                    fail = true;
		                    break;
		                default:
		                    console.error('Unsupported pipe channel', arguments[i]);
		                    break;
		            }
		        }
		        done && this.done(delegate(dfr, 'resolve'));
		        fail && this.fail(delegate(dfr, 'reject'));
		        function pipe(dfr, method) {
		            return function () {
		                dfr[method].apply(dfr, arguments);
		            };
		        }
		        function delegate(dfr, name, fn) {
		            return function () {
		                if (fn != null) {
		                    var override = fn.apply(this, arguments);
		                    if (override != null && override !== dfr) {
		                        if (isDeferred(override)) {
		                            override.then(delegate(dfr, 'resolve'), delegate(dfr, 'reject'));
		                            return;
		                        }
		                        dfr[name](override);
		                        return;
		                    }
		                }
		                dfr[name].apply(dfr, arguments);
		            };
		        }
		        return this;
		    },
		    pipeCallback: function () {
		        var self = this;
		        return function (error) {
		            if (error != null) {
		                self.reject(error);
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            fn_apply(self.resolve, self, args);
		        };
		    },
		    resolveDelegate: function () {
		        return fn_proxy(this.resolve, this);
		    },
		    rejectDelegate: function () {
		        return fn_proxy(this.reject, this);
		    },
		    catch: function (cb) {
		        return this.fail(cb);
		    },
		    finally: function (cb) {
		        return this.always(cb);
		    }
		};
		var static_Dfr = {
		    resolve: function (a, b, c) {
		        var dfr = new class_Dfr();
		        return dfr.resolve.apply(dfr, _Array_slice.call(arguments));
		    },
		    reject: function (error) {
		        var dfr = new class_Dfr();
		        return dfr.reject(error);
		    },
		    run: function (fn, ctx) {
		        var dfr = new class_Dfr();
		        if (ctx == null)
		            ctx = dfr;
		        fn.call(ctx, fn_proxy(dfr.resolve, ctx), fn_proxy(dfr.reject, dfr), dfr);
		        return dfr;
		    },
		    all: function (promises) {
		        var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
		        if (wait === 0) {
		            return dfr.resolve(arr);
		        }
		        function tick(index) {
		            if (error != null) {
		                return;
		            }
		            var args = _Array_slice.call(arguments, 1);
		            arr.splice.apply(arr, [index, 0].concat(args));
		            if (--wait === 0) {
		                dfr.resolve(arr);
		            }
		        }
		        function onReject(err) {
		            dfr.reject(error = err);
		        }
		        var imax = promises.length, i = -1;
		        while (++i < imax) {
		            var x = promises[i];
		            if (x == null || x.then == null) {
		                tick(i);
		                continue;
		            }
		            x.then(tick.bind(null, i), onReject);
		        }
		        return dfr;
		    }
		};
		class_Dfr.resolve = static_Dfr.resolve;
		class_Dfr.reject = static_Dfr.reject;
		class_Dfr.run = static_Dfr.run;
		class_Dfr.all = static_Dfr.all;
		// PRIVATE
		function dfr_bind(dfr, arguments_, listeners, callback) {
		    if (callback == null)
		        return dfr;
		    if (arguments_ != null)
		        fn_apply(callback, dfr, arguments_);
		    else
		        listeners.push(callback);
		    return dfr;
		}
		function dfr_clearListeners(dfr) {
		    dfr._done = null;
		    dfr._fail = null;
		    dfr._always = null;
		}
		function arr_callOnce(arr, ctx, args) {
		    if (arr == null)
		        return;
		    var imax = arr.length, i = -1, fn;
		    while (++i < imax) {
		        fn = arr[i];
		        if (fn)
		            fn_apply(fn, ctx, args);
		    }
		    arr.length = 0;
		}
		function isDeferred(x) {
		    return x != null
		        && typeof x === 'object'
		        && is_Function(x.then);
		}
		
	}());
	var class_Uri;
	(function(){
		class_Uri = class_create({
		    protocol: null,
		    value: null,
		    path: null,
		    file: null,
		    extension: null,
		    constructor: function (uri) {
		        if (uri == null)
		            return this;
		        if (util_isUri(uri))
		            return uri.combine('');
		        uri = normalize_uri(uri);
		        this.value = uri;
		        parse_protocol(this);
		        parse_host(this);
		        parse_search(this);
		        parse_file(this);
		        // normilize path - "/some/path"
		        this.path = normalize_pathsSlashes(this.value);
		        if (/^[\w]+:\//.test(this.path)) {
		            this.path = '/' + this.path;
		        }
		        return this;
		    },
		    cdUp: function () {
		        var path = this.path;
		        if (path == null || path === '' || path === '/') {
		            return this;
		        }
		        // win32 - is base drive
		        if (/^\/?[a-zA-Z]+:\/?$/.test(path)) {
		            return this;
		        }
		        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
		        return this;
		    },
		    /**
		     * '/path' - relative to host
		     * '../path', 'path','./path' - relative to current path
		     */
		    combine: function (path) {
		        if (util_isUri(path)) {
		            path = path.toString();
		        }
		        if (!path) {
		            return util_clone(this);
		        }
		        if (rgx_win32Drive.test(path)) {
		            return new class_Uri(path);
		        }
		        var uri = util_clone(this);
		        uri.value = path;
		        parse_search(uri);
		        parse_file(uri);
		        if (!uri.value) {
		            return uri;
		        }
		        path = uri.value.replace(/^\.\//i, '');
		        if (path[0] === '/') {
		            uri.path = path;
		            return uri;
		        }
		        while (/^(\.\.\/?)/ig.test(path)) {
		            uri.cdUp();
		            path = path.substring(3);
		        }
		        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
		        return uri;
		    },
		    toString: function () {
		        var protocol = this.protocol ? this.protocol + '://' : '';
		        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
		        var str = protocol + path;
		        if (!(this.file || this.search) && this.path) {
		            str += '/';
		        }
		        return str;
		    },
		    toPathAndQuery: function () {
		        return util_combinePathes(this.path, this.file) + (this.search || '');
		    },
		    /**
		     * @return Current Uri Path{String} that is relative to @arg1 Uri
		     */
		    toRelativeString: function (uri) {
		        if (typeof uri === 'string')
		            uri = new class_Uri(uri);
		        if (this.path.indexOf(uri.path) === 0) {
		            // host folder
		            var p = this.path ? this.path.replace(uri.path, '') : '';
		            if (p[0] === '/')
		                p = p.substring(1);
		            return util_combinePathes(p, this.file) + (this.search || '');
		        }
		        // sub folder
		        var current = this.path.split('/'), relative = uri.path.split('/'), commonpath = '', i = 0, length = Math.min(current.length, relative.length);
		        for (; i < length; i++) {
		            if (current[i] === relative[i])
		                continue;
		            break;
		        }
		        if (i > 0)
		            commonpath = current.splice(0, i).join('/');
		        if (commonpath) {
		            var sub = '', path = uri.path, forward;
		            while (path) {
		                if (this.path.indexOf(path) === 0) {
		                    forward = this.path.replace(path, '');
		                    break;
		                }
		                path = path.replace(/\/?[^\/]+\/?$/i, '');
		                sub += '../';
		            }
		            return util_combinePathes(sub, forward, this.file);
		        }
		        return this.toString();
		    },
		    toLocalFile: function () {
		        var path = util_combinePathes(this.host, this.path, this.file);
		        return util_win32Path(path);
		    },
		    toLocalDir: function () {
		        var path = util_combinePathes(this.host, this.path, '/');
		        return util_win32Path(path);
		    },
		    toDir: function () {
		        var str = this.protocol ? this.protocol + '://' : '';
		        return str + util_combinePathes(this.host, this.path, '/');
		    },
		    isRelative: function () {
		        return !(this.protocol || this.host);
		    },
		    getName: function () {
		        return this.file.replace('.' + this.extension, '');
		    }
		});
		var rgx_protocol = /^([\w\d]+):\/\//, rgx_extension = /\.([\w\d]+)$/i, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/, rgx_fileWithExt = /([^\/]+(\.[\w\d]+)?)$/i;
		function util_isUri(object) {
		    return object && typeof object === 'object' && typeof object.combine === 'function';
		}
		function util_combinePathes(a, b, c, d) {
		    var args = arguments, str = '';
		    for (var i = 0, x, imax = arguments.length; i < imax; i++) {
		        x = arguments[i];
		        if (!x)
		            continue;
		        if (!str) {
		            str = x;
		            continue;
		        }
		        if (str[str.length - 1] !== '/')
		            str += '/';
		        str += x[0] === '/' ? x.substring(1) : x;
		    }
		    return str;
		}
		function normalize_pathsSlashes(str) {
		    if (str[str.length - 1] === '/') {
		        return str.substring(0, str.length - 1);
		    }
		    return str;
		}
		function util_clone(source) {
		    var uri = new class_Uri(), key;
		    for (key in source) {
		        if (typeof source[key] === 'string') {
		            uri[key] = source[key];
		        }
		    }
		    return uri;
		}
		function normalize_uri(str) {
		    return str
		        .replace(/\\/g, '/')
		        .replace(/^\.\//, '')
		        // win32 drive path
		        .replace(/^(\w+):\/([^\/])/, '/$1:/$2');
		}
		function util_win32Path(path) {
		    if (rgx_win32Drive.test(path) && path[0] === '/') {
		        return path.substring(1);
		    }
		    return path;
		}
		function parse_protocol(obj) {
		    var match = rgx_protocol.exec(obj.value);
		    if (match == null && obj.value[0] === '/') {
		        obj.protocol = 'file';
		    }
		    if (match == null)
		        return;
		    obj.protocol = match[1];
		    obj.value = obj.value.substring(match[0].length);
		}
		function parse_host(obj) {
		    if (obj.protocol == null)
		        return;
		    if (obj.protocol === 'file') {
		        var match = rgx_win32Drive.exec(obj.value);
		        if (match) {
		            obj.host = match[1];
		            obj.value = obj.value.substring(obj.host.length);
		        }
		        return;
		    }
		    var pathStart = obj.value.indexOf('/', 2);
		    obj.host = ~pathStart
		        ? obj.value.substring(0, pathStart)
		        : obj.value;
		    obj.value = obj.value.replace(obj.host, '');
		}
		function parse_search(obj) {
		    var question = obj.value.indexOf('?');
		    if (question === -1)
		        return;
		    obj.search = obj.value.substring(question);
		    obj.value = obj.value.substring(0, question);
		}
		function parse_file(obj) {
		    var match = rgx_fileWithExt.exec(obj.value), file = match == null ? null : match[1];
		    if (file == null) {
		        return;
		    }
		    obj.file = file;
		    obj.value = obj.value.substring(0, obj.value.length - file.length);
		    obj.value = normalize_pathsSlashes(obj.value);
		    match = rgx_extension.exec(file);
		    obj.extension = match == null ? null : match[1];
		}
		class_Uri.combinePathes = util_combinePathes;
		class_Uri.combine = util_combinePathes;
		
	}());
	var class_EventEmitter;
	(function(){
		class_EventEmitter = function () {
		    this._listeners = {};
		};
		class_EventEmitter.prototype = {
		    on: function (event, fn) {
		        if (fn != null) {
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    once: function (event, fn) {
		        if (fn != null) {
		            fn._once = true;
		            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
		        }
		        return this;
		    },
		    pipe: function (event) {
		        var that = this, args;
		        return function () {
		            args = _Array_slice.call(arguments);
		            args.unshift(event);
		            fn_apply(that.trigger, that, args);
		        };
		    },
		    emit: event_trigger,
		    trigger: event_trigger,
		    off: function (event, fn) {
		        var listeners = this._listeners[event];
		        if (listeners == null)
		            return this;
		        if (arguments.length === 1) {
		            listeners.length = 0;
		            return this;
		        }
		        var imax = listeners.length, i = -1;
		        while (++i < imax) {
		            if (listeners[i] === fn) {
		                listeners.splice(i, 1);
		                i--;
		                imax--;
		            }
		        }
		        return this;
		    }
		};
		function event_trigger(event) {
		    var args = [];
		    for (var _i = 1; _i < arguments.length; _i++) {
		        args[_i - 1] = arguments[_i];
		    }
		    var fns = this._listeners[event];
		    if (fns == null) {
		        return this;
		    }
		    for (var i = 0; i < fns.length; i++) {
		        var fn = fns[i];
		        fn_apply(fn, this, args);
		        if (fn !== fns[i]) {
		            // the callback has removed itself
		            i--;
		            continue;
		        }
		        if (fn._once === true) {
		            fns.splice(i, 1);
		            i--;
		        }
		    }
		    return this;
		}
		
	}());
	var mixin;
	(function(){
		var class_inherit,
		    class_extendProtoObjects;
		(function(){
			var PROTO = "__proto__";
			var _toString = Object.prototype.toString;
			var _isArguments = function (args) {
			    return _toString.call(args) === "[object Arguments]";
			};
			class_inherit = PROTO in Object.prototype ? inherit : inherit_protoLess;
			
			class_extendProtoObjects = function (proto, _base, _extends) {
			    var key, protoValue;
			    for (key in proto) {
			        protoValue = proto[key];
			        if (!is_rawObject(protoValue))
			            continue;
			        if (_base != null) {
			            if (is_rawObject(_base.prototype[key]))
			                obj_defaults(protoValue, _base.prototype[key]);
			        }
			        if (_extends != null) {
			            arr_each(_extends, proto_extendDefaultsDelegate(protoValue, key));
			        }
			    }
			}
			;
			// PRIVATE
			function proto_extendDefaultsDelegate(target, key) {
			    return function (source) {
			        var proto = proto_getProto(source), val = proto[key];
			        if (is_rawObject(val)) {
			            obj_defaults(target, val);
			        }
			    };
			}
			function proto_extend(proto, source) {
			    if (source == null)
			        return;
			    if (typeof proto === "function")
			        proto = proto.prototype;
			    if (typeof source === "function")
			        source = source.prototype;
			    var key, val;
			    for (key in source) {
			        if (key === "constructor")
			            continue;
			        val = source[key];
			        if (val != null)
			            proto[key] = val;
			    }
			}
			function proto_override(super_, fn) {
			    var proxy;
			    if (super_) {
			        proxy = function (mix) {
			            var args = arguments.length === 1 && _isArguments(mix) ? mix : arguments;
			            return fn_apply(super_, this, args);
			        };
			    }
			    else {
			        proxy = fn_doNothing;
			    }
			    return function () {
			        this["super"] = proxy;
			        return fn_apply(fn, this, arguments);
			    };
			}
			function inherit(_class, _base, _extends, original) {
			    var prototype = original, proto = original;
			    prototype.constructor = _class.prototype.constructor;
			    if (_extends != null) {
			        proto[PROTO] = {};
			        arr_each(_extends, function (x) {
			            proto_extend(proto[PROTO], x);
			        });
			        proto = proto[PROTO];
			    }
			    if (_base != null)
			        proto[PROTO] = _base.prototype;
			    _class.prototype = prototype;
			}
			function inherit_Object_create(_class, _base, _extends, original, _overrides, defaults) {
			    if (_base != null) {
			        _class.prototype = Object.create(_base.prototype);
			        obj_extendDescriptors(_class.prototype, original);
			    }
			    else {
			        _class.prototype = Object.create(original);
			    }
			    _class.prototype.constructor = _class;
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            obj_defaults(_class.prototype, x);
			        });
			    }
			    var proto = _class.prototype;
			    obj_defaults(proto, defaults);
			    for (var key in _overrides) {
			        proto[key] = proto_override(proto[key], _overrides[key]);
			    }
			}
			// browser that doesnt support __proto__
			function inherit_protoLess(_class, _base, _extends, original) {
			    if (_base != null) {
			        var tmp = function () { };
			        tmp.prototype = _base.prototype;
			        _class.prototype = new tmp();
			        _class.prototype.constructor = _class;
			    }
			    if (_extends != null) {
			        arr_each(_extends, function (x) {
			            delete x.constructor;
			            proto_extend(_class, x);
			        });
			    }
			    proto_extend(_class, original);
			}
			function proto_getProto(mix) {
			    return is_Function(mix) ? mix.prototype : mix;
			}
			
		}());
		mixin = function (mix1, mix2, mix3, mix4, mix5) {
		    return mix(mix1, mix2, mix3, mix4, mix5);
		}
		function mix() {
		    var mixins = [];
		    for (var _i = 0; _i < arguments.length; _i++) {
		        mixins[_i] = arguments[_i];
		    }
		    var _base = mixins[0];
		    var _extends = mixins.slice(1);
		    var _callable = ensureCallable(mixins);
		    var _class = function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i] = arguments[_i];
		        }
		        for (var i = _callable.length - 1; i > -1; i--) {
		            var x = _callable[i];
		            if (typeof x === 'function') {
		                fn_apply(x, this, args);
		            }
		        }
		    };
		    if (is_Function(_base) === false) {
		        _extends.unshift(_base);
		        _base = null;
		    }
		    mixStatics(_class, mixins);
		    var proto = {};
		    class_extendProtoObjects(proto, _base, _extends);
		    class_inherit(_class, _base, _extends, proto);
		    return _class;
		}
		function mixStatics(Ctor, mixins) {
		    for (var i = 0; i < mixins.length; i++) {
		        var Fn = mixins[i];
		        if (typeof Fn !== 'function') {
		            continue;
		        }
		        for (var key in Fn) {
		            if (key in Ctor === false) {
		                obj_copyProperty(Ctor, Fn, key);
		            }
		        }
		    }
		}
		var ensureCallableSingle, ensureCallable;
		(function () {
		    ensureCallable = function (arr) {
		        var out = [], i = arr.length;
		        while (--i > -1)
		            out[i] = ensureCallableSingle(arr[i]);
		        return out;
		    };
		    ensureCallableSingle = function (mix) {
		        if (is_Function(mix) === false) {
		            return mix;
		        }
		        var fn = mix;
		        var caller = directCaller;
		        var safe = false;
		        var wrapped = function () {
		            var args = [];
		            for (var _i = 0; _i < arguments.length; _i++) {
		                args[_i] = arguments[_i];
		            }
		            var self = this;
		            var x;
		            if (safe === true) {
		                caller(fn, self, args);
		                return;
		            }
		            try {
		                x = caller(fn, self, args);
		                safe = true;
		            }
		            catch (error) {
		                caller = newCaller;
		                safe = true;
		                caller(fn, self, args);
		            }
		            if (x != null) {
		                return x;
		            }
		        };
		        return wrapped;
		    };
		    function directCaller(fn, self, args) {
		        return fn.apply(self, args);
		    }
		    function newCaller(fn, self, args) {
		        var x = new (fn.bind.apply(fn, [null].concat(args)));
		        obj_extend(self, x);
		    }
		}());
		
	}());
	var Lib = {
	    class_Dfr: class_Dfr,
	    class_EventEmitter: class_EventEmitter,
	    class_Uri: class_Uri,
	    class_create: class_create,
	    class_createEx: class_createEx,
	    arr_remove: arr_remove,
	    arr_each: arr_each,
	    arr_indexOf: arr_indexOf,
	    arr_contains: arr_contains,
	    arr_pushMany: arr_pushMany,
	    error_createClass: error_createClass,
	    fn_createByPattern: fn_createByPattern,
	    fn_doNothing: fn_doNothing,
	    obj_getProperty: obj_getProperty,
	    obj_setProperty: obj_setProperty,
	    obj_hasProperty: obj_hasProperty,
	    obj_extend: obj_extend,
	    obj_extendDefaults: obj_extendDefaults,
	    obj_extendMany: obj_extendMany,
	    obj_extendProperties: obj_extendProperties,
	    obj_extendPropertiesDefaults: obj_extendPropertiesDefaults,
	    obj_create: obj_create,
	    obj_defineProperty: obj_defineProperty,
	    obj_clean: obj_clean,
	    is_Function: is_Function,
	    is_Array: is_Array,
	    is_ArrayLike: is_ArrayLike,
	    is_String: is_String,
	    is_Object: is_Object,
	    is_notEmptyString: is_notEmptyString,
	    is_rawObject: is_rawObject,
	    is_Date: is_Date,
	    is_NODE: is_NODE,
	    is_DOM: is_DOM,
	    str_format: str_format,
	    str_dedent: str_dedent,
	    mixin: mixin
	};
	
    
    for (var key in Lib) {
        owner[property][key] = Lib[key];
    }
}));;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_node_modules_atma_utils_lib_utils === module.exports) {
        // do nothing if
    } else if (__isObj(_node_modules_atma_utils_lib_utils) && __isObj(module.exports)) {
        Object.assign(_node_modules_atma_utils_lib_utils, module.exports);
    } else {
        _node_modules_atma_utils_lib_utils = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_Await;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_Await != null ? _src_util_Await : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_Await = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
class class_Await {
    constructor() {
        this.promise = new atma_utils_1.class_Dfr;
        this.error = null;
        this.completed = false;
        this.wait = 0;
        this.promise.resolve();
    }
    delegate(opts) {
        this.completed = false;
        this.promise.defer();
        this.wait++;
        return (error) => {
            if (this.completed) {
                return;
            }
            if ((opts === null || opts === void 0 ? void 0 : opts.errorable) !== false && error) {
                this.completed = true;
                this.promise.reject(error);
                return;
            }
            if (error) {
                console.log(error.message);
            }
            if (--this.wait < 1) {
                this.completed = true;
                this.promise.resolve();
            }
        };
    }
    always(fn) {
        this.promise.then(fn, fn);
        return this;
    }
}
exports.class_Await = class_Await;
//# sourceMappingURL=Await.js.map
//# sourceMappingURL=Await.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_Await === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_Await) && __isObj(module.exports)) {
        Object.assign(_src_util_Await, module.exports);
    } else {
        _src_util_Await = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_log;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_log != null ? _src_util_log : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_warn = exports.log_error = void 0;
function log_error(...args) {
    args.unshift('<appcfg:error>');
    console.error.apply(console, args);
}
exports.log_error = log_error;
;
function log_warn(...args) {
    args.unshift('<appcfg:warn>');
    console.warn.apply(console, args);
}
exports.log_warn = log_warn;
;
//# sourceMappingURL=log.js.map
//# sourceMappingURL=log.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_log === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_log) && __isObj(module.exports)) {
        Object.assign(_src_util_log, module.exports);
    } else {
        _src_util_log = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_object;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_object != null ? _src_util_object : {};
    var module = { exports: exports };

    "use strict";
// export function obj_getProperty(obj, property) {
//     let chain = property.split('.'),
//         imax = chain.length,
//         i = -1;
//     while (++i < imax) {
//         if (obj == null)
//             return null;
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_visitStrings = exports.obj_clone = exports.obj_interpolate = exports.obj_ensureProperty = exports.obj_deepExtend = exports.obj_extend = exports.obj_defaults = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const log_1 = _src_util_log;
//         obj = obj[chain[i]];
//     }
//     return obj;
// };
// export function obj_setProperty(obj, property, value) {
//     let chain = property.split('.'),
//         imax = chain.length,
//         i = -1,
//         key;
//     while (++i < imax - 1) {
//         key = chain[i];
//         if (obj[key] == null)
//             obj[key] = {};
//         obj = obj[key];
//     }
//     obj[chain[i]] = value;
// };
function obj_defaults(target, defaults) {
    for (let key in defaults) {
        if (target[key] == null)
            target[key] = defaults[key];
    }
    return target;
}
exports.obj_defaults = obj_defaults;
;
function obj_extend(target, source) {
    for (let key in source) {
        if (source[key] != null)
            target[key] = source[key];
    }
    return target;
}
exports.obj_extend = obj_extend;
;
function obj_deepExtend(target, source, opts) {
    if (target == null) {
        target = {};
    }
    if (source == null) {
        return target;
    }
    if ((0, atma_utils_1.is_Array)(target) && (0, atma_utils_1.is_Array)(source)) {
        for (let i = 0, x, imax = source.length; i < imax; i++) {
            x = source[i];
            if (x == null)
                continue;
            if ((0, atma_utils_1.is_Object)(x)) {
                target.push(obj_deepExtend({}, x, opts));
                continue;
            }
            target.push(x);
        }
        return target;
    }
    if (!(0, atma_utils_1.is_Object)(source) && !(0, atma_utils_1.is_Object)(target)) {
        (0, log_1.log_warn)('<object:deepExtend> not an object or type missmatch - Dismiss');
        return target;
    }
    for (let key in source) {
        let val = source[key];
        if (key.charCodeAt(0) === 33) {
            // !
            target[key.substring(1)] = val;
            continue;
        }
        if (val == null)
            continue;
        if (target[key] == null) {
            target[key] = val;
            continue;
        }
        if ((0, atma_utils_1.is_Array)(val)) {
            if ((opts === null || opts === void 0 ? void 0 : opts.extendArrays) === true) {
                if ((0, atma_utils_1.is_Array)(target[key]) === false) {
                    (0, log_1.log_warn)('<object:deepExtend> type missmatch %s %s %s - Overwrite', key, val, target[key]);
                    target[key] = val;
                    continue;
                }
                obj_deepExtend(target[key], val, opts);
            }
            else {
                target[key] = val;
            }
            continue;
        }
        if ((0, atma_utils_1.is_Object)(val) && (0, atma_utils_1.is_Object)(target[key])) {
            target[key] = obj_deepExtend(target[key], val, opts);
            continue;
        }
        target[key] = val;
    }
    return target;
}
exports.obj_deepExtend = obj_deepExtend;
;
function obj_ensureProperty(obj, property, defaultVal) {
    let current = (0, atma_utils_1.obj_getProperty)(obj, property);
    if (current == null) {
        let val = defaultVal == null ? {} : defaultVal;
        (0, atma_utils_1.obj_setProperty)(obj, property, val);
        return val;
    }
    if (typeof current !== typeof defaultVal) {
        (0, log_1.log_error)('<obj_ensureProperty> type missmatch', typeof current, typeof defaultVal, new Error().stack);
    }
    return current;
}
exports.obj_ensureProperty = obj_ensureProperty;
;
function obj_interpolate(obj, root, isOptional) {
    root = root || obj;
    obj_visitStrings(obj, function (str, key, parent) {
        str = str.trim();
        let c0 = str.charCodeAt(0);
        let c1 = str.charCodeAt(1);
        let has = false;
        if (c0 === 35 && c1 === 91) {
            // #[
            (0, log_1.log_warn)('<APPCFG: OBSOLETE: config interpolation will be changed to ${}', str);
            has = true;
        }
        if (c0 === 36 && c1 === 123) {
            // ${
            has = true;
        }
        if (has === false) {
            return null;
        }
        str = str.substring(2, str.length - 1).trim();
        let val = (0, atma_utils_1.obj_getProperty)(root, str);
        if (val == null && typeof process !== 'undefined' && process.env != null) {
            val = (0, atma_utils_1.obj_getProperty)(process.env, str);
        }
        if (val == null && isOptional !== true) {
            (0, log_1.log_warn)('<config: obj_interpolate: property not exists in root', str);
        }
        return val;
    });
}
exports.obj_interpolate = obj_interpolate;
;
// deep clone object and arrays
function obj_clone(obj) {
    if (obj == null || typeof obj !== 'object')
        return obj;
    let Ctor = obj.constructor, clone;
    if (Array === Ctor) {
        clone = [];
        let i = -1;
        let imax = obj.length;
        while (++i < imax) {
            clone[i] = obj_clone(obj[i]);
        }
        return clone;
    }
    if (Object === Ctor || null == Ctor) {
        clone = Object.create(null);
        for (let key in obj) {
            clone[key] = obj_clone(obj[key]);
        }
        return clone;
    }
    if (Date === Ctor
        || RegExp === Ctor
        || String === Ctor
        || Number === Ctor) {
        return obj;
    }
    (0, log_1.log_warn)('Configuration contains not clonable object', obj);
    return obj;
}
exports.obj_clone = obj_clone;
;
function obj_visitStrings(obj, visitorFn) {
    if (obj == null || typeof obj !== 'object') {
        return;
    }
    let val, r;
    if ((0, atma_utils_1.is_Array)(obj)) {
        let arr = obj;
        for (let i = 0; i < arr.length; i++) {
            visit(visitorFn, arr[i], i, arr);
        }
        return;
    }
    for (let key in obj) {
        visit(visitorFn, obj[key], key, obj);
    }
}
exports.obj_visitStrings = obj_visitStrings;
;
function visit(visitorFn, val, key, parent) {
    if (val == null) {
        return;
    }
    if (typeof val === 'string') {
        parent[key] = visitorFn(val, key, parent) || val;
        return;
    }
    if (typeof val === 'object') {
        if (typeof key === 'string' && key.charCodeAt(0) === 95) {
            return;
        }
        obj_visitStrings(val, visitorFn);
    }
}
//# sourceMappingURL=object.js.map
//# sourceMappingURL=object.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_object === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_object) && __isObj(module.exports)) {
        Object.assign(_src_util_object, module.exports);
    } else {
        _src_util_object = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cfg;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_cfg != null ? _src_util_cfg : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_resolvePath = exports.cfg_handlePaths = exports.cfg_extend = exports.cfg_merge = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const object_1 = _src_util_object;
/* target - config object
 * source - source config object
 */
function cfg_merge(target, config, setterProperty, extendArrays) {
    if (config == null) {
        return;
    }
    if (setterProperty) {
        target = (0, object_1.obj_ensureProperty)(target, setterProperty, {});
    }
    config = (0, object_1.obj_clone)(config);
    (0, object_1.obj_deepExtend)(target, config, { extendArrays: extendArrays !== false });
}
exports.cfg_merge = cfg_merge;
;
function cfg_extend(target, source, deepExtend, path) {
    if (path) {
        target = (0, object_1.obj_ensureProperty)(target, path, {});
    }
    var fn = deepExtend !== false
        ? object_1.obj_deepExtend
        : object_1.obj_extend;
    fn(target, source);
}
exports.cfg_extend = cfg_extend;
;
function cfg_handlePaths(config) {
    var base = config.base;
    (0, object_1.obj_visitStrings)(config, function (str, key, parent) {
        if (str.charCodeAt(0) !== 126 /* ~ */)
            return null;
        if (str.charCodeAt(1) !== 47 /* / */)
            return null;
        return resolvePath(str, base);
    });
}
exports.cfg_handlePaths = cfg_handlePaths;
;
function cfg_resolvePath(path, config) {
    if (path.charCodeAt(0) !== 126) {
        // ~
        return path;
    }
    return resolvePath(path, config.base);
}
exports.cfg_resolvePath = cfg_resolvePath;
;
function resolvePath(path, base) {
    return atma_utils_1.class_Uri.combine(base, path.substring(1));
}
//# sourceMappingURL=cfg.js.map
//# sourceMappingURL=cfg.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_cfg === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_cfg) && __isObj(module.exports)) {
        Object.assign(_src_util_cfg, module.exports);
    } else {
        _src_util_cfg = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_SourceFactory;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_SourceFactory != null ? _src_sources_SourceFactory : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceFactory = exports.Sources = exports.Handlers = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const Await_1 = _src_util_Await;
const cfg_1 = _src_util_cfg;
const log_1 = _src_util_log;
exports.Handlers = {};
class Sources {
    constructor() {
        this.array = [];
    }
    add(mix) {
        if (Array.isArray(mix)) {
            mix.forEach(x => this.add(x));
            return;
        }
        if (mix instanceof Sources) {
            this.add(mix.array);
            return;
        }
        this.array.push(mix);
    }
    read(config) {
        let sources = this.array;
        for (let i = 0; i < sources.length; i++) {
            let source = sources[i];
            if (source.config) {
                Object.assign(config, source.config);
            }
        }
    }
    loadSync(rootConfig) {
        var _a, _b;
        let sources = this.array;
        let i = -1;
        let imax = sources.length;
        while (++i < imax) {
            let source = sources[i];
            let before = (_a = source.data) === null || _a === void 0 ? void 0 : _a.beforeRead;
            let after = (_b = source.data) === null || _b === void 0 ? void 0 : _b.afterRead;
            if (before) {
                before(source, rootConfig);
            }
            if (source.readSync == null) {
                throw new Error('Source not supports sync config loader');
            }
            source.readSync(rootConfig);
            (0, cfg_1.cfg_merge)(rootConfig, source.config, source.data.setterProperty, source.data.extendArrays);
            if (after) {
                after(source, rootConfig);
            }
        }
        return sources;
    }
    load(rootConfig, i = -1) {
        var _a, _b, _c;
        if (this.promise == null) {
            this.promise = new atma_utils_1.class_Dfr;
        }
        const self = this;
        let sources = this.array;
        let imax = sources.length;
        let count = 0;
        let $awaits = new Await_1.class_Await();
        while (++i < imax) {
            let source = sources[i];
            if (++count > 1) {
                if (source.data.sync) {
                    $awaits.always(resume);
                    break;
                }
            }
            let before = (_a = source.data) === null || _a === void 0 ? void 0 : _a.beforeRead;
            let after = (_b = source.data) === null || _b === void 0 ? void 0 : _b.afterRead;
            if (before) {
                before(source, rootConfig);
            }
            let onAlways = $awaits.delegate({ errorable: true });
            let onComplete = afterDelegate(after, source, rootConfig);
            // Backward-compat in-case the source itself is deferable
            let promise = (_c = source.read(rootConfig)) !== null && _c !== void 0 ? _c : source;
            promise.then(res => {
                onComplete();
                onAlways(null);
            }, err => {
                onAlways(err);
            });
        }
        function resume() {
            self.load(rootConfig, i - 1);
        }
        if (i > imax - 1) {
            $awaits.always(error => {
                if (error && error instanceof Error) {
                    this.promise.reject(error);
                    return;
                }
                this.promise.resolve(this);
            });
        }
        function afterDelegate(fn, source, rootConfig) {
            return function () {
                (0, cfg_1.cfg_merge)(rootConfig, source.config, source.data.setterProperty, source.data.extendArrays);
                if (fn)
                    fn(source, rootConfig);
            };
        }
        return this.promise;
    }
    toArray() {
        return this.array;
    }
}
exports.Sources = Sources;
;
exports.SourceFactory = {
    create(arr) {
        if (typeof arr === 'string') {
            // file/directory/glob source
            arr = [{ path: arr }];
        }
        if (Array.isArray(arr) === false) {
            // single source
            arr = [arr];
        }
        let imax = arr.length;
        let i = -1;
        let sources = new Sources;
        outer: while (++i < imax) {
            let data = arr[i];
            if (data == null) {
                continue;
            }
            for (let name in exports.Handlers) {
                let Handler = exports.Handlers[name];
                if (Handler.canHandle(data)) {
                    let source = Handler.create(data);
                    sources.add(source);
                    continue outer;
                }
            }
            (0, log_1.log_error)('<unhandled configuration source> :', data);
        }
        return sources;
    },
    register(name, Handler) {
        exports.Handlers[name] = Handler;
    }
};
//# sourceMappingURL=SourceFactory.js.map
//# sourceMappingURL=SourceFactory.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_SourceFactory === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_SourceFactory) && __isObj(module.exports)) {
        Object.assign(_src_sources_SourceFactory, module.exports);
    } else {
        _src_sources_SourceFactory = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_query;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_query != null ? _src_util_query : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query_serialize = exports.query_deserialize = void 0;
const log_1 = _src_util_log;
function query_deserialize(query, delimiter = '&') {
    let obj = {};
    let parts = query.split(delimiter);
    for (let i = 0, imax = parts.length; i < imax; i++) {
        let x = parts[i].split('=');
        let key = x[0];
        let val = x[1] == null ? '' : decode(x[1]);
        if (key[key.length - 1] === ']' && key[key.length - 2] === '[') {
            key = key.substring(0, key.length - 2);
            let current = obj_getProperty(obj, key);
            if (Array.isArray(current)) {
                current.push(val);
            }
            else {
                obj_setProperty(obj, key, [val]);
            }
            continue;
        }
        obj_setProperty(obj, key, val);
    }
    return obj;
}
exports.query_deserialize = query_deserialize;
;
function query_serialize(params, delimiter) {
    if (delimiter == null)
        delimiter = '&';
    var query = '', key, val;
    for (key in params) {
        val = params[key];
        if (val == null)
            continue;
        // serialize as flag
        if (typeof val === 'boolean')
            val = null;
        query = query + (query ? delimiter : '') + key;
        if (val /* unstrict */)
            query += '=' + encode(val);
    }
    return query;
}
exports.query_serialize = query_serialize;
;
// = private
function obj_setProperty(obj, property, value) {
    let chain = property.split('.');
    let i = 0;
    let imax = chain.length;
    for (; i < imax - 1; i++) {
        let key = chain[i];
        if (obj[key] == null) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    obj[chain[i]] = value;
}
function obj_getProperty(obj, property) {
    let chain = property.split('.');
    let i = 0;
    let imax = chain.length;
    for (; i < imax; i++) {
        let key = chain[i];
        if (obj[key] == null) {
            return null;
        }
        obj = obj[key];
    }
    return obj;
}
function decode(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (error) {
        (0, log_1.log_error)('decode:URI malformed');
        return '';
    }
}
function encode(str) {
    try {
        return encodeURIComponent(str);
    }
    catch (error) {
        (0, log_1.log_error)('encode:URI malformed');
        return '';
    }
}
//# sourceMappingURL=query.js.map
//# sourceMappingURL=query.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_query === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_query) && __isObj(module.exports)) {
        Object.assign(_src_util_query, module.exports);
    } else {
        _src_util_query = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_path;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_path != null ? _src_util_path : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path_getQuery = exports.path_handleSpecialFolder = void 0;
const atma_io_1 = require("atma-io");
const log_1 = _src_util_log;
const query_1 = _src_util_query;
let rgx_specialFolder = /^%(\w+)%/, rgx_dblSlash = /[\/]{2,}/g, folders = {};
function path_handleSpecialFolder(path) {
    if (rgx_specialFolder.test(path) === false)
        return path;
    path = path_normalize(path)
        .replace(rgx_specialFolder, function (full, name) {
        name = name.toUpperCase();
        return folders[name] != null
            ? folders[name]
            : (folders[name] = getSpecialFolder(name));
    })
        .replace(rgx_dblSlash, '/');
    return 'file://' + path;
}
exports.path_handleSpecialFolder = path_handleSpecialFolder;
;
function path_normalize(path) {
    return path
        .replace(/\\/g, '/');
}
;
// PRIVATE
function getSpecialFolder(name) {
    if (typeof process === 'undefined' || (process === null || process === void 0 ? void 0 : process.env) == null) {
        // Browser
        return name;
    }
    let nodeEnv = process.env;
    let path = nodeEnv[name];
    if (path != null)
        return path;
    switch (name) {
        case 'TEMP':
            path = nodeEnv.TMP || nodeEnv.TMPDIR;
            break;
        case 'APP':
            // @TODO eliminate io.env dependency
            path = atma_io_1.env.applicationDir.toLocalDir();
            break;
        case 'APPDATA':
            path = nodeEnv.HOME;
            break;
    }
    if (path == null)
        (0, log_1.log_error)('<config:special-folder> Not resolved', name);
    return path_normalize(path || nodeEnv.HOME || name);
}
function path_getQuery(path) {
    let i = path.indexOf('?');
    if (i === -1) {
        return {};
    }
    let query = path.substring(i + 1);
    return (0, query_1.query_deserialize)(query, '&');
}
exports.path_getQuery = path_getQuery;
;
//# sourceMappingURL=path.js.map
//# sourceMappingURL=path.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_path === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_path) && __isObj(module.exports)) {
        Object.assign(_src_util_path, module.exports);
    } else {
        _src_util_path = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cfg_conditions;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_cfg_conditions != null ? _src_util_cfg_conditions : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_getEnvironmentVar = exports.cfg_conditions = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const log_1 = _src_util_log;
const object_1 = _src_util_object;
function cfg_conditions(obj, config, cliParams) {
    _cfg = config;
    _params = cliParams;
    _refCount = 0;
    _refs = [];
    rewrite(obj);
}
exports.cfg_conditions = cfg_conditions;
;
function cfg_getEnvironmentVar(config, prop) {
    if (envCache.hasOwnProperty(prop))
        return envCache[prop];
    let r = (0, atma_utils_1.obj_getProperty)(config, prop);
    if (r != null)
        return (envCache[prop] = r);
    if (typeof process !== 'undefined') {
        let env = process.env;
        r = env[prop];
        if (r != null)
            return (envCache[prop] = r);
        r = env['NODE_' + prop.toUpperCase()];
        if (r != null)
            return (envCache[prop] = r);
        let ENV = env.NODE_ENV || env.ENV;
        if (ENV != null) {
            r = new RegExp('\\b' + prop + '\\b', 'i').test(ENV);
            return (envCache[prop] = r);
        }
    }
    return (envCache[prop] = false);
}
exports.cfg_getEnvironmentVar = cfg_getEnvironmentVar;
;
// === private
let envCache = {};
let key_DEFAULT = 'default';
let _cfg;
let _params;
let _refs;
let _refCount;
function rewrite(obj) {
    if ((0, atma_utils_1.is_Array)(obj))
        rewriteArray(obj);
    if ((0, atma_utils_1.is_Object)(obj))
        rewriteObject(obj);
}
function rewriteObject(obj) {
    let MAX_CALL_STACK = 100;
    if (++_refCount > MAX_CALL_STACK) {
        if (_refs.indexOf(obj) !== -1) {
            return;
        }
        _refs.push(obj);
    }
    let key, val, c;
    for (key in obj) {
        c = key.charCodeAt(0);
        if (c === 36) {
            // $ - utility properties
            continue;
        }
        val = obj[key];
        if ((0, atma_utils_1.is_Object)(val) === false)
            continue;
        if (isConditionProperty(key)) {
            if (evalConditionProperty(key)) {
                (0, object_1.obj_deepExtend)(obj, val);
            }
            continue;
        }
        if (isConditionObject(val)) {
            obj[key] = evalConditionObject(val);
            continue;
        }
        rewrite(val);
    }
}
function rewriteArray(arr) {
    let imax = arr.length, i = -1, x, extArr;
    while (++i < imax) {
        x = arr[i];
        if ((0, atma_utils_1.is_Object)(x) === false)
            continue;
        if (isConditionObject(x)) {
            extArr = evalConditionObject(x);
            if (extArr == null)
                continue;
            if ((0, atma_utils_1.is_Array)(extArr) === false)
                extArr = [extArr];
            arr.splice.apply(arr, [i, 1].concat(extArr));
            i--;
            imax += extArr.length;
            continue;
        }
        rewrite(x);
    }
}
function isConditionProperty(prop) {
    if (prop.charCodeAt(0) !== 35)
        // #
        return false;
    return prop.indexOf('#if ') === 0;
}
function isConditionObject(obj) {
    let has = false;
    for (let key in obj) {
        if (isConditionProperty(key)) {
            has = true;
            continue;
        }
        if (key === key_DEFAULT)
            continue;
        return false;
    }
    return has === true;
}
function evalConditionProperty(prop) {
    let code = prop
        .replace('#if ', '')
        .replace(/\b[\w\d_$]+\b/g, function (match, index, str) {
        if (isInQuotes(str, index))
            return match;
        if (str[index - 1] === '.')
            // skip property accessor
            return match;
        return 'getter("' + match + '")';
    });
    let fn = new Function('getter', 'return !!(' + code + ')');
    try {
        return fn(evalGetter);
    }
    catch (error) {
        (0, log_1.log_error)('<config:condition-object> Evalulation error', prop, error);
    }
    return false;
}
function evalGetter(prop) {
    let r = (0, atma_utils_1.obj_getProperty)(_params, prop);
    if (r != null)
        return r;
    r = (0, atma_utils_1.obj_getProperty)(_cfg, prop);
    if (r != null)
        return r;
    if (typeof process !== 'undefined') {
        let env = process.env;
        r = env[prop];
        if (r != null)
            return r;
        r = env['NODE_' + prop];
        if (r != null)
            return r;
        let ENV = env.NODE_ENV || env.ENV;
        if (ENV != null && ENV.toUpperCase() === prop.toUpperCase())
            return true;
    }
    return null;
}
function evalConditionObject(obj) {
    for (let key in obj) {
        if (key === key_DEFAULT)
            continue;
        if (evalConditionProperty(key))
            return obj[key];
    }
    return obj[key_DEFAULT];
}
function isInQuotes(str, index) {
    let isInDouble = false, isInSingle = false, c;
    while (--index > -1) {
        c = str.charCodeAt(index);
        if (34 === c) {
            if (isInSingle)
                continue;
            if (isInDouble && str[index - 1] === '\\')
                continue;
            isInDouble = !isInDouble;
        }
        if (39 === c) {
            if (isInDouble)
                continue;
            if (isInSingle && str[index - 1] === '\\')
                continue;
            isInSingle = !isInSingle;
        }
    }
    return isInSingle || isInDouble;
}
//# sourceMappingURL=cfg_conditions.js.map
//# sourceMappingURL=cfg_conditions.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_cfg_conditions === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_cfg_conditions) && __isObj(module.exports)) {
        Object.assign(_src_util_cfg_conditions, module.exports);
    } else {
        _src_util_cfg_conditions = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_utils_module;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_utils_module != null ? _src_sources_utils_module : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module_eval = void 0;
const log_1 = _src_util_log;
function module_eval(path, code) {
    var module = {
        exports: {}
    }, exports = module.exports;
    try {
        (new Function('module', 'exports', code))(module, exports);
    }
    catch (error) {
        (0, log_1.log_error)('<config> Configuration evaluation error', path, error);
    }
    if (module.exports === exports && Object.keys(module.exports).length === 0) {
        (0, log_1.log_error)('<config> Define `module.exports = ` in a file to export configuration', path);
    }
    return module.exports;
}
exports.module_eval = module_eval;
;
//# sourceMappingURL=module.js.map
//# sourceMappingURL=module.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_utils_module === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_utils_module) && __isObj(module.exports)) {
        Object.assign(_src_sources_utils_module, module.exports);
    } else {
        _src_sources_utils_module = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cfg_imports;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_cfg_imports != null ? _src_util_cfg_imports : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cfg_imports = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const atma_io_1 = require("atma-io");
function cfg_imports(obj) {
    rewrite(obj);
}
exports.cfg_imports = cfg_imports;
;
// === private
let key_DEFAULT = 'default';
function rewrite(obj) {
    if ((0, atma_utils_1.is_Array)(obj))
        rewriteArray(obj);
    if ((0, atma_utils_1.is_Object)(obj))
        rewriteObject(obj);
}
function rewriteObject(obj) {
    for (let key in obj) {
        let c = key.charCodeAt(0);
        if (c === 36) {
            // $ - utility properties
            continue;
        }
        let val = obj[key];
        if (isImportValue(val)) {
            obj[key] = importValue(val);
            continue;
        }
        if ((0, atma_utils_1.is_Object)(val) === false) {
            continue;
        }
        rewrite(val);
    }
}
function rewriteArray(arr) {
    let imax = arr.length, i = -1;
    while (++i < imax) {
        let x = arr[i];
        if ((0, atma_utils_1.is_Object)(x) === false) {
            continue;
        }
        rewrite(x);
    }
}
function isImportValue(value) {
    return typeof value === 'string' && value[0] === '#' && rgx.test(value);
}
function importValue(value) {
    let match = rgx.exec(value);
    let path = match.groups.path;
    let json = atma_io_1.File.read(path);
    if (match.groups.getter) {
        json = (0, atma_utils_1.obj_getProperty)(json, match.groups.getter);
    }
    return json;
}
const rgx = /#import(\s+)(?<path>[^\s]+)\s*(?<getter>[^\s]+)?/i;
//# sourceMappingURL=cfg_imports.js.map
//# sourceMappingURL=cfg_imports.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_cfg_imports === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_cfg_imports) && __isObj(module.exports)) {
        Object.assign(_src_util_cfg_imports, module.exports);
    } else {
        _src_util_cfg_imports = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_utils_file;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_utils_file != null ? _src_sources_utils_file : {};
    var module = { exports: exports };

    "use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.file_readSourceSync = exports.file_writeSourceAsync = exports.file_readSourceAsync = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const atma_io_1 = require("atma-io");
const object_1 = _src_util_object;
const cfg_conditions_1 = _src_util_cfg_conditions;
const log_1 = _src_util_log;
const module_1 = _src_sources_utils_module;
const cfg_imports_1 = _src_util_cfg_imports;
function file_readSourceAsync(rootConfig, path, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let file = prepareFile(resolveFile(path, data), 'read');
        if (file == null) {
            return null;
        }
        let fileContent = yield file.readAsync();
        if (data.secret && fileContent == null) {
            throw new Error(`Invalid secret for file ${file.uri.toLocalFile()}`);
        }
        if (typeof data.deserializer === 'function') {
            fileContent = yield data.deserializer(fileContent);
        }
        let config = prepareConfig(data, file, fileContent, rootConfig);
        return config;
    });
}
exports.file_readSourceAsync = file_readSourceAsync;
;
function file_writeSourceAsync(path, content, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let file = prepareFile(resolveFile(path, data, 'write'), 'write');
        yield file.writeAsync(content);
    });
}
exports.file_writeSourceAsync = file_writeSourceAsync;
;
function file_readSourceSync(rootConfig, path, data) {
    let file = prepareFile(resolveFile(path, data), 'read');
    if (file == null) {
        return null;
    }
    let fileContent = file.read();
    if (typeof data.deserializer === 'function') {
        fileContent = data.deserializer(fileContent);
    }
    return prepareConfig(data, file, fileContent, rootConfig);
}
exports.file_readSourceSync = file_readSourceSync;
;
function resolveFile(path, data, method = 'read') {
    let uri = new atma_utils_1.class_Uri(path);
    let settings = {
        cached: false
    };
    if (data.secret != null) {
        settings.aes256 = { secret: data.secret };
    }
    if (method === 'write' || atma_io_1.File.exists(uri.toString())) {
        return new atma_io_1.File(uri, settings);
    }
    if (uri.isRelative() && typeof include !== 'undefined') {
        uri = (new atma_utils_1.class_Uri(include.location)).combine(path);
        if (atma_io_1.File.exists(uri.toString()))
            return new atma_io_1.File(uri, settings);
    }
    if (data.lookupAncestors) {
        if (uri.isRelative()) {
            uri = (new atma_utils_1.class_Uri('file://' + global.process.cwd() + '/')).combine(path);
        }
        let folder = uri.path;
        while (uri.cdUp() && uri.path !== folder) {
            folder = uri.path;
            if (atma_io_1.File.exists(uri.toString())) {
                return new atma_io_1.File(uri, settings);
            }
        }
    }
    if (data.optional !== true) {
        (0, log_1.log_error)('Configuration file not found', path);
        (0, log_1.log_warn)('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
    }
    return null;
}
function prepareFile(file, method) {
    if (file == null) {
        return null;
    }
    if (file.uri.extension === 'yml') {
        // ensure we have the middleware
        atma_io_1.File.getHookHandler().register('yml', method, 'atma-io-middleware-yml');
    }
    return file;
}
function prepareConfig(data, file, fileContent, rootConfig) {
    let config;
    if (typeof fileContent === 'string') {
        if (/(js|ts)/i.test(file.uri.extension) === false) {
            throw new Error(`Content in "${file.uri.file}" loaded as script to be evaluated. But file extension was not "js|ts". File loader middleware, which should resolve the content to object, failed.`);
        }
        data.writable = false;
        config = (0, module_1.module_eval)(file.uri.toLocalFile(), fileContent);
    }
    else {
        config = fileContent;
    }
    (0, object_1.obj_interpolate)(config, config, true);
    (0, cfg_conditions_1.cfg_conditions)(config, config, rootConfig.$cli.params);
    (0, cfg_imports_1.cfg_imports)(config);
    let prop = data.getterProperty;
    if (prop) {
        config = (0, atma_utils_1.obj_getProperty)(config, prop);
    }
    return config;
}
//# sourceMappingURL=file.js.map
//# sourceMappingURL=file.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_utils_file === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_utils_file) && __isObj(module.exports)) {
        Object.assign(_src_sources_utils_file, module.exports);
    } else {
        _src_sources_utils_file = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_FileSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_FileSource != null ? _src_sources_FileSource : {};
    var module = { exports: exports };

    "use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSource = void 0;
const cfg_1 = _src_util_cfg;
const path_1 = _src_util_path;
const SourceFactory_1 = _src_sources_SourceFactory;
const file_1 = _src_sources_utils_file;
SourceFactory_1.SourceFactory.register('file', {
    canHandle(data) {
        let path = data.path;
        if (typeof path !== 'string') {
            return false;
        }
        if (path.search(/[\*\?]/g) !== -1) {
            // wildcards - directory source
            return false;
        }
        if (path[path.length - 1] === '/') {
            // directory
            return false;
        }
        return true;
    },
    create(data) {
        return new FileSource(data);
    }
});
class FileSource {
    constructor(data) {
        this.data = data;
        this.config = {};
        data.path = (0, path_1.path_handleSpecialFolder)(data.path);
    }
    read(rootConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            let config = yield (0, file_1.file_readSourceAsync)(rootConfig, this.data.path, this.data);
            this.config = config;
            return this;
        });
    }
    readSync(rootConfig) {
        this.config = (0, file_1.file_readSourceSync)(rootConfig, this.data.path, this.data);
        return this;
    }
    write(config, deepExtend, setterProperty) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.data.writable !== true) {
                throw new Error('Not writable');
            }
            if (this.config == null) {
                this.config = {};
            }
            (0, cfg_1.cfg_extend)(this.config, config, deepExtend, setterProperty);
            let filename = this.data.path;
            let cfg = (_c = (_b = (_a = this.data).serializer) === null || _b === void 0 ? void 0 : _b.call(_a, this.config)) !== null && _c !== void 0 ? _c : this.config;
            yield (0, file_1.file_writeSourceAsync)(filename, cfg, this.data);
            return this;
        });
    }
}
exports.FileSource = FileSource;
//# sourceMappingURL=FileSource.js.map
//# sourceMappingURL=FileSource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_FileSource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_FileSource) && __isObj(module.exports)) {
        Object.assign(_src_sources_FileSource, module.exports);
    } else {
        _src_sources_FileSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_EmbeddedSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_EmbeddedSource != null ? _src_sources_EmbeddedSource : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedSource = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('embedded', {
    canHandle(data) {
        return (0, atma_utils_1.is_Object)(data.config);
    },
    create(data) {
        return new EmbeddedSource(data);
    }
});
class EmbeddedSource {
    constructor(data) {
        this.data = data;
        this.data.writable = false;
        this.config = data.config;
    }
    read(rootConfig) {
        return Promise.resolve(this);
    }
    write(config, deepExtend, setterProperty) {
        throw new Error('Method not implemented.');
    }
}
exports.EmbeddedSource = EmbeddedSource;
//# sourceMappingURL=EmbeddedSource.js.map
//# sourceMappingURL=EmbeddedSource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_EmbeddedSource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_EmbeddedSource) && __isObj(module.exports)) {
        Object.assign(_src_sources_EmbeddedSource, module.exports);
    } else {
        _src_sources_EmbeddedSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_DotEnvSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_DotEnvSource != null ? _src_sources_DotEnvSource : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SourceFactory_1 = _src_sources_SourceFactory;
const FileSource_1 = _src_sources_FileSource;
const atma_io_1 = require("atma-io");
const EmbeddedSource_1 = _src_sources_EmbeddedSource;
SourceFactory_1.SourceFactory.register('env', {
    canHandle(data) {
        if (data.dotenv) {
            return true;
        }
        return false;
    },
    create(data) {
        var _a;
        let envSource = new EmbeddedSource_1.EmbeddedSource({
            config: Object.assign({}, process.env)
        });
        let directory = (_a = data.path) !== null && _a !== void 0 ? _a : `file:///${process.cwd()}/`;
        let pattern = /^\.env(\.(?<flavor>\w+))?$/;
        let files = atma_io_1.Directory.readFiles(directory, pattern);
        let sorted = [];
        files.forEach(file => {
            var _a;
            let flavor = (_a = pattern.exec(file.uri.file)) === null || _a === void 0 ? void 0 : _a.groups.flavor;
            if (!flavor) {
                sorted.unshift(file);
                return;
            }
            if (is(flavor)) {
                sorted.push(file);
            }
        });
        let fileSources = sorted.map(file => {
            return new DotEnvSource({
                path: file.uri.toString(),
                sync: data.sync,
            });
        });
        return [envSource, ...fileSources];
        function is(flavor) {
            flavor = flavor.toLowerCase();
            let inArgs = process.argv.some(x => {
                let key = x.replace(/-/g, '').toLowerCase();
                return key === flavor || `env=${flavor}` === key;
            });
            if (inArgs) {
                return true;
            }
            let inEnv = process.env[flavor.toUpperCase()] != null;
            if (inEnv) {
                return true;
            }
            let env = process.env['ENV'];
            if (env && env.toLowerCase() === flavor) {
                return true;
            }
            return false;
        }
    }
});
class DotEnvSource extends FileSource_1.FileSource {
    constructor(data) {
        super(data);
        this.data = data;
        data.deserializer = this.deserializer;
    }
    deserializer(content) {
        let json = content
            .replace(/\r/g, '')
            .split('\n')
            .map(x => x.trim())
            .filter(Boolean)
            .map(line => {
            let eq = line.indexOf('=');
            if (eq === -1) {
                return null;
            }
            let key = line.substring(0, eq).trim();
            let value = line.substring(eq + 1).trim();
            return { key, value };
        })
            .filter(Boolean)
            .reduce((aggr, x) => {
            aggr[x.key] = x.value;
            return aggr;
        }, {});
        return json;
    }
}
//# sourceMappingURL=DotEnvSource.js.map
//# sourceMappingURL=DotEnvSource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_DotEnvSource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_DotEnvSource) && __isObj(module.exports)) {
        Object.assign(_src_sources_DotEnvSource, module.exports);
    } else {
        _src_sources_DotEnvSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_FilesSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_FilesSource != null ? _src_sources_FilesSource : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('files', {
    canHandle(data) {
        return Array.isArray(data.files);
    },
    create(data) {
        return data.files.map(function (file) {
            return SourceFactory_1.SourceFactory.create({ path: file }).toArray();
        }).reduce((aggr, arr) => aggr.concat(arr), []);
    }
});
//# sourceMappingURL=FilesSource.js.map
//# sourceMappingURL=FilesSource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_FilesSource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_FilesSource) && __isObj(module.exports)) {
        Object.assign(_src_sources_FilesSource, module.exports);
    } else {
        _src_sources_FilesSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_DirectorySource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_DirectorySource != null ? _src_sources_DirectorySource : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SourceFactory_1 = _src_sources_SourceFactory;
const atma_io_1 = require("atma-io");
SourceFactory_1.SourceFactory.register('directory', {
    canHandle(data) {
        let path = data.path;
        if (typeof path !== 'string')
            return false;
        if (path.search(/[\*\?]/g) !== -1)
            return true;
        if (path[path.length - 1] === '/')
            return true;
        return false;
    },
    create(data) {
        let path = data.path.replace(/\\/g, '/');
        let wildCardIndex = path.search(/[\*\?]/g);
        let index = path.lastIndexOf('/', wildCardIndex);
        let base;
        let pattern;
        if (wildCardIndex === -1) {
            base = path;
        }
        else {
            base = path.substring(0, index + 1);
            pattern = path.substring(index + 1);
        }
        let dir = new atma_io_1.Directory(base);
        dir.readFiles(pattern);
        let files = dir
            .files
            .map(file => {
            return file.uri.toString();
        });
        return SourceFactory_1.SourceFactory
            .create([{
                files: files
            }])
            .toArray();
    }
});
//# sourceMappingURL=DirectorySource.js.map
//# sourceMappingURL=DirectorySource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_DirectorySource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_DirectorySource) && __isObj(module.exports)) {
        Object.assign(_src_sources_DirectorySource, module.exports);
    } else {
        _src_sources_DirectorySource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_CustomSource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_CustomSource != null ? _src_sources_CustomSource : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('custom', {
    canHandle(data) {
        return typeof data === 'function';
    },
    create(Ctor) {
        let source = new Ctor();
        return source;
    }
});
//# sourceMappingURL=CustomSource.js.map
//# sourceMappingURL=CustomSource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_CustomSource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_CustomSource) && __isObj(module.exports)) {
        Object.assign(_src_sources_CustomSource, module.exports);
    } else {
        _src_sources_CustomSource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_sources_exports_node;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_sources_exports_node != null ? _src_sources_exports_node : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceFactory = void 0;
_src_sources_DotEnvSource;
_src_sources_FileSource;
_src_sources_FilesSource;
_src_sources_DirectorySource;
_src_sources_EmbeddedSource;
_src_sources_CustomSource;
var SourceFactory_1 = _src_sources_SourceFactory;
Object.defineProperty(exports, "SourceFactory", { enumerable: true, get: function () { return SourceFactory_1.SourceFactory; } });
//# sourceMappingURL=exports-node.js.map
//# sourceMappingURL=exports-node.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_sources_exports_node === module.exports) {
        // do nothing if
    } else if (__isObj(_src_sources_exports_node) && __isObj(module.exports)) {
        Object.assign(_src_sources_exports_node, module.exports);
    } else {
        _src_sources_exports_node = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_util_cli;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_cli != null ? _src_util_cli : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli_arguments = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
let cache__;
function cli_arguments() {
    if (cache__ != null) {
        return cache__;
    }
    if (typeof process === 'undefined' || (process === null || process === void 0 ? void 0 : process.argv) == null) {
        // Browser
        return {
            params: {},
            args: []
        };
    }
    let argv = process.argv;
    let imax = argv.length;
    let params = {};
    let args = [];
    for (let i = 2; i < imax; i++) {
        let x = argv[i];
        if (x[0] === '-') {
            let key = x.replace(/^[\-]+/, '');
            let val;
            if (i < imax - 1 && argv[i + 1][0] !== '-') {
                val = argv[i + 1];
                i++;
            }
            else {
                val = true;
            }
            (0, atma_utils_1.obj_setProperty)(params, key, val);
            continue;
        }
        args.push(x);
    }
    return cache__ = {
        params: params,
        args: args
    };
}
exports.cli_arguments = cli_arguments;
;
//# sourceMappingURL=cli.js.map
//# sourceMappingURL=cli.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_cli === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_cli) && __isObj(module.exports)) {
        Object.assign(_src_util_cli, module.exports);
    } else {
        _src_util_cli = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Config;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_Config != null ? _src_Config : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const atma_utils_1 = _node_modules_atma_utils_lib_utils;
const SourceFactory_1 = _src_sources_SourceFactory;
const Await_1 = _src_util_Await;
const cfg_1 = _src_util_cfg;
const cfg_conditions_1 = _src_util_cfg_conditions;
const cli_1 = _src_util_cli;
const log_1 = _src_util_log;
const object_1 = _src_util_object;
class Config {
    constructor(data, opts) {
        var _a;
        this.$parallelReads = new Await_1.class_Await;
        this.$sync = false;
        if (data != null) {
            this.$data = data;
            this.$sources = SourceFactory_1.SourceFactory.create(data);
            this.$sources.read(this);
        }
        this.$sync = (_a = opts === null || opts === void 0 ? void 0 : opts.sync) !== null && _a !== void 0 ? _a : false;
    }
    static fetch(arr, opts) {
        return new Config(null, opts).$read(arr);
    }
    static create(arr) {
        return new Config(arr);
    }
    $get(path) {
        return (0, atma_utils_1.obj_getProperty)(this, path);
    }
    $set(path, value) {
        (0, atma_utils_1.obj_setProperty)(this, path, value);
    }
    $extend(config) {
        (0, object_1.obj_deepExtend)(this, config);
    }
    $read(mix) {
        let dfr = new atma_utils_1.class_Dfr;
        let config = this;
        let resume = this.$parallelReads.delegate({ errorable: false });
        let sources = mix == null
            ? this.$sources
            : SourceFactory_1.SourceFactory.create(mix);
        this.$parallelReads.always(() => dfr.resolve(config));
        this.$cli = (0, cli_1.cli_arguments)();
        if (this.$sync) {
            sources.loadSync(config);
            onComplete();
        }
        else {
            sources
                .load(config)
                .then(onComplete, onError);
        }
        function onComplete() {
            let overrides = config.$cli.params;
            for (let prop in overrides) {
                (0, atma_utils_1.obj_setProperty)(config, prop, overrides[prop]);
            }
            (0, object_1.obj_interpolate)(config);
            (0, cfg_conditions_1.cfg_conditions)(config, config, config.$cli.params);
            (0, cfg_1.cfg_handlePaths)(config);
            dfr.resolve(config);
        }
        function onError(err) {
            dfr.reject(err);
        }
        this.$sources = sources;
        return dfr;
    }
    $write(config, mix, arg1) {
        var _a;
        let deepExtend = false;
        let setterPath = null;
        let sourceName = null;
        if (mix != null && typeof mix === 'object') {
            deepExtend = mix.deepExtend;
            setterPath = mix.setterPath;
            sourceName = mix.sourceName;
        }
        else {
            // boolean or null
            deepExtend = mix;
            setterPath = arg1;
        }
        if (config != null) {
            (0, cfg_1.cfg_extend)(this, config, deepExtend, setterPath);
        }
        let dfr = new atma_utils_1.class_Dfr;
        let sources = this.$sources.toArray();
        for (let i = 0; i < sources.length; i++) {
            if (sources[i].data.writable !== true) {
                continue;
            }
            if (sourceName != null && ((_a = sources[i].data) === null || _a === void 0 ? void 0 : _a.name) !== sourceName) {
                continue;
            }
            if (config != null) {
                config = (0, object_1.obj_clone)(config);
            }
            sources[i]
                .write(config, deepExtend, setterPath)
                .then(dfr.resolveDelegate(), dfr.rejectDelegate());
            return dfr;
        }
        let msg = '<config:write> Writable source not defined.';
        (0, log_1.log_error)(msg);
        return dfr.reject(msg);
    }
    $is(name) {
        let r = (0, cfg_conditions_1.cfg_getEnvironmentVar)(this, name);
        if (typeof r === 'boolean') {
            return r;
        }
        if (r == null || r === '0' || r.toLowerCase() === 'false') {
            return false;
        }
        return true;
    }
    toJSON() {
        let json = Object.create(null);
        for (let key in this) {
            if (key[0] === '$' || key === 'toJSON') {
                continue;
            }
            json[key] = this[key];
        }
        return json;
    }
}
exports.Config = Config;
/** Exports */
Config.default = Config;
Config.Config = Config;
;
//# sourceMappingURL=Config.js.map
//# sourceMappingURL=Config.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_Config === module.exports) {
        // do nothing if
    } else if (__isObj(_src_Config) && __isObj(module.exports)) {
        Object.assign(_src_Config, module.exports);
    } else {
        _src_Config = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_ConfigNode;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_ConfigNode != null ? _src_ConfigNode : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
_src_sources_exports_node;
var Config_1 = _src_Config;
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return Config_1.Config; } });
//# sourceMappingURL=ConfigNode.js.map
//# sourceMappingURL=ConfigNode.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_ConfigNode === module.exports) {
        // do nothing if
    } else if (__isObj(_src_ConfigNode) && __isObj(module.exports)) {
        Object.assign(_src_ConfigNode, module.exports);
    } else {
        _src_ConfigNode = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
const ConfigNode_1 = _src_ConfigNode;
module.exports = ConfigNode_1.Config;
//# sourceMappingURL=export-node.js.map
//# sourceMappingURL=export-node.ts.map

export default module.exports;



// end:source ./ESM.js

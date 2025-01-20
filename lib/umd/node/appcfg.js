
// source ./RootModuleWrapped.js
(function(){

    var _node_modules_atma_utils_lib_umd_utils = {};
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
var _src_util_yaml = {};

// source ./ModuleSimplified.js
var _node_modules_atma_utils_lib_umd_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _node_modules_atma_utils_lib_umd_utils != null ? _node_modules_atma_utils_lib_umd_utils : {};
    var module = { exports: exports };

    
// source ./UMD.js
(function (factory) {

    var _name = 'Utils',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _module.exports;
        });
        return;
    }
    
    if (_name) {
        _global[_name] = _module.exports;
    }

}(function (module, exports, global) {

    var _src_arr = {};
var _src_class = {};
var _src_class_Dfr = {};
var _src_class_EventEmitter = {};
var _src_class_Uri = {};
var _src_error = {};
var _src_fn = {};
var _src_is = {};
var _src_mixin = {};
var _src_obj = {};
var _src_promisify = {};
var _src_proto = {};
var _src_refs = {};
var _src_str = {};

// source ./ModuleSimplified.js
var _src_is;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_is != null ? _src_is : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_NODE = exports.is_DOM = exports.is_Observable = exports.is_PromiseLike = exports.is_Date = exports.is_rawObject = exports.is_notEmptyString = exports.is_String = exports.is_ArrayLike = exports.is_Array = exports.is_Object = exports.is_Function = void 0;
function is_Function(x) {
    return typeof x === 'function';
}
exports.is_Function = is_Function;
function is_Object(x) {
    return x != null && typeof x === 'object';
}
exports.is_Object = is_Object;
function is_Array(arr) {
    return (arr != null &&
        typeof arr === 'object' &&
        typeof arr.length === 'number' &&
        typeof arr.slice === 'function');
}
exports.is_Array = is_Array;
exports.is_ArrayLike = is_Array;
function is_String(x) {
    return typeof x === 'string';
}
exports.is_String = is_String;
function is_notEmptyString(x) {
    return typeof x === 'string' && x !== '';
}
exports.is_notEmptyString = is_notEmptyString;
function is_rawObject(x) {
    return x != null && typeof x === 'object' && (x.constructor === Object || x.constructor == null);
}
exports.is_rawObject = is_rawObject;
function is_Date(x) {
    if (x == null || typeof x !== 'object') {
        return false;
    }
    if (x.getFullYear != null && isNaN(x) === false) {
        return true;
    }
    return false;
}
exports.is_Date = is_Date;
function is_PromiseLike(x) {
    return x != null && typeof x === 'object' && typeof x.then === 'function';
}
exports.is_PromiseLike = is_PromiseLike;
function is_Observable(x) {
    return x != null && typeof x === 'object' && typeof x.subscribe === 'function';
}
exports.is_Observable = is_Observable;
exports.is_DOM = typeof window !== 'undefined' && window.navigator != null;
exports.is_NODE = !exports.is_DOM;
//# sourceMappingURL=is.js.map
//# sourceMappingURL=is.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_is === module.exports) {
        // do nothing if
    } else if (__isObj(_src_is) && __isObj(module.exports)) {
        Object.assign(_src_is, module.exports);
    } else {
        _src_is = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_refs;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_refs != null ? _src_refs : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDocument = exports._document = exports._global = exports._Object_defineProperty = exports._Object_getOwnProp = exports._Object_hasOwnProp = exports._Array_indexOf = exports._Array_splice = exports._Array_slice = void 0;
exports._Array_slice = Array.prototype.slice;
exports._Array_splice = Array.prototype.splice;
exports._Array_indexOf = Array.prototype.indexOf;
exports._Object_hasOwnProp = Object.hasOwnProperty;
exports._Object_getOwnProp = Object.getOwnPropertyDescriptor;
exports._Object_defineProperty = Object.defineProperty;
exports._global = typeof global !== 'undefined'
    ? global
    : window;
exports._document = typeof window !== 'undefined' && window.document != null
    ? window.document
    : null;
function setDocument(doc) {
    exports._document = doc;
}
exports.setDocument = setDocument;
//# sourceMappingURL=refs.js.map
//# sourceMappingURL=refs.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_refs === module.exports) {
        // do nothing if
    } else if (__isObj(_src_refs) && __isObj(module.exports)) {
        Object.assign(_src_refs, module.exports);
    } else {
        _src_refs = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_obj;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_obj != null ? _src_obj : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_extendDescriptorsDefaults = exports.obj_extendDescriptors = exports.obj_clean = exports.obj_defaults = exports.obj_create = exports._Object_create = exports.obj_toFastProps = exports.obj_extendMany = exports.obj_extendPropertiesDefaults = exports.obj_extendProperties = exports.obj_extendDefaults = exports.obj_extend = exports.obj_defineProperty = exports.obj_hasProperty = exports.obj_setProperty = exports.obj_getProperty = exports.obj_copyProperty = void 0;
var is_1 = _src_is;
var refs_1 = _src_refs;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineDescriptor = Object.defineProperty;
var obj_copyProperty = getDescriptor == null
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
exports.obj_copyProperty = obj_copyProperty;
function obj_getProperty(obj_, path) {
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
exports.obj_getProperty = obj_getProperty;
;
function obj_setProperty(obj_, path, val) {
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
exports.obj_setProperty = obj_setProperty;
;
function obj_hasProperty(obj, path) {
    var x = obj_getProperty(obj, path);
    return x !== void 0;
}
exports.obj_hasProperty = obj_hasProperty;
;
function obj_defineProperty(obj, path, dscr) {
    var x = obj, chain = path.split('.'), imax = chain.length - 1, i = -1, key;
    while (++i < imax) {
        key = chain[i];
        if (x[key] == null)
            x[key] = {};
        x = x[key];
    }
    key = chain[imax];
    if (refs_1._Object_defineProperty) {
        if (dscr.writable === void 0)
            dscr.writable = true;
        if (dscr.configurable === void 0)
            dscr.configurable = true;
        if (dscr.enumerable === void 0)
            dscr.enumerable = true;
        (0, refs_1._Object_defineProperty)(x, key, dscr);
        return;
    }
    x[key] = dscr.value === void 0
        ? dscr.value
        : (dscr.get && dscr.get());
}
exports.obj_defineProperty = obj_defineProperty;
;
function obj_extend(a, b) {
    if (b == null)
        return a || {};
    if (a == null)
        return (0, exports.obj_create)(b);
    for (var key in b) {
        a[key] = b[key];
    }
    return a;
}
exports.obj_extend = obj_extend;
;
function obj_extendDefaults(a, b) {
    if (b == null)
        return a || {};
    if (a == null)
        return (0, exports.obj_create)(b);
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
exports.obj_extendDefaults = obj_extendDefaults;
var extendPropertiesFactory = function (overwriteProps) {
    if (refs_1._Object_getOwnProp == null)
        return overwriteProps ? obj_extend : obj_extendDefaults;
    return function (a, b) {
        if (b == null)
            return a || {};
        if (a == null)
            return (0, exports.obj_create)(b);
        var key, descr, ownDescr;
        for (key in b) {
            descr = (0, refs_1._Object_getOwnProp)(b, key);
            if (descr == null)
                continue;
            if (overwriteProps !== true) {
                ownDescr = (0, refs_1._Object_getOwnProp)(a, key);
                if (ownDescr != null) {
                    continue;
                }
            }
            if (descr.hasOwnProperty('value')) {
                a[key] = descr.value;
                continue;
            }
            (0, refs_1._Object_defineProperty)(a, key, descr);
        }
        return a;
    };
};
exports.obj_extendProperties = extendPropertiesFactory(true);
exports.obj_extendPropertiesDefaults = extendPropertiesFactory(false);
function obj_extendMany(a, arg1, arg2, arg3, arg4, arg5, arg6) {
    var imax = arguments.length, i = 1;
    for (; i < imax; i++) {
        a = obj_extend(a, arguments[i]);
    }
    return a;
}
exports.obj_extendMany = obj_extendMany;
;
function obj_toFastProps(obj) {
    /*jshint -W027*/
    function F() { }
    F.prototype = obj;
    new F();
    return;
    eval(obj);
}
exports.obj_toFastProps = obj_toFastProps;
;
exports._Object_create = Object.create || function (x) {
    var Ctor = function () { };
    Ctor.prototype = x;
    return new Ctor;
};
exports.obj_create = exports._Object_create;
function obj_defaults(target, defaults) {
    for (var key in defaults) {
        if (target[key] == null)
            target[key] = defaults[key];
    }
    return target;
}
exports.obj_defaults = obj_defaults;
/**
 * Remove all NULL properties, optionally also all falsy-ies
 */
function obj_clean(json, opts) {
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
    if ((0, is_1.is_ArrayLike)(json)) {
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
    if ((0, is_1.is_Object)(json)) {
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
            if (opts.removeEmptyArrays && (0, is_1.is_ArrayLike)(val) && val.length === 0) {
                delete json[key];
            }
        }
        return json;
    }
    return json;
}
exports.obj_clean = obj_clean;
function isDefault(x, opts) {
    if (x == null) {
        return true;
    }
    if (opts.removeFalsy && (x === '' || x === false)) {
        return true;
    }
    if (opts.removeEmptyArrays && (0, is_1.is_ArrayLike)(x) && x.length === 0) {
        return true;
    }
    return false;
}
var obj_extendDescriptors;
exports.obj_extendDescriptors = obj_extendDescriptors;
var obj_extendDescriptorsDefaults;
exports.obj_extendDescriptorsDefaults = obj_extendDescriptorsDefaults;
(function () {
    if (getDescriptor == null) {
        exports.obj_extendDescriptors = obj_extendDescriptors = obj_extend;
        exports.obj_extendDescriptorsDefaults = obj_extendDescriptorsDefaults = obj_defaults;
        return;
    }
    exports.obj_extendDescriptors = obj_extendDescriptors = function (target, source) {
        return _extendDescriptors(target, source, false);
    };
    exports.obj_extendDescriptorsDefaults = obj_extendDescriptorsDefaults = function (target, source) {
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
//# sourceMappingURL=obj.js.map
//# sourceMappingURL=obj.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_obj === module.exports) {
        // do nothing if
    } else if (__isObj(_src_obj) && __isObj(module.exports)) {
        Object.assign(_src_obj, module.exports);
    } else {
        _src_obj = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class != null ? _src_class : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_createEx = exports.class_create = void 0;
var obj_1 = _src_obj;
var refs_1 = _src_refs;
;
/**
 * create([...Base], Proto)
 * Base: Function | Object
 * Proto: Object {
 *    constructor: ?Function
 *    ...
 */
exports.class_create = createClassFactory(obj_1.obj_extendDefaults);
// with property accessor functions support
exports.class_createEx = createClassFactory(obj_1.obj_extendPropertiesDefaults);
function createClassFactory(extendDefaultsFn) {
    return function (a, b, c, d, e, f, g, h) {
        var args = refs_1._Array_slice.call(arguments), Proto = args.pop();
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
        var args = refs_1._Array_slice.call(arguments);
        var x = fnA.apply(this, args);
        if (x !== void 0)
            return x;
        return fnB.apply(this, args);
    };
}
//# sourceMappingURL=class.js.map
//# sourceMappingURL=class.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class) && __isObj(module.exports)) {
        Object.assign(_src_class, module.exports);
    } else {
        _src_class = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_arr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_arr != null ? _src_arr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_distinct = exports.arr_pushMany = exports.arr_contains = exports.arr_indexOf = exports.arr_each = exports.arr_remove = void 0;
var obj_1 = _src_obj;
function arr_remove(array, x) {
    var i = array.indexOf(x);
    if (i === -1)
        return false;
    array.splice(i, 1);
    return true;
}
exports.arr_remove = arr_remove;
;
function arr_each(arr, fn, ctx) {
    arr.forEach(fn, ctx);
}
exports.arr_each = arr_each;
;
function arr_indexOf(arr, x) {
    return arr.indexOf(x);
}
exports.arr_indexOf = arr_indexOf;
;
function arr_contains(arr, x) {
    return arr.indexOf(x) !== -1;
}
exports.arr_contains = arr_contains;
;
function arr_pushMany(arr, arrSource) {
    if (arrSource == null || arr == null || arr === arrSource)
        return;
    var il = arr.length, jl = arrSource.length, j = -1;
    while (++j < jl) {
        arr[il + j] = arrSource[j];
    }
}
exports.arr_pushMany = arr_pushMany;
;
function arr_distinct(arr, compareFn) {
    var out = [];
    var hash = compareFn == null ? (0, obj_1.obj_create)(null) : null;
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
exports.arr_distinct = arr_distinct;
//# sourceMappingURL=arr.js.map
//# sourceMappingURL=arr.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_arr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_arr) && __isObj(module.exports)) {
        Object.assign(_src_arr, module.exports);
    } else {
        _src_arr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_str;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_str != null ? _src_str : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str_dedent = exports.str_format = void 0;
var is_1 = _src_is;
function str_format(str_, a, b, c, d) {
    var imax = arguments.length;
    var i = 0;
    while (++i < imax) {
        var x = arguments[i];
        if ((0, is_1.is_Object)(x) && x.toJSON) {
            x = x.toJSON();
        }
        str_ = str_.replace(rgxNum(i - 1), String(x));
    }
    return str_;
}
exports.str_format = str_format;
;
function str_dedent(str) {
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
exports.str_dedent = str_dedent;
;
var rgxNum;
(function () {
    rgxNum = function (num) {
        return cache_[num] || (cache_[num] = new RegExp('\\{' + num + '\\}', 'g'));
    };
    var cache_ = {};
}());
//# sourceMappingURL=str.js.map
//# sourceMappingURL=str.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_str === module.exports) {
        // do nothing if
    } else if (__isObj(_src_str) && __isObj(module.exports)) {
        Object.assign(_src_str, module.exports);
    } else {
        _src_str = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_error;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_error != null ? _src_error : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error_formatCursor = exports.error_cursor = exports.error_formatSource = exports.error_createClass = void 0;
var obj_1 = _src_obj;
var str_1 = _src_str;
function error_createClass(name, Proto, stackSliceFrom) {
    var Ctor = _createCtor(Proto, stackSliceFrom);
    Ctor.prototype = new Error;
    Proto.constructor = Error;
    Proto.name = name;
    (0, obj_1.obj_extend)(Ctor.prototype, Proto);
    return Ctor;
}
exports.error_createClass = error_createClass;
;
function error_formatSource(source, index, filename) {
    var cursor = error_cursor(source, index), lines = cursor[0], lineNum = cursor[1], rowNum = cursor[2], str = '';
    if (filename != null) {
        str += (0, str_1.str_format)(' at {0}:{1}:{2}\n', filename, lineNum, rowNum);
    }
    return str + error_formatCursor(lines, lineNum, rowNum);
}
exports.error_formatSource = error_formatSource;
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
exports.error_cursor = error_cursor;
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
exports.error_formatCursor = error_formatCursor;
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
        (0, obj_1.obj_defineProperty)(this, 'stack', {
            value: _prepairStack(stackFrom || 3)
        });
        (0, obj_1.obj_defineProperty)(this, 'message', {
            value: str_1.str_format.apply(this, arguments)
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
//# sourceMappingURL=error.js.map
//# sourceMappingURL=error.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_error === module.exports) {
        // do nothing if
    } else if (__isObj(_src_error) && __isObj(module.exports)) {
        Object.assign(_src_error, module.exports);
    } else {
        _src_error = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_fn;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_fn != null ? _src_fn : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn_createByPattern = exports.fn_doNothing = exports.fn_apply = exports.fn_proxy = void 0;
function fn_proxy(fn, ctx) {
    return function () {
        var imax = arguments.length, args = new Array(imax), i = 0;
        for (; i < imax; i++)
            args[i] = arguments[i];
        return fn_apply(fn, ctx, args);
    };
}
exports.fn_proxy = fn_proxy;
;
function fn_apply(fn, ctx, args) {
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
exports.fn_apply = fn_apply;
;
function fn_doNothing() {
    return false;
}
exports.fn_doNothing = fn_doNothing;
;
function fn_createByPattern(definitions, ctx) {
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
exports.fn_createByPattern = fn_createByPattern;
;
//# sourceMappingURL=fn.js.map
//# sourceMappingURL=fn.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_fn === module.exports) {
        // do nothing if
    } else if (__isObj(_src_fn) && __isObj(module.exports)) {
        Object.assign(_src_fn, module.exports);
    } else {
        _src_fn = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Dfr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Dfr != null ? _src_class_Dfr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_Dfr = void 0;
var fn_1 = _src_fn;
var is_1 = _src_is;
var refs_1 = _src_refs;
var class_Dfr = /** @class */ (function () {
    function class_Dfr() {
        this._isAsync = true;
        this._done = null;
        this._fail = null;
        this._always = null;
        this._resolved = null;
        this._rejected = null;
    }
    Object.defineProperty(class_Dfr.prototype, Symbol.toStringTag, {
        get: function () {
            return 'Promise';
        },
        enumerable: false,
        configurable: true
    });
    class_Dfr.prototype.defer = function () {
        this._rejected = null;
        this._resolved = null;
        return this;
    };
    class_Dfr.prototype.isResolved = function () {
        return this._resolved != null;
    };
    class_Dfr.prototype.isRejected = function () {
        return this._rejected != null;
    };
    class_Dfr.prototype.isBusy = function () {
        return this._resolved == null && this._rejected == null;
    };
    class_Dfr.prototype.resolve = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var done = this._done, always = this._always;
        this._resolved = arguments;
        dfr_clearListeners(this);
        arr_callOnce(done, this, arguments);
        arr_callOnce(always, this, [this]);
        return this;
    };
    class_Dfr.prototype.reject = function (error) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fail = this._fail, always = this._always;
        this._rejected = arguments;
        dfr_clearListeners(this);
        arr_callOnce(fail, this, arguments);
        arr_callOnce(always, this, [this]);
        return this;
    };
    class_Dfr.prototype.then = function (filterSuccess, filterError) {
        var dfr = new class_Dfr();
        var done_ = filterSuccess, fail_ = filterError;
        this
            .done(delegate(dfr, 'resolve', done_))
            .fail(delegate(dfr, 'reject', fail_));
        return dfr;
    };
    class_Dfr.prototype.done = function (callback) {
        if (this._rejected != null) {
            return this;
        }
        return dfr_bind(this, this._resolved, this._done || (this._done = []), callback);
    };
    class_Dfr.prototype.fail = function (callback) {
        if (this._resolved != null) {
            return this;
        }
        return dfr_bind(this, this._rejected, this._fail || (this._fail = []), callback);
    };
    class_Dfr.prototype.always = function (callback) {
        return dfr_bind(this, this._rejected || this._resolved, this._always || (this._always = []), callback);
    };
    class_Dfr.prototype.pipe = function (mix /* ..methods */) {
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
        return this;
    };
    class_Dfr.prototype.pipeCallback = function () {
        var self = this;
        return function (error) {
            if (error != null) {
                self.reject(error);
                return;
            }
            var args = refs_1._Array_slice.call(arguments, 1);
            (0, fn_1.fn_apply)(self.resolve, self, args);
        };
    };
    class_Dfr.prototype.resolveDelegate = function () {
        return (0, fn_1.fn_proxy)(this.resolve, this);
    };
    class_Dfr.prototype.rejectDelegate = function () {
        return (0, fn_1.fn_proxy)(this.reject, this);
    };
    class_Dfr.prototype.catch = function (cb) {
        return this.fail(cb);
    };
    class_Dfr.prototype.finally = function (cb) {
        return this.always(cb);
    };
    class_Dfr.resolve = function (a, b, c) {
        var dfr = new class_Dfr();
        return dfr.resolve.apply(dfr, refs_1._Array_slice.call(arguments));
    };
    class_Dfr.reject = function (error) {
        var dfr = new class_Dfr();
        return dfr.reject(error);
    };
    class_Dfr.run = function (fn, ctx) {
        var dfr = new class_Dfr();
        if (ctx == null)
            ctx = dfr;
        fn.call(ctx, (0, fn_1.fn_proxy)(dfr.resolve, ctx), (0, fn_1.fn_proxy)(dfr.reject, dfr), dfr);
        return dfr;
    };
    class_Dfr.all = function (promises) {
        var dfr = new class_Dfr, arr = new Array(promises.length), wait = promises.length, error = null;
        if (wait === 0) {
            return dfr.resolve(arr);
        }
        function tick(index) {
            if (error != null) {
                return;
            }
            var args = refs_1._Array_slice.call(arguments, 1);
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
    };
    return class_Dfr;
}());
exports.class_Dfr = class_Dfr;
;
// PRIVATE
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
function dfr_bind(dfr, arguments_, listeners, callback) {
    if (callback == null)
        return dfr;
    if (arguments_ != null)
        (0, fn_1.fn_apply)(callback, dfr, arguments_);
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
            (0, fn_1.fn_apply)(fn, ctx, args);
    }
    arr.length = 0;
}
function isDeferred(x) {
    return x != null
        && typeof x === 'object'
        && (0, is_1.is_Function)(x.then);
}
//# sourceMappingURL=Dfr.js.map
//# sourceMappingURL=Dfr.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Dfr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Dfr) && __isObj(module.exports)) {
        Object.assign(_src_class_Dfr, module.exports);
    } else {
        _src_class_Dfr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Uri;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Uri != null ? _src_class_Uri : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_Uri = void 0;
var class_Uri = /** @class */ (function () {
    function class_Uri(uri) {
        this.protocol = null;
        this.host = null;
        this.path = null;
        this.file = null;
        this.extension = null;
        this.search = null;
        this.value = null;
        if (uri == null) {
            return this;
        }
        if (util_isUri(uri)) {
            return util_clone(uri);
        }
        uri = normalize_path(uri);
        this.value = uri;
        parse_protocol(this);
        parse_host(this);
        parse_search(this);
        parse_file(this);
        // normilize path - "/some/path"
        this.path = normalize_pathsSlashes(this.value);
        return this;
    }
    class_Uri.prototype.cdUp = function () {
        var path = this.path;
        if (path == null || path === '' || path === '/') {
            this.path = '';
            return this;
        }
        this.path = path.replace(/\/?[^\/]+\/?$/i, '');
        return this;
    };
    /**
     * '/path' - relative to host
     * '../path', 'path','./path' - relative to current path
     */
    class_Uri.prototype.combine = function (mix) {
        var path;
        if (util_isUri(mix)) {
            if (mix.protocol || mix.host) {
                return util_clone(mix);
            }
            path = mix.toString();
        }
        else {
            path = mix;
        }
        if (path == null || path === '') {
            return util_clone(this);
        }
        var uri = util_clone(this);
        uri.value = path;
        parse_search(uri);
        parse_file(uri);
        if (uri.value === '') {
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
            if (uri.path === '') {
                break;
            }
        }
        uri.path = normalize_pathsSlashes(util_combinePathes(uri.path, path));
        return uri;
    };
    class_Uri.prototype.toString = function () {
        var protocol = this.protocol ? this.protocol + '://' : '';
        var path = util_combinePathes(this.host, this.path, this.file) + (this.search || '');
        var str = protocol + path;
        if (!(this.file || this.search) && this.path) {
            str += '/';
        }
        return str;
    };
    class_Uri.prototype.toPathAndQuery = function () {
        return util_combinePathes(this.path, this.file) + (this.search || '');
    };
    /**
     * @return Current Uri Path{String} that is relative to @arg1 Uri
     */
    class_Uri.prototype.toRelativeString = function (uri) {
        if (typeof uri === 'string') {
            uri = new class_Uri(uri);
        }
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
    };
    class_Uri.prototype.toLocalFile = function () {
        var path = util_combinePathes(this.host, this.path, this.file);
        return util_win32Path(path);
    };
    class_Uri.prototype.toLocalDir = function () {
        var path = util_combinePathes(this.host, this.path, '/');
        return util_win32Path(path);
    };
    class_Uri.prototype.toDir = function () {
        var str = this.protocol ? this.protocol + '://' : '';
        return str + util_combinePathes(this.host, this.path, '/');
    };
    class_Uri.prototype.isRelative = function () {
        return !(this.protocol || this.host);
    };
    class_Uri.prototype.getName = function () {
        return this.file.replace('.' + this.extension, '');
    };
    class_Uri.combinePathes = util_combinePathes;
    class_Uri.combine = util_combinePathes;
    return class_Uri;
}());
exports.class_Uri = class_Uri;
;
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
function normalize_path(str) {
    str = str
        .replace(/\\/g, '/')
        .replace(/^\.\//, '');
    var double = /\/{2,}/g;
    do {
        var match = double.exec(str);
        if (match == null) {
            break;
        }
        if (match.index === 0 || str[match.index - 1] === ':') {
            continue;
        }
        str = str.substring(0, match.index) + '/' + str.substring(match.index + match[0].length + 1);
    } while (true);
    return str;
}
function util_win32Path(path) {
    if (rgx_win32Drive.test(path) && path[0] === '/') {
        return path.substring(1);
    }
    return path;
}
function parse_protocol(uri) {
    var match = rgx_protocol.exec(uri.value);
    if (match == null) {
        return;
    }
    uri.protocol = match[1];
    uri.value = uri.value.substring(match[0].length);
}
function parse_host(uri) {
    var match = rgx_win32Drive.exec(uri.value);
    if (match) {
        uri.protocol = 'file';
        uri.host = match[1];
        uri.value = uri.value.substring(uri.host.length);
    }
    if (uri.protocol == null || uri.protocol === 'file') {
        return;
    }
    var pathStartIdx = uri.value.indexOf('/', 2);
    uri.host = pathStartIdx !== -1
        ? uri.value.substring(0, pathStartIdx)
        : uri.value;
    uri.value = uri.value.replace(uri.host, '');
}
function parse_search(uri) {
    var question = uri.value.indexOf('?');
    if (question === -1) {
        return;
    }
    uri.search = uri.value.substring(question);
    uri.value = uri.value.substring(0, question);
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
//# sourceMappingURL=Uri.js.map
//# sourceMappingURL=Uri.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Uri === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Uri) && __isObj(module.exports)) {
        Object.assign(_src_class_Uri, module.exports);
    } else {
        _src_class_Uri = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_EventEmitter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_EventEmitter != null ? _src_class_EventEmitter : {};
    var module = { exports: exports };

    "use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.class_EventEmitter = void 0;
var fn_1 = _src_fn;
var class_EventEmitter = /** @class */ (function () {
    function class_EventEmitter() {
        this._listeners = {};
    }
    class_EventEmitter.prototype.on = function (event, fn) {
        if (fn != null) {
            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
        }
        return this;
    };
    class_EventEmitter.prototype.once = function (event, fn) {
        if (fn != null) {
            fn._once = true;
            (this._listeners[event] || (this._listeners[event] = [])).push(fn);
        }
        return this;
    };
    /**
     * Returns a function, which when called - triggers the event with the arguments passed to that function
     */
    class_EventEmitter.prototype.pipe = function (event) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.emit.apply(_this, __spreadArray([event], args, false));
        };
    };
    class_EventEmitter.prototype.emit = function (event) {
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
            (0, fn_1.fn_apply)(fn, this, args);
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
    };
    class_EventEmitter.prototype.trigger = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.emit.apply(this, __spreadArray([event], args, false));
    };
    class_EventEmitter.prototype.off = function (event, fn) {
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
    };
    return class_EventEmitter;
}());
exports.class_EventEmitter = class_EventEmitter;
;
//# sourceMappingURL=EventEmitter.js.map
//# sourceMappingURL=EventEmitter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_EventEmitter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_EventEmitter) && __isObj(module.exports)) {
        Object.assign(_src_class_EventEmitter, module.exports);
    } else {
        _src_class_EventEmitter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_proto;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_proto != null ? _src_proto : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto_getKeys = exports.class_extendProtoObjects = exports.class_inherit = void 0;
var is_1 = _src_is;
var fn_1 = _src_fn;
var arr_1 = _src_arr;
var obj_1 = _src_obj;
var PROTO = "__proto__";
var _getProtoOf = Object.getPrototypeOf;
var _toString = Object.prototype.toString;
var _isArguments = function (args) {
    return _toString.call(args) === "[object Arguments]";
};
var class_inherit = PROTO in Object.prototype ? inherit : inherit_protoLess;
exports.class_inherit = class_inherit;
function class_extendProtoObjects(proto, _base, _extends) {
    var key, protoValue;
    for (key in proto) {
        protoValue = proto[key];
        if (!(0, is_1.is_rawObject)(protoValue))
            continue;
        if (_base != null) {
            if ((0, is_1.is_rawObject)(_base.prototype[key]))
                (0, obj_1.obj_defaults)(protoValue, _base.prototype[key]);
        }
        if (_extends != null) {
            (0, arr_1.arr_each)(_extends, proto_extendDefaultsDelegate(protoValue, key));
        }
    }
}
exports.class_extendProtoObjects = class_extendProtoObjects;
;
// PRIVATE
function proto_extendDefaultsDelegate(target, key) {
    return function (source) {
        var proto = proto_getProto(source), val = proto[key];
        if ((0, is_1.is_rawObject)(val)) {
            (0, obj_1.obj_defaults)(target, val);
        }
    };
}
function proto_extend(proto, source) {
    if (source == null)
        return;
    if (typeof proto === "function") {
        proto = proto.prototype;
    }
    if (typeof source === "function") {
        source = source.prototype;
    }
    if (_getProtoOf != null) {
        /** ES6 Classes: methods are not enumarable, which is needed in `inherit_` method: so convert prototype to hash */
        source = fillProtoHash(source, (0, obj_1.obj_create)(null));
    }
    for (var key in source) {
        if (key === "constructor") {
            continue;
        }
        var val = source[key];
        if (val != null) {
            proto[key] = val;
        }
    }
}
function proto_getKeys(mix) {
    var keys = null;
    if (_getProtoOf == null) {
        keys = [];
        for (var key in mix) {
            keys.push(key);
        }
        return keys;
    }
    var cursor = mix;
    var cursorEnd = null;
    if (typeof mix === 'function') {
        cursorEnd = Function.prototype;
    }
    else {
        cursorEnd = Object.prototype;
    }
    while (cursor != cursorEnd) {
        var names = Object.getOwnPropertyNames(cursor);
        keys = keys == null
            ? names
            : keys.concat(names);
        cursor = Object.getPrototypeOf(cursor);
    }
    return keys;
}
exports.proto_getKeys = proto_getKeys;
function proto_override(super_, fn) {
    var proxy;
    if (super_) {
        proxy = function (mix) {
            var args = arguments.length === 1 && _isArguments(mix) ? mix : arguments;
            return (0, fn_1.fn_apply)(super_, this, args);
        };
    }
    else {
        proxy = fn_1.fn_doNothing;
    }
    return function () {
        this["super"] = proxy;
        return (0, fn_1.fn_apply)(fn, this, arguments);
    };
}
function inherit(_class, _base, _extends, original) {
    var prototype = original;
    var protoCursor = original;
    prototype.constructor = _class.prototype.constructor;
    if (_extends != null) {
        protoCursor[PROTO] = {};
        (0, arr_1.arr_each)(_extends, function (x) {
            proto_extend(protoCursor[PROTO], x);
        });
        protoCursor = protoCursor[PROTO];
    }
    if (_base != null)
        protoCursor[PROTO] = _base.prototype;
    _class.prototype = prototype;
}
function inherit_Object_create(_class, _base, _extends, original, _overrides, defaults) {
    if (_base != null) {
        _class.prototype = Object.create(_base.prototype);
        (0, obj_1.obj_extendDescriptors)(_class.prototype, original);
    }
    else {
        _class.prototype = Object.create(original);
    }
    _class.prototype.constructor = _class;
    if (_extends != null) {
        (0, arr_1.arr_each)(_extends, function (x) {
            (0, obj_1.obj_defaults)(_class.prototype, x);
        });
    }
    var proto = _class.prototype;
    (0, obj_1.obj_defaults)(proto, defaults);
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
        (0, arr_1.arr_each)(_extends, function (x) {
            delete x.constructor;
            proto_extend(_class, x);
        });
    }
    proto_extend(_class, original);
}
function proto_getProto(mix) {
    return (0, is_1.is_Function)(mix) ? mix.prototype : mix;
}
function fillProtoHash(proto, target) {
    var keys = Object.getOwnPropertyNames(proto);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (target[key] != null) {
            continue;
        }
        target[key] = proto[key];
    }
    var next = Object.getPrototypeOf(proto);
    if (next == null || next === Object.prototype) {
        return target;
    }
    return fillProtoHash(next, target);
}
//# sourceMappingURL=proto.js.map
//# sourceMappingURL=proto.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_proto === module.exports) {
        // do nothing if
    } else if (__isObj(_src_proto) && __isObj(module.exports)) {
        Object.assign(_src_proto, module.exports);
    } else {
        _src_proto = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_mixin;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_mixin != null ? _src_mixin : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixin = void 0;
var obj_1 = _src_obj;
var is_1 = _src_is;
var fn_1 = _src_fn;
var proto_1 = _src_proto;
function mixin(mix1, mix2, mix3, mix4, mix5) {
    return mix(mix1, mix2, mix3, mix4, mix5);
}
exports.mixin = mixin;
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
                (0, fn_1.fn_apply)(x, this, args);
            }
        }
    };
    if ((0, is_1.is_Function)(_base) === false) {
        _extends.unshift(_base);
        _base = null;
    }
    mixStatics(_class, mixins);
    var proto = {};
    (0, proto_1.class_extendProtoObjects)(proto, _base, _extends);
    (0, proto_1.class_inherit)(_class, _base, _extends, proto);
    return _class;
}
function mixStatics(Ctor, mixins) {
    for (var i = 0; i < mixins.length; i++) {
        var Fn = mixins[i];
        if (typeof Fn !== 'function') {
            continue;
        }
        var keys = (0, proto_1.proto_getKeys)(Fn);
        for (var j = 0; j < keys.length; j++) {
            var key = keys[j];
            if (key in Ctor === false) {
                (0, obj_1.obj_copyProperty)(Ctor, Fn, key);
            }
        }
    }
}
var ensureCallableSingle;
var ensureCallable;
(function () {
    ensureCallable = function (arr) {
        var out = [], i = arr.length;
        while (--i > -1)
            out[i] = ensureCallableSingle(arr[i]);
        return out;
    };
    ensureCallableSingle = function (mix) {
        if ((0, is_1.is_Function)(mix) === false) {
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
        (0, obj_1.obj_extend)(self, x);
    }
}());
//# sourceMappingURL=mixin.js.map
//# sourceMappingURL=mixin.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_mixin === module.exports) {
        // do nothing if
    } else if (__isObj(_src_mixin) && __isObj(module.exports)) {
        Object.assign(_src_mixin, module.exports);
    } else {
        _src_mixin = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_promisify;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_promisify != null ? _src_promisify : {};
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = void 0;
var promisify;
(function (promisify) {
    function fromEvent(ctx, event, handlerFn, options) {
        return new Promise(function (resolve, reject) {
            var _this = this;
            var cb = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var timeout, completed, ms, r, _a, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                completed = false;
                                ms = options === null || options === void 0 ? void 0 : options.timeout;
                                if (ms) {
                                    timeout = setTimeout(function () {
                                        if (completed) {
                                            return;
                                        }
                                        completed = true;
                                        reject(new Error("Timeouted, event was not called within ".concat(ms, "ms")));
                                    }, ms);
                                }
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 5, 6, 7]);
                                if (!(handlerFn == null)) return [3 /*break*/, 2];
                                _a = args[0];
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, handlerFn.apply(void 0, args)];
                            case 3:
                                _a = _b.sent();
                                _b.label = 4;
                            case 4:
                                r = _a;
                                if (completed === false) {
                                    completed = true;
                                    resolve(r);
                                }
                                return [3 /*break*/, 7];
                            case 5:
                                error_1 = _b.sent();
                                if (completed === false) {
                                    completed = true;
                                    reject(error_1);
                                }
                                return [3 /*break*/, 7];
                            case 6:
                                clearTimeout(timeout);
                                return [7 /*endfinally*/];
                            case 7: return [2 /*return*/];
                        }
                    });
                });
            };
            ctx.once(event, cb);
        });
    }
    promisify.fromEvent = fromEvent;
})(promisify = exports.promisify || (exports.promisify = {}));
//# sourceMappingURL=promisify.js.map
//# sourceMappingURL=promisify.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_promisify === module.exports) {
        // do nothing if
    } else if (__isObj(_src_promisify) && __isObj(module.exports)) {
        Object.assign(_src_promisify, module.exports);
    } else {
        _src_promisify = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = exports.mixin = exports.str_dedent = exports.str_format = exports.is_DOM = exports.is_NODE = exports.is_Date = exports.is_rawObject = exports.is_notEmptyString = exports.is_Object = exports.is_String = exports.is_ArrayLike = exports.is_Array = exports.is_Function = exports.obj_defaults = exports.obj_clean = exports.obj_defineProperty = exports.obj_create = exports.obj_extendPropertiesDefaults = exports.obj_extendProperties = exports.obj_extendMany = exports.obj_extendDefaults = exports.obj_extend = exports.obj_hasProperty = exports.obj_setProperty = exports.obj_getProperty = exports.fn_doNothing = exports.fn_createByPattern = exports.error_createClass = exports.arr_pushMany = exports.arr_contains = exports.arr_indexOf = exports.arr_each = exports.arr_remove = exports.class_createEx = exports.class_create = exports.class_Uri = exports.class_EventEmitter = exports.class_Dfr = void 0;
var class_1 = _src_class;
Object.defineProperty(exports, "class_create", { enumerable: true, get: function () { return class_1.class_create; } });
Object.defineProperty(exports, "class_createEx", { enumerable: true, get: function () { return class_1.class_createEx; } });
var arr_1 = _src_arr;
Object.defineProperty(exports, "arr_remove", { enumerable: true, get: function () { return arr_1.arr_remove; } });
Object.defineProperty(exports, "arr_each", { enumerable: true, get: function () { return arr_1.arr_each; } });
Object.defineProperty(exports, "arr_indexOf", { enumerable: true, get: function () { return arr_1.arr_indexOf; } });
Object.defineProperty(exports, "arr_contains", { enumerable: true, get: function () { return arr_1.arr_contains; } });
Object.defineProperty(exports, "arr_pushMany", { enumerable: true, get: function () { return arr_1.arr_pushMany; } });
var error_1 = _src_error;
Object.defineProperty(exports, "error_createClass", { enumerable: true, get: function () { return error_1.error_createClass; } });
var fn_1 = _src_fn;
Object.defineProperty(exports, "fn_createByPattern", { enumerable: true, get: function () { return fn_1.fn_createByPattern; } });
Object.defineProperty(exports, "fn_doNothing", { enumerable: true, get: function () { return fn_1.fn_doNothing; } });
var obj_1 = _src_obj;
Object.defineProperty(exports, "obj_getProperty", { enumerable: true, get: function () { return obj_1.obj_getProperty; } });
Object.defineProperty(exports, "obj_setProperty", { enumerable: true, get: function () { return obj_1.obj_setProperty; } });
Object.defineProperty(exports, "obj_hasProperty", { enumerable: true, get: function () { return obj_1.obj_hasProperty; } });
Object.defineProperty(exports, "obj_extend", { enumerable: true, get: function () { return obj_1.obj_extend; } });
Object.defineProperty(exports, "obj_extendDefaults", { enumerable: true, get: function () { return obj_1.obj_extendDefaults; } });
Object.defineProperty(exports, "obj_extendMany", { enumerable: true, get: function () { return obj_1.obj_extendMany; } });
Object.defineProperty(exports, "obj_extendProperties", { enumerable: true, get: function () { return obj_1.obj_extendProperties; } });
Object.defineProperty(exports, "obj_extendPropertiesDefaults", { enumerable: true, get: function () { return obj_1.obj_extendPropertiesDefaults; } });
Object.defineProperty(exports, "obj_create", { enumerable: true, get: function () { return obj_1.obj_create; } });
Object.defineProperty(exports, "obj_defineProperty", { enumerable: true, get: function () { return obj_1.obj_defineProperty; } });
Object.defineProperty(exports, "obj_clean", { enumerable: true, get: function () { return obj_1.obj_clean; } });
Object.defineProperty(exports, "obj_defaults", { enumerable: true, get: function () { return obj_1.obj_defaults; } });
var is_1 = _src_is;
Object.defineProperty(exports, "is_Function", { enumerable: true, get: function () { return is_1.is_Function; } });
Object.defineProperty(exports, "is_Array", { enumerable: true, get: function () { return is_1.is_Array; } });
Object.defineProperty(exports, "is_ArrayLike", { enumerable: true, get: function () { return is_1.is_ArrayLike; } });
Object.defineProperty(exports, "is_String", { enumerable: true, get: function () { return is_1.is_String; } });
Object.defineProperty(exports, "is_Object", { enumerable: true, get: function () { return is_1.is_Object; } });
Object.defineProperty(exports, "is_notEmptyString", { enumerable: true, get: function () { return is_1.is_notEmptyString; } });
Object.defineProperty(exports, "is_rawObject", { enumerable: true, get: function () { return is_1.is_rawObject; } });
Object.defineProperty(exports, "is_Date", { enumerable: true, get: function () { return is_1.is_Date; } });
Object.defineProperty(exports, "is_NODE", { enumerable: true, get: function () { return is_1.is_NODE; } });
Object.defineProperty(exports, "is_DOM", { enumerable: true, get: function () { return is_1.is_DOM; } });
var str_1 = _src_str;
Object.defineProperty(exports, "str_format", { enumerable: true, get: function () { return str_1.str_format; } });
Object.defineProperty(exports, "str_dedent", { enumerable: true, get: function () { return str_1.str_dedent; } });
var Dfr_1 = _src_class_Dfr;
Object.defineProperty(exports, "class_Dfr", { enumerable: true, get: function () { return Dfr_1.class_Dfr; } });
var Uri_1 = _src_class_Uri;
Object.defineProperty(exports, "class_Uri", { enumerable: true, get: function () { return Uri_1.class_Uri; } });
var EventEmitter_1 = _src_class_EventEmitter;
Object.defineProperty(exports, "class_EventEmitter", { enumerable: true, get: function () { return EventEmitter_1.class_EventEmitter; } });
var mixin_1 = _src_mixin;
Object.defineProperty(exports, "mixin", { enumerable: true, get: function () { return mixin_1.mixin; } });
var promisify_1 = _src_promisify;
Object.defineProperty(exports, "promisify", { enumerable: true, get: function () { return promisify_1.promisify; } });
//# sourceMappingURL=export-lib.js.map
//# sourceMappingURL=export-lib.ts.map

}));

// end:source ./UMD.js
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_node_modules_atma_utils_lib_umd_utils === module.exports) {
        // do nothing if
    } else if (__isObj(_node_modules_atma_utils_lib_umd_utils) && __isObj(module.exports)) {
        Object.assign(_node_modules_atma_utils_lib_umd_utils, module.exports);
    } else {
        _node_modules_atma_utils_lib_umd_utils = module.exports;
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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var class_Await = /** @class */ (function () {
    function class_Await() {
        this.promise = new atma_utils_1.class_Dfr;
        this.error = null;
        this.completed = false;
        this.wait = 0;
        this.promise.resolve();
    }
    class_Await.prototype.delegate = function (opts) {
        var _this = this;
        this.completed = false;
        this.promise.defer();
        this.wait++;
        return function (error) {
            if (_this.completed) {
                return;
            }
            if ((opts === null || opts === void 0 ? void 0 : opts.errorable) !== false && error) {
                _this.completed = true;
                _this.promise.reject(error);
                return;
            }
            if (error) {
                console.log(error.message);
            }
            if (--_this.wait < 1) {
                _this.completed = true;
                _this.promise.resolve();
            }
        };
    };
    class_Await.prototype.always = function (fn) {
        this.promise.then(fn, fn);
        return this;
    };
    return class_Await;
}());
exports.class_Await = class_Await;
;

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
function log_error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift('<appcfg:error>');
    console.error.apply(console, args);
}
exports.log_error = log_error;
;
function log_warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.unshift('<appcfg:warn>');
    console.warn.apply(console, args);
}
exports.log_warn = log_warn;
;
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var log_1 = _src_util_log;
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
    for (var key in defaults) {
        if (target[key] == null)
            target[key] = defaults[key];
    }
    return target;
}
exports.obj_defaults = obj_defaults;
;
function obj_extend(target, source) {
    for (var key in source) {
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
        for (var i = 0, x = void 0, imax = source.length; i < imax; i++) {
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
    for (var key in source) {
        var val = source[key];
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
    var current = (0, atma_utils_1.obj_getProperty)(obj, property);
    if (current == null) {
        var val = defaultVal == null ? {} : defaultVal;
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
        var c0 = str.charCodeAt(0);
        var c1 = str.charCodeAt(1);
        var has = false;
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
        var val = (0, atma_utils_1.obj_getProperty)(root, str);
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
    var Ctor = obj.constructor, clone;
    if (Array === Ctor) {
        clone = [];
        var i = -1;
        var imax = obj.length;
        while (++i < imax) {
            clone[i] = obj_clone(obj[i]);
        }
        return clone;
    }
    if (Object === Ctor || null == Ctor) {
        clone = Object.create(null);
        for (var key in obj) {
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
    var val, r;
    if ((0, atma_utils_1.is_Array)(obj)) {
        var arr = obj;
        for (var i = 0; i < arr.length; i++) {
            visit(visitorFn, arr[i], i, arr);
        }
        return;
    }
    for (var key in obj) {
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
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var object_1 = _src_util_object;
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
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var Await_1 = _src_util_Await;
var cfg_1 = _src_util_cfg;
var log_1 = _src_util_log;
exports.Handlers = {};
var Sources = /** @class */ (function () {
    function Sources() {
        this.array = [];
    }
    Sources.prototype.add = function (mix) {
        var _this = this;
        if (Array.isArray(mix)) {
            mix.forEach(function (x) { return _this.add(x); });
            return;
        }
        if (mix instanceof Sources) {
            this.add(mix.array);
            return;
        }
        this.array.push(mix);
    };
    Sources.prototype.read = function (config) {
        var sources = this.array;
        for (var i = 0; i < sources.length; i++) {
            var source = sources[i];
            if (source.config) {
                Object.assign(config, source.config);
            }
        }
    };
    Sources.prototype.loadSync = function (rootConfig) {
        var _a, _b;
        var sources = this.array;
        var i = -1;
        var imax = sources.length;
        while (++i < imax) {
            var source = sources[i];
            var before = (_a = source.data) === null || _a === void 0 ? void 0 : _a.beforeRead;
            var after = (_b = source.data) === null || _b === void 0 ? void 0 : _b.afterRead;
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
    };
    Sources.prototype.load = function (rootConfig, i) {
        var _this = this;
        var _a, _b, _c;
        if (i === void 0) { i = -1; }
        if (this.promise == null) {
            this.promise = new atma_utils_1.class_Dfr;
        }
        var self = this;
        var sources = this.array;
        var imax = sources.length;
        var count = 0;
        var $awaits = new Await_1.class_Await();
        var _loop_1 = function () {
            var source = sources[i];
            if (++count > 1) {
                if (source.data.sync) {
                    $awaits.always(resume);
                    return "break";
                }
            }
            var before = (_a = source.data) === null || _a === void 0 ? void 0 : _a.beforeRead;
            var after = (_b = source.data) === null || _b === void 0 ? void 0 : _b.afterRead;
            if (before) {
                before(source, rootConfig);
            }
            var onAlways = $awaits.delegate({ errorable: true });
            var onComplete = afterDelegate(after, source, rootConfig);
            // Backward-compat in-case the source itself is deferable
            var promise = (_c = source.read(rootConfig)) !== null && _c !== void 0 ? _c : source;
            promise.then(function (res) {
                onComplete();
                onAlways(null);
            }, function (err) {
                onAlways(err);
            });
        };
        while (++i < imax) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        function resume() {
            self.load(rootConfig, i - 1);
        }
        if (i > imax - 1) {
            $awaits.always(function (error) {
                if (error && error instanceof Error) {
                    _this.promise.reject(error);
                    return;
                }
                _this.promise.resolve(_this);
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
    };
    Sources.prototype.toArray = function () {
        return this.array;
    };
    return Sources;
}());
exports.Sources = Sources;
;
exports.SourceFactory = {
    create: function (arr) {
        if (typeof arr === 'string') {
            // file/directory/glob source
            arr = [{ path: arr }];
        }
        if (Array.isArray(arr) === false) {
            // single source
            arr = [arr];
        }
        var imax = arr.length;
        var i = -1;
        var sources = new Sources;
        outer: while (++i < imax) {
            var data = arr[i];
            if (data == null) {
                continue;
            }
            for (var name in exports.Handlers) {
                var Handler = exports.Handlers[name];
                if (Handler.canHandle(data)) {
                    var source = Handler.create(data);
                    sources.add(source);
                    continue outer;
                }
            }
            (0, log_1.log_error)('<unhandled configuration source> :', data);
        }
        return sources;
    },
    register: function (name, Handler) {
        exports.Handlers[name] = Handler;
    }
};
;

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
var log_1 = _src_util_log;
function query_deserialize(query, delimiter) {
    if (delimiter === void 0) { delimiter = '&'; }
    var obj = {};
    var parts = query.split(delimiter);
    for (var i = 0, imax = parts.length; i < imax; i++) {
        var x = parts[i].split('=');
        var key = x[0];
        var val = x[1] == null ? '' : decode(x[1]);
        if (key[key.length - 1] === ']' && key[key.length - 2] === '[') {
            key = key.substring(0, key.length - 2);
            var current = obj_getProperty(obj, key);
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
    var chain = property.split('.');
    var i = 0;
    var imax = chain.length;
    for (; i < imax - 1; i++) {
        var key = chain[i];
        if (obj[key] == null) {
            obj[key] = {};
        }
        obj = obj[key];
    }
    obj[chain[i]] = value;
}
function obj_getProperty(obj, property) {
    var chain = property.split('.');
    var i = 0;
    var imax = chain.length;
    for (; i < imax; i++) {
        var key = chain[i];
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
;

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
var atma_io_1 = require("atma-io");
var log_1 = _src_util_log;
var query_1 = _src_util_query;
var rgx_specialFolder = /^%(\w+)%/, rgx_dblSlash = /[\/]{2,}/g, folders = {};
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
    var nodeEnv = process.env;
    var path = nodeEnv[name];
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
    var i = path.indexOf('?');
    if (i === -1) {
        return {};
    }
    var query = path.substring(i + 1);
    return (0, query_1.query_deserialize)(query, '&');
}
exports.path_getQuery = path_getQuery;
;
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var log_1 = _src_util_log;
var object_1 = _src_util_object;
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
    var r = (0, atma_utils_1.obj_getProperty)(config, prop);
    if (r != null)
        return (envCache[prop] = r);
    if (typeof process !== 'undefined') {
        var env = process.env;
        r = env[prop];
        if (r != null)
            return (envCache[prop] = r);
        r = env['NODE_' + prop.toUpperCase()];
        if (r != null)
            return (envCache[prop] = r);
        var ENV = env.NODE_ENV || env.ENV;
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
var envCache = {};
var key_DEFAULT = 'default';
var _cfg;
var _params;
var _refs;
var _refCount;
function rewrite(obj) {
    if ((0, atma_utils_1.is_Array)(obj))
        rewriteArray(obj);
    if ((0, atma_utils_1.is_Object)(obj))
        rewriteObject(obj);
}
function rewriteObject(obj) {
    var MAX_CALL_STACK = 100;
    if (++_refCount > MAX_CALL_STACK) {
        if (_refs.indexOf(obj) !== -1) {
            return;
        }
        _refs.push(obj);
    }
    var key, val, c;
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
    var imax = arr.length, i = -1, x, extArr;
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
    var has = false;
    for (var key in obj) {
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
    var code = prop
        .replace('#if ', '')
        .replace(/\b[\w\d_$]+\b/g, function (match, index, str) {
        if (isInQuotes(str, index))
            return match;
        if (str[index - 1] === '.')
            // skip property accessor
            return match;
        return 'getter("' + match + '")';
    });
    var fn = new Function('getter', 'return !!(' + code + ')');
    try {
        return fn(evalGetter);
    }
    catch (error) {
        (0, log_1.log_error)('<config:condition-object> Evalulation error', prop, error);
    }
    return false;
}
function evalGetter(prop) {
    var r = (0, atma_utils_1.obj_getProperty)(_params, prop);
    if (r != null)
        return r;
    r = (0, atma_utils_1.obj_getProperty)(_cfg, prop);
    if (r != null)
        return r;
    if (typeof process !== 'undefined') {
        var env = process.env;
        r = env[prop];
        if (r != null)
            return r;
        r = env['NODE_' + prop];
        if (r != null)
            return r;
        var ENV = env.NODE_ENV || env.ENV;
        if (ENV != null && ENV.toUpperCase() === prop.toUpperCase())
            return true;
    }
    return null;
}
function evalConditionObject(obj) {
    for (var key in obj) {
        if (key === key_DEFAULT)
            continue;
        if (evalConditionProperty(key))
            return obj[key];
    }
    return obj[key_DEFAULT];
}
function isInQuotes(str, index) {
    var isInDouble = false, isInSingle = false, c;
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
;

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
var log_1 = _src_util_log;
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
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var atma_io_1 = require("atma-io");
function cfg_imports(obj) {
    rewrite(obj);
}
exports.cfg_imports = cfg_imports;
;
// === private
var key_DEFAULT = 'default';
function rewrite(obj) {
    if ((0, atma_utils_1.is_Array)(obj))
        rewriteArray(obj);
    if ((0, atma_utils_1.is_Object)(obj))
        rewriteObject(obj);
}
function rewriteObject(obj) {
    for (var key in obj) {
        var c = key.charCodeAt(0);
        if (c === 36) {
            // $ - utility properties
            continue;
        }
        var val = obj[key];
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
    var imax = arr.length, i = -1;
    while (++i < imax) {
        var x = arr[i];
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
    var match = rgx.exec(value);
    var path = match.groups.path;
    var json = atma_io_1.File.read(path);
    if (match.groups.getter) {
        json = (0, atma_utils_1.obj_getProperty)(json, match.groups.getter);
    }
    return json;
}
var rgx = /#import(\s+)(?<path>[^\s]+)\s*(?<getter>[^\s]+)?/i;
;

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
var _src_util_yaml;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_util_yaml != null ? _src_util_yaml : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yaml = void 0;
/** Simple yaml parser /serializer */
var yaml;
(function (yaml_1) {
    function parse(str) {
        return parser.parse(str);
    }
    yaml_1.parse = parse;
    function serialize(mix) {
        return serializer.serialize(mix);
    }
    yaml_1.serialize = serialize;
    var parser;
    (function (parser) {
        function split(input) {
            var match = 0;
            var state = "default";
            var locs = [];
            for (var i = 0; i < input.length; i++) {
                var c = input[i];
                if (c === "-") {
                    if (match === 0) {
                        if ((state === "default" && i == 0) ||
                            (state === "open" && input[i - 1] === "\n")) {
                            match = 1;
                        }
                        else {
                            continue;
                        }
                    }
                    else {
                        match++;
                    }
                }
                else {
                    match = 0;
                }
                if (match === 3) {
                    state = state === "default" ? "open" : "closed";
                    locs.push(i + 1);
                }
            }
            switch (state) {
                case "default":
                    return ["", input];
                case "open":
                    return ["", input];
                case "closed":
                    return [
                        input.slice(locs[0], locs[1] - 3).trim(),
                        input.slice(locs[1]).trimStart(),
                    ];
            }
        }
        var getIndent = function (value) {
            var lines = value.split("\n");
            for (var i = 0; i < lines.length; i++) {
                var l = lines[i];
                if (l.trim().length === 0) {
                    continue;
                }
                return l.slice(0, l.length - l.trimStart().length);
            }
            return '';
        };
        var dedent = function (value) {
            var indent = getIndent(value);
            return value
                .split("\n")
                .map(function (ln) { return ln.slice(indent.length); })
                .join("\n");
        };
        var unquote = function (value) {
            if (value[0] === '"' || value[0] === "'") {
                var quote = value[0];
                if (value[value.length - 1] === quote) {
                    return value.slice(1, -1);
                }
            }
            return value;
        };
        var coerce = function (value) {
            if (value === 'true' || value === 'false')
                return value === 'true';
            if (!Number.isNaN(Number(value)))
                return Number(value);
            return unquote(value);
        };
        var yaml = function (input) {
            var YAML_OBJECT_RE = /(^[^\:\s]+):(?!\/)\n?([\s\S]*?(?=^\S)|[\s\S]*$)/gm;
            var YAML_TOKENS_RE = /[\:\-\[\]\|\#]/gm;
            var YAML_COMMENT_RE = /#.*$/gm;
            var indent = getIndent(input);
            if (!YAML_TOKENS_RE.test(input)) {
                if (indent.length > 1) {
                    return dedent(input);
                }
                else {
                    return coerce(input.trim());
                }
            }
            if (indent.length <= 1) {
                input = input.trimStart();
            }
            var block;
            var obj = {};
            while ((block = YAML_OBJECT_RE.exec(input))) {
                var _ = block[0], key = block[1], value_1 = block[2];
                var indent_1 = getIndent(value_1);
                if (indent_1.length > 1) {
                    var lines = dedent(value_1);
                    obj[key] = yaml(lines);
                }
                else {
                    obj[key] = yaml(value_1);
                }
            }
            if (Object.keys(obj).length > 0) {
                return obj;
            }
            var value = input.trim().replace(YAML_COMMENT_RE, '').trim();
            if (value.startsWith('-')) {
                if (value.startsWith('- -')) {
                    value = "-\n  -" + value.substring(3);
                }
                var items = value
                    .split(/^\-/gm)
                    .filter(function (v) { return v; })
                    // add whitespace instead of '-' to keep original indentation
                    .map(function (v) { return " ".concat(v); })
                    .map(function (v) { return dedent(v); })
                    .map(function (v) { return yaml(v.trimEnd()); });
                return items;
            }
            else if (value.startsWith("[")) {
                value = value.slice(1, -1);
                return value.split(",").map(function (v) { return coerce(v.trim()); });
            }
            else if (value.startsWith("|")) {
                return dedent(value.replace("|", "").replace("\n", ""));
            }
            else {
                return coerce(value.trim());
            }
        };
        function parse(input) {
            var _a = split(input), raw = _a[0], content = _a[1];
            return yaml(input);
        }
        parser.parse = parse;
    })(parser || (parser = {}));
    var serializer;
    (function (serializer) {
        function serialize(mix, indent) {
            if (indent === void 0) { indent = 0; }
            var indentation = doIndent(indent);
            if (mix === null) {
                return 'null';
            }
            if (typeof mix === 'boolean' || typeof mix === 'number') {
                return mix.toString();
            }
            if (typeof mix === 'string') {
                return serializeStringValue(mix);
            }
            if (Array.isArray(mix)) {
                return mix
                    .map(function (item) { return "".concat(indentation, "- ").concat(serialize(item, indent + 1).trim()); })
                    .join('\n');
            }
            if (typeof mix === 'object') {
                return Object.entries(mix)
                    .map(function (_a) {
                    var key = _a[0], value = _a[1];
                    var newLine = shouldStartFromNewLine(value) ? "\n".concat(doIndent(indent + 1)) : ' ';
                    return "".concat(indentation).concat(key, ":").concat(newLine).concat(serialize(value, indent + 1).replace(/^\s*/, ''));
                })
                    .join('\n');
            }
            return mix.toString();
        }
        serializer.serialize = serialize;
        function shouldStartFromNewLine(value) {
            return value != null && typeof value === 'object';
        }
        function serializeStringValue(value) {
            if (shouldQuoteString(value) === false) {
                return value;
            }
            return "\"".concat(value.replace(/"/g, '\\"'), "\"");
        }
        function shouldQuoteString(value) {
            if (/[:\n]/.test(value)) {
                return true;
            }
            if (/^[\d\.]+$/.test(value)) {
                return true;
            }
            if (/^0x[0-9a-fA-F]+$/.test(value)) {
                return true;
            }
            return false;
        }
    })(serializer || (serializer = {}));
    function doIndent(count) {
        return '  '.repeat(count);
    }
})(yaml = exports.yaml || (exports.yaml = {}));
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_util_yaml === module.exports) {
        // do nothing if
    } else if (__isObj(_src_util_yaml) && __isObj(module.exports)) {
        Object.assign(_src_util_yaml, module.exports);
    } else {
        _src_util_yaml = module.exports;
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.file_readSourceSync = exports.file_writeSourceAsync = exports.file_readSourceAsync = void 0;
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var atma_io_1 = require("atma-io");
var object_1 = _src_util_object;
var cfg_conditions_1 = _src_util_cfg_conditions;
var log_1 = _src_util_log;
var module_1 = _src_sources_utils_module;
var cfg_imports_1 = _src_util_cfg_imports;
var yaml_1 = _src_util_yaml;
function file_readSourceAsync(rootConfig, path, data) {
    return __awaiter(this, void 0, void 0, function () {
        var file, fileContent, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = prepareFile(resolveFile(path, data), 'read');
                    if (file == null) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, file.readAsync()];
                case 1:
                    fileContent = _a.sent();
                    if (data.secret && fileContent == null) {
                        throw new Error("Invalid secret for file ".concat(file.uri.toLocalFile()));
                    }
                    if (!(typeof data.deserializer === 'function')) return [3 /*break*/, 3];
                    return [4 /*yield*/, data.deserializer(fileContent)];
                case 2:
                    fileContent = _a.sent();
                    _a.label = 3;
                case 3:
                    config = prepareConfig(data, file, fileContent, rootConfig);
                    return [2 /*return*/, config];
            }
        });
    });
}
exports.file_readSourceAsync = file_readSourceAsync;
;
function file_writeSourceAsync(path, content, data) {
    return __awaiter(this, void 0, void 0, function () {
        var file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = prepareFile(resolveFile(path, data, 'write'), 'write');
                    return [4 /*yield*/, file.writeAsync(content)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.file_writeSourceAsync = file_writeSourceAsync;
;
function file_readSourceSync(rootConfig, path, data) {
    var file = prepareFile(resolveFile(path, data), 'read');
    if (file == null) {
        return null;
    }
    var fileContent = file.read();
    if (typeof data.deserializer === 'function') {
        fileContent = data.deserializer(fileContent);
    }
    return prepareConfig(data, file, fileContent, rootConfig);
}
exports.file_readSourceSync = file_readSourceSync;
;
function resolveFile(path, data, method) {
    if (method === void 0) { method = 'read'; }
    var uri = new atma_utils_1.class_Uri(path);
    var settings = {
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
        var folder = uri.path;
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
        var handler = atma_io_1.File.getHookHandler();
        var hooks = handler.getHooksForPath(file.uri.toString(), 'read');
        if (hooks.length === 0) {
            handler.register('yml', 'read', {
                name: 'appcfg-yaml-parser',
                read: function (file, config) {
                    var content = file.content;
                    if (typeof content === 'string') {
                        file.content = yaml_1.yaml.parse(content);
                    }
                }
            });
            handler.register('yml', 'write', {
                name: 'appcfg-yaml-serializer',
                write: function (file, config) {
                    var content = file.content;
                    if (content != null && typeof content === 'object') {
                        file.content = yaml_1.yaml.serialize(content);
                    }
                }
            });
        }
    }
    return file;
}
function prepareConfig(data, file, fileContent, rootConfig) {
    var config;
    if (typeof fileContent === 'string') {
        if (/(js|ts)/i.test(file.uri.extension) === false) {
            throw new Error("Content in \"".concat(file.uri.file, "\" loaded as script to be evaluated. But file extension was not \"js|ts\". File loader middleware, which should resolve the content to object, failed."));
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
    var prop = data.getterProperty;
    if (prop) {
        config = (0, atma_utils_1.obj_getProperty)(config, prop);
    }
    return config;
}
;

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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSource = void 0;
var cfg_1 = _src_util_cfg;
var path_1 = _src_util_path;
var SourceFactory_1 = _src_sources_SourceFactory;
var file_1 = _src_sources_utils_file;
SourceFactory_1.SourceFactory.register('file', {
    canHandle: function (data) {
        var path = data.path;
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
    create: function (data) {
        return new FileSource(data);
    }
});
var FileSource = /** @class */ (function () {
    function FileSource(data) {
        this.data = data;
        this.config = {};
        data.path = (0, path_1.path_handleSpecialFolder)(data.path);
    }
    FileSource.prototype.read = function (rootConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, file_1.file_readSourceAsync)(rootConfig, this.data.path, this.data)];
                    case 1:
                        config = _a.sent();
                        this.config = config;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    FileSource.prototype.readSync = function (rootConfig) {
        this.config = (0, file_1.file_readSourceSync)(rootConfig, this.data.path, this.data);
        return this;
    };
    FileSource.prototype.write = function (config, deepExtend, setterProperty) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var filename, cfg;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.data.writable !== true) {
                            throw new Error('Not writable');
                        }
                        if (this.config == null) {
                            this.config = {};
                        }
                        (0, cfg_1.cfg_extend)(this.config, config, deepExtend, setterProperty);
                        filename = this.data.path;
                        cfg = (_c = (_b = (_a = this.data).serializer) === null || _b === void 0 ? void 0 : _b.call(_a, this.config)) !== null && _c !== void 0 ? _c : this.config;
                        return [4 /*yield*/, (0, file_1.file_writeSourceAsync)(filename, cfg, this.data)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return FileSource;
}());
exports.FileSource = FileSource;
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('embedded', {
    canHandle: function (data) {
        return (0, atma_utils_1.is_Object)(data.config);
    },
    create: function (data) {
        return new EmbeddedSource(data);
    }
});
var EmbeddedSource = /** @class */ (function () {
    function EmbeddedSource(data) {
        this.data = data;
        this.data.writable = false;
        this.config = data.config;
    }
    EmbeddedSource.prototype.read = function (rootConfig) {
        return Promise.resolve(this);
    };
    EmbeddedSource.prototype.write = function (config, deepExtend, setterProperty) {
        throw new Error('Method not implemented.');
    };
    return EmbeddedSource;
}());
exports.EmbeddedSource = EmbeddedSource;
;

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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var SourceFactory_1 = _src_sources_SourceFactory;
var FileSource_1 = _src_sources_FileSource;
var atma_io_1 = require("atma-io");
var EmbeddedSource_1 = _src_sources_EmbeddedSource;
SourceFactory_1.SourceFactory.register('env', {
    canHandle: function (data) {
        if (data.dotenv) {
            return true;
        }
        return false;
    },
    create: function (data) {
        var _a;
        var envSource = new EmbeddedSource_1.EmbeddedSource({
            config: Object.assign({}, process.env)
        });
        var directory = (_a = data.path) !== null && _a !== void 0 ? _a : "file:///".concat(process.cwd(), "/");
        var pattern = /^\.env(\.(?<flavor>\w+))?$/;
        var files = atma_io_1.Directory.readFiles(directory, pattern);
        var sorted = [];
        files.forEach(function (file) {
            var _a;
            var flavor = (_a = pattern.exec(file.uri.file)) === null || _a === void 0 ? void 0 : _a.groups.flavor;
            if (!flavor) {
                sorted.unshift(file);
                return;
            }
            if (is(flavor)) {
                sorted.push(file);
            }
        });
        var fileSources = sorted.map(function (file) {
            return new DotEnvSource({
                path: file.uri.toString(),
                sync: data.sync,
            });
        });
        return __spreadArray([envSource], fileSources, true);
        function is(flavor) {
            flavor = flavor.toLowerCase();
            var inArgs = process.argv.some(function (x) {
                var key = x.replace(/-/g, '').toLowerCase();
                return key === flavor || "env=".concat(flavor) === key;
            });
            if (inArgs) {
                return true;
            }
            var inEnv = process.env[flavor.toUpperCase()] != null;
            if (inEnv) {
                return true;
            }
            var env = process.env['ENV'];
            if (env && env.toLowerCase() === flavor) {
                return true;
            }
            return false;
        }
    }
});
var DotEnvSource = /** @class */ (function (_super) {
    __extends(DotEnvSource, _super);
    function DotEnvSource(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        data.deserializer = _this.deserializer;
        return _this;
    }
    DotEnvSource.prototype.deserializer = function (content) {
        var json = content
            .replace(/\r/g, '')
            .split('\n')
            .map(function (x) { return x.trim(); })
            .filter(Boolean)
            .map(function (line) {
            var eq = line.indexOf('=');
            if (eq === -1) {
                return null;
            }
            var key = line.substring(0, eq).trim();
            var value = line.substring(eq + 1).trim();
            return { key: key, value: value };
        })
            .filter(Boolean)
            .reduce(function (agr, x) {
            agr[x.key] = x.value;
            return agr;
        }, {});
        return json;
    };
    return DotEnvSource;
}(FileSource_1.FileSource));
;

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
var SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('files', {
    canHandle: function (data) {
        return Array.isArray(data.files);
    },
    create: function (data) {
        return data.files.map(function (file) {
            return SourceFactory_1.SourceFactory.create({ path: file }).toArray();
        }).reduce(function (aggr, arr) { return aggr.concat(arr); }, []);
    }
});
;

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
var SourceFactory_1 = _src_sources_SourceFactory;
var atma_io_1 = require("atma-io");
SourceFactory_1.SourceFactory.register('directory', {
    canHandle: function (data) {
        var path = data.path;
        if (typeof path !== 'string')
            return false;
        if (path.search(/[\*\?]/g) !== -1)
            return true;
        if (path[path.length - 1] === '/')
            return true;
        return false;
    },
    create: function (data) {
        var path = data.path.replace(/\\/g, '/');
        var wildCardIndex = path.search(/[\*\?]/g);
        var index = path.lastIndexOf('/', wildCardIndex);
        var base;
        var pattern;
        if (wildCardIndex === -1) {
            base = path;
        }
        else {
            base = path.substring(0, index + 1);
            pattern = path.substring(index + 1);
        }
        var dir = new atma_io_1.Directory(base);
        dir.readFiles(pattern);
        var files = dir
            .files
            .map(function (file) {
            return file.uri.toString();
        });
        return SourceFactory_1.SourceFactory
            .create([{
                files: files
            }])
            .toArray();
    }
});
;

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
var SourceFactory_1 = _src_sources_SourceFactory;
SourceFactory_1.SourceFactory.register('custom', {
    canHandle: function (data) {
        return typeof data === 'function';
    },
    create: function (Ctor) {
        var source = new Ctor();
        return source;
    }
});
;

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
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var cache__;
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
    var argv = process.argv;
    var imax = argv.length;
    var params = {};
    var args = [];
    for (var i = 2; i < imax; i++) {
        var x = argv[i];
        if (x[0] === '-') {
            var key = x.replace(/^[\-]+/, '');
            var val = void 0;
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
;

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
var atma_utils_1 = _node_modules_atma_utils_lib_umd_utils;
var SourceFactory_1 = _src_sources_SourceFactory;
var Await_1 = _src_util_Await;
var cfg_1 = _src_util_cfg;
var cfg_conditions_1 = _src_util_cfg_conditions;
var cli_1 = _src_util_cli;
var log_1 = _src_util_log;
var object_1 = _src_util_object;
var Config = /** @class */ (function () {
    function Config(data, opts) {
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
    Config.fetch = function (arr, opts) {
        return new Config(null, opts).$read(arr);
    };
    Config.create = function (arr) {
        return new Config(arr);
    };
    Config.prototype.$get = function (path) {
        return (0, atma_utils_1.obj_getProperty)(this, path);
    };
    Config.prototype.$set = function (path, value) {
        (0, atma_utils_1.obj_setProperty)(this, path, value);
    };
    Config.prototype.$extend = function (config) {
        (0, object_1.obj_deepExtend)(this, config);
    };
    Config.prototype.$read = function (mix) {
        var dfr = new atma_utils_1.class_Dfr;
        var config = this;
        var resume = this.$parallelReads.delegate({ errorable: false });
        var sources = mix == null
            ? this.$sources
            : SourceFactory_1.SourceFactory.create(mix);
        this.$parallelReads.always(function () { return dfr.resolve(config); });
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
            var overrides = config.$cli.params;
            for (var prop in overrides) {
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
    };
    Config.prototype.$write = function (config, mix, arg1) {
        var _a;
        var deepExtend = false;
        var setterPath = null;
        var sourceName = null;
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
        var dfr = new atma_utils_1.class_Dfr;
        var sources = this.$sources.toArray();
        for (var i = 0; i < sources.length; i++) {
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
        var msg = '<config:write> Writable source not defined.';
        (0, log_1.log_error)(msg);
        return dfr.reject(msg);
    };
    Config.prototype.$is = function (name) {
        var r = (0, cfg_conditions_1.cfg_getEnvironmentVar)(this, name);
        if (typeof r === 'boolean') {
            return r;
        }
        if (r == null || r === '0' || r.toLowerCase() === 'false') {
            return false;
        }
        return true;
    };
    Config.prototype.toJSON = function () {
        var json = Object.create(null);
        for (var key in this) {
            if (key[0] === '$' || key === 'toJSON') {
                continue;
            }
            json[key] = this[key];
        }
        return json;
    };
    /** Exports */
    Config.default = Config;
    Config.Config = Config;
    return Config;
}());
exports.Config = Config;
;
;

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
;

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
var ConfigNode_1 = _src_ConfigNode;
module.exports = ConfigNode_1.Config;


}());

// end:source ./RootModuleWrapped.js

var cfg_merge,
    cfg_extend;


(function(){
    
    /* target - config object
     * source - source config object
     */
    cfg_merge = function(target, config, setterProperty){
        
        if (config == null) 
            return;
        
        if (setterProperty) 
            target = obj_ensureProperty(target, setterProperty, {});
        
        config = obj_clone(config);
        obj_deepExtend(target, config);
    };
    
    cfg_extend = function(target, source, deepExtend, path){
        if (path) 
            target = obj_ensureProperty(target, path, {});
        
        var fn = deepExtend !== false
            ? obj_deepExtend
            : obj_extend;        
        fn(target, source);
    };
    
}());
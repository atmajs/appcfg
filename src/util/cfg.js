var cfg_merge;

(function(){
    
    cfg_merge = function(target, source){
        
        if (source.config == null) 
            return;
        
        var prop = source.data.setterProperty;
        if (prop) {
            
            obj_ensureProperty(config, prop, {});
            target = obj_getProperty(config, prop);
        }
        
        obj_deepExtend(target, source.config);
        
    };
    
    
}());
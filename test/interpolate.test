include
    .inject('/lib/config.js::Config')
    .done(function(){
        
        var cfg = Config
            .fetch([{
                config: {
                    foo: 'fooVal',
                    bar: '#[foo]'
                }
            }]);
        
        eq(cfg.bar, 'fooVal');
    });
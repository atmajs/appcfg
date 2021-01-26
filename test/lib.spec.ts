include
    .js('../lib/appcfg.js')
    .done(resp => {
        const Config = resp.appcfg;


        var config = new Config ({
            config: {
                debug: true,
                foo: {
                    baz: true
                }
            }
        });

        eq_(config.$is('debug'), true);
        eq_(config.$is('foo.baz'), true);
    })

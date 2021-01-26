import { Config } from '../src/ConfigNode';

UTest({
    '$is': {
        'from configuration': function(){

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
        },
        'from environment': function(){
            var config = new Config;

            process.env.NODE_ENV = 'DEBUG,TEST';

            [
                ['debug', true],
                ['test', true],
                ['prod', false]
            ].forEach(x => eq_(
                config.$is(x[0])
                , x[1]
            ));
        }
    }
})

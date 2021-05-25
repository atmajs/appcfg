import { cfg_imports } from '../src/util/cfg_imports';


UTest({

    'imports all' () {

        const obj = {
            foo: '#import ./test/config/foo.yml'
        };

        cfg_imports(obj);

        deepEq_(obj, {
            foo: {
                foo: 'foo',
                combi: {
                    foo: 'foo'
                }
            }
        });
    },
    'imports by property' () {

        const obj = {
            foo: '#import ./test/config/foo.yml combi.foo'
        };

        cfg_imports(obj);

        deepEq_(obj, {
            foo: 'foo'
        });
    }

})

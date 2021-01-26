import { cfg_conditions } from '../src/util/cfg_conditions';

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

UTest({

    'conditions' () {

        var obj = {
            '#if debug': {
                foo: 'foo'
            },
            '#if release': {
                foo: 'bar'
            },

            a: {
                '#if debug': 'foo',
                '#if release': 'bar'
            },

            b: {
                '#if debug': 'some',
                'default': 'bar'
            },

            arr: [
                'const',
                {
                    '#if debug': [
                        'debug-foo-1',
                        'debug-foo-2',
                    ],
                    '#if release': [
                        'release-foo-1',
                        'release-foo-2',
                    ]
                },

                {
                    obj: {
                        '#if debug': 'debug-obj',
                        '#if release': 'release-obj'
                    }
                }
            ]
        };

        var config;

        config = clone(obj);
        cfg_conditions(config, { debug: true });
        eq_(config.foo, 'foo');
        eq_(config.a, 'foo');
        eq_(config.b, 'some');

        deepEq_(config.arr, [
            'const',
            'debug-foo-1',
            'debug-foo-2', {
                obj: 'debug-obj'
            }
        ]);

        config = clone(obj);
        cfg_conditions(config, { release: true });
        eq_(config.foo, 'bar');
        eq_(config.a, 'bar');
        eq_(config.b, 'bar');

        deepEq_(config.arr, [
            'const',
            'release-foo-1',
            'release-foo-2', {
                obj: 'release-obj'
            }
        ]);
    }

})

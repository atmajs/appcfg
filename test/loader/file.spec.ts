import { Config } from '../../src/ConfigNode';

UTest({
    async 'file'() {
        let config = await Config.fetch([{
            path: 'test/config/foo.yml',

            beforeRead: assert.await(function (source) {
                deepEq_(source.config, {});
            }),

            afterRead: assert.await(function (source, rootConfig) {
                eq_(source.config.foo, 'foo');
                eq_(source.config.combi.foo, 'foo');
            })
        }, {
            path: 'test/config/bar/bar.yml'
        }, {
            path: 'test/config/module.js'
        }]);

        has_(config, {
            foo: 'foo',
            bar: 'bar',
            combi: {
                foo: 'foo',
                bar: 'bar',
                module: 'module'
            }
        });
    },
    async 'file synchronous'() {
        var config = await Config.fetch([
            { path: 'test/config/qux-sync.yml' },
            { path: 'test/config/bar/bar.yml' }
        ], { sync: true });

        has_(config.toJSON(), {
            qux: 'qux-sync',
            bar: 'bar',
            combi: {
                qux: 'qux-sync',
                bar: 'bar'
            }
        });
    },
    async 'should merge arrays '() {
        const config = await Config.fetch([
            { path: 'test/config/array1.yml' },
            { path: 'test/config/array2.yml' }
        ], { sync: true });

        has_(config.toJSON(), {
            plugins: ['arr1', 'arr2']
        });
    },
    async 'should ignore arrays merge'() {
        const config = await Config.fetch([
            { path: 'test/config/array1.yml' },
            { path: 'test/config/array2.yml', extendArrays: false, mergeArrayItems: { some: 'foo' } }
        ], { sync: true });
        deepEq_(config.toJSON().plugins, ['arr2']);
    },
    async '!should merge array by key'() {
        const config = await Config.fetch([
            { path: 'test/config/arr/array1.yml' },
            { path: 'test/config/arr/array2.yml', mergeArrayItems: { users: 'id' } }
        ], { sync: true });
        deepEq_(config.toJSON().users, [
            {
                id: 1,
                name: 'Foo',
                age: 50
            },
            {
                id: 2,
                name: 'Bar',
                age: 100
            }
        ]);
    }

});

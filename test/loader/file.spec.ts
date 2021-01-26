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
    }
});

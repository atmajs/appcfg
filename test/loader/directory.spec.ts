import { Config } from '../../src/ConfigNode';

UTest({
    async 'should load yml'() {
        let config = await Config.fetch({
            path: 'test/config/**.yml'
        });
        has_(config, {
            foo: 'foo',
            bar: 'bar',
            combi: {
                foo: 'foo',
                bar: 'bar'
            }
        });
    },

    'should load CommonJS modules'() {
        return Config
            .fetch(
                { path: 'test/config/**.js' }
            )
            .then(config => eq_(config.combi.module, 'module'));
    },

    'should support many sources'() {
        return Config
            .fetch([
                { path: 'test/config/**.js' },
                { path: 'test/config/**.yml' }
            ])
            .then(config => has_(config, {
                foo: 'foo',
                bar: 'bar',
                combi: {
                    foo: 'foo',
                    bar: 'bar',
                    module: 'module'
                }
            }));
    },
    async 'should support many `$read` calls'() {
        let config = new Config();

        await config.$read('test/config/foo.yml');
        await config.$read('test/config/bar/*.yml');
        await config.$read('test/config/module.js');

        has_(config, {
            foo: 'foo',
            bar: 'bar',
            combi: {
                foo: 'foo',
                bar: 'bar',
                module: 'module'
            }
        });
    }
});

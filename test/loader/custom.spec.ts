import { Config } from '../../src/ConfigNode';
import { ISource } from '../../src/sources/ISource';

UTest({
    async 'sync load'() {

        let config = await Config.fetch([
            {
                path: 'test/config/foo.yml'
            },
            class implements ISource {
                config
                data = {
                    sync: true
                }
                async read(rootConfig) {
                    eq_(rootConfig.foo, 'foo');
                    this.config = { custom: 'quux' };
                    return this;
                }
            }
        ]);

        eq_(config.foo, 'foo');
        eq_(config.custom, 'quux');
    }
})

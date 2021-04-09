import { Config } from '../src/ConfigNode';

// embedded source
UTest({
    async 'will fetch' () {
        let config = await Config.fetch({
            config: {
                foo: 'fooVal',
                bar: '${foo}',
                sub: {
                    val: '${bar}'
                }
            }
        });

        deepEq_(config.toJSON(), {
            foo: 'fooVal',
            bar: 'fooVal',
            sub: {
                val: 'fooVal'
            }
        });
    }
})

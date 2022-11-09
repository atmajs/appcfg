import { Config } from '../../src/ConfigNode';

UTest({
    async 'env'() {
        console.log(Object.assign({}, process.env));
        process.env['ENV'] = 'LOCAL';

        let config = await Config.fetch([{
            dotenv: true,
            path: './test/fixtures/dote/',
        }]);


        let json = config.toJSON();

        has_(json, {
            FOO1: 'BAR1',
            FOO2: 'BAR2_LOCAL',
            FOO_LOCAL: 'YES',
            ENV: 'LOCAL'
        });
        eq_(json.FOO_PRODUCTION, null);
    }
});

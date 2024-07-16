const AppCfg = require('../../lib/umd/node/appcfg.js');


async function main() {
    const cfg = await AppCfg.fetch([{
        config: {
            foo: 125
        }
    }]);

    console.log(`Foo: ${ cfg.$get('foo') }`);
}

main().then(() => console.log('Done.'));

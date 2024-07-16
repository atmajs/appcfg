import AppCfg from '../../lib/esm/node/appcfg.mjs';

const cfg = await AppCfg.fetch([{
    config: {
        foo: 5
    }
}]);

console.log(`Foo: ${ cfg.$get('foo') }`);

export { cfg }

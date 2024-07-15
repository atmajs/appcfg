import AppCfg from '../../lib/esm/node/appcfg.mjs';

console.log(AppCfg, AppCfg.fetch);
const cfg = await AppCfg.fetch([{
    config: {
        foo: 1
    }
}]);

console.log(`Foo: ${ cfg.$get('foo') }`);

export { cfg }

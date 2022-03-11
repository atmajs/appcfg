import { Config } from '../../src/ConfigNode';
import { File, Directory } from 'atma-io';

UTest({
    $before: remove,
    //$after: remove,
    async 'write'() {
        let config = new Config({
            path: path_JSON,
            writable: true
        });

        await config.$write({
            foo: 'baz',
            arr: [1]
        });

        let cfg = await File.readAsync<any>(path_JSON, { cached: false });

        eq_(cfg.foo, 'baz');
        deepEq_(cfg.arr, [1]);

    },
    async 'write extend'() {
        let config = await Config.fetch({
            path: path_JSON,
            writable: true
        });

        await config.$write({ arr: [2] })

        let cfg = File.read<any>(path_JSON, { cached: false });
        eq_(cfg.foo, 'baz');
        deepEq_(cfg.arr, [2]);
    },
    async 'write after read'() {
        let config = await Config.fetch({
            path: path_JSON,
            writable: true
        });

        deepEq_(config.toJSON(), {
            foo: 'baz',
            arr: [2]
        });

        await config.$write({ qux: 'quux', arr: [3] });

        let cfg = File.read<any>(path_JSON, { cached: false});
        deepEq_(cfg, {
            qux: 'quux',
            foo: 'baz',
            arr: [3]
        });

    },
    async 'should write yaml'() {
        let config = new Config({
            path: path_YML,
            writable: true
        });

        await config.$write({
            foo: 'baz'
        })
        let txt = File.read(path_YML, { skipHooks: true, cached: false });
        has_(txt, 'foo: baz');

    },
    async 'should write json to any generic extension'() {
        let config = new Config({
            path: path_TXT,
            writable: true,
            serializer (config) {
                return JSON.stringify(config)
            }
        });
        await config.$write({
            foo: 'baz'
        });

        let txt = File.read(path_TXT, { skipHooks: true });
        has_(txt, '{"foo":"baz"}');
    }
})

let path_JSON = 'test/bin/write.json',
    path_YML = 'test/bin/write.yml',
    path_TXT = 'test/bin/write.txt'

function remove() {
    Directory.remove('test/bin/');

}

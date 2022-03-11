import { Config } from '../src/ConfigNode';
import { File } from 'atma-io';

const FILE = 'test/bin/encrypted.json';

UTest({
    async 'write'() {
        let writer = new Config({
            path: FILE,
            secret: '123456',
            writable: true
        });

        await writer.$write({
            foo: 'baz',
            arr: [1]
        });

        let str = await File.readAsync<string>(FILE, { skipHooks: true });
        hasNot_(str, 'baz');


        '> read without secret'
        let readerWithoutSecret = new Config({
            path: FILE,
            writable: true,
        });
        let empty = await readerWithoutSecret.$read();

        eq_(empty.foo, null);

        '> read with secret'
        let reader = new Config({
            path: FILE,
            secret: '123456',
            writable: true,
            optional: true,
        });
        let cfg = await reader.$read();
        eq_(cfg.foo, 'baz');
    }
});

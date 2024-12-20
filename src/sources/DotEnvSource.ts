import { IDataFile } from './ISource';
import { SourceFactory } from './SourceFactory';
import { FileSource } from './FileSource';
import { Directory, File } from 'atma-io';
import { EmbeddedSource } from './EmbeddedSource';



SourceFactory.register('env', {

    canHandle(data: IDataFile & { dotenv: boolean }) {
        if (data.dotenv) {
            return true;
        }
        return false;
    },
    create (data: IDataFile) {
        let envSource = new EmbeddedSource({
            config: Object.assign({}, process.env)
        });

        let directory = data.path ?? `file:///${process.cwd()}/`;
        let pattern = /^\.env(\.(?<flavor>\w+))?$/;
        let files = Directory.readFiles(directory, pattern);

        let sorted = [] as (InstanceType<typeof File>)[];
        files.forEach(file => {
            let flavor = pattern.exec(file.uri.file)?.groups.flavor;
            if (!flavor) {
                sorted.unshift(file);
                return;
            }
            if (is(flavor)) {
                sorted.push(file);
            }
        });


        let fileSources = sorted.map(file => {
            return new DotEnvSource({
                path: file.uri.toString(),
                sync: data.sync,
            });
        });

        console.log(`FileSources`, fileSources.map(x => x.data.path));
        console.log(`ENV`, process.env.ENV);
        console.log(`Foo2`, process.env.FOO2);


        return [ envSource, ...fileSources ];

        function is (flavor: string) {

            flavor = flavor.toLowerCase();
            let inArgs = process.argv.some(x => {
                let key = x.replace(/-/g, '').toLowerCase();
                return key === flavor || `env=${flavor}` === key;
            });
            if (inArgs) {
                return true;
            }
            let inEnv = process.env[flavor.toUpperCase()] != null;
            if (inEnv) {
                return true;
            }
            let env = process.env['ENV'];
            if (env && env.toLowerCase() === flavor) {
                return true;
            }
            return false;
        }
    }
});

class DotEnvSource extends FileSource {

    constructor(public data: IDataFile) {
        super(data);
        data.deserializer = this.deserializer;
    }

    deserializer (content: string) {
        let json = content
            .replace(/\r/g, '')
            .split('\n')
            .map(x => x.trim())
            .filter(Boolean)
            .map(line => {
                let eq = line.indexOf('=');
                if (eq === -1) {
                    return null;
                }
                let key = line.substring(0, eq).trim();
                let value = line.substring(eq + 1).trim();
                return { key, value }
            })
            .filter(Boolean)
            .reduce((agr, x) => {
                agr[x.key] = x.value;
                return agr;
            }, {});

        return json;
    }
}

import { class_Dfr } from 'atma-utils';
import { Config } from '../Config';
import { class_Await } from '../util/Await';
import { cfg_merge } from '../util/cfg';
import { log_error } from '../util/log';
import { IConfigParams, ISource, ISourceCtor } from './ISource';

export const Handlers = {} as { [name: string]: ISourceCtor };

export class Sources {

    array: ISource[] = []
    promise: class_Dfr

    add (mix: ISource | ISource[] | Sources){
        if (Array.isArray(mix)) {
            mix.forEach(x => this.add(x));
            return;
        }
        if (mix instanceof Sources) {
            this.add(mix.array);
            return;
        }
        this.array.push(mix);
    }

    read (config: Config) {
        let sources = this.array;
        for (let i = 0; i < sources.length; i++) {
            let source = sources[i];
            if (source.config) {
                Object.assign(config, source.config);
            }
        }
    }

    loadSync (rootConfig: Config) {
        let sources = this.array;

        let i = -1;
        let imax = sources.length;
        while( ++i < imax ){
            let source = sources[i];
            let before = source.data?.beforeRead;
            let after = source.data?.afterRead;

            if (before) {
                before(source, rootConfig);
            }
            if (source.readSync == null) {
                throw new Error('Source not supports sync config loader');
            }

            source.readSync(rootConfig);
            cfg_merge(
                rootConfig
                , source.config
                , source.data.setterProperty
                , source.data.extendArrays
            );
            if (after) {
                after(source, rootConfig);
            }
        }
        return sources;
    }

    load (rootConfig, i = -1): PromiseLike<Sources> {
        if (this.promise == null) {
            this.promise = new class_Dfr;
        }

        const self = this;
        let sources = this.array;
        let imax = sources.length;
        let count = 0;
        let $awaits = new class_Await();

        while( ++i < imax ){
            let source = sources[i];

            if ( ++count > 1 ) {

                if (source.data.sync) {
                    $awaits.always(resume);
                    break;
                }
            }

            let before = source.data?.beforeRead;
            let after = source.data?.afterRead;

            if (before) {
                before(source, rootConfig);
            }
            let onAlways = $awaits.delegate({ errorable: false });
            let onComplete = afterDelegate(after, source, rootConfig);

            // Backward-compat in-case the source itself is deferable
            let promise: PromiseLike<any> = source.read(rootConfig) ?? (<any>source);

            promise.then(
                    res => {
                        onComplete();
                        onAlways(null);
                    },
                    err => {
                        onAlways(err)
                    }
                );

        }
        function resume(){
            self.load(rootConfig, i - 1);
        }

        if (i > imax - 1) {
            $awaits.always(() => this.promise.resolve(this));
        }


        function afterDelegate(fn, source, rootConfig){
            return function(){

                cfg_merge(
                    rootConfig
                    , source.config
                    , source.data.setterProperty
                    , source.data.extendArrays
                );
                if (fn)
                    fn(source, rootConfig);
            };
        }
        return this.promise as PromiseLike<Sources>;
    }

    toArray () {
        return this.array;
    }
};

export const SourceFactory = {

    create (arr: IConfigParams | IConfigParams[]){
        if (typeof arr === 'string') {
            // file/directory/glob source
            arr = [ {path: arr} ];
        }
        if (Array.isArray(arr) === false) {
            // single source
            arr = [ arr ];
        }

        let imax = arr.length;
        let i = -1;
        let sources = new Sources;

        outer: while( ++i < imax ){
            let data = arr[i];
            if (data == null) {
                continue;
            }

            for(let name in Handlers) {

                let Handler = Handlers[name];
                if (Handler.canHandle(data)) {

                    let source = Handler.create(data);
                    sources.add(source);
                    continue outer;
                }
            }
            log_error('<unhandled configuration source> :', data);
        }

        return sources;
    },

    register (name, Handler: ISourceCtor){
        Handlers[name] = Handler;
    }
};

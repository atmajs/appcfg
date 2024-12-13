import { class_Dfr, obj_getProperty, obj_setProperty } from 'atma-utils';
import { IConfigParams } from './sources/ISource';
import { SourceFactory, Sources } from './sources/SourceFactory';
import { class_Await } from './util/Await';
import { cfg_extend, cfg_handlePaths } from './util/cfg';
import { cfg_conditions, cfg_getEnvironmentVar } from './util/cfg_conditions';

//#if (NODE)
import { cfg_imports } from './util/cfg_imports';
//#endif

import { cli_arguments } from './util/cli';
import { log_error } from './util/log';
import { obj_clone, obj_deepExtend, obj_interpolate } from './util/object';



export class Config<T = any> {

    /** Exports */
    static default = Config
    static Config = Config

    $cli
    $data
    $sources: Sources
    $parallelReads = new class_Await
    $sync = false

    constructor (data?: IConfigParams | IConfigParams[], opts?: { sync?: boolean }){
        if (data != null) {
            this.$data = data;
            this.$sources = SourceFactory.create(data);
            this.$sources.read(this);
        }
        this.$sync = opts?.sync ?? false;
    }

    static fetch <T = { [key: string]: any }> (arr: IConfigParams | IConfigParams[], opts?): Promise<Config & T> {
        return new Config(null, opts).$read<T>(arr);
    }

    static create (arr: IConfigParams | IConfigParams[]){
        return new Config(arr);
    }

    $get (path){
        return obj_getProperty(this, path);
    }

    $set (path, value){
        obj_setProperty(this, path, value);
    }

    $extend (config){
        obj_deepExtend(this, config);
    }

    $read <T = any> (mix?): Promise<Config & T> {
        let dfr = new class_Dfr;
        let config = this;

        let resume = this.$parallelReads.delegate({ errorable: false });
        let sources = mix == null
                ? this.$sources
                : SourceFactory.create(mix)
                ;

        this.$parallelReads.always(() => dfr.resolve(config));
        this.$cli = cli_arguments();

        if (this.$sync) {
            sources.loadSync(config);
            onComplete();
        } else {
            sources
                .load(config)
                .then(onComplete, onError);
        }
        function onComplete () {

            let overrides = config.$cli.params;
            for (let prop in overrides){
                obj_setProperty(config, prop, overrides[prop]);
            }
            obj_interpolate(config);
            cfg_conditions(config, config, config.$cli.params);
            cfg_handlePaths(config);

            //#if (NODE)
            cfg_imports(config);
            //#endif

            dfr.resolve(config);
        }
        function onError (err) {
            dfr.reject(err);
        }

        this.$sources = sources;
        return dfr as any as Promise<Config & T>;
    }

    /**
     * @param config any json object
     * @param deepExtend Otherwise per default shallow copy is used.
     * @param setterPath
     * @returns
     */
    $write (config?, deepExtend?: boolean, setterPath?: string)
    $write (config?, opts?: { deepExtend?: boolean, setterPath?: string, sourceName?: string })
    $write (config?, mix?: boolean | { deepExtend?: boolean, setterPath?: string, sourceName?: string }, arg1?: string) {

        let deepExtend = false;
        let setterPath: string = null;
        let sourceName: string = null;
        if (mix != null && typeof mix === 'object') {
            deepExtend = mix.deepExtend;
            setterPath = mix.setterPath;
            sourceName = mix.sourceName;
        } else {
            // boolean or null
            deepExtend = mix as boolean;
            setterPath = arg1;
        }

        if (config != null) {
            cfg_extend(this, config, deepExtend, setterPath);
        }

        let dfr = new class_Dfr;
        let sources = this.$sources.toArray();
        for(let i = 0; i < sources.length; i++){
            if (sources[i].data.writable !== true) {
                continue;
            }
            if (sourceName != null && sources[i].data?.name !== sourceName) {
                continue;
            }
            if (config != null) {
                config = obj_clone(config);
            }
            sources[i]
                .write(config, deepExtend, setterPath)
                .then(dfr.resolveDelegate(), dfr.rejectDelegate());

            return dfr;
        }

        let msg = '<config:write> Writable source not defined.';
        log_error(msg);
        return dfr.reject(msg);
    }

    $is (name){
        let r =  cfg_getEnvironmentVar(this, name);
        if (typeof r === 'boolean') {
            return r;
        }
        if (r == null || r === '0' || r.toLowerCase() === 'false') {
            return false;
        }
        return true;
    }


    toJSON (){
        let json = Object.create(null);
        for(let key in this){
            if (key[0] === '$' || key === 'toJSON') {
                continue;
            }
            json [key] = this[key];
        }
        return json;
    }
};

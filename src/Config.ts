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

    constructor (data?, opts?){
        if (data != null) {
            this.$data = data;
            this.$sources = SourceFactory.create(data);
            this.$sources.read(this);
        }
        this.$sync = opts?.sync;
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
                .then(onComplete);
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

        this.$sources = sources;
        return dfr as any as Promise<Config & T>;
    }

    $write (config, deepExtend?: boolean, setterPath?: string){
        cfg_extend(this, config, deepExtend, setterPath);

        let dfr = new class_Dfr;
        var sources = this.$sources.toArray(),
            i = sources.length
            ;
        while( --i > -1 ){
            if (sources[i].data.writable !== true) {
                continue;
            }

            config = obj_clone(config);
            sources[i]
                .write(config)
                .then(dfr.resolveDelegate(), dfr.rejectDelegate());

            return dfr;
        }

        var msg = '<config:write> Writable source not defined.';
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

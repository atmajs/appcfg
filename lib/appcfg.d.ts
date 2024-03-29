// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../atma-utils

declare module 'appcfg' {
    import { Config } from 'appcfg/ConfigNode';
    export = Config;
}

declare module 'appcfg/ConfigNode' {
    
    export { Config } from 'appcfg/Config';
}

declare module 'appcfg/Config' {
    import { class_Dfr } from 'atma-utils';
    import { IConfigParams } from 'appcfg/sources/ISource';
    import { Sources } from 'appcfg/sources/SourceFactory';
    import { class_Await } from 'appcfg/util/Await';
    export class Config<T = any> {
        /** Exports */
        static default: typeof Config;
        static Config: typeof Config;
        $cli: any;
        $data: any;
        $sources: Sources;
        $parallelReads: class_Await;
        $sync: boolean;
        constructor(data?: any, opts?: any);
        static fetch<T = {
            [key: string]: any;
        }>(arr: IConfigParams | IConfigParams[], opts?: any): Promise<Config & T>;
        static create(arr: IConfigParams | IConfigParams[]): Config<any>;
        $get(path: any): unknown;
        $set(path: any, value: any): void;
        $extend(config: any): void;
        $read<T = any>(mix?: any): Promise<Config & T>;
        $write(config: any, deepExtend?: boolean, setterPath?: string): class_Dfr;
        $is(name: any): boolean;
        toJSON(): any;
    }
}

declare module 'appcfg/sources/ISource' {
    export type ISourceCtor = {
        canHandle(data: IConfigParams): boolean;
        create(data: IConfigParams): ISource | ISource[];
    };
    export interface ISource {
        data?: any;
        config: any;
        read(rootConfig?: any): Promise<this>;
        readSync?(rootConfig?: any): this;
        write?(config: any, deepExtend?: boolean, setterProperty?: string): Promise<this>;
        writable?: boolean;
        getterProperty?: string;
    }
    export interface IDataCustom {
        new (): ISource;
    }
    export interface IDataEmbedded {
        config: any;
    }
    export interface IDataFile {
        path: string;
    }
    export type IDataFiles = {
        files: string[];
    };
    export type IDataDirectory = {
        path: string;
    };
    export interface IDataLocalStorage {
        localStorage: string;
    }
    export interface IDataQuery {
        query: any;
    }
    export type IConfigParams = IDataDirectory | IDataCustom | IDataEmbedded | IDataFile | IDataFiles | any;
}

declare module 'appcfg/sources/SourceFactory' {
    import { class_Dfr } from 'atma-utils';
    import { Config } from 'appcfg/Config';
    import { IConfigParams, ISource, ISourceCtor } from 'appcfg/sources/ISource';
    export const Handlers: {
        [name: string]: ISourceCtor;
    };
    export class Sources {
        array: ISource[];
        promise: class_Dfr;
        add(mix: ISource | ISource[] | Sources): void;
        read(config: Config): void;
        loadSync(rootConfig: Config): ISource[];
        load(rootConfig: any, i?: number): PromiseLike<Sources>;
        toArray(): ISource[];
    }
    export const SourceFactory: {
        create(arr: IConfigParams | IConfigParams[]): Sources;
        register(name: any, Handler: ISourceCtor): void;
    };
}

declare module 'appcfg/util/Await' {
    import { class_Dfr } from 'atma-utils';
    export class class_Await {
        promise: class_Dfr;
        error: any;
        completed: boolean;
        wait: number;
        constructor();
        delegate(opts?: {
            errorable?: boolean;
        }): (error: any) => void;
        always(fn: any): this;
    }
}


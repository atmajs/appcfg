export type ISourceCtor = {
    canHandle (data: IConfigParams): boolean
    create (data: IConfigParams): ISource | ISource[]
}
export interface ISource {

    data?
    config

    read(rootConfig?): Promise<this>
    readSync?(rootConfig?): this
    write? (config, deepExtend?: boolean, setterProperty?: string): Promise<this>
    writable?: boolean

    getterProperty?: string
}

export interface IDataCustom {
    new (): ISource
}
export interface IDataEmbedded {
    config: any
}
export interface IDataFile {
    path: string
}
export type IDataFiles = { files: string[] }

export type IDataDirectory = { path: string };

export interface IDataLocalStorage {
    localStorage: string
}
export interface IDataQuery {
    query: any
}

export type IConfigParams = IDataDirectory | IDataCustom | IDataEmbedded | IDataFile | IDataFiles | any

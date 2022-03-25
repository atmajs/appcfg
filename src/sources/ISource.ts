export type ISourceCtor = {
    canHandle (data: IConfigParams): boolean
    create (data: IConfigParams): ISource | ISource[]
}
export interface ISource {
    name?: string
    data?: ISource
    config?

    read?(rootConfig?): Promise<this>
    readSync?(rootConfig?): this
    write? (config, deepExtend?: boolean, setterProperty?: string): Promise<this>
    writable?: boolean
    serializer? (config): string

    beforeRead?(config, rootConfig)
    afterRead?(config, rootConfig)

    getterProperty?: string
    setterProperty?: string
    lookupAncestors?: boolean
    extendArrays?: boolean
    sync?: boolean
}

export interface IDataCustom {
    new (): ISource
}
export interface IDataEmbedded {
    config: any
}
export interface IDataFile extends ISource {
    path: string
    secret?: string
    optional?: boolean
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

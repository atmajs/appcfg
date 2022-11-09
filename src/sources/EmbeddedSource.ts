import { is_Object } from 'atma-utils';
import { IDataEmbedded, ISource } from './ISource';
import { SourceFactory } from './SourceFactory';


SourceFactory.register('embedded', {
    canHandle(data: IDataEmbedded) {

        return is_Object(data.config);

    },
    create(data: IDataEmbedded) {
        return new EmbeddedSource(data);
    }

});


export class EmbeddedSource implements ISource {
    constructor(data) {

        this.data = data;
        this.data.writable = false;
        this.config = data.config;

    }

    data: any;
    config: any;
    read(rootConfig?: any): Promise<this> {
        return Promise.resolve(this);
    }
    write(config: any, deepExtend?: boolean, setterProperty?: string): Promise<this> {
        throw new Error('Method not implemented.');
    }
}

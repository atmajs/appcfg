import { IDataCustom, ISource } from './ISource';
import { SourceFactory } from './SourceFactory';

SourceFactory.register('custom', {

    canHandle(data: IDataCustom) {
        return typeof data === 'function';
    },
    create(Ctor: new () => ISource) {
        let source = new Ctor();
        return source;
    }
});



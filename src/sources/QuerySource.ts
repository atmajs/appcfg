import { path_getQuery } from '../util/path';
import { IDataLocalStorage, IDataQuery, ISource } from './ISource';
import { SourceFactory } from './SourceFactory';

SourceFactory.register('query', {

    canHandle(data: IDataQuery) {
        return data?.query === true;
    },
    create (data: IDataLocalStorage) {
        return new QuerySourceSource (data);
    }
});


class QuerySourceSource implements ISource {

    config = {}

    constructor(public data: IDataLocalStorage) {}

    async read() {
        this.readSync();
        return this;
    }

    readSync () {
        try {
            this.config = path_getQuery(location.search);
        } catch (error) {

        }
        return this;
    }

    async write(config, deepExtend, setterProperty) {
        throw new Error(`Query source is not writable`);
        return this;
    }
}

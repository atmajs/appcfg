import { cfg_extend } from '../util/cfg';
import { IDataLocalStorage, ISource } from './ISource';
import { SourceFactory } from './SourceFactory';

SourceFactory.register('file', {

    canHandle(data: IDataLocalStorage) {
        return typeof data?.localStorage === 'string';
    },
    create (data: IDataLocalStorage) {
        return new LocalStorageSource (data);
    }
});


class LocalStorageSource implements ISource {

    config = {}

    constructor(public data: IDataLocalStorage) {

    }

    async read() {
        this.readSync();
        return this;
    }

    readSync () {
        let str = localStorage.getItem(this.data.localStorage);
        try {
            this.config = JSON.parse(str);
        } catch (error) {

        }
        return this;
    }

    async write(config, deepExtend, setterProperty) {

        cfg_extend(this.config, config, deepExtend, setterProperty);

        localStorage.setItem(this.data.localStorage, JSON.stringify(this.config));
        return this;
    }
}

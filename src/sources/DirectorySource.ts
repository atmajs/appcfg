import { IDataDirectory, ISource } from './ISource';
import { SourceFactory } from './SourceFactory';
import { Directory } from 'atma-io'

SourceFactory.register('directory', {

    canHandle(data: IDataDirectory) {

        let path = data.path;
        if (typeof path !== 'string')
            return false;

        if (path.search(/[\*\?]/g) !== -1)
            return true;

        if (path[path.length - 1] === '/')
            return true;

        return false;

    },

    create(data: IDataDirectory) {
        let path = data.path.replace(/\\/g, '/');
        let wildCardIndex = path.search(/[\*\?]/g);
        let index = path.lastIndexOf('/', wildCardIndex);

        let base: string;
        let pattern: string;

        if (wildCardIndex === -1) {
            base = path;
        } else {
            base = path.substring(0, index + 1);
            pattern = path.substring(index + 1);
        }

        let dir = new Directory(base);

        dir.readFiles(pattern);

        let files = dir
            .files
            .map(file => {
                const path = file.uri.toString();
                return {
                    ...data,
                    path
                };
            });

        return SourceFactory
            .create([{
                files: files
            }])
            .toArray();
    }
});

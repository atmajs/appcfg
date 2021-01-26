import { IDataDirectory, ISource } from './ISource';
import { SourceFactory } from './SourceFactory';
import { Directory } from 'atma-io'

SourceFactory.register('directory', {

    canHandle(data: IDataDirectory) {

        var path = data.path;
        if (typeof path !== 'string')
            return false;

        if (path.search(/[\*\?]/g) !== -1)
            return true;

        if (path[path.length - 1] === '/')
            return true;

        return false;

    },

    create(data: IDataDirectory) {
        var path = data.path.replace(/\\/g, '/'),
            wildCardIndex = path.search(/[\*\?]/g),
            index = path.lastIndexOf('/', wildCardIndex),

            base, pattern;

        if (wildCardIndex === -1) {
            base = path;
        } else {

            base = path.substring(0, index + 1);
            pattern = path.substring(index + 1);
        }

        var dir = new Directory(base);

        dir.readFiles(pattern);

        var files = dir
            .files
            .map(function (file) {
                return file.uri.toString();
            });

        return SourceFactory
            .create([{
                files: files
            }])
            .toArray();
    }
});

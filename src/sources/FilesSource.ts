import { IDataFiles } from './ISource';
import { SourceFactory } from './SourceFactory';


SourceFactory.register('files', {

    canHandle (data: IDataFiles){
            return Array.isArray(data.files);

    },
    create (data: IDataFiles) {
        return data.files.map(function(file){
            return SourceFactory.create({ path: file }).toArray();
        }).reduce((aggr, arr) => aggr.concat(arr), []);
    }
});


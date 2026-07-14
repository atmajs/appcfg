import { class_Uri, obj_getProperty } from 'atma-utils';
import { File } from 'atma-io';
import { obj_interpolate } from '../../util/object';
import { cfg_conditions } from '../../util/cfg_conditions';
import { log_error, log_warn } from '../../util/log';
import { module_eval } from './module';
import { cfg_imports } from '../../util/cfg_imports';
import type { Config } from '../../Config';
import { IDataFile, ISource } from '../ISource';
import { type IFileSettings } from 'atma-io/interfaces/IFile';
import { yaml } from '../../util/yaml';

declare let include;

export async function file_readSourceAsync(rootConfig: Config, path: string, data: IDataFile) {
    let file = prepareFile(resolveFile(path, data), 'read');
    if (file == null) {
        return null;
    }
    let fileContent = await file.readAsync<any>();
    if (data.secret && fileContent == null) {
        throw new Error(`Invalid secret for file ${file.uri.toLocalFile()}`);
    }
    if (typeof data.deserializer === 'function') {
        fileContent = await data.deserializer(fileContent);
    }
    let config = prepareConfig(data, file, fileContent, rootConfig);
    return config;
};


export async function file_writeSourceAsync(path: string, content, data: IDataFile) {
    let file = prepareFile(resolveFile(path, data, 'write'), 'write');
    await file.writeAsync(content);
};

export function file_readSourceSync(rootConfig, path, data: IDataFile) {
    let file = prepareFile(resolveFile(path, data), 'read');
    if (file == null) {
        return null;
    }
    let fileContent = file.read<any>();

    if (typeof data.deserializer === 'function') {
        fileContent = data.deserializer(fileContent);
    }
    return prepareConfig(data, file, fileContent, rootConfig);
};


function resolveFile(path: string, data: Pick<IDataFile, 'optional' | 'lookupAncestors' | 'secret'>,  method: 'write' | 'read' = 'read') {
    let uri = new class_Uri(path);
    let settings:IFileSettings = {
        cached: false
    };
    if (data.secret != null) {
        settings.aes256 = { secret: data.secret };
    }
    if (method === 'write' || File.exists(uri.toString())) {
        return new File(uri, settings);
    }
    if (uri.isRelative() && typeof include !== 'undefined') {
        uri = (new class_Uri(include.location)).combine(path);
        if (File.exists(uri.toString()))
            return new File(uri, settings);
    }
    if (data.lookupAncestors) {
        if (uri.isRelative()) {
            uri = (new class_Uri('file://' + global.process.cwd() + '/')).combine(path);
        }
        let folder = uri.path;
        while (uri.cdUp() && uri.path !== folder) {
            folder = uri.path;
            if (File.exists(uri.toString())) {
                return new File(uri, settings);
            }
        }
    }
    if (data.optional !== true) {
        log_error('Configuration file not found', path);
        log_warn('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
    }
    return null;
}

function prepareFile (file: InstanceType<typeof File>, method: 'write' |'read') {
    if (file == null) {
        return null;
    }
    if (file.uri.extension === 'yml') {
        // ensure we have the middleware
        let handler = File.getHookHandler();
        let hooks = handler.getHooksForPath(file.uri.toString(), 'read');
        if (hooks.length === 0) {
            handler.register('yml', 'read', {
                name: 'appcfg-yaml-parser',
                read(file, config) {
                    let content = file.content;
                    if (typeof content === 'string') {
                        file.content = yaml.parse(content) as any;
                    }
                }
            });
            handler.register('yml', 'write', {
                name: 'appcfg-yaml-serializer',
                write(file, config) {
                    let content = file.content;
                    if (content != null && typeof content === 'object') {
                        file.content = yaml.serialize(content) as any;
                    }
                }
            });
        }

    }
    return file;
}

function prepareConfig(data: IDataFile , file: InstanceType<typeof File>, fileContent, rootConfig: Config) {

    let config;
    if (typeof fileContent === 'string') {
        if (/(js|ts)/i.test(file.uri.extension) === false) {
            throw new Error(`Content in "${file.uri.file}" loaded as script to be evaluated. But file extension was not "js|ts". File loader middleware, which should resolve the content to object, failed.`);
        }
        data.writable = false;
        config = module_eval(file.uri.toLocalFile(), fileContent);
    } else {
        config = fileContent;
    }

    obj_interpolate(config, config, true);
    cfg_conditions(config, config, rootConfig.$cli.params);
    cfg_imports(config);

    let prop = data.getterProperty;
    if (prop) {
        config = obj_getProperty(config, prop);
    }
    return config;
}

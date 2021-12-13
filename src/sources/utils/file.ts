import { class_Uri, obj_getProperty } from 'atma-utils';
import { File } from 'atma-io';
import { obj_interpolate } from '../../util/object';
import { cfg_conditions } from '../../util/cfg_conditions';
import { log_error, log_warn } from '../../util/log';
import { module_eval } from './module';
import { cfg_imports } from '../../util/cfg_imports';
import type { Config } from '../../Config';
import { ISource } from '../ISource';

declare let include;

export async function file_readSourceAsync(rootConfig: Config, path: string, data) {
    let file = resolveFile(rootConfig, path, data.optional, data.lookupAncestors);
    if (file == null) {
        throw new Error(`${path} file not found`);
    }

    let fileContent = await file.readAsync();
    let config = prepairConfig(data, file, fileContent, rootConfig);
    return config;
};

export function file_readSourceSync(rootConfig, path, data) {
    let file = resolveFile(rootConfig, path, data.optional, data.lookupAncestors);
    if (file == null) {
        return null;
    }
    let content = file.read();
    return prepairConfig(data, file, content, rootConfig);
};


function resolveFile(rootConfig, path, isOptional, lookupAncestors) {
    let uri = new class_Uri(path);
    if (uri.extension === 'yml' && ('yml' in File.middleware) === false) {
        require('atma-io-middleware-yml');
    }
    if (File.exists(uri.toString())) {
        return new File(uri);
    }

    if (uri.isRelative() && typeof include !== 'undefined') {
        uri = (new class_Uri(include.location)).combine(path);
        if (File.exists(uri.toString()))
            return new File(uri);
    }
    if (lookupAncestors) {
        if (uri.isRelative()) {
            uri = (new class_Uri('file://' + global.process.cwd() + '/')).combine(path);
        }
        let folder = uri.path;
        while (uri.cdUp() && uri.path !== folder) {
            folder = uri.path;
            if (File.exists(uri.toString())) {
                return new File(uri);
            }
        }
    }

    if (isOptional !== true) {
        log_error('Configuration file not found', path);
        log_warn('To dismiss this warning, set `optional:true` in source, if configuration is not strict required');
    }
    return null;
}

function prepairConfig(data: ISource, file: InstanceType<typeof File>, fileContent, rootConfig: Config) {
    let config;
    if (typeof fileContent === 'string') {
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

export function log_error (...args){
    args.unshift('<appcfg:error>');
    console.error.apply(console, args);
};
export function log_warn (...args){
    args.unshift('<appcfg:warn>');
    console.warn.apply(console, args);
};

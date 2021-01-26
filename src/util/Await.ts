import { class_Dfr } from 'atma-utils';

export class class_Await {
    promise = new class_Dfr

    error = null;
    completed = false;

    wait = 0;

    constructor () {
        this.promise.resolve();
    }

    delegate (opts?: { errorable?: boolean}) {
        this.completed = false;
        this.promise.defer();
        this.wait++;
        return (error) => {
            if (this.completed) {
                return;
            }
            if (opts?.errorable !== false && error) {
                this.completed = true;
                this.promise.reject(error);
                return;
            }
            if (--this.wait < 1) {
                this.completed = true;
                this.promise.resolve();
            }
        };
    }
    always (fn) {
        this.promise.then(fn, fn);
        return this;
    }
}

import { obj_deepExtend } from '../../src/util/object';

UTest({
    'should merge 2 object' () {
        let a = {
            foos: {
                a: {
                    endpoints: [ 1, 2 ]
                },
                b: {
                    endpoints: [ 1, 2 ]
                }
            }
        };
        let b = {
            foos: {
                a: {
                    endpoints: [ 3, 4 ]
                },
            }
        };

        let result = obj_deepExtend(a, b, { extendArrays: false });
        deepEq_(result, {
            foos: {
                a: {
                    endpoints: [ 3, 4 ]
                },
                b: {
                    endpoints: [ 1, 2 ]
                }
            }
        })
    }
})

import { yaml } from '../src/util/yaml';

UTest({
    'parse yaml' () {
        let json = yaml.parse(`
# Hello World
foo: bar
fook: 'p6:38'
lorem:
  - foo
  - 123
  - ipsum: one # inline comment
    field: bar
  - { url: 'foo', size: 100 }
block: |
  hello # kept

  world
`);

        deepEq_(json, {
            foo: 'bar',
            fook: 'p6:38',
            lorem: [
                'foo',
                123,
                {
                    ipsum: 'one',
                    field: 'bar'
                },
                {
                    url: 'foo',
                    size: 100
                }
            ],
            block: 'hello # kept\n\nworld\n'
        });
    },
    'two-way yaml2' () {
        let source = {
            foo: 'bar',
            text: 'a: b',
            nested: {
                enabled: true,
                empty: null
            },
            arr: [
                [
                    [ { foo: 1, qux: 'q' }, { bar: 2 } ]
                ]
            ]
        };

        let str = yaml.serialize(source);
        let json = yaml.parse(str);
        deepEq_(json, source);
    },
    'parse root flow values' () {
        deepEq_(yaml.parse('[1, true, { a: 2 }]'), [1, true, { a: 2 }]);
    }
});

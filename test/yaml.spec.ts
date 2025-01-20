import { yaml } from '../src/util/yaml';

UTest({
    'parse yaml' () {
        [
            {
                yaml: `
# Hello World
foo: bar
lorem:
  - foo
  - 123
  - ipsum: one # inline comment
    field: bar
  - { url: 'foo', size: 100 }
    `,
            json: {
                foo: 'bar',
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
                ]
            }
        },
        {
            yaml: `
# Hello World
foo:
	hello:
		- 1
		- 2
`,
        json: {
            foo: {
                hello: [1, 2]
            }
        }
    }
        ].forEach(test => {
            let json = yaml.parse(test.yaml);
            deepEq_(json, test.json);
        });
    },
    'two-way' () {
        [
            {
                json: {
                    foo: 'bar',
                    baz: 123
                },
                yaml: [
                    'foo: bar',
                    'baz: 123'
                ].join('\n')
            },
            {
                json: {
                    foo: 'bar',
                    qux: 123456,
                    mux: "123456",
                    dux: {
                        lorem: 'ipsum dolor sit amet',
                        ipsum: 'dolor sit amet'
                    },
                    baz: [1, 2, 3],
                    arr: [
                        [
                            [ { foo: 1, qux: 'q' }, { bar: 2 } ]
                        ]
                    ]
                },
                yaml: [
                    'foo: bar',
                    'qux: 123456',
                    'mux: "123456"',
                    'dux:',
                    '  lorem: ipsum dolor sit amet',
                    '  ipsum: dolor sit amet',
                    'baz:',
                    '  - 1',
                    '  - 2',
                    '  - 3',
                    'arr:',
                    '  - - - foo: 1',
                    '        qux: q',
                    '      - bar: 2',
                ].join('\n')
            },
        ].forEach(test => {
            let str = yaml.serialize(test.json);
            eq_(str, test.yaml);

            let json = yaml.parse(str);
            deepEq_(json, test.json);
        });
    },
    'fail parse' () {
        [
            {
                yaml: `
field: 1
# will be skipped as wrong syntax
- foo
- foo
    `,
            json: {
                field: 1
            }
        },
        ].forEach(test => {
            let json = yaml.parse(test.yaml);
            deepEq_(json, test.json);
        });
    },
})

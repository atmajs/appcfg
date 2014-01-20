
**_... in progress_**

Node.js Configuration Library.
_Part of the Atma.js Project_


Load and Combine Configuration from many sources:

- File (JavaScript Module, JSON, Yaml)
- Directory
- MongoDB

Additional features:

- Command Line Overrides _(with dot notations)_: `node app --foo.bar barValue
- Conditions
- Special Folder


Sample:

```javascript
	var config = Config
		.read([
			// from file. (with Special Folder format syntax support)
			{
				path: '%APPDATA%/.appName/config.yml'
			},
			// directory
			{
				path: 'defaults/**.yml'
			},
			// mongodb
			{
				mongo: 'settings',
				
				// set this source as writable for configuration persistance
				writable: true
			},
			// from file, but use only nested property
			{
				path: 'package.json',
				property: 'atma'
			}
		])
		.done(function(){
			
			this === config // > true
		})
```

Yaml conditions sample:

```yml

port: 
	'#if debug': 5000
	'#if test': 5030
	'default': 8080

'#if debug':
	env: 'DEBUG'

scipts:
	- lib.js
	- '#if debug'
		- lib.debug-extension.js
	
```

And if `debug` property in configuration or over cli (`node app --debug`) is set to `true` this source results to:

```javascript
{
	port: 5000,
	env: "DEBUG",
	scripts: [
		"lib.js",
		"lib.debug-extension.js"
	]
}
```


----
The MIT License
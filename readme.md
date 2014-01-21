

Application Configuration Library for Node.js

_Part of the [Atma.js](http://atmajs.com) Project_

- [About](#about)
- [Api](#api)

```bash
$ npm install appcfg -save
```

### About

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
		.fetch([
			// from file. (with Special Folder format syntax support)
			{
				path: '%APPDATA%/.appName/config.yml',
				
				// set this source as writable for configuration persistance
				writable: true
			},
			// directory
			{
				path: 'defaults/**.yml'
			},
			// mongodb
			{
				mongo: 'barSettings'
			},
			// from file, but use only nested property
			{
				path: 'package.json',
				getterProperty: 'atma'
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

### API

#### Config

** static **
##### `.fetch(Array<Source>)` => Config Instance
Start loading the configuration from specified sources, returns new deferrable configuration instance

** methods **

##### .done(callback)
Fire the callback when the configuration ends loading

#### Source
##### FileSource
```javascript
{
	// File path
	path: String,
	
	// Define specific property to extract SUB-JSON from the loaded configuration
	// @default: null
	getterProperty: String
	
	// Define specific property in the root configuration,
	// where the loaded configuration should be inserted into
	// @default: null
	setterProperty: String
	
	// Specify if this file can be used for persistance
	// @default: false
	writable: Boolean
	
	// Fires before source $read function is called
	// (e.g. change this.path property or any other things)
	beforeRead: Function<Source, RootConfig>
	
	// Fires after source completes reading
	// (e.g. access config object in `Source.config`)
	afterRead: Function<Source, RootConfig>
}
```

##### DirectorySource
It will be mapped to multiple FileSources
```javascript
{
	// Directory path with GLOB look-up, e.g. 'configs/**.json'
	path: String
}
```

##### MongoDBSource
_**Depends on ClassJS**_
```javascript
{
	// Collection name
	mongo: String,
	
	// if source is writable
	// @default: true
	writable: Boolean
	
	// MongoDB Connection Settings
	// It can be also specified in previous configuration source, under `mongodb` property
	// @default: null - 
	settings: {
		// connection string
		connection: String
		// or
		
		// Port, default 27017
		port: Number,
		// IP, default '127.0.0.1'
		ip: String,
		
		// Database name, no default
		db: String
	}
}
```
##### MongoDBSource

```javascript

// Class Constructor with the Deferrable Interface and the method `read`
Function 

// e.g. using ClassJS

Class({
	Base: Class.Deferred,
	read: function(){
		// do any reads and calcs, after that resolve the source
		this.config = fooConfig();
		this.resolve();
	}
})

```


----
The MIT License
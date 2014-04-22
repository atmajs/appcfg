

#### Application Configuration Library for Node.js

_Part of the [Atma.js](http://atmajs.com) Project_

====
[![Build Status](https://travis-ci.org/atmajs/appcfg.png?branch=master)](https://travis-ci.org/atmajs/appcfg)

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
- Interpolations

When combining objects from many sources, **deep copy** is used:

```javascript
// a
{ sub: { foo: 'foo' }, arr: [ 'foo' ] }
// b
{ sub: { bar: 'bar' }, arr: [ 'bar' ] }

// combined (a + b)
{
    sub: { foo: 'foo', bar: 'bar'},
    arr: ['foo', 'bar']
}

// E.g you want completely to overwrite `arr` property, then prefix the key's name with `!`

// a
{ sub: { foo: 'foo' }, arr: [ 'foo' ] }
// b
{ sub: { bar: 'bar' }, '!arr': [ 'bar' ] }

// combined (a + b)
{
    sub: { foo: 'foo', bar: 'bar'},
    arr: ['bar']
}
```

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

##### `<Constructor> (Array<Source>)`

##### `.$read(?Mix)`
- Mix:
	- String: File/Directory/Glob path
	- Source: Source object
	- Array<Source>
	- `@default` - Array<Source> taken from constructor
Start loading configuration from sources

##### `.$write(config)`
Update and save the configuration. Use first matched writable source.

##### `.done(callback)`
Fire the callback when the configuration ends loading or reading

#### Source

##### Common properties for all source types
```javascript
{
    // Define specific property to extract SUB-JSON from the loaded configuration
	// @default: null
	getterProperty: String
	
	// Define specific property in the root configuration,
	// where the loaded configuration should be inserted into
	// @default: null
	setterProperty: String
	
	// Specify if this source can be used for persistence
	// @default: false
	writable: Boolean
	
	// Fires before source $read function is called
	// (e.g. change this.path property or any other things)
	beforeRead: Function<Source, RootConfig>
	
	// Fires after source completes reading
	// (e.g. access config object in `Source.config`)
	afterRead: Function<Source, RootConfig>
    
    // If true, do not log any warning if the source returns 404
    // @default: false
    optional: true
    
    // If true, then waits until all previous sources are loaded
    // @default: false
    sync: true
}
```


##### FileSource
```javascript
{
	// File path
	path: String
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

##### CustomSource
This source type can suit any needs.

```javascript

// Constructor with the Deferrable Interface and the method `read`
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

##### Embedded
Include config direct into the source
```javascript
{
    config: Object
}
```

----
The MIT License
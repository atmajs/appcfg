#### Application Configuration Library for Node.js

[![Build Status](https://travis-ci.org/atmajs/appcfg.png?branch=master)](https://travis-ci.org/atmajs/appcfg)
[![NPM version](https://badge.fury.io/js/appcfg.svg)](http://badge.fury.io/js/appcfg)

- [About](#about)
- [Api](#api)


### About

Load and Combine Configuration from many sources:
- Files
	- JavaScript Module
	- JSON
	- Yaml
- Directory (_combine files_)
- MongoDB

Additional features:

- [Command Line overrides](#command-line-overrides)
- [Conditions](#conditions)
- [Special Folder](#special-folder)
- [Interpolations](#interpolations)

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

Example:

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
		.done(function(cfg){
			// config === cfg === this;
			// ...
		})
```

##### Command Line overrides
Command line arguments are parsed and also set to the configuration object.
```bash
> node app --foo.bar barValue --debug
```
```javascript
Config
	.fetch(someSources)
	.done(function(config){
		assert.has(config, {
			foo: {
				bar: 'barValue'
			},
			debug: true
		})
	})
```

##### Conditions
Yaml conditions example. (_same is also for json format_)

```yml
# conditional root configuration example
'#if debug':
	name: Foo
	host: dev.example.com
'#if test':
	name: Baz
	host: localhost

# conditional property example
port: 
	'#if debug': 5000
	'#if test': 5030
	'default': 8080

# conditional array item example
scipts:
	- lib.js
	- '#if debug || test'
		- lib.debug-extension.js
	
```
Arguments lookup:
- in configuration object
- in cli overrides
- in `process.env`
- compare value as string from `process.env.ENV`
```bash
# from cli example
> node app --debug

# from environment
> set ENV=DEBUG
> node app
```
```javascript
{
	name: 'Foo',
	host: 'localhost',
	port: 5000,
	scripts: [
		"lib.js",
		"lib.debug-extension.js"
	]
}
```

##### Special Folder
Use special folders for loading/writing configurations, like `%APPDATA%` or `%HOME%`.
Is system agnostic and is parsed from the environment variables.
```javascript
Config
	.fetch({
		path: '%APPDATA%/.myApplication/global.yml',
		writable: true
	})
```

#### Interpolations
Sometimes to not repeat the configuration it is convinient to use interpolations.
It will embed configuration from itself.
```javascript
# someConfig.yml
name: 'Foo'
A:
	lorem: '#[name]'
B:
	ipsum: '#[A.lorem]'
```
```
Config
	.fetch({
		path: 'someConfig.yml'
	})
	.done(function(config){
		assert.has(config, {
			name: 'Foo',
			A: { lorem: 'Foo' },
			B: { ipsum: 'Foo' }
		});
	})
```

### API

#### Config

**static**
##### `.fetch(Array<Source>)` => Config Instance
Start loading the configuration from specified sources, returns new deferrable configuration instance

**methods**

##### `<Constructor> (Array<Source>)`

##### `.$read(?Mix)`
- Mix:
	- String: File/Directory/Glob path
	- Source: Source object
	- Array<Source>
	- `@default` - Array<Source> taken from constructor
Start loading configuration from sources

##### `.$write(config:Object [, ?deepExtend:Boolean, ?setterPath:String):Deferred`
Update and save the configuration. Use first matched writable source.
- `deepExtend`: complex objects and arrays are merged
- `setterPath`: define nested object in current configuration

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


#### Test
```bash
> npm install
> npm test
```
----
(c) 2014 MIT License

**_... in progress_**

Node.js Configuration Library.
_Part of the Atma.js Project_


Load and Combine Configuration from many sources:

- File
- Directory
- MongoDB

Sample:

```javascript
	var config = Config([
			// from file
			{
				path: 'config/config.yml'
			},
			// directory
			{
				path: 'defaults/**.yml
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
		.read()
		.done(function(){
			
			this === config // > true
		})
```


----
The MIT License
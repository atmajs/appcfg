/**
 *	Build: Run Atma.js Toolkit
 *  ``` > npm install atma ```
 *	``` > atma```
 **/

module.exports = {
	'settings': {
		io: {
			extensions: {
				js: ['atma-io-middleware-condcomments:read', 'atma-io-middleware-importer:read']
			}
		}
	},
	'add-handlers': {
		action: 'custom',
		script: 'tools/license-handler.js'
	},
	'import': {
		files: 'builds/**',
		output: 'lib/',
		defines: {
			DEBUG: true
		}
	},
	
	'watch': {
		files: 'src/**',
		config: '${import}'
	},
	
	'defaults': ['add-handlers', 'import']
};


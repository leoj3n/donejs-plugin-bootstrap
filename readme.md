# donejs-plugin-bootstrap

[![Build Status](https://travis-ci.org/leoj3n/donejs-plugin-bootstrap.png?branch=master)](https://travis-ci.org/leoj3n/donejs-plugin-bootstrap)

Bootstrap components for your DoneJS app

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'donejs-plugin-bootstrap';
```

### CommonJS use

Use `require` to load `donejs-plugin-bootstrap` and everything else
needed to create a template that uses `donejs-plugin-bootstrap`:

```js
var plugin = require("donejs-plugin-bootstrap");
```

## AMD use

Configure the `can` and `jquery` paths and the `donejs-plugin-bootstrap` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'donejs-plugin-bootstrap',
		    	location: 'node_modules/donejs-plugin-bootstrap/dist/amd',
		    	main: 'lib/donejs-plugin-bootstrap'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/donejs-plugin-bootstrap/dist/global/donejs-plugin-bootstrap.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```

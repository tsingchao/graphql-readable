# graphql-readable

[![](https://img.shields.io/travis/TapasFE/tapas-ui.svg?style=flat-square)](https://travis-ci.org/tsingchao/graphql-readable)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/tsingchao/graphql-readable)

Parse the JSON of full schema introspection to the readable type system.

### How to use

``` shell
npm install graphql-readable --save-dev
```

``` javascript
// generator.js
var fs = require('fs')
var parser = require('graphql-readable')
var schema = require('./schema.json')

fs.writeFileSync(
  path.join(__dirname, './schema.graphql'),
  parser(schema)
)
```

``` shell
node ./generator.js
```
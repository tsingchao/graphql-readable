# graphql-readable

[![](https://img.shields.io/travis/tsingchao/graphql-readable.svg)](https://travis-ci.org/tsingchao/graphql-readable)
[![Code Climate](https://codeclimate.com/github/tsingchao/graphql-readable/badges/gpa.svg)](https://codeclimate.com/github/tsingchao/graphql-readable)
[![Coverage Status](https://coveralls.io/repos/github/tsingchao/graphql-readable/badge.svg?branch=master)](https://coveralls.io/github/tsingchao/graphql-readable?branch=master)
[![npm package](https://img.shields.io/npm/v/graphql-readable.svg)](https://www.npmjs.org/package/graphql-readable)
[![NPM downloads](http://img.shields.io/npm/dm/graphql-readable.svg)](https://npmjs.org/package/graphql-readable)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/tsingchao/graphql-readable)

Parse the JSON of full schema introspection to the readable type system.

### How to use

``` shell
npm install graphql-readable --save-dev
```

``` javascript
// generator.js
var fs = require('fs')
var path = require('path')
var parser = require('graphql-readable')
var schema = require('./schema.json')

fs.writeFileSync(
  path.join(__dirname, './schemaType.graphql'),
  parser(schema, 'GraphQL')
)

fs.writeFileSync(
  path.join(__dirname, './schemaType.json'),
  parser(schema, 'JSON')
)
```

``` shell
node ./generator.js
```

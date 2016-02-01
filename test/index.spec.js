var fs = require('fs');
var path = require('path');
var parser = require('../index.js');
var schema = require('./schema.json');

var result = fs.readFileSync(path.resolve(__dirname, './schema.graphql'), 'utf-8');

var expect = require('chai').expect;

describe('Test the arguments', function() {

  it('should throw error "Must provide schema" '
    +'if schema empty', function() {
    expect(parser).to.throw(/Must provide schema/);
  });

  it('should throw error "Cannot read property `data` of schema" '
    +'if schema has no data property', function() {
    expect(parser.bind(this, {})).to.throw(/Cannot read property `data` of schema/);
  });

  it('should throw error "Please choose one of types which is `GraphQL` or `JSON`" '
    +'if arguments `format` is undefined or is not a string', function() {
    expect(parser.bind(this, schema, undefined)).to.throw(/Please choose one of types which is `GraphQL` or `JSON`/);
    expect(parser.bind(this, schema, {})).to.throw(/Please choose one of types which is `GraphQL` or `JSON`/);
  });

  it('should throw "TypeError" error '
    +'if schema has wrong structure', function() {
    expect(parser.bind(this, {data: {}}, 'GraphQL')).to.throw(/TypeError/);
  });

});

describe('Test format switcher', function() {

  it('should throw error "Could only parse one of types which is `GraphQL` or `JSON`" '
    +'if arguments `format` is neither `GraphQL` nor `JSON` ', function() {
    expect(parser.bind(this, schema, 'yaml')).to.throw(/Could only parse one of types which is `GraphQL` or `JSON`/);
  });

})

describe('Test the function printGraphQL', function() {

  it('should parse schema.json '
    +'to be deep equal to the schema.graphql', function() {
    expect(parser(schema, 'GraphQL')).to.equal(result)
  });

});

describe('Test the function printJSON', function() {



});
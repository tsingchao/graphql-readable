var fs = require('fs')
var path = require('path')
var parser = require('../index.js')
var schema = require('./schema.json')

var result = fs.readFileSync(path.resolve(__dirname, './schema.graphql'), 'utf-8')

var expect = require('chai').expect

describe('Test the graphql-readable', function() {

  it('should parse schema.json to be deep equal to the schema.graphql', function() {
    expect(parser(schema)).to.equal(result)
  })

  it('should throw error `Must provide schema` when schema empty', function() {
    expect(parser).to.throw(/Must provide schema/)
  })

  it('should throw error `Wrong schema` when schema has no data property', function() {
    expect(parser.bind(this, {})).to.throw(/Wrong schema/)
  })

})
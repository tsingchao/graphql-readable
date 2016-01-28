var invariant = require('graphql/jsutils/invariant')

var buildClientSchema = require('graphql/utilities').buildClientSchema
var printSchema = require('graphql/utilities').printSchema

module.exports = function(schema) {
  invariant(schema, 'Must provide schema')
  invariant(schema.data, 'Wrong schema')

  try {
    return printSchema(buildClientSchema(schema.data))
  } catch(error) {
    throw new Error(error)
  }

}
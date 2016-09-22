var invariant = require('graphql/jsutils/invariant').default;
var buildClientSchema = require('graphql/utilities').buildClientSchema;
var printSchema = require('graphql/utilities').printSchema;

module.exports = function(schema, format) {

  invariant(schema, 'Must provide schema');
  invariant(schema.data, 'Cannot read property `data` of schema');
  invariant(format && typeof format === 'string', 'Please choose one of types which is `GraphQL` or `JSON`');

  var clientSchema;

  try {
    clientSchema = buildClientSchema(schema.data);
  } catch(error) {
    throw new Error(error);
  }

  switch(format.toLowerCase()) {
    case 'graphql':
      return printGraphQL(clientSchema);
    case 'json':
      return printJSON(clientSchema);
    default:
      throw new Error('Could only parse one of types which is `GraphQL` or `JSON`');
  }

};

function printGraphQL(clientSchema) {

  return printSchema(clientSchema);

}

function printJSON(clientSchema) {

  return {};

}

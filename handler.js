const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

// TODO: see if the mime types are needed for all cases show in this example:
// https://github.com/awslabs/aws-serverless-express/blob/master/example/lambda.js
const server = awsServerlessExpress.createServer(app);

module.exports.api = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);

'use strict';

module.exports.getallnotes = async event => {
  let data = [
    {id: '1',
    note: 'text 1'},
    {id: '2',
    note: 'text 2'}
  ]
  return {
    statusCode: 200,
    body: JSON.stringify(
      data
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

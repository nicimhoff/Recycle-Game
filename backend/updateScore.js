console.log('updating the score of a user...');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});


exports.handler = function(event, context, callback){

    const data = JSON.parse(JSON.stringify(event));
    
   var params = {
    TableName:"Users",
    Key:{
        "email": event.queryStringParameters.email
    },
    UpdateExpression: "set score = :r",
    ExpressionAttributeValues:{
        ":r":   parseInt(event.queryStringParameters.score, 10)
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
let request = docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});

request.on('success', function(response) {
     console.log(response.data);
     let myResponse = response.data.Attributes.score
    const out = {
        statusCode: 200,
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(myResponse),
    };
    console.log("RESPONSE", out);
    callback(null,out);
 });

    
};

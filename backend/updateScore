console.log('updating the score of a user...');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});


exports.handler = function(event, context, callback){

    const data = JSON.parse(JSON.stringify(event));
    
   var params = {
    TableName:"Users",
    Key:{
        "email": data.email
    },
    UpdateExpression: "set score = :r",
    ExpressionAttributeValues:{
        ":r":data.score
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});

    
};

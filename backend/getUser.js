console.log('getLeagueInfo starts');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = function(event, context, callback){
    console.log('processing event: %j', event);
    let id = event.queryStringParameters.email;
    console.log(id);

    let scanningParameters = {
        TableName: "Users",
        //ProjectionExpression: "LeagueID, isPending, CreatedBy, members, contracts, currentWeek",
        KeyConditionExpression: "email = :id",
        ExpressionAttributeValues: {
            ":id": id
        }
    };

    //In dynamoDB scan looks through your entire table and fetches all data
    let request = docClient.query(scanningParameters, function(err,data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    });
 request.on('success', function(response) {
     console.log(response.data);
     let myResponse = response.data
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
}

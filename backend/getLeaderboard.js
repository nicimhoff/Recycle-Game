console.log('getting the leaderboard...')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'})


exports.handler = function(event, context, callback){
    var params = {
        /*
        ExpressionAttributeValues: {
            ':l' : event.queryStringParameters.email
        },
      
        KeyConditionExpression: 'email = :l',
        */
        TableName: 'Users'
    };
    
    docClient.scan(params, function(err, data) {
      if(err){
          console.log("there was an error in getting the table info")
      }else{
          if(data.Items.length == 0){
            console.log("error: no array is found.");
            const out = {
                  "statusCode": 400,
                  "body": "error",
                  "headers": { "Content-Type":"text/plain" },
                  "isBase64Encoded": false
            }
            callback(null,out);
          }
          console.log("here===");
          console.log(data.Items[0].score);
            var sortable = [];
            for (var i in data.Items) {
                sortable.push([data.Items[i]]);
            }
            console.log("here....");
            console.log(sortable);
            sortable.sort(function(a, b) {
                console.log(a);
                return a[0].score < b[0].score;
            });
            
            console.log("after sorting...");
            console.log(sortable);
            const out = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify(sortable),
            };
            callback(null, out);
        
      }
    }
)};

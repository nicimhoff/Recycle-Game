console.log("createUser function starts");

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

exports.handler = function(event, context, callback){
    
    console.log("request: " + JSON.stringify(event) + " \nend request");
    
    const data = JSON.parse(JSON.stringify(event));
    
    const params =  {
        TableName: 'Users',
        
        Item: {
            //email: data.request.userAttributes.email,
            "email" : data.email,
            "score": 0
        },
        
    };
    

    docClient.put(params, function(err,event){
        if(err) {
            //callback(err, null);
            console.log("err in docClient.put"+err);
        }else{
            //callback(null, event);
            console.log("success in docClient.put")
        }
    });
    
    console.log(JSON.stringify(event));
    callback(null,event);
};

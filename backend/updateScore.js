console.log('updating the score...'); 
 
const AWS = require('aws-sdk'); 
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'});

function upScore(email , score) {
    return new Promise((resolve, reject) => {
        
        var params = {
            TableName:"Users",
            Key:{
                "email": email
            },
            UpdateExpression: "set score = :r",
            ExpressionAttributeValues:{
                ":r":   parseInt(score, 10)
            },
            ReturnValues:"UPDATED_NEW"
        };
        
        console.log("Updating the item...");
        docClient.update(params, function(err, data) {
            if (err) {
                //console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                console.log("hello!");
                reject(10);
            } else {
                //console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
                resolve(100);
            }
        });
    });
}


function checkScore(email , score) {
    return new Promise((resolve, reject) => {
        //first get the score
        var params = {
            TableName : "Users",
            KeyConditionExpression: "#em = :email",
            ExpressionAttributeNames:{
                "#em": "email"
            },
            ExpressionAttributeValues: {
                ":email": email
            }
        };
        
        docClient.query(params, function(err, data) {
            if(err){
                console.log("error in getting the user");
                reject(err);
            }else{
                if(data.Items.length == 0 ){
                    console.log("no user in the databse");
                    resolve(404);
                    return;
                }
                console.log("the current score is");
                console.log(data.Items[0].score);
                if(data.Items[0].score < score){
                    //score is lower than new score, so update
                    resolve(70);
                }else{
                    //no need to update
                    resolve(34);
                }
            }
        });
    });
}

async function update(email , score){
    try{
        //first check if the score is higher
        let isHigher = await checkScore(email, score);
        console.log("isHigher = = = "+isHigher);
        if(isHigher == 70){
            //update the score
            let upp = await upScore(email,score);
            console.log("thi ran");
            console.log(upp);
            return 100;
        }else{
            console.log("this ran");
            return 10;
        }
    }catch(error){
        let errMessage = "error in score updation";
        const out2 = {
              statusCode: 400,
              body: errMessage,
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                },
        }
        console.log(out2);
        return out2;
    }
}


exports.handler = async (event) => {
    //const data = JSON.parse(JSON.stringify(event));
    let up = await update(event.queryStringParameters.email, event.queryStringParameters.score);
    
    if(up ==100){
        let myResponse = "updated";
        const out = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: myResponse,
        };
        return out;
    }else{
        let myResponse = "no need to update or the user doesn't exist";
        const out = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: myResponse,
        };
        return out;
    }
    //return up;
}

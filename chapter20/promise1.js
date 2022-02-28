let promise = new Promise(function(resolve, reject){
    let condition = true;
    //based on your logic here,
    if(condition)//call resolve() to resolve the promise:
    resolve("message");
    else //or call reject() to reject the promise
    reject ("error details");
}).then (function(msg){
    console.log("promise resolved to "+ msg);
}).catch(function(error){
    console.log("promise rejected with "+ error);
}).finally(()=> console.log("finally."));
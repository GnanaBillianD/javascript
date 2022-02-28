let password = "flex";
let p = new Promise((resolve, reject)=>{
if(password != "flex")
return reject('Invalid Password');
resolve("correcr password");
})
console.log(p);


//Promise
let promise = Promise.resolve("message");
console.log(promise);


//then
//(its only use for call resolve)
let promise1 = Promise.resolve("resolve value");
//then() method receives resolve value
promise1.then(function(message) {
    console.log("then: " + message);
});


//catch
//(its only use for call reject )
//never called, because we used .resolve method
let promise2 = Promise.reject("not found");
promise2.catch(function(error){
    console.log("catch: " + error);
});


//finally 
//(The finally method is executed regardless of whether event succeeded with resolve method or failed with reject method.)
//good place for post-promise data clean up
let promise3 = Promise.resolve("success!");
promise3.finally(function(msg){
    console.log("finally: hide loading animation.")
});


//promise.reject()
//promise object also has a .reject() method, which is used to purge the request, if a required condtion isn't met:
let promise4 = Promise.reject("request rejected");
//.then() method is not called on .reject()
//catch can be used .reject() method
promise4.catch(function(error){
    console.log("catch " + error);
});


//good place for post-promise data clean up
promise4.finally(function(msg){
    console.log("finally: hide loading animation.")
});

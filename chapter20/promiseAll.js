let promise = "promise";
let threat = "threat";
let wish = Promise.resolve("I wish.");

//Data set
let array = [promise, threat, wish]

Promise.all(array).then(function (value) {
    console.log(value)
});


//Final Words
new Promise((resolve, reject) => {
    resolve("resolved.");
}).then((msg) => {
    console.log(msg)
}).catch((error) => { }).finally(() => {
    console.log("finally.")
});

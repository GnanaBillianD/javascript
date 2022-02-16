//Each iteration step receives 3 arguments value, index, object.
let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];

//using the normal function method
fruit.forEach (function(item, index, object){
    console.log(item, index, object);
});

//using arrow function
fruit.forEach (item => console.log(item));





//example
let nums = [ 42, 54 ,65, 98, 12];
//will execute a function for every item in the array
nums.forEach((n) => {console.log(n)});
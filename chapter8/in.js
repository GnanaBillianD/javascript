//object
let a = {"a" : 1, "b" : 2, "c" : 3};
console.log("c" in a);//it can check the object properties "Name", not a value
console.log("length" in a);//false, the ”length” property does not exist natively on an object

//object constructor
console.log("constructor" in Object)//true, 
console.log("prototype" in Object)//true


//array
let b = ["a", "b", "c"];
console.log("a" in b);//false, it can check the array index only, not a value
let c = [1, 2, 3];
console.log(0 in c);//true, because its check the index only
console.log(3 in c);//false

console.log("length" in c); //true, because The "length" property is native to all arrays

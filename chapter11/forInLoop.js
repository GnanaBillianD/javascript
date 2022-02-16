//You won’t see constructor and prototype properties in an output from the for...in loop
//
let object = { a : 1, b : 2, c : 3, method : () => {}}

for (let value in object){
    console.log(value, object[value])
}




//example
let a = {b:12, c :45, d:56 };

for ( let x in a){
    //console.log(x)//just print the property name only
    console.log(x,a)//print the whole object property one by one, example: property 1: b=a,c=a; like that
    //console.log(x,a.b)//we can fetch the one property value for whole object property
}
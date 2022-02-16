console.log([]==[]);//false by value
x = [];
console.log(x===x);//true only by reference



function objcmp(a, b){

    //copy properties into A and B
    let A = Object.getOwnPropertyNames(a);
    let B = Object.getOwnPropertyNames(b);

    //return early if number of properties is not equal
    if ( A.length != B.length)
    return false;

    //walk and compare all properties on both objects
    for (let i= 0; i<A.length; i++){
        let propName = A [i];

        //property must equal by value * and type
        if(a[propName] !==(b[propName]))
        return false;
    }
    //objects are equal 
    return true;
}


//creaate two identical objects
let a = { prop : [1,2], obj : {}};
let b = { prop : [1,2], obj : {}};
console.log(objcmp(a,b));//false


//Test
function test(value){
    return typeof value.reduce == "function" &&
    typeof value.filter == "function" &&
    typeof value.map == "function" &&
    typeof value.length == "number";
}
//test the function


console.log(test(1));//false
console.log(test("string"));//false
console.log(test({a : 1}));//false
console.log(test(true));//false
console.log(test([]));//true
console.log(test([1,2,3,4,5]));//true
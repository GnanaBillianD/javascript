let a = [1,2];
let b = [1,2];
let c = [5,5];


function arrcmp(a, b){
    //one or more values are not array
    if (!(test(a) && test(b)))
    return false;

    //not equal by length
    if (a.length != b.length)
    return false;

    //compare by value
    for (let i= 0; i< a.length; i++)
        if (a[i] !== b[i])
        return false;
    
    //all tests passed: arrays a and b are equal
    return true;
}
console.log(arrcmp(a,b));//true
console.log(arrcmp(b,b));//true
console.log(arrcmp(b,c));//false

function test(value){
    return typeof value.reduce == "function" &&
    typeof value.filter == "function" &&
    typeof value.map == "function" &&
    typeof value.length == "number";
}


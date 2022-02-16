function objcmp(a, b){

    //copy properties into A and B
    let A = Object.getOwnPropertyNames(a);
    let B = Object.getOwnPropertyNames(b);

    //return early if number of properties is not equal
    if ( A.length != B.length)
    return false;

    //walk and compare all properties on both object
    for(let i= 0; i< A.length; i++){
        let propName = A[i];
        let p1 = a[propName];
        let p2 = b[propName];
        //property points to an array
        if (test(p1) && test(p2)){
            if(!arrcmp(p1, p2))
            return false;
        }else
        //property points to an object
        if (p1.constructor === Object && p2.constructor === Object){
            if(!objcmp(p1, p2))
                return false;
        //compare by primitive  value
        } else if (p1 !== p2)
            return false;   
    }
    return true;
}

let a = { prop : [1,2], obj : {}};
let b = { prop : [1,2], obj : {}};
console.log(objcmp(a,b));//true


function test(value){
    return typeof value.reduce == "function" &&
    typeof value.filter == "function" &&
    typeof value.map == "function" &&
    typeof value.length == "number";
}

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
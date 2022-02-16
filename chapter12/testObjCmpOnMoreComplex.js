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

let m={                 
    a:1,
    b:100n,
    c:{},
    d:[1,2],
    e:"abc",
    f:true,
    g:()=>{}
}
let n={
    a:1,
    b:100n,
    c:{},
    d:[1,2],
    e:"abc",
    f:true,
    g:()=>{}
}
let o={
    a:1,
    b:100n,
    c:{},
    d:[5,7],
    e:"abc",
    f:true,
    g:()=>{}
}
console.log(objcmp(m,m));
console.log(objcmp(m,n));
console.log(objcmp(m,o));

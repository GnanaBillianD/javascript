function * generator(){
    yield 1;
    yield 2;
    yield 3;
}
for (let value of generator())
    console.log(value);

let gen = generator();

console.log(gen.next().value );
console.log(gen.next().value );
console.log(gen.next().value );



//example for of loop (using array and strings)
let num = [1,2,3,4,5,6];
let str = "hiiambilly";

for (let c of num){
    //set of array value display one by one 
    console.log(c);
}

for (let d of str){
    //let of string value display one by one 
    console.log(d);
}




//object converted to iterables in for-of loop
//try on console
let x = {e: 2421, method: () => {}}

for ( let key of Object.keys(x)){
    console.log(key);
}
 for ( let values of Object.values(x)){
     console.log(values);
 }

 for  (let entries of Object.entries(x)){
     console.log(entries);
 }
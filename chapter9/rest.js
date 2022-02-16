// function ana(...t){
//     console.log(t[0]+t[1]);//1+2=3
// } 
// ana(1,2,3,4,5);

// let a = item => console.log(item)
// let f = (...item) => item.map(a)//1  2   3   4   5   6
// f(1, 2, 3, 4, 5, 6)


// let f = (...i) => i.map(v => console.log(v))
// f(1,2,3,4,5,6)


// function sum(a,b){ return a + b }
// console.log(sum(1,2,3));//1+2=3


// function sum(...args){
//     console.log(args);
// }
// console.log(sum(1,2,3));//[1,2,3]



// function sum(...args,b,c)//error

// function sum(a,...args,c)//error

// function sum1(a,b,...args){
//     console.log(a)
//     console.log(b)
//     console.log(args)
// }//correct
// //sum(1,2,3,4,5,7)
//sum1(...[1,2],3,4,5)


// function sum(...arguments){
//     let sum = 0;
//     for(let arg of arguments)
//     sum += arg;
//     return sum
//     }

// let a= sum(1,2,5)
// console.log(a)


// function sum(...args) {
//     return args.reduce((x, v) => x + v)
// }
// console.log(sum(1, 2, 3, 4, 5))


// let a = (...sum2) => sum2.reduce((x, v) => x + v)
// let b = a(1, 2, 3, 4)
// console.log(b); 


//spread
let a = ["hi","welcome"];
const b = [...a,"to", "my", "channel"]
console.log(b);


//let c = ...[1,2,3];//can’t use ...spread syntax to assign values to variables.


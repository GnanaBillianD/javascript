// let fruit_fruits = {
//     apple : 10,
//     grapes : 6,
//     orange : 19,
// }

// let {grapes, orange } = fruit_fruits;

// console.log(grapes+orange);
// // console.log(fruit_fruits)


// let cat = { a:1, b:2, m:()=>{}}
// let ca = { d:1, e:2, n:()=>{}}
// console.log({...cat,...ca})//spread


// let a = {nest :{nest:{egg:10}} };//object spread
// let b = { egg:5 };
// let c = {...a,...b};
// console.log(c);

let a =[1,2];//array spread
let b =[5,6];
let c =[...a,...b]
console.log(c)
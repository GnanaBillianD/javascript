console.log(null + {} + true + [] + [5]); //When + operator encounters objects of incompatible type, it will attempt to coerce those objects to their values in string forma

const s="text";
console.log(-s);// NaN

console.log(true+false);

console.log(NaN==NaN);

let hi= [2] + [2];
console.log(hi);
console.log(typeof hi)

let x = {a:5, b:hi}+[1,2,3];
console.log(x);
console.log(typeof x);

let a = Boolean(true);
console.log(a);
let b = Boolean([1,2,2]);
console.log(b);
let c = Boolean({});
console.log(c);

//type coercion
//console.log([]=![]);

let y = [];
console.log(a==a);

const z = "hi";//because its not numeric string
console.log(-z);//NaN

const t = "98";//its numeric string
console.log(-t);//-98


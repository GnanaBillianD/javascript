let num = [1,2,3,4,5,6,7,8,9];
let s = v => v >5;
let c = num.some(s);//it stops looping whenever it encounters a value that evaluates to true
let d = num.every(s);//it stops looping whenever it encounters a value that evaluates to false,otherwise check all 
console.log(c);
console.log(d)
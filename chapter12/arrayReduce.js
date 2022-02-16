//Only use reduce() when the result has the same type as the items and the reducer is associative
//for of loop concept, both are principles are same , methods only differ
const num = [1,-1,2,3];
let sums = 0;
for (let n of num)
    sums += n;
console.log(sums);


//array reduce method
//Return value: accumulator. this 'a' adds all numbers into a single value
//reducer added up all the numbers into the single accumulator value and returned it:1-1+2+5=5
//a=0,c=1,=>a=1
//a=1,c=-1,=>a=0
//a=0,c=2,=>a=2
//a=2,c=3,=>a=5
let sum = num.reduce((a,currentValue) =>{ return a + currentValue},0);

console.log(sum);
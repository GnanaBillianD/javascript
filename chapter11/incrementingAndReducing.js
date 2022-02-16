//incrementing
let miles = [ 5 , 12 , 75 , 2 , 5];
//add up all numbers using a for loop
let A = 0;
for( let i= 0; i<5; i++ )
    A += miles[i];
console.log(A);


//reduce
const R = (a, b) => a + b;// pass the array value one by one in arrow function
const result = miles.reduce(R);
console.log(result)


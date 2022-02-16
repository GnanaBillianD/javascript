let num = [0,1,2,3,4,5,6,7,8,9,10,11,12];
let s = v => v < 10;
let  x = num.filter(s);//which values we want in array, we print that st of values using in this method
console.log(x);//Return value: new array consisting only of items that passed a condition.
console.log(num);//no changes in original value
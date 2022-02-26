//every check the all array value with the condition. if the condition is true, it will be print "true".  otherwise "false"
//using array, normal function method
const nums = [1, 2, 3, 4, 5];
function a(items){
    return items > 0;
}
const res = nums.every(a);
console.log(res);
//using arrow function
const num = [11,134,34,45,264];
const r = num.every(item => item > 10);
console.log(r);


//array object
var fruit = [
    {name: "apple",      count:13},
    {name: "pear",       count:12},
    {name: "banana",     count:12},
    {name: "strawberry", count:11},
    {name: "cherry",     count:11},
    {name: "blackerry",  count:10},
    {name: "pineapple",  count:10}
];
const result = fruit.every(fruit1 => fruit1.name !== undefined);
console.log(result);


//array in array
const array = [[1,2,3],[4,5,6],[7,8,9],"aer"]//insert the string text , thats why "false"
const output = array.every(arr => Array.isArray(arr));
console.log(output);//false, because it will be check the array only, if this values are in array, it will print true

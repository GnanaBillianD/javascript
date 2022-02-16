//fruit array definition
var fruit = [
    {name: "apple",      count:13},
    {name: "pear",       count:12},
    {name: "banana",     count:12},
    {name: "strawberry", count:11},
    {name: "cherry",     count:11},
    {name: "blackerry",  count:10},
    {name: "pineapple",  count:10}
];

//perform sort
let my_sort = (a, b) => a.count - b.count;//ascending order
//let my_sort = (a, b) => b.count - a.count;//descending order
let fruits = fruit.sort(my_sort);//perform stable ES10 sort
console.log(fruits);



//example arrange the string text in alphabet order
let x = ["edi", "bils", "ben", "karthi"]
let y = x.sort();
console.log(y);
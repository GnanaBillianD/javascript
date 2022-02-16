//using map function
let arr =[1,2,3,4,5]
let res = arr.map(x => [x, x * 2])//[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]
console.log(res)


//using flatMap
let arrs =[1,2,3,4,5];
let results = arrs.flatMap(x => [x,x * 3])
console.log(results)


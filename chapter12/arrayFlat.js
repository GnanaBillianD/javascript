//Flattening a multi-dimensional array
let multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
//let result = multi.flat();//[ 1, 2, 3, 4, 5, 6, [ 7, 8, 9, [ 10, 11, 12 ] ] ]
//let result = multi.flat().flat();//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ] ]
//let result = multi.flat().flat().flat();//[ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]
let result = multi.flat(Infinity);
console.log(result)
//variable definition
//case Sensitivity
let a = 1;
let A = 12;
console.log(a);//1
console.log(A);//12


//console.log(a);//undefined
//{
  //  var a = 10;
//}

//hoisting
console.log(b);//undefined
{
    var b = 10;
}
console.log(b);//10

//functionName Hoisting
funs();
function funs(){
  console.log("hello");
}

// fun();
// function fun(){
//   console.log("hi 1");
// }
// var fun = function(){
//   console.log("hi 2");
// }


var fun = function(){
  console.log("hi 2");
}
function fun(){
  console.log("hi 1");
}
fun();


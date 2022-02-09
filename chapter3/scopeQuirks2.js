console.log(this==window)

var a = "hi";//latches on to window ("this" in global scope)
let b = "hello";//exists seperately from "this"

console.log(a);
console.log(this.a);
console.log(window.a);

console.log(b);
console.log(this.b);
console.log(window.b);


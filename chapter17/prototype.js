//When a function is defined two things happen: the function object is created,
//because functions are objects. Then, a completely separate prototype object is created.
function Human(name){
    var a =10;
}
console.log(Human.__proto__)

console.log(Human.prototype.constructor)//The prototype property of the defined function will point to it

console.log(typeof Human.prototype); //object



//object
let literal = {
    prop: 123,
    meth: function(){}
};

literal.__proto__;
literal.__proto__.constructor;
literal.constructor;

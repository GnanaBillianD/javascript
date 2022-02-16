// Similar to arrays, when it comes to object literals, const only makes the definition constant. But it doesn’t mean you can’t change values of the properties assigned to a variable that was defined with const:


// let a;
// console.log(a);//undefined
// const b; //Missing initializer in const declaration

// const speed_of_light = 186000;//miles per second
// speed_of_light = 1;//TypeError: Assignment to constant variable.

const A = [];
A [0] = "a";//Changing a value in the const array is still allowed

//A = [];//TypeError: Assignment to constant variable.

const a = {a:1, b:12};
a.a = 123;
console.log(a);
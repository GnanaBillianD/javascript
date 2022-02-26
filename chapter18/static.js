// class ClassWithStaticMethod {
//     static staticProperty = 'someValue';
//     static staticMethod() {
//         return 'static method has been called.';
//     }
//     // static {
//     //     console.log('Class static initialization block called');
//     // }
// }

// console.log(ClassWithStaticMethod.staticProperty);// output: "someValue"
// console.log(ClassWithStaticMethod.staticMethod());// output: "static method has been called."




//Calling static members from another static method
// class StaticMethodCall {
//     static staticProperty = 'static property';
//     static staticMethod() {
//         return 'Static method and ' + this.staticProperty + ' has been called';
//     }
//     static anotherStaticMethod() {
//         return this.staticMethod() + ' from another static method';
//     }
// }
// console.log(StaticMethodCall.staticMethod());
// // 'Static method and static property has been called'

// console.log(StaticMethodCall.anotherStaticMethod());




//Calling static members from a class constructor and other methods
class StaticMethodCall {
    constructor() {
        console.log(StaticMethodCall.staticProperty); // 'static property'
        console.log(this.constructor.staticProperty); // 'static property'
        console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
        console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }

    static staticProperty = 'static property';
    static staticMethod() {
        return 'static method has been called.';
    }
}
let constructors = new StaticMethodCall();

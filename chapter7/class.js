class Cat{
    constructor(){
        let property = 1;
        this.something = 2;
    }
    method(){
        console.log(this.property);
        console.log(this.something);
    }
}
let a = new Cat();
console.log(a.method());
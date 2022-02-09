//create custom constructor function
let Pancake = function(){
    //create object property:
    this.number = 0;
    //create object method:
    this.bake = function(){
        console.log("baking the pancake");
        //increase number of pancakes baked:
        this.number++;
    }
}

//instantiate pancake maker
let pancake = new Pancake();

console.log(pancake);

//bake 3 pancakes
pancake.bake();
pancake.bake();
pancake.bake();

console.log(pancake.number);

//console.log(Pancake.constructor);


//function constructor
let body = "console.log(1+2), console.log(20+12), console.log('hi welocome')";
let f = new Function(body);
f();
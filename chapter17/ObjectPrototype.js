let obj = {
    name: "billian",
    city: "tvl",
}

let obj1 ={
    name: "benni",
    city: "tvl1"
}

let obj2 = {
    name: "karthi",
    city: "cbe",
}

Object.prototype.method = function(){
    console.log("I am " + this.name + " from " + this.city);
}

obj.method();
obj1.method();
obj2.method();
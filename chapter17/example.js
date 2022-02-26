let arr = ["aks","adit"];

let obj = {
    name: "aks",
    city: "delhi",
    getIntro: function(){
        console.log(this.name +" from " + this.city);
    }
}

let obj1= {
    name: "adit"
}

obj1.__proto__=obj;

obj1.getIntro();
obj.getIntro();
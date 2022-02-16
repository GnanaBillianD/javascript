let get = null;//placeholder for global getter function

function closure(){
    this.inc = 0;
    get = () => this.inc; // greater

    function increase() { this.inc++; }
    function decrease() { this.inc--; }
    function set(v) { this.inc=v; }
    function reset() { this.inc=0;}
    function del(){
        delete this.inc;
        this.inc = null;
        console.log("this.inc deleted")
    }
    function readd(){
        //if null is undefined
        if(!this.inc)
            this.inc = "re-added";
    }
    //return all methods at once
    return[increase, decrease,set,reset,del,readd];
}

let f = closure();

let inc = f[0];
let dec = f[1];
let set = f[2];
let res = f[3];
let del = f[4];
let add = f[5];

inc();//1
inc();//2
inc();//3
dec();//2
get();//2
set(7);//7
get();//7
res(0);//0
get();//0

//delete property
del(0);//0
get();//null

//read property
add();
get();//"re-added"

res();//0
inc();//1
//get();//1
let asd = get();
console.log(asd)

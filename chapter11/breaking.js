for( let i=0;i<10; i++){
    console.log("loop");
    break;//In this case the for loop will print ”loop.” to the console only once.
};


//custom breaking condition
for (let i=0;; i++){
    console.log("loop, i =" + i);
    if(i > 5)
    break;//the if condition is true, the loop will be break
}


//breaking to Label
// let c = 0;
// mark: for (let i=0; i<5; i++)
//     inner: for (let j=0; j<5; j++){
//         c++;
//         if(i==2)
//         break mark;
//     }
// console.log(c);//11


let c = 0;
mark: for (let i=0; i<5; i++)
    inner: for (let j=0; j<5; j++){
        c++;
        if(i==2)
        break inner;
    }
console.log(c);//21


//breaking from a labeled block scope
block: {
    console.log("before");
    break block;
    console.log("after");   
}
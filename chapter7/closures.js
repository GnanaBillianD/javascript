var plus = (function () {
    let counter = 0;//define only once
    console.log("hdd")
    return function () {
       console.log("hu")
        return function(){
            counter +=1;
            return function(){
                console.log('bil');
                counter ++;
                return counter;          //when we call the function(plus), 1st time its only execute from starting(outer function). next time it will be start from inner function 
        }

    }  
    }

})()()();

console.log(plus())
console.log(plus())
console.log(plus())

// let a = plus();
// console.log(a);
// a = plus();
// console.log(a)
// a = plus();
// console.log(a);


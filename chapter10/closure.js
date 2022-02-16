function global(){
    function inner(){
        console.log("inner");
    }
    inner();//call inner
}
global();//call global


// let send;
function sendEmail(from, sub, message){
    let msg = `"${sub}" > "${message}" received from ${from}.`;
    send = function() { 
        console.log('fghj')
        console.log(msg);
    }
    return send;//we can take a value using return and also call that function
    // send();  
}
let a = sendEmail('billian','Re: subject','Good news.');
a();






let print, set, increase, decrease;//decalare the variables for anonymous function in global. that's why, we can call the anonymous function, once we call the main function in this program, the anonymous function will be execute 
function manager(){
    console.log("manager();");
    let number = 15;
    print = function(){
        console.log(number)
    }
    set = function(value){
        number = value
    }
    increase = function() { number++ }
    decrease = function() { number-- }
}
manager();//initialize manager
print();//15
for(i=0; i<200; i++) increase;
print();//215
decrease();
print();//214
set(755);
print();//755
let old_print = print;//save reference to print()
manager();//initialize manager (again)
print();//15
old_print();//755
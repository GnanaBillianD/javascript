let a = "hi";
let b = "welcome";
function x(){
    /*let b=1;*/
    console.log(a);//reference Error
    console.log(b);// 'welcome'
    let b=1;//doen't hoist
}
x();


let x = {p:1};//create new variable x
let y = x;//y is a reference to x 
x.p  = 2;//change original value in x
console.log(y.p);//2

a=[1,3,4,5,6];//changes while using array,object or function
b=a;
b[2]=89;
console.log(a);

//no changes in literal values
x=12;
y=x;
y=233;
console.log(x);
let callBack = function () {
    console.log("event!");
}
let timer = setTimeout (callBack, 1000);

clearTimeout(timer);
timer =null;


let interval = setInterval(callBack, 1000)
clearTimeout(timer);
timer =null;
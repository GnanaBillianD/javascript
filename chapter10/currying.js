let planets = function(a){
     return function(b){
         return "favorite planets are " + a + " and " + b
     }
}
let a = planets("jupiter")
console.log(a("Earth"));
console.log(a("mars"))
console.log(a("saturn"))    


let planet = (e) => (f) =>console.log( "planet are " + e + " and " + f );//no nedd return key while dont use close bracket.if we use close bracket, we will write a return keyword must
planet("venus")("sun");
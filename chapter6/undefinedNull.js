//let bike;
//console.log(bike);//undefined

//null
let bike = null;//assign nul as default variable name
class Motorcycle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.features = null;
    }
   getFeatures(){
       if(this.features==null){
       this.features = {/*get features from data base*/} 
        } else {
       this.features = {/*get features from data base*/}
        } 
    }
}
bike = new Motorcycle("billian", "yamahaFZ150cc", "2021");
bike.getFeatures();

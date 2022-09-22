class Car {
    model:String;
    door:Number;
    isElectric:Boolean;

    constructor(model:String,door:Number,isElectric:Boolean){
         this.model = model;
         this.door = door;
         this.isElectric = isElectric;
    }
    displayMake():void{
        console.log(`This car is ${this.model}`)
    }
}

const BMW  = new Car('BMI8',4,true);
const Lambo  = new Car('lam',2,true);
BMW.displayMake();
Lambo.displayMake();
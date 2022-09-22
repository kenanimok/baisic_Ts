// class Car {
//     model:String;
//     door:Number;
//     isElectric:Boolean;

//     constructor(model:String,door:Number,isElectric:Boolean){
//          this.model = model;
//          this.door = door;
//          this.isElectric = isElectric;
//     }
//     displayMake():void{
//         console.log(`This car is ${this.model}`)
//     }
// }

// const BMW  = new Car('BMI8',4,true);
// const Lambo  = new Car('lam',2,true);
// BMW.displayMake();
// Lambo.displayMake();



// default para
class Point{
    x:number;
    y:number;
    readonly version:string ='20.02'   //เปลี่ยนแปลงไม่ได้
    
    constructor(x:number =0,y:number =0){
       this.x = x;
       this.y = y;

    }
}
const orange  = new Point(10,20);
orange.x=100   //x เปลี่ยนแปลง ค่าเปน  100 แทน10
console.log(`${orange.x}-Hello ${orange.y}`)
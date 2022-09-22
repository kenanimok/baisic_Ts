interface Icar{
    model:String;
    make:String;
    display():void
}
 const myCar:Icar ={
    model:'BMw',
    make:'S1000R',
    display: ()=>{
        console.log(`${myCar.make} ===== ${myCar.model}`)
    }
 }


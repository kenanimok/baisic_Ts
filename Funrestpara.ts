function sum(a:number,b:number,...rest:number[]){
    return a+b+rest.reduce((a,b)=>a+b,0)
}
console.log("sum",sum(1,2,3,4,5,6,7,8,9))


function add({x,y}:{x:number,y:number}):number{
    return x+y
}
console.log("add",add({x:20,y:22}))
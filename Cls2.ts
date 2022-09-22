class Human {
    name:string =''
    lastname:string=''
    age :number=0

    sayHello(){
         return `Hello $${this.name} and ${this.lastname} and${this.age}`
    }
}

const user1 :any = new Human()
user1.name ='kenanomok'
user1.age = 99

console.log(user1.sayHello())

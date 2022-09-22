class Person{
     name:string = " "
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`Hiiiii${this.name}`)
    }
}

class Employee extends Person{
    salary:number = 0;
    constructor(name,salary:number){
        super(name)
        this.salary =salary;

    }

  

}

const person1 = new Employee('Kenanimok',1500);
person1.sayHi()
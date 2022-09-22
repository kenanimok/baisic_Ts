class HumanProtect {
    protected name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    printName() {
      // เข้าถึงจากภายในคลาสเองก็ได้
      console.log(this.name)
    }
  }

  class Man extends HumanProtect{
    constructor(name: string) {
      super(name)
    }
  
    ordain() {
      // เข้าถึงจากคลาสลูกก็ได้
      console.log(`${this.name} has already been a Buddhist monk!`)
    }
  }

  var Ken = new Man('Somchai')



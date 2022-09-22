class Personprivate {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Personprivate("Jane"); 
        // person.name ='ken'    nameเป็น private  ไม่สามารถเรียกนอก calssได้โดยดตรง
  
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private


  /// result  Jane
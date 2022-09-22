class Personxx {
    // name is a private member variable
  public   constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
        
  const personxx = new Personxx("Jane");
  
  console.log(personxx.getName());
class Humanpb {
    // สมาชิกของคลาสตัวนี้ ไม่มีการระบุอะไรทั้งสิ้น จึงมีค่าเท่ากับ
    // public name: string
    // เมื่อเป็น public จึงสามารถเข้าถึงจากที่ไหนก็ได้
    public name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    // เมธอดนี้ไม่ได้ระบุ Access Modifiers ใดๆ จึงมีค่าเท่ากับ
    // public printName()
    public printName() {
      // name ซึ่งเป็น public เข้าถึงจากภายในคลาสเองก็ได้
    //   connsole.log(this.name)
    }
  }
  
  const somchai = new Humanpb('Somchai')
  // เข้าถึงจากภายนอกคลาสก็ย่อมได้
  somchai.name = 'Somsree'

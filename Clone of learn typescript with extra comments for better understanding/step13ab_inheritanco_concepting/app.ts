// Basic concept of inheritance done
// "Super" keyword is use to access properties of parent Class

class Human {
  private name: string;
  private fatherName: string;
  constructor(theName: string, theFatherName: string) {
    this.name = theName;
    this.fatherName = theFatherName;
  }
  showFullName(): void {
    console.log(`${this.name} ${this.fatherName}`);
  }
}
class Student extends Human {
  constructor(name: string, fatherName: string) {
    super(name, fatherName);
  }
  showFullName(): void {
    console.log("students class");
    super.showFullName();
  }
}
let bassam: Human = new Student("Ch Bassam Tanvir", "Abu Hurairah");
bassam.showFullName();

// The data type (Class type) given to an object will be taken always
// For instance, If we give a parent class type to an object
// and store a child object as Animal is having Donkey or Snake in the previous file, it's true
// But the opposite will not happen
// Mean to say that we can store a parent object in the child typed obbject
class A {
  constructor() {
    this.MyvirtualMethod();
  }

  protected MyvirtualMethod(): void {
    console.log("A");
  }
}

class B extends A {
  private testString: string = "B";

  public MyvirtualMethod(): void {
    console.log(this.testString); // This becomes undefined
  }
}

let obj = new B();

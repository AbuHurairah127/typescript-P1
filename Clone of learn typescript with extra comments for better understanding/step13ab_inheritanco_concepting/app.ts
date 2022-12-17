// Basic concept of inheritance done
// "Super" keyword is use to access a property of parent Class

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

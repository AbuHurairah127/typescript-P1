// standard way
//By default the access modifier in Typescript is public
class Person {
  email: string;
  constructor(email: string) {
    this.email = email;
  }
}
const p1 = new Person("abuh4495@gmail.com");
p1.email = "dev.abuhurairah@gmail.com";
console.log(p1.email);
// Alternative standard way
// but used by high end developers will be revised later
class User {
  readonly city: string = "Faisalabad";
  constructor(public age: number, private email: string) {}
}

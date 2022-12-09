// anonymous

let teacher: { name: string; exp: number } = {
  name: "Zeeshan",
  exp: 10,
};

// Aliased Object Type
type Student = {
  name: string;
  age?: number; //Optional value can have or not
};

let student: Student = {
  name: "Hira",
  age: 30,
};
let abuhurairah: Student = {
  name: "Abu Hurairah", //working because Student type has age as an optional type
};

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
  name: string;
  subordiates?: number; //Optional value can have or not
}

let storeManager: Manager = {
  name: "Bilal",
};

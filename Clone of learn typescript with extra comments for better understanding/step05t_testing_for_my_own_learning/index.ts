// Fresh and Stale Object test

let obj1: { name: string; age: number } = { name: "Abu Hurairah", age: 19 };
let obj2: { name: string; age: number; degree: string } = {
  name: "Hassan Saeed",
  age: 18,
  degree: "BS(SE)",
};

obj1 = obj2; //OK, because this is stale object and can have an additional property
obj2 = obj1; //NOT OK because this is stale object and can have an additional property but not less than the original object

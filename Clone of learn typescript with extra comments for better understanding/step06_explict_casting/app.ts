let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string>myname).length);

// Explicit types are used when we have to make a variable behave like a special type of Type
// Examples are given above in this example:
// we are trying to make the string behavior of an unknown type variable

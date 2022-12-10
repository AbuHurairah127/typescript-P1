let array1: number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2: Array<number> = [1, 2, 3]; //alternative correct syntax
let array3: number[] = []; //correct syntax to define an empty array

let array4: number[] = new number[2](); //error ... because only values can be accessed using string
let array6: number[] = new Array(2); //OK because this will create only two empty elements with number data type
let array7: number[] = new Array("2"); //Error because this will create only elements with data type
// but his array can only contain number type elements
console.log(array6);

let array5: number[] = [];
array5.push(1234); //dynamically adding

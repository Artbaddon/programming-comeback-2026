//Type number

let numberVar = 912312312312;
let bigIntVar = 12312312312312312312312312312312312312312n;
let stringVar = "HELLO WORLD!"
let boolVar = true;
let nullVar;
let undefinedVar = undefined;
let symbolVar = Symbol("ID");

console.log("Type of number: " + typeof numberVar);
console.log("Type of bigInt: " + typeof bigIntVar);
console.log("Type of string: " + typeof stringVar);
console.log("Type of bool: " + typeof boolVar);
console.log("Type of null: " + typeof nullVar);
console.log("Type of undefined: " + typeof undefinedVar);


let name = "Pedro"
let age = "200"
let templateLiteral = `HELLO MY FRIEDNS
FROM OUTERSPACE MY name ${name}, age: ${age}, birthyear ${age - 2026}
`
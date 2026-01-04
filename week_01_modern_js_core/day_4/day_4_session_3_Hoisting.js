//1. var hoisting
console.log(a);
var a = 10;
console.log(a);
/* 
Explain:
    - Creation phase: In this phase the function console log and the variable a are stored in the lexical environment, the a as undefined
    - Execution phase:here the first console.log will show undefined because it will try to access the scope, the lexical environment has it but is not initialized so because its a var is undefined. Then the lexical enviroment will set the value of the declaration of a to 10 and then we can show 10 in the console.log
    - Output : First Console.log undefined, second 10
*/

// 2. TDZ
console.log(b);
let b = 5;
/*
    Explain:
    Why this is an error:
    This is an error because in the phase of creation the var b is registed in the lexical enviroment, becuase its  a let, the value its unintialized and placed in the TDZ, then when execution reaches console.log(b) b exists but is not accesible yet.
    Why it doesn’t look at global
    It never looks at global because b is already declared in this scope
*/

//3. Function vs function expression
hello();
bye();

function hello() {
  console.log("hello");
}

var bye = function () {
  console.log("bye");
};
/*
    Explain:

    Which one works
    - The one that works is the hello function because is a function declaration that is hoisted with the full body
    Which one fails
    - The by function because even if its a function we initialized It fails because it’s undefined at call time

*/
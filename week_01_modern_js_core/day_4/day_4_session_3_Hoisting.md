# Session 3: Hoisting 
**Date:** Sunday Jan 4 2026
**Time:** 15:25 - 16:25
**Duration:** 50 minutes
**Review Date:** Jan 7 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is hoisting


**My guesses:**
- Hoisting is basically when we use a function or variable before its execution


---

## Resources Used 📚
- [JavaScript.info: Variables](https://javascript.info/variables) (15 min read)
- [JavaScript.info: Variable Scope](https://javascript.info/closure#lexical-environment) (10 min read)
---

## Notes (Write in MY words during session)

### Hoisting

**What it is:**
Hoisting is the moment when JS registers all the variables, functions, before the code starts running so it map all of this making tat the engine already knows what names are in what scope

**Why it exists:**
-This exists because JavaScript engine needs to know what can access what, meaning that what scope each function, block of code, variable etc will have, also to see if x function exists in x scope and if the varaibles should hide an outer one, so thats why JS must know all declarations in advacne before executing lthem.
**How it works:**
- Whenever a scope is created, JS runs a creation phase in that phase, the functions delcarations are stored with full content as a whole, var variables are stored and set to undefined, and let and const are stored but not initialized, they are like known by the engine but cant access them untill we declare them.
---


**Example:**
```javascript

sayHi();
//This will work because function declarations are hoistedand because 
// the lexical enviroment take the function as a whole,
// we can use it before declaring it because in the phase of recognizing we save 
// our function body completely and the name of it
function sayHi(){

    console.log("Hi")
}
```

**When to use:**
- We rely on histing when we work only with function delclarations.
  

---

## Aha Moments 💡
- var is undefiend in creating phase, functions are taken with full body
- in the creation phase is when the scope and the lexical enviroment are defined 
---

## Confusion Points ❓

---

## Daily Exercises ✅

1. [X] **Exercise 1:** [Exercises about hoisting predicting the output]

**My Solution Code / Notes:**
```javascript
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
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `day_4_session_3_Hoisting-Data_Types_and_Template_Literals`

**What I built:**
- Set of 3 exercises about hoisting

**Key techniques used:**
- Hoisting of functions 


**Bugs I hit:**
- [Problem you encountered]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What is HOisting?**
- Hoisting is basically a process when we can use functions before they are initialized on the code.

**4. What's one thing I still don't fully understand?**
- I dont fully understand var 

**5. The "ELI5" Summary**
- Hoisting is basically like the teacher's assitence list, you have the name of x person but you cannot see it until he is on the classroom

---

## Next Session Focus
- Data types literals and arrow functions

---

## Reflection

**What went well:**
- Understood hoisting and how it relates with scope and lexical environment

**What was hard:**
- Trying to do more in the time i had

**Time management:**
- Did I stay focused? Yes

**Energy level:** 6/10
**Confidence on this topic:** 8/10

---
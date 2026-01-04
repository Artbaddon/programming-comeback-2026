# Session 1: Variable Scope
**Date:** Sunday Jan 4 2026
**Time:** 10:00 - 11:05
**Duration:** 65 minutes
**Review Date:** Jan 7 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)

1. What is scope?

**My guesses:**
- Scope is to what piece of code a variable or function belongs to, for example if i create a function and a declare a variable inside, the scope of that variable will be only inside the function or descendants of that function
---

## Resources Used 📚
- [JavaScript.info: Variable Scope](https://javascript.info/closure) 
---

## Notes (Write in MY words during session)

### Scope

**What it is:**
- Is a set of specific rules that decide where variables, functions, parameters, etc can be used and found in the code. 

**Why it exists:**
- It exists because without scope every variable will live forever causing that the memory space will never be free and also the names would constantly colide, because if everything was global, you will have to create a lot of more variables, the scope gives, isolation, lifetime control or just cleaning garbage(variables that you dont use anymore that still use memory), abstraction internal stay internal.

**How it works:**
- Everytime we create a function, codeblock or Global piece of code the system creates a lexical environment, this environment will have the functions variables, etc of that code block and an outer reference to the parent scope or global. This environment will check in execution if we for example use a variable, it will search inside its own first and if its not in there will check in the parent reference scope, untill global if is not in global or in their parents, it will give us a reference error.


**Example:**
```javascript
    /* - Global Scope: 
        - Is declared outside any function/block.
        - Slowest look up.
        - Highest collition risk(Two variables are named the same).
        - Use rarely
    */
        let a = 1;
        function f() {
            console.log(a)
        }
        //Here we declared a variable in global scope called a and assigned the number 1
        // Then we use it inside f function and we can use it because is global.

    /* - Function Scope: 
        - Created when a function runs.
        - variables live only during function execution.
        - Each call creates a new scope.
        - used for ecanpsulation and reuse.
    */
        function sum(){
            let number1 = 1;
        }
        // Here we create a function called sum and it has a varaible declaration, so that variable will only exisst during execution of the function.

    /* - Block Scope(let/const): 
        - Created by {} in: if, for, while, try.
        - Standalone blocks.
        - Safest scope.
        - prevents accidental reuse.
        - var does not respect block scope.
        - default choice.
    */
        if (true){
            let b = 2;
        }

    //Scope chain example
        let x = 1;

        function outer() {
        let y = 2;

        function inner() {
            let z = 3;
            console.log(x, y, z);
        }

        inner();
        }

        outer();
    /* Look Up order inside inner:
        z = found
        y = not in inner scope, look up for parent scope, found.
        x = globalscope
    */

```
**When to use:**
- We use block scope for: 
  - loops, conditionals, temporary variables.
  
- Function scope:
  -  for private helpers and encapsulating logic.
  
- GLobal scope: 
  - app entry potins, constanst truly shared.


## Aha Moments 💡
- Every block, function, global scope, creates is own lexical enviroment with a reference to the outer parent scope.
- [Connection you made between concepts]

---

## Confusion Points ❓
- Dont undestand closure yet
- what is hoisting and what is the difference between scope and closure

---

## Daily Exercises ✅

1. [X] **Exercise 1:** [Set of exercises for understanding and practicing scope mainly predicting the output]


**My Solution Code / Notes:**
```javascript
    // Scope Exercises
    //1. Block vs outer scope
    let x = 1;

    if (true) {
        let x = 2;
        console.log(x); // x = 2 because it search first in the inner lexical enviroment
    }

    console.log(x); // x = 1 because is global and is the only variable accesible in this case
    //2. Function scope lookup
    let a = 10;

    function test() {
    console.log(a);// reference error because lexical enviroment has the bind of a but is uninitialized
    let a = 5;
    }

    test();
    //3. Scope chain
    let n = 1;

    function outer() {
    let n = 2;

    function inner() {
        console.log(n);// n = 2 because the lexical enviroment will look up for the first variable in the outer parent scope so the n is the closest one
    }

    inner();
    }

    outer();
    //4. Loop + closure
    for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);// 0, 1, 2
    }, 0);
    }

    //5. Shadowing

    let value = "global";

    function demo(value) {
    console.log(value);// local because the scope of the args is inside the same lexical enviroment
    }

    demo("local");

```

---

## Code I Wrote (Project/Experiment)

**File(s):** `[day_4_session_1_variable-scope.js]`

**What I built:**
- Set of examples of types of scope

**Key techniques used:**
- Global scope, function scope, block scope.

**Bugs I hit:**
- 

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What is scope**
- A set of rules that define what variables, functions or parameters you can access in the part of code you are.

**2. Types of scopes and their uses**
- There are 3 types of scope:
  -Global: This scope is when all the other parts of code can access and is used for constants or app initializations, things that are truly shareable.
  -Function: THis is the scope you have when creating a function, the idea of this is to encapsulate and isolate the content inside, you can only access to it if you are inside the scope and a lexical enviroment is created everyime we make a function call.
  -Block: used in If, loops, etc, like the function scope.


**4. What's one thing I still don't fully understand?**
-Difference between scope and closure.

**5. The "ELI5" Summary**
-scope is what i can access in a spefic block of code.

---

## Next Session Focus
- Closure and hoisting

---

## Reflection

**What went well:**
- Finally understanding what scope was.

**What was hard:**
- Understanding how lexical enviroment works and scope in general

**Time management:**
- Did I stay focused? Yes

**Energy level:** 7/10
**Confidence on this topic:** 7/10

---
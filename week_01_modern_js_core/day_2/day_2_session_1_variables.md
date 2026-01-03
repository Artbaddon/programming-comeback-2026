
# Session 1: Variables
**Date:** Friday Jan 2 2026
**Time:** 20:45 - 22:00
**Duration:** 75 minutes
**Review Date:** Jan 5(Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What's the difference between `let`, `const`, and `var`?
2. What is "hoisting" in JavaScript?

**My guesses:**
- The main differences between let const and var are: Let is the most used one, because you can assign more than 1 value to the variable itself and the difference between let and var is that var doesnt have an own scope, meaning that if you declare it inside an IF, you can use it outisde, so all the declarations with var are global, and we have const, that can only hold the first value that you declare it with. Other key difference is that you can declare a null or empty var or let, but with constant, requrires an assingment in the same moment as the declaration.
- I dont remember what is hoisting, is maybe something related with lexical enviroment and how the var doesnt have the same capability as the let
---

## Resources Used 📚
- [JavaScript.info: Variables](https://javascript.info/variables)
- [JavaScript.info: Variable Scope](https://javascript.info/closure#lexical-environment)
---

## Notes (Write in MY words during session)

### Variables

**What it is:**
-Variables are like boxes to hold data with a name, a named storage. In more technical terms, 

**Why it exists:**
-It exists because in programming, you often need to hold information but want to give it a name that can identify it, for example i have the variable called userFullName, that will hold the user name but if i want to access it i will just call userFullName and i will not have to write the name again because i already have it storage in a box called name
**How it works:**
-A variable is a name bound to a value managed by the JavaScript engine. The engine decides where and how that value is stored in memory.
**Example:**
```javascript
    let importantMessage;
    // I declare a variable called importantMessage with a null value.
    importantMessage = "Save the world my final message goodbye."
    //Here i assign the text to my important message variable

    alert(importantMessage)
    //THis shows the value of important message in an web alert.
```

**When to use:**
-You use it everyime you need to store data for using it later, for example to save the name of the user in session.

---

### Variable Naming

**What it is:**
-Is the way of how JavaScript let us name our variables, the limitations of the naming and the basic concepts for a better understanding. There are two main limitations on variable names in JSm the name must contain only alphanumerical characters or the symbols $ and _, the first character mumst not be a digit. The case matters two the variables "let tex;" and "let TEXT", wll be two different variables

**Why it exists:**
-This exists because the ECMA script spefication say that the variables must be valid unicode chars, and also because the  lexer needs to distinguis between the variables and the operators so we cannnot name our variables with +-./*
**How it works:**
- The lexical parser, reads character by character of our code, then groups the characters into tokens or groups, number, name, operator, etc, and to do this it use identifiers, so _ $ will keep reading because they are allowed for names, the moment it sees something like + or (), it stops the name and starts grouping the operators.
**Example:**
```javascript
    let userName;
    let test123;
//No errors, we are using the rules given
    let 1username;
    //This will give us an error because we cant use a digit as the first character on the name of a variable.
```

**When to use:**
-When naming a variable

--
### Constants

**What it is:**
-Is a named storage but for declaring constants, unchanging variables, that use const instead of let, they cannot be reassigned.
**Why it exists:**
-because sometimes we need to store data that never changes.
**How it works:**
-A constant is a name bound to a value where the binding cannot be reassigned.
You can still change the value inside the object if the value is mutable.
**Example:**
```javascript

```

**When to use:**
-When naming a variable that we already know that will never change

---
## Aha Moments 💡
- The lexical enviroment needs to distinguish between alphanumerical characters because when it parses the code, it needs to separate operators from the variables itself using identifiers that group in different stuff.
- [Connection you made between concepts]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Daily Exercises ✅

1. [X] **Exercise 1:** [Description]
2. [X] **Exercise 2:** [Description]
3. [X] **Exercise 3:** [Description]

**My Solution Code / Notes:**
```javascript

const a = 10;
a = 20;
//const binding cannot be reassigned
const obj = { x: 1 };
obj.x = 2;

//The binding is fixed but the value of the obj itself can be changed, we cannot reassign obj but change the value inside

let x = 5;// 5
let y = x; // 5
x = 10;
console.log(y);

//Y is = 5 because on the first we bind the name x to the value 5 and then we do the same but binding the variable y with the the value of x in that moment, so even if we reassign x, the value was the one in that speficic moment so is still 5

// 1. Declare a variable with `var` inside an `if` block. Can you access it outside? Try the same with `let`.

if (true) {
    var pepe = "hola";
}
// you can still access it because it doesnt have internal scope os is always global
alert(pepe);
// 2. Try to reassign a `const` variable. What happens? Now try to modify a property of a `const` object.
const reassign = "Hello"
reassign = "goodbye"
//const binding cannot be reassigned
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `[day_2_session_1_variables.js]`

**What I built:**
- Exercises for understanding variables in JS

**Key techniques used:**
- 
- 

**Bugs I hit:**
- [Problem you encountered]
- [How you solved it]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. [Explain the difference between `let` and `const` without looking.]**
-let is used for variables values that can change and const for constant values, values that will not change.

**2. [When would you ever use `var`? (Trick question!)]**
-Whenever you are in old systems that dont use the ES6.

**3. [Recall question 3]**
[Your answer from memory]

**4. What's one thing I still don't fully understand?**
-Temporal Deadzone

**5. The "ELI5" Summary**
-Variables are boxes with a name for storing our toys and for having a fast access to them.

---

## Next Session Focus
- Continue with the old var and hoisting

---

## Reflection

**What went well:**
- I remembered and changed my vision of variables in C to the ones in JS

**What was hard:**
- To change the pointer mentality and understand the binding, lexer, parser and lexical enviroment

**Time management:**
- Did I stay focused? YEs

**Energy level:** 5/10
**Confidence on this topic:** 8/10

---
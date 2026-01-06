# Session 1: Arrow Functions
**Date:** Monday Jan 5 2026
**Time:** 19:00 : 19:50
**Duration:** 50 minutes
**Review Date:** Jan 8 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What are arrow functions?
2. How do they differ from regular functions?

**My guesses:**
- Arrow functions are different and more practical way of writing functions
- The difference is that with arrow functions you dont have a this property so if you use it in the method of an objetct you can still access the method this.
---

## Resources Used 📚
- [JavaScript.info: Arrow Functions Basics](https://javascript.info/arrow-functions-basics) 
- [Link 2]

---

## Notes (Write in MY words during session)

### Arrow funtions

**What it is:**
- Is a different way to write functiosn that is more conscise in terms of syntax and is oftenb etter than normal function expressions.
**Why it exists:**
- They exists as a syntactical sugar of the normal function expression but with some differences.

**How it works:**
- Like a standar function, you basically use (arg1, arg2...) => expression, in the left side, inside the parenthesis you put the arguments of the functions and in the right side the expression itself, the args can be em,pty so you will only write ()=> if you dont need ther args. You can also create one line functions, because if you put only 1 line in the expression, it counts as a return so if you need to create 1 line function you will do it like this: (a, b)=>a+b. If we only have 1 argument, the parenthesis can be ommited.

**Example:**
```javascript
  
    // let func = function(arg1, arg2, args...){
    //     return expression
    // }
    //Is the same as:
     let func = (arg1, arg2, args...)    => expression;
     // In this case we create an arrow function called func were we put 3 arguments 
     // and because it only has 1 line the return is implicit

    //  let sum = function(a, b){
    //     return a + b;
    //  }
    //  is the same as:
    let sum = (a, b) => a + b

    let double = n => n * 2
    //here is the same as before but because it only needs 1 arg,
    // the parenthesis can be ommited

    let sayHi = ()=> alert("Hello");

    //In this case this function doesnt need arguments so the parenthesis
    //Are empty

    //We can also create dynamycally a function
    let age = prompt("What is your age", 21);
    
    let welcome = (age <18) ? 
        () => alert("Hello!") :
        () => alert("Greetings!");

    welcome()
    // IN this case we created two arrow functions 
    // as auxiliars without any argument and name


```

**When to use:**
- When you want to create auxiliar functions or short functions that doesnt need much, also when you want to create a method in a obj and need to share the this method.
- They can also used as a easier to write callback
---


## Aha Moments 💡

---

## Confusion Points ❓

---

## Daily Exercises ✅

1. [X] **Exercise 1:** Converting function declarations in arrow functions.
2. [X] **Exercise 2:** Creating an arrow function that returns an object implicitly using ()
3. [X] **Exercise 3:** One liner function to check if a number is even or not

**My Solution Code / Notes:**
```javascript
    //1. Rewrite this functions
    // function ask(question, yes, no) {
    //     if (confirm(question)) yes();
    //     else no();
    // }

    // ask(
    //     "Do you agree?",
    //     function () { alert("You agreed."); },
    //     function () { alert("You canceled the execution."); }
    // );

    let ask = (question, yes, no) => confirm(question) ? yes() : no()
    ask("Do you agree?", () => alert("You agreed"), () => alert("You canceled the execution."))



    // function add(a, b) { return a + b; }
    // function square(x) { return x * x; }
    // function greet() { return "Hello!"; }

    let add = (a, b) => a + b;
    let square = x => x * x;
    let greet = () => "Hello";

    // 2. Create an arrow function that returns an object `{ name: "John", age: 25 }` implicitly.
    let createPersonObj = (name, age) => ({ name, age })

    // 3. Create a one-liner that checks if a number is even.
    let numberIsEven = (number) => number % 2 ? "Is Not even" : "Is even"
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `day_5_session_1_arrow_functions.js`

**What I built:**
- Exercises to practice arrow functions.

**Key techniques used:**
- using parenthesis to return obj with arrow functions
- implicit return

**Bugs I hit:**
- [Problem you encountered]
- [How you solved it]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. Write the shortest possible arrow function that doubles a number**
  ```javascript
  let doubleNum = n => n * 2;
  ```

**2. How do you implicitly return an object from an arrow function?**
- You do it by using parenthesis before the {} of the object 
**3. What's the difference between `x => x * 2` and `x => { x * 2 }`?**
- In the first one the return is implicit so it will work, in the second one we dont have a return so it will be undefined.

**4. What's one thing I still don't fully understand?**


**5. The "ELI5" Summary**
- Arrow functions are like a shorter way to write something for example with the word father, 
  you can say dad, they mean the same but one is shorter.

---

## Next Session Focus
- Arrow functions this.

---

## Reflection

**What went well:**
- I rembered arrow functions and discover that i remember quite a lot about this topic so it was easy.

**What was hard:**
- Nothing

**Time management:**
- Did I stay focused? Yes

**Energy level:** 7/10
**Confidence on this topic:** 9/10

---
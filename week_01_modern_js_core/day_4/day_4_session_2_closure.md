# Session 2: Closure
**Date:** Sunday Jan 4 2026
**Time:** 11:30 - 12:40
**Duration:** 70 minutes
**Review Date:** Jan 15 (7 days Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is closure?
2. What is hoisting?

**My guesses:**
- We call closure in JS at the capability that a piece of code has to access variables or functions that are not in his own scope.
- Hoisting is the capability that a function has to be able to being use it before declaring it.

---

## Resources Used 📚
- [JavaScript.info: Variable Scope](https://javascript.info/closure) 
- [JavaScript.info: The Old Var](https://javascript.info/var) 
---

## Notes (Write in MY words during session)

### Closure

**What it is:**
- A closure is a function that remembers is outer variables and can access them.

**Why it exists:**
- To let function keep access of the data from the parents without the needing of exposing them globally.

**How it works:**
- When you create a function you also create a hidden [[Environment]] property that will remember the lexical environment the function was created in, so every function declaration is a closure in JS

**Example:**
```javascript
    function counter(){ //We declare a function called counter
        let count = 0;// We declare a variable called count and assign the value 0

        return function(){// we return an anonymous function 
            count++; //This anonymous function will first look for his inner lexical environment to see if it has the count var, it doesnt so it will add the outer scope one
            console.log(count)
        }
    }

    const num = counter();
    // Here we assign the returned function from counter to num.
    // That function already has a [[Environment]] reference
    // to counter’s lexical environment where count = 0.

    num()
    // A new call lexical environment is created.
    // count is not found there, so it is taken from the [[Environment]].
    // count becomes 1.
    num()
    // Another new call lexical environment is created.
    // It still does not have count.
    // The same [[Environment]] is used again.
    // count was 1, now becomes 2.
```

**When to use:**
- Everytime we want to access outer variables and only in function declarations, because if we use the new Function method, this will not work.


---

## Aha Moments 💡
- How [[Enviroment]] works and how you can share the values even in two different variables
- [Connection you made between concepts]

---

## Confusion Points ❓
- Hoisting
- What is hoisting in depth

---

## Daily Exercises ✅

1. [X] **Exercise 1:** [Closure exercises the idea predicting the output]


**My Solution Code / Notes:**
```javascript
    //1. Basic closure
    function makeFn() {
    let x = 1;
    return function () {
        console.log(x);
    };
    }

    const f = makeFn();
    //Here we assign the returned function from makeFn to f.
    f();
    //Here we use f() that will show us always x

    //3. Multiple closures, same parent
    function outer() {
    let v = 10;
    return [
        () => console.log(v),
        () => { v += 5; }
    ];
    }

    const [read, add] = outer();
    // Here we assign the returned array of functions from outer()
    // and destructure it so read gets the first function and add the second one.

    add();
    // Here we call the add function.
    // It uses its [[Environment]] to access v and adds 5 to it.
    read();
    // Here we call the read function.
    // It accesses the same [[Environment]] and logs the current value of v.

    //5. Closure after outer finished

    function factory(x) {
    return function (y) {
        return x + y;
    };
    }

    const add5 = factory(5);
    // Here we call factory, creating a lexical environment where x = 5.
    // The returned function captures that environment and is assigned to add5.
    console.log(add5(3));
    // Here a new call lexical environment is created for the inner function with y = 3.
    // x is not found there, so it is taken from the captured [[Environment]].
    // 5 + 3 → 8 is returned.
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `[day_4_session_2_closure.js]`

**What I built:**
- Exercises using closures 

**Key techniques used:**
- 
- 

**Bugs I hit:**


---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What is closure**
Closure are functions that can access the outer variables


**4. What's one thing I still don't fully understand?**
Hoisting

**5. The "ELI5" Summary**
Closures remember outer variables

---

## Next Session Focus
- Hoisting

---

## Reflection

**What went well:**
- Understood closures

**What was hard:**
- Understanding closures and why they share the same [[Environment]] even if you use two differEnt called to functions

**Time management:**
- Did I stay focused? Yes

**Energy level:** 6/10
**Confidence on this topic:** 7/10

---
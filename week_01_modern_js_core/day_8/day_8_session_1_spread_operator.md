# Session 1 and 2: Rest parametrers and spread Synax
**Date:** Thursday Jan 8 2026
**Time:** 20:00 : 20:50, 21:00 : 21:30 (Practice session)
**Duration:** 80 minutes (Two Sessions)
**Review Date:** Jan 11 (Spaced Repetition)


---

## Pre-Session Questions (Answer BEFORE you start)
1. What does the spread operator (`...`) do?
2. How is spread different from rest?

**My guesses:**
- It iterates an array and is a way to say pass all items and not specifing what items to a function
- spread usually is used for iterating or saying all items of x array and rest is for arguments on a function like saying n number of arguments

---

## Resources Used 📚
- [JavaScript.info: Spread Syntax](https://javascript.info/rest-parameters-spread#spread-syntax) (15 min)

---

## Notes (Write in MY words during session)

### Rest parametrs

**What it is:**
-Rest parametrs is basically a way using 3 dost of gathering the remaining parametrs into an array, for example you have a function that need 2 parametrs and you are passing 4, so if you use the rest in the function ...args, you will have the 3 and 4 paramer in an array.
-The rest parametrers must be at the end

**Why it exists:**
-For solving the issue of handling n number of arguments in functions and because is an array is more easily to manipulate. It is a replacement for arguments, and it works with arrow functions too.

**How it works:**
-You put the ... in the last parameter of a function. It will collects all the remaining arguments that arent defined explictly into an array.

**Example:**
```javascript

    //Rest parametrs for sum all n numbers

    function sumAll(...args) {//..args, all the arguments passed here will become an array called args
        let sum = 0;

        for (let arg of args) sum += arg;
        return sum

    }

    console.log(sumAll(1,4,5,6,1,1,2,3,1,1))

```

**When to use:**
- You use it in functions with variable arguments.
- In middlewares or wrappers
- In Utility helpers

---

### Spread syntax
**What it is:**
- Is the opposite of rest parameters, is for expanding an iterable for passing it as an argument, is passing all the items of an iterable at once. 
- You can also pass multiple iterables that way and can combined it with normal variables.
- You can merge arrays using that.

**Why it exists:**
- To solve the problem of needing to pass all the items of an iterable as arguments.
**How it works:**
- Is just a hidden for of behind.
**Example:**
```javascript

    let arr = [1,2,3];

    alert(math.max(...arr));


    let arr1 = [1,2,3,5,6,1];
    let arr2 = [2,1,2,3,10];
    alert(math.max(...arr1,...arr2))

    //merge arrays
    let arr3 = [1,2,3]
    let arr4 = [4,5,6]
    let mergedArr = [...arr3,...arr4];

    //Works with any iterable

    let str = "Hello my guy";
    alert([...str]);

```

**When to use:**
- When wanting to pass all items of an iterable as arguments.

---

## Aha Moments 💡
- [Something that clicked for you]
- [Connection you made between concepts]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Daily Exercises ✅

1. [ ] **Exercise 1:** [Description]
2. [ ] **Exercise 2:** [Description]
3. [ ] **Exercise 3:** [Description]

**My Solution Code / Notes:**
```javascript
// Paste your solution code here
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `[filename.js]`

**What I built:**
- [Brief description]

**Key techniques used:**
- 
- 

**Bugs I hit:**
- [Problem you encountered]
- [How you solved it]

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)



**1.What's the difference between spread and rest?**
-Rest is used in functions for specifying all the args into an array, spread is the opposite meaning that is used for passing all items for an iterable as arguments to a function.

**2.Why is `[...arr]` a shallow copy? What's the danger?**
-Is a shallow copy because is a copy by value and not by reference so if you change the copied arr the main one is not updated.

**3. 3. How do you merge two objects with spread?**
-let arrMerged=[...arr1, ...ar2]

**4. What's one thing I still don't fully understand?**
-

**5. The "ELI5" Summary**
-Imagine that you want to eat a bag of candies and you want to separate some and the other ones save them in a bag for later that is rest, you can select some args

---

## Next Session Focus
- Array Methods map, filter

---

## Reflection

**What went well:**
- I understood the difference between the two

**What was hard:**
- 

**Time management:**
- Did I stay focused? Yes/No

**Energy level:** X/10
**Confidence on this topic:** X/10

---
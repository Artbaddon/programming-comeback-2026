# Session 1: Array methods
**Date:** Tuesday Jan 13 2026
**Time:** 18:30 : 19:20
**Duration:** 50 minutes
**Review Date:** Jan 16 (Spaced Repetition)
---

## Pre-Session Questions (Answer BEFORE you start)
1. What does `map()` do?
2. How is it different from a `for` loop?
**My guesses:**
- Map is an array function that will iterate through all the items of an array and will return a shallow copy of the array.
- Is different becuase you can use a function as an argument to the method so and the return value will be an array

---

## Resources Used 📚
- [JavaScript.info: Array Methods - map](https://javascript.info/array-methods#map) (10 min)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) (10 min)
---

## Notes (Write in MY words during session)

### Array methods

**What it is:**
-They are in built functions to make things easier.

**Why it exists:**
-To solve the problem of using the same code over and over again to manage arrays

**How it works:**
-They are pre defined code that do something

**Example:**
```javascript
// Code example with comments explaining each line

//SPLICE
//It can do anything, insert, remove and replace elements
//arr.splice(start[,deleteCount, elem1,...,elemnN])
//It modifies arr starting from the index start: removes deletecount elments and then isnerts elem1, at their palce, the return value is the array of removed elements

//Deletion
let arr = ["I", "am", "a Robot"];
arr.splice(1,1)// From inax one remove 1 element;
alert(arr)

//removing 3 elements and adding other two
let arr2= ["I", "am", "the" ,"one","human", "who","dont","walk"];
arr2.splice(3,4,"Who", "Sold","The World")
```

**When to use:**
-When you want to for example pass a function or do something about every value on an array.

---


### Array methods : Map

**What it is:**
 - Map is a method that calls the function you pass as an argument of reach elemnt of the array and returs an array of result.
**Why it exists:**
- Because you usually need to pass a function to all the items of an array.

**How it works:**
-The synax is easy, you assign or delclare a variable, then you write the array that you want to manipulate, then pass the .map function that needs a callback, a function as an argument and that function have 3 arguments, item, idx, and the array itself, then at the en returns the new value after the function to the variable sou  assgined to
```javascript
// let result = arr.map(function(item, index, array) {
//   // returns the new value instead of item
// });
```

**Example:**
```javascript
let lengths=["Vito","Mike","Pedro"].map(item=>item.length);
//Here the lenghts array is assigned to the return value of the lenght of each item in the array.
```
**When to use:**
-When you need to pass a function to all items and dont want to mutate the original array.
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

1. [X] **Exercise 1:** Exercises about array methods
2. [ ] **Exercise 2:** [Description]
3. [ ] **Exercise 3:** [Description]

**My Solution Code / Notes:**
```javascript

{
    const numbers = [1, 2, 3, 4, 5];
    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    // 1. Double all numbers
    const doubledNumbers = numbers.map(item => item * 2);

    // 2. Get array of just names from users
    const usersName = users.map(item => item.name)
    // 3. Create array of strings: "Alice is 25 years old"
    const arrayOfInfo = users.map(ele => `${ele.name} is ${ele.age} years old`);
    // 4. Add index to each: [{ ...user, index: 0 }, ...]
    const indexedUsers = users.map((ele, idx, array) => {
        const actualobj = ele;
        actualobj.index = idx;

    })
}
let numbers = [2, 5, 6, 7, 8, 9, 10]
// Convert numbers to their squares
const squares = numbers.map((ele) => Math.pow(ele, 2))
// Convert strings to uppercase
const array = ["I", "am", "the", "one", "human", "who", "dont", "walk"];

const upperCasedarray = array.map((ele) => ele.toUpperCase())

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


---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1.  Does `map()` modify the original array?**
- No, it creates a shallow copy.
**2.  What are the 3 parameters the callback receives?**
- item, idx, array

**3.  What happens if you don't return anything in the callback?**
- The array will be returned with undefiend for each item

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
-Imagine that you want to mark every page of a book with the number, so you use a map to mark each page of the book
---

## Next Session Focus
- filter(), findIndex(), find()

---

## Reflection

**What went well:**
- i remebered map and did exercises

**What was hard:**
- 

**Time management:**
- Did I stay focused? YEs

**Energy level:** 6/10
**Confidence on this topic:** 8/10

---
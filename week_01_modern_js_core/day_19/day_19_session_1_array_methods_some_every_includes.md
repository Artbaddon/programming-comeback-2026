# Session 1: some(), every()
**Date:** Monday Jan 19 2026
**Time:** 17:00 : 17:50
**Duration:** 50 minutes
**Review Date:** Jan 19 (Spaced Repetition)
---

## Pre-Session Questions (Answer BEFORE you start)
1. What does `some()` check for?
2. What does `every()` check for?

**My guesses:**
- Some is an array method to find if an item of the array meets the requierement of the function we pass as an argument.
- Every is to check if all items meet the criteria or function that we pass, test function.
  
---

## Resources Used 📚

- [MDN: Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) (15 min)
- - [MDN: Array.prototype.very()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) (15 min)

---

## Notes (Write in MY words during session)

### Array methods: Some

**What it is:**
-Is a method of an array that returns true if it finds one lement in the array that satifies the testing function, if no it returns false.

**Why it exists:**
-Basically it makes searching for something in an array easier because you dont have to write a for loop directly.

**How it works:**
-the syntax is simple, it receives a function as an argument that will be executed for every item on the array untill it returns a true value or a false if nothing meets the criteria. the function arguments are:
Element: the current element being processed in the array.
index: the index of the current elemnt bein processed.
Array: the array some was caleld upon.

**Example:**
```javascript
// Code example with comments explaining each line
const array = [1, 3, 4, 5, 6];
const even = ele => ele % 2 === 0;
function isBiggerThan10(ele, index, array){
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);//false
[12, 5, 8, 1, 4]. some(isBiggerThan10)//true;

```

**When to use:**
-Form validation to check if a field is valid or not.
---

### Array methods: Every

**What it is:**
-Is a method of an array that returns true if it finds that all elements in the array satifies the testing function, if does not it returns false.

**Why it exists:**
-Basically for speeding the process of validating that all the items in an array meets the required criteria, it makes that you dont have to write a loop.

**How it works:**
-the syntax is simple, it receives a function as an argument that will be executed for every item on the array untill one returns a true value or a false if nothing meets the criteria. the function arguments are:
Element: the current element being processed in the array.
index: the index of the current elemnt bein processed.
Array: the array some was caleld upon.

**Example:**
```javascript
// Code example with comments explaining each line
const numbers = [2, 4, 5, 6, 7];
function isEven(ele){
    return ele % 2 == 0;
}
numbers.every(isEven)
```

**When to use:**
-Form validation where all fields must be valid.
-Permission checks where all conditions must be met.
---


## Aha Moments 💡


---

## Confusion Points ❓


---

## Daily Exercises ✅

1. [X] **Exercise 1:** Exercises about some and every


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

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. What does `some()` return if the array is empty?**
-False

**2. What does `every()` return if the array is empty?**
-False

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
-Imagine you have a lot of soldiers and you want to see if they need to be cleaned so you seach everyone untill one is dirty.
---

## Next Session Focus
- includes()
---

## Reflection

**What went well:**
- I learned and did exercises to practice some and every.

**What was hard:**
- 

**Time management:**
- Did I stay focused? Tes

**Energy level:** 6/10
**Confidence on this topic:** 9/10

---
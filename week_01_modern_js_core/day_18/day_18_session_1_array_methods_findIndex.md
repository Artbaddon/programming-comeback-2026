# Session 1: Array methods (find index )
**Date:** Sunday Jan 18 2026
**Time:** 10:10 : 10:50
**Duration:** 50 minutes
**Review Date:** Jan 18 (Spaced Repetition)
---

## Pre-Session Questions (Answer BEFORE you start)
1. What does `findIndex()` return if nothing matches?


**My guesses:**
- It returns -1 because is not in the array.


## Resources Used 📚
- [Fun Fun Function: Reduce](https://www.youtube.com/watch?v=Wl98eZpkp-c) (12 min video - WATCH THIS)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) (15 min)
- [MDN: Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) (15 min)

---

## Notes (Write in MY words during session)

### Array Methods Find Index

**What it is:**
-It is an array method that returns the index of the first elemnt in an array that mathces the provieded fuction, if no elemnts satisy the function it returns (-1)
Basically you pass a function as the callback argument.

**Why it exists:**
-It exist because in some scenarios you want to find the index of x item in an array rather than the item itself and with large data is more practical to save the index than the whole item.

**How it works:**
-the main parameter is a callback function, that will be executed for each elemnt of the array, in has to return a truthy value to say that a matching elemnt has been found. this function is called with the following arguments:
  -Element: the current elemnt being processed in the array.
  -index, the index of the current elemnt being processed in the array.
  -array, the array findIndex was called uppon.
It returns -1 if nothing mathches the function.

**Example:**
```javascript
    const array = [1,2,3,4,6];
    const isLargeNumber = element => element > 4;

    console.log(array.findIndex(isLargeNumber));
```

**When to use:**
- Shopping cart, when you want to tind the index of a product by id to update the quantity or remove it.


---

### [Main Concept 2]

[Same structure as above]

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

**1. What does `findIndex()` return if nothing matches?**
it returns -1



**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
-imagine you want to find what box has the color green, you use findIndex to find it.
---

## Next Session Focus
- [What you'll study next]

---

## Reflection

**What went well:**
- I understood the syntax and the findINdex method

**What was hard:**
- 

**Time management:**
- Did I stay focused? YEs

**Energy level:** 7/10
**Confidence on this topic:** 9/10

---
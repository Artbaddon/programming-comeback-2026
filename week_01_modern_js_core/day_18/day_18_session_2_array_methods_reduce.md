# Session 1: Array methods (find index )
**Date:** Sunday Jan 18 2026
**Time:** 11:10 : 11:50
**Duration:** 50 minutes
**Review Date:** Jan 21 (Spaced Repetition)
---
---

## Pre-Session Questions (Answer BEFORE you start)
1. What is `reduce()` used for?
2. What is an "accumulator"?

**My guesses:**
- 
- 

---

## Resources Used 📚
- [Fun Fun Function: Reduce](https://www.youtube.com/watch?v=Wl98eZpkp-c) (12 min video - WATCH THIS)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) (15 min)

---

## Notes (Write in MY words during session)

### Array Methods Reduce

**What it is:**
- Reduce is a method of array that executes a reducer callback function on each elemnt of the array, passing in the return value from the calcultaion of the previous element, then the final result of running reduce is returned as a single value.

**Why it exists:**
- to transform an array into a single value, and to rpelace manual loops where you need to accumulate a result.

**How it works:**
-The main arguments are 2:
    - A function that takes:
      - accumulator (the last value used, in the first iteration is the 0 index of the arr),
      - current (current elemnt),
      - index,
      - array
    - And the initial value or accumulator, it can be an array, obj, string, etc.
- the return value will be saved in the accumulator initial variable.

**Example:**
```javascript
// Code example with comments explaining each line
const array = [1,2,3,6,7];
const sumOfArr = array.reduce((acc,curr)=> acc + curr ,0)


```

**When to use:**
- Summing values, grouping data by category.
- Counting occurences.


## Aha Moments 💡
- the second argument can be other things than a number.
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

**1. What are the two required parameters of the reduce callback?**
[Your answer from memory]

**2. What happens if you don't provide an initial value?**
[Your answer from memory]

**3. Explain reduce like you're teaching a 5-year-old (ELI5).**
[Your answer from memory]

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
[Explain the main concept in ONE simple sentence]

---

## Next Session Focus
- [What you'll study next]

---

## Reflection

**What went well:**
- 

**What was hard:**
- 

**Time management:**
- Did I stay focused? Yes/No

**Energy level:** X/10
**Confidence on this topic:** X/10

---
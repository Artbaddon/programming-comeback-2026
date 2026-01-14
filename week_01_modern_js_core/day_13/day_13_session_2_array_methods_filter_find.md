# Session 1: Array methods
**Date:** Tuesday Jan 13 2026
**Time:** 19:40 : 20:30
**Duration:** 50 minutes
**Review Date:** Jan 16 (Spaced Repetition)


---

## Pre-Session Questions (Answer BEFORE you start)
1. What does `filter()` do?
2. What should the callback return?
**My guesses:**
- Filter basically is iterates through all the items and pass a function that will filter the items, returning only the thigns that pass that filter
- An array with the items that pass the filter.
- 

---

## Resources Used 📚
- [JavaScript.info: Array Methods - filter](https://javascript.info/array-methods#filter) (10 min)

---

## Notes (Write in MY words during session)

### Filter()

**What it is:**
-Is a method of array that creates a shallow copy of a portion of the given array that is fileterd to only the elemnts that pass the test of the function you pass.
**Why it exists:**
-To be able to filter and not mutate the original array but create an array with items that met the conditio we pass as a callback in the argument.

**How it works:**
-It iterates through all the items and pass the filter function, then return only the ones that fit(that return a truhty value).

**Example:**
```javascript
// Code example with comments explaining each line
function isBigEnough(value){
    return value >= 10;
}
//Here we create a function that will return tru if the value is equal or greater than 10.

const filtered = [12,5,8,130,44].filter(isBigEnough);
//in this case we pass to the array of numbers a filter, that will return an array with the items that meet the function or the value is truthy.


{
    //To filter invalid entries 
    const arr = [
        {id:15},
        {id:-1},
        {id:0},
        {id:3},
        {id:12.2},
        {},
        {id:null},
        {id:NaN},
        {id:"undefined"}
    ]

    let invalidEntries =0;
    function filterByID(item) {
        // here we created a function that will see if the id of the item we pass is finite, meaning that is a number and if is not zero, if they are not, they will return false, if they are the return value will be true.
        if(Number.isFinite(item.id) && item.id !== 0){
            return true;
        }else{
            invalidEntries++;
            return false;
        }
    }
    const arrBYID = arr.filter(filterByID);

    console.log("FIltered array\n" + arrBYID);
    console.log("NUmber of invalid entries =" + invalidEntries)
}
```

**When to use:**
-Filter products by price, category, or availability.
-When you want to show only the completed tasks in a todo list app.
---


## Aha Moments 💡
- The filter occurs when the callback returns true or false.
- [Connection you made between concepts]

---

## Confusion Points ❓


---

## Daily Exercises ✅

1. [X] **Exercise 1:** Basic Exercises about filtering basic data
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

**1. What does the filter callback need to return?**
-IT has to return true, if it met the condition and will be added to the array or false if not.
**2.  How do you chain `filter()` and `map()`?**
-by putting .map() beside it

**3.  What's a quick way to remove all falsy values from an array?**
you just create a function that return the item, if is falsy it will not be filtered.

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
-Imagine that you want to select only the toys on a box that are green, thats filter

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
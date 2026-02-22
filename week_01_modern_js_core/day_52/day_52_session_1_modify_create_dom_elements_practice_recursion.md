# Session X: [Topic Name]
**Date:** [Date]
**Time:** [Start time - End time]
**Duration:** 50 minutes
**Review Date:** [Date + 3 days] (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. [Question about today's topic]
2. [Another question about today's topic]

**My guesses:**
- 
- 

---

## Resources Used 📚
- [Link 1]
- [Link 2]

---

## Notes (Write in MY words during session)

### Recursion

**What it is:**
- Recursion is when a function call itself for solving problems then idea is to divide the problem in smaller parts
- Call stack: For each recursive function you will have new copys of the variables and you use it will be put in something called the call stack, that will contain all the recursive calls you do in the function, this call stack is a last in first out structure so you will be putting the recursive functions on top until you hit the base case, then it wills start removing from top and will give the return value of that function to the next one in the stack, that will go untill the stack is empty

**Why it exists:**
- Becase there are some operations or functions like looping over an object or finding in a folder of n number of subfolders but normally in nested structures you dont know how deep it will be.
- 
**How it works:**
- You define a base case that will be the poing where the function will stop calling itself and a recursive case where the function will call itself with a smaller or simpler version of the input

**Example:**
```javascript
    function countDown(n) {

        // Base case: stop when we hit 0
        if(n <= 0){
            console.log("done!");
            return;
        }

        console.log(n);
        countDown(n-1)// recursive call> call itself with a smaller n
    }
    countDown(3);
    //output 3, 2, 1, done!
```

**When to use:**
- When you want to find something in a lot of folders

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

**1. [Recall question 1]**
[Your answer from memory]

**2. [Recall question 2]**
[Your answer from memory]

**3. [Recall question 3]**
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
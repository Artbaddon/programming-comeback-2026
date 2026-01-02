# Session 1: Variables
**Date:** Jan 1 2026
**Time:** 22:50 - 23:10
**Duration:** 20 minutes
**Review Date:** Jan 4 2026 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What's the difference between `let`, `const`, and `var`?
2. What is "hoisting" in JavaScript?

**My guesses:**
- `let` is the modern default because it cannot be redeclared in the same scope, `var` still allows redeclarations, and `const` must be assigned immediately and then stays fixed.
- Hoisting is JavaScript moving declarations to the top of their scope before execution so the identifier exists even if I wrote it later.

---

## Resources Used 📚
- [JavaScript.info: Variables](https://javascript.info/variables) (15 min read)
- [JavaScript.info: Variable Scope](https://javascript.info/closure#lexical-environment) (10 min read)

---

## Notes (Write in MY words during session)

### Main Concept 1: Picking between `let`, `const`, and `var`

**What it is:**
- Variables are just labeled boxes, but the keyword I pick controls redeclaration, reassignment, and scope.

**Why it exists:**
- ES6 introduced `let`/`const` so we stop accidentally leaking data to the global scope with `var`.

**How it works:**
- `let` creates block-scoped storage I can reassign, `const` is the same but frozen after the first assignment, and `var` is function-scoped and allows redeclaration.

**Example:**
```javascript
let stepsToday = 1;
const dailyTarget = 1;
var legacyCounter = 0; // only use when the environment forces it
stepsToday += 1;
legacyCounter = stepsToday;
```

**When to use:**
- Default to `const`, switch to `let` if the value really needs to change, and avoid `var` unless touching ancient APIs.

---

### Main Concept 2: Hoisting + the temporal dead zone

**What it is:**
- Hoisting means the declarations exist before runtime, but the value might still be `undefined` or even inaccessible.

**Why it exists:**
- The JS parser needs to know every identifier when it creates the execution context, so it pulls declarations up front.

**How it works:**
- `var` declarations hoist with an initial value of `undefined`, while `let`/`const` hoist but stay in the "temporal dead zone" until the line that initializes them.

**Example:**
```javascript
console.log(oldSchool); // undefined
var oldSchool = 1;

// console.log(modern); // ReferenceError (TDZ)
let modern = 2;
```

**When to use:**
- Remember hoisting when reading code so I know whether a reference error comes from TDZ or just a typo.

---

## Aha Moments 💡
- Realized `const` is really about preventing reassignment, not immutability of the value itself.
- TDZ finally made sense once I pictured JS creating boxes early but locking them until the assignment line.

---

## Confusion Points ❓
- Still mixing up when `var` inside blocks leaks to the outer scope—need to test with nested loops tomorrow.
- Want to double-check how hoisting interacts with function expressions vs. declarations.

---

## Daily Exercises ✅

1. [x] **Exercise 1:** Rewrite the "Hello" snippet using `const` + `let` only.
2. [ ] **Exercise 2:** Trace hoisting in a multi-function example.
3. [ ] **Exercise 3:** Build a tiny input form that enforces `const` defaults.

**My Solution Code / Notes:**
```javascript
let greeting = "Hello";
const emphasis = "!";
greeting = `${greeting}, world${emphasis}`;
console.log(greeting);
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `session_variables.js`

**What I built:**
- Micro warm-up that flips a `var` snippet into `let`/`const` so I physically type the new defaults.

**Key techniques used:**
- Reassignment practice with template literals.
- Quick console check to keep the "one line a day" habit alive.

**Bugs I hit:**
- Tried to reassign a `const` out of habit—Node reminded me instantly and I moved that value into a `let` instead.

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. Difference between `let`, `const`, and `var`**
- `const` is block-scoped and fixed, `let` is block-scoped and flexible, and `var` is function-scoped plus redeclarable.

**2. What is hoisting?**
- JS records declarations first so identifiers exist before runtime, but only `var` gets an automatic `undefined` value.

**3. When should I still reach for `var`?**
- Only when touching legacy code that depends on function scope or old browsers.

**4. What's one thing I still don't fully understand?**
- Whether `var` inside a `for` loop behaves the same when the loop is inside a function expression—need to demo it.

**5. The "ELI5" Summary**
- Variables are labeled boxes, and the keyword decides how strict the box behaves when I try to reuse it.

---

## Next Session Focus
- Finish the remaining exercises, especially hoisting traces, and read the lexical environment section again with fresh eyes.

---

## Reflection

**What went well:**
- Even on a low-energy day I still opened the editor, typed, and logged the work.

**What was hard:**
- Brain fog made it tough to write anything beyond a couple of lines.

**Time management:**
- Did I stay focused? Mostly—short session but no distractions once I sat down.

**Energy level:** 4/10
**Confidence on this topic:** 5/10

---
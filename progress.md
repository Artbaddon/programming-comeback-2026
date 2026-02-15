# Progress Log - January 2026

## Week 1 (Jan 1 - Jan 5)

### Thursday, Jan 1 - Day 1
**Goal:** Modern JS Core - Variables refresh
**Status:** [~] Partial
**Sessions:** 1/2 (weekday)
**Time:** 20 minutes

**Notes:**
- Revisited why `let`/`const` exist and typed a short reminder snippet to keep the streak alive.
- Realized I still blur hoisting with variable types, so I marked it for follow-up tomorrow.
- Habit win: even a single line keeps momentum better than skipping entirely.

**Commits:**
- docs: log week 1 day 1 progress


### Friday, Jan 2 - Day 2
**Goal:** Modern JS Core - Deepen variable scope & hoisting prep
**Status:** [x] Complete
**Sessions:** 1/1 (weekday)
**Time:** 75 minutes (20:45 - 22:00)

**Notes:**
- Captured aha that objects held by `const` stay mutable because only the binding is frozen.

- Session 3 (Hoisting): covered creation vs execution phases, TDZ, `var` hoisting, and function declaration vs expression behavior; practiced examples showing `undefined` for hoisted `var`, TDZ errors for `let`, and why function expressions fail when called before assignment.
**Commits:**
 - docs: add Day 4 session 3 — hoisting notes and examples
 - files: week_01_modern_js_core/day_4/day_4_session_3_Hoisting.js, week_01_modern_js_core/day_4/day_4_session_3_Hoisting.md
### Saturday, Jan 3 - Day 3
**Goal:** Modern JS Core - Closure (light practice)
**Status:** [~] Partial
**Sessions:** 1/1 (weekend)
**Time:** 25 minutes

**Notes:**
- Did the exercise set to keep consistency; rested instead of deep-diving into closure. Will return to the closure topic tomorrow after resting.

**Commits:**
- docs: log day 3 practice (kept consistency)

---

### Sunday, Jan 4 - Day 4 — Session 1
**Goal:** Modern JS Core - Variable scope
**Status:** [x] Complete
**Time:** 10:00 - 11:05 (65 minutes)

**Notes:**
- Built examples covering global, function, and block scope; practiced lookup and shadowing.
- Implemented exercises demonstrating TDZ, loop+closure behavior, and scope chain outputs.

**Commits:**
- docs: add Day 4 session 1 — variable-scope notes and examples
- files: week_01_modern_js_core/day_4/day_4_session_1_variable-scope.js, week_01_modern_js_core/day_4/day_4_session_1_variable-scope.md

---

### Sunday, Jan 4 - Day 4 — Session 2
**Goal:** Modern JS Core - Closure
**Status:** [x] Complete
**Time:** 11:30 - 12:40 (70 minutes)

**Notes:**
- Practiced factory/reader patterns, multiple closures sharing an environment, and function-based counters.
- Observed how closures capture and persist outer lexical environments; identified hoisting as next focus.

**Commits:**
- docs: add Day 4 session 2 — closure notes and examples
- files: week_01_modern_js_core/day_4/day_4_session_2_closure.js, week_01_modern_js_core/day_4/day_4_session_2_closure.md

---

### Sunday, Jan 4 - Day 4 — Session 3
**Goal:** Modern JS Core - Hoisting
**Status:** [x] Complete
**Time:** 15:25 - 16:25 (50 minutes)

**Notes:**
- Covered creation vs execution phases, TDZ, `var` hoisting, and function declaration vs expression behavior.
- Practiced examples showing `undefined` for hoisted `var`, TDZ errors for `let`, and why function expressions fail when called before assignment.

**Commits:**
- docs: add Day 4 session 3 — hoisting notes and examples
- files: week_01_modern_js_core/day_4/day_4_session_3_Hoisting.js, week_01_modern_js_core/day_4/day_4_session_3_Hoisting.md

---

### Sunday, Jan 4 - Day 4 — Session 4
**Goal:** Modern JS Core - Data types & Template Literals
**Status:** [x] Complete
**Time:** 16:40 - 17:10 (30 minutes)

**Notes:**
- Reviewed primitive types: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, and `symbol`.
- Practiced `typeof` checks and template literals with interpolation and simple expressions.

**Commits:**
- docs: add Day 4 session 4 — data types & template literals notes and examples
- files: week_01_modern_js_core/day_4/day_4_session_4_Data_Types_and_Template_Literals.js, week_01_modern_js_core/day_4/day_4_session_4_Data_Types_and_Template_Literals.md

---

### Monday, Jan 5 - Day 5
**Goal:** Modern JS Core - Arrow Functions
**Status:** [x] Complete
**Sessions:** 1/1 (weekday)
**Time:** 19:00 - 19:50 (50 minutes)

**Notes:**
- Reviewed arrow function syntax, implicit returns, returning objects with parentheses, and typical pitfalls with block bodies vs expression bodies.
- Practiced converting classic function expressions to arrow functions and writing concise one-liners for common utilities.

**Commits:**
- docs: add Day 5 session 1 — arrow functions notes and examples
- files: week_01_modern_js_core/day_5/day_5_session_1_arrow_functions.md, week_01_modern_js_core/day_5/day_5_session_1_arrow_functions.js

---

### Monday, Jan 5 - Day 5 — Session 2
**Goal:** Modern JS Core - Arrow Functions This
**Status:** [x] Complete
**Sessions:** 1/1 (weekday)
**Time:** 20:10 - 21:30 (80 minutes)

**Notes:**
- Reviewed `this` behavior in arrow functions vs regular functions, lexical `this`, and common callback patterns.
- Practiced exercises: `makeUser` example, calculator object, method chaining, and fixing `this` in `setTimeout` with arrow functions.

**Commits:**
- docs: add Day 5 session 2 — arrow functions this notes and examples
- files: week_01_modern_js_core/day_5/day_5_session_2_arrow_functions_this.md, week_01_modern_js_core/day_5/day_5_session_2_arrow_functions_this.js

### Tuesday, Jan 6 - Day 6
**Goal:** Modern JS Core - Destructuring, spread & rest
**Status:** [x] Complete
**Sessions:** 1/2 (weekday)
**Time:** 19:00 - 19:50 (50 minutes)

**Notes:**
- Covered array destructuring, skipping elements with commas, rest/spread syntax, default values, swapping via destructuring, and destructuring with iterables.
- Added examples demonstrating the rest operator, default values, swapping pattern, and destructuring in loops and function returns.

**Commits:**
- docs: add Day 6 session 1 — destructuring, spread & rest notes and examples
- files: week_01_modern_js_core/day_6/day_6_session_1_destructuring_spread_rest.md

### Tuesday, Jan 6 - Day 6 — Session 2
**Goal:** Modern JS Core - Object destructuring
**Status:** [x] Complete
**Time:** 20:00 - 20:50 (50 minutes)

**Notes:**
- Covered object destructuring: renaming, default values, nested destructuring, and using the rest pattern with objects.
- Added examples and exercises demonstrating extracting values, renaming during destructuring, nested patterns, and `Object.entries` + destructuring in loops.

**Commits:**
- docs: add Day 6 session 2 — object destructuring notes and examples
- files: week_01_modern_js_core/day_6/day_6_session_2_object_destructuring.md, week_01_modern_js_core/day_6/day_6_session_2_object_destructuring.js

### Wednesday, Jan 7- Day 7 — Session 1
**Goal:** Object and array destructructure exercises
**Status:** [x] Complete
**Time:** 21:40 - 22:00 (20 minutes)

**Notes:**
- exercises for practicing array and object destructuring with new use cases and new ways to do it

**Commits:**
- docs: add Day 7 session 1 — object destructuring exercises
- files: week_01_modern_js_core/day_6/day_6_destructuring_exercises.js



### Thursday, Jan 8- Day 8 — Session 1
**Goal:** active recall scope, hoisting, arrow functions, closure, Main Topic Spread Operator,
**Status:** [x] Complete
**Sessions:** 1/2
**Time:** 19:00 - 19:50 (50 minutes)

**Notes:**
- Active recalling scope, hoisting arrow functions closure, rest and spread main topic.

**Commits:**
- docs: add Day 8 session 1 — active recalling of topics of day 3, 4 and 5 and study main tpic rest and spread.
- files: day_8_session_1_spread_operator.md, day_8_session_1_spread_operator.js
- 
### Thursday, Jan 8- Day 8 — Session 2
**Goal:** 10 exercises spread and rest operators,
**Status:** [x] Complete
**Sessions:** 2/2
**Time:** 20:00 - 20:30 (30 minutes)

**Notes:**
- Rest and spread exercises

**Commits:**
- docs: add Day 8 session 2 — rest and spread exercises.
- files: day_8_session_1_spread_operator.js
---

### Friday, Jan 9 - Day 9
**Goal:** Practice — spread & rest review
**Status:** [~] Partial
**Sessions:** 1/1 (weekday)
**Time:** 20 minutes

**Notes:**
- Short practice session to reinforce spread/rest exercises.

**Commits:**
- docs: log Day 9 practice (20 minutes)

---

### Tuesday, Jan 13 - Day 13
**Goal:** Modern JS Core - Array methods (`map`)
**Status:** [x] Complete
**Sessions:** 1/2
**Time:** 18:30 - 19:20 (50 minutes)

**Notes:**
- Reviewed `Array.prototype.map()` behaviour and callback parameters.
- Practiced transforming arrays, returning new objects with spread to avoid mutation, and chaining with other array methods.

**Commits:**
- docs: add Day 13 session 1 — array methods (map)

---

### Tuesday, Jan 13 - Day 13 — Session 2
**Goal:** Modern JS Core - Array methods (`filter`, `find`)
**Status:** [x] Complete
**Sessions:** 2/2
**Time:** 19:40 - 20:30 (50 minutes)

**Notes:**
- Reviewed `Array.prototype.filter()` and `Array.prototype.find()` behaviour.
- Practiced predicate callbacks, removing falsy values, chaining `filter` + `map`, and using `every`/`some` for complex checks.
- Implemented examples for products, users, todos, logs, and student grade checks.

**Commits:**
- docs: add Day 13 session 2 — array methods (filter & find)
- 
### Wednesday, Jan 14 - Day 14 — Session 1
**Goal:** Modern JS Core - Array methods (`filter`, `find`, `map`)
**Status:** [x] Complete
**Sessions:** 1/1
**Time:** 21:00 - 22:00 (50 minutes)

**Notes:**
- Exercises array methods filter find map

**Commits:**
- docs: add Day 14 session 1 — array methods (filter, find, map exercises)
- 
### Sunday, Jan 18 - Day 18 — Session 1
**Goal:** Modern JS Core - Array methods (`findIndex`)
**Status:** [x] Complete
**Sessions:** 1/4
**Time:** 10:10 - 10:50 (50 minutes)

**Notes:**
- Reviewed `Array.prototype.findIndex()` behaviour.

**Commits:**
- docs: add Day 18 session 2 — array methods (Reduce)
- ### Sunday, Jan 18 - Day 18 — Session 2
**Goal:** Modern JS Core - Array methods (`Reduce`)
**Status:** [x] Complete
**Sessions:** 2/4
**Time:** 11:10 - 12:10 (60 minutes)

**Notes:**
- Reviewed `Array.prototype.reduce()` behaviour.

**Commits:**
- docs: add Day 18 session 2 — array methods (reduce)

### Monday, Jan 19 - Day 19 — Session 1
**Goal:** Modern JS Core - Array methods (`Evert, some`)
**Status:** [x] Completed
**Sessions:** 1/2 (weekday)
**Time:** 50 minutes

**Notes:**
- Learned about some and every
- NOthing really it was easy
- When to use which one

**Commits:**
- docs: add Day 19 session 1 — array methods (every, some)

---
...existing code...

### Monday, Jan 19 - Day 19 — Session 2
**Goal:** Modern JS Core - Array methods (`includes`) + practical fixes  
**Status:** [x] Complete  
**Sessions:** 2/2 (weekday)  
**Time:** 20:20 - 21:00 (40 minutes)

**Notes:**
- Studied Array.prototype.includes()
- Fixed bugs in the session code:
  - Compare properties (e.g., `ele.age > 15`) 
  - Ensure reducers return the accumulator and provide initial values (grouping & sum).
  - Compute average by dividing sum by count.
  - Ensure highest-paid reduction handles initial value safely.

**Commits:**
- docs: add Day 19 session 2 — includes notes and code fixes  

### Tuesday, Jan 20 - Day 20 — Session 1
**Goal:** Modern JS Core - Promises 
**Status:** [x] Complete  
**Sessions:** 1/2 (weekday)  
**Time:** 19:20 -20:10 (50 minutes)

**Notes:**
- Studied Promises


**Commits:**
- docs: add Day 20 session 1 — includes notes exercises  
- ### Tuesday, Jan 20 - Day 20 — Session 1
**Goal:** Modern JS Core - Promises Then catch finally
**Status:** [x] Complete  
**Sessions:** 2/2 (weekday)  
**Time:** 20:20 - 21:20 (60 minutes)

**Notes:**
- Studied Promises


**Commits:**
- docs: add Day 20 session 2 — includes notes exercises  
- ### Tuesday, Jan 20 - Day 20 — Session 1
**Goal:** Modern JS Core - Promises 
**Status:** [x] Complete  
**Sessions:** 1/2 (weekday)  
**Time:** 19:20 -20:10 (50 minutes)

**Notes:**
- Studied Promises


**Commits:**
- docs: add Day 21 session 1 — includes notes exercises  
- ### Tuesday, Jan 21 - Day 20 — Session 1
**Goal:** Modern JS Core - Async await 
**Status:** [x] Complete  
**Sessions:** 1/1 (weekday)  
**Time:** 17:10 - 20:10 (60 minutes)

**Notes:**
- Studied ASync await


**Commits:**
- docs: add Day 22 session 1 — includes notes exercises  
  
**Goal:** Modern JS Core - Async await exercioses
**Status:** [x] Complete  
**Sessions:** 1/1 (weekday)  
**Time:** 17:30 - 20:40 (70 minutes)

**Notes:**
- Studied ASync await with exercises


**Commits:**
- docs: add Day 23 session 1 — includes notes exercises  

**Commits:**
- docs: add Day 23 session 1 — includes notes exercises  
  
**Goal:** Modern JS Core - Async await exercioses
**Status:** [x] Complete  
**Sessions:** 1/1 (weekday)  
**Time:** 17:30 - 20:40 (70 minutes)

**Notes:**
- Studied ASync await with exercises


**Commits:**
- docs: add Day 23 session 1 — includes notes exercises  

**Goal:** Modern JS Core - Async await exercioses
**Status:** [x] Complete  
**Sessions:** 1/4 (weekday)  
**Time:** 09:20 - 10:25 (65 minutes)

**Notes:**
- Studied promiseAll

**Commits:**
- docs: add Day 24 session 2 — async promise all error handling best practices and promiseAll
- 
**Goal:** Modern JS Core - Async await exercioses
**Status:** [x] Complete  
**Sessions:** 2/4 (weekday)  
**Time:** 11:00 - 11:50 (60 minutes)

**Notes:**
- Studied promiseAllSettled

**Commits:**
-  docs: add Day 24 session 2 — promiseAllSettled, fetch API get requests
-  

**Goal:** Modern JS Core - Active Recall & Logic Refinement
**Status:** [x] Complete  
**Sessions:** 1/1 (Tuesday)  
**Time:** 19:10 - 20:21 (70 minutes)

**Notes:**
- **Active Recall:** Answered 52 questions covering TDZ, Lexical `this`, Closures, and Array Methods (Map/Filter/Reduce).
- **Key Discovery:** Fixed a misconception about `this` in `setTimeout`; confirmed that arrow functions tether to the outer method's context (Victor) while regular functions reset to global.
- **Async/Fetch:** Reviewed `Promise.allSettled` and reinforced that `fetch` does NOT reject on 404/500 errors.
- **Calculated Confidence:** 8/10.

**Commits:**
- docs: add Feb 03 active recall — Core JS, Async/Await, and Lexical Scope
- refactor: update mental models for TDZ and arrow function tethering

### Sunday, Feb 15 - Day 46 — Session 1
**Goal:** Modern JS Core - DOM Manipulation (Searching Elements)
**Status:** [x] Complete
**Sessions:** 1/4
**Time:** 09:40 - 10:30 (50 minutes)

**Notes:**
- Studied the DOM (Document Object Model) as a tree-like structure representing all page content
- Reviewed `document` object as the main entry point for all DOM operations
- Practiced navigating the DOM tree using properties: `documentElement`, `body`, `head`
- Covered child nodes vs descendants; learned DOM collections (childNodes, firstChild, lastChild)
- Learned that DOM collections are "live" and array-like but different from arrays; they re-evaluate lazily

**Commits:**
- docs: add Day 46 session 1 — DOM manipulation notes
- files: week_01_modern_js_core/day_46/day_46_session_1_DOM.md, week_01_modern_js_core/day_46/day_46_session_1_DOM.js

---

### Sunday, Feb 15 - Day 46 — Session 2
**Goal:** Modern JS Core - DOM Manipulation (exercises)
**Status:** [x] Complete
**Sessions:** 2/4
**Time:** 11:00 - 11:50 (50 minutes)

**Notes:**
- Practiced accessing DOM nodes using navigation properties (firstElementChild, nextElementSibling, lastElementChild)
- Solved exercises on accessing specific elements like `<div>`, `<ul>`, and individual list items
- Implemented code to paint diagonal table cells red using node properties and indexing
- Applied knowledge of element relationships and how to traverse the DOM tree

**Commits:**
- docs: add Day 46 session 2 — DOM manipulation exercises
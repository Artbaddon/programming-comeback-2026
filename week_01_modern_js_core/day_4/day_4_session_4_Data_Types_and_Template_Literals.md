# Session 4: Data Types & Template Literals
**Date:** Sunday Jan 4 2026
**Time:** 16:40 - 17:10
**Duration:** 30 minutes
**Review Date:** Jan 15 (7 days Repetition)

---

## Goal
Understand JS primitive data types and practice template literals.

## Notes (in my words)
- Primitive types covered: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `symbol`.
- `typeof` returns runtime type for most primitives; `typeof null` is historically `object` (note).
- `bigint` literals use trailing `n` and are separate from `number`.
- Template literals use backticks and `${...}` for interpolation and expression evaluation.

## Example (from exercise)
```javascript
let numberVar = 912312312312;
let bigIntVar = 12312312312312312312312312312312312312312n;
let stringVar = "HELLO WORLD!";
let boolVar = true;
let nullVar = null;
let undefinedVar = undefined;
let symbolVar = Symbol("ID");

console.log(typeof numberVar); // "number"
console.log(typeof bigIntVar); // "bigint"
console.log(typeof stringVar); // "string"

let name = "Pedro";
let age = 200;
let templateLiteral = `HELLO MY FRIENDS\nMY name ${name}, age: ${age}, birthyear ${2026 - age}`;
console.log(templateLiteral);
```

## Aha Moments
- Template literals make multi-line strings and interpolation much cleaner than concatenation.
- `bigint` solves very large integer needs but can't mix with `number` without conversion.

## Confusion Points
- Remember to handle `null`/`undefined` differences in checks.

---

## Commits
- files: week_01_modern_js_core/day_4/day_4_session_4_Data_Types_and_Template_Literals.js

---

## Next Session Focus
- Practice type coercion and strict equality (`==` vs `===`).
# Session 4: Data Types and Template literals
**Date:** Sunday Jan 4 2026
**Time:** 16:45 - 15:40
**Duration:** 55 minutes
**Review Date:** Jan 7 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What are the primitive types in JavaScript?
2. How do you embed expressions inside strings?

**My guesses:**
- The primities are the type of data JavaScript can hadle, for example Strings, boolean, bigint, symbols, and each one has a set of methods.
- You embed expression inside string using `` template literals and ${} for the expression itself.
---

## Resources Used 📚
- [JavaScript.info: Data Types](https://javascript.info/types) (15 min)
- [MDN: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (10 min)
---

## Notes (Write in MY words during session)

### Data Types

**What it is:**
- Data Types are basically what type of value will a variable hold, for example string, or a number, etc.
- In JavaSCript the Types are dynamic meaning that if we have for example a variable let word : "Hello" and assign a number, it will not give us any error.
- There are 8 basic data types in Js we have:
  - Number: This data type represents both integer and floating point numbers, 
    - We have many operations, mult, division, addition, etc.
    - We also have special numeric values, which belong to number they are Infinity, -Infinity and NaN.
    - The mathematical operations are safe, meaning that the execution will not stop if we have NaN or some mathemtical error like 1/0
  - BigInt: In Js the number tpye only can represent inger values llower than +- 2^53 - 1 so thats why big int can represent n length
    - to use it you put n at the last digit of the assignment  const bigInt = 1234567890123456789012345678901234567890n;
  - String: A string in js must be surrounded by quotes and they are 3 types of quotes:
    - Double quotes "Hello", single quotes 'hello' and backticks `Hello`
    - Double quotes and single are simple quotes, theres not a huge differenfce between them in JS, backticks are extended functionality and they allow us to embed 
    - Variables and expressions into the string by wrapping them with ${...}, this is called a template literal.
  - Boolean: Logical Type this only has true or false as values
    - they can also comes as a result of comparisons
  - Null: The null value does not belong to any of the types described avobe and 
    - Tt only contains the null value. 
    - Null is bascially nothing, empty or value unkown
  - Undefined: it a type of its own like null.
    - The meaning is basically value not assigned
    - if a varible is declared but not assigned the value is undefined
  - Object and Symbols
    - All the other types are called primitves, because their values can contain only a single thing, in contrast objects are used to store collections of data an more complex structures.
    - The symbol type is used to crate unique identifiers for objects
- 

**Why it exists:**
-They exist to hold the different type of data we can use in JS and also to difference what we can do with the variables itself, different types have they own methods.

**How it works:**
- You declare a variable and just assign the type you want, for example if i want that variable to be a string i just wrap all in "", if a number just put the number.

**Example:**
```javascript
//Number:
    let n = 123;
    n = 12.345;

    alert( 1 / 0 ); // Infinity

    //Nan represents a computational error, it is the result of the incorrect or undefined mathematical operation
    alert( "not a number" / 2 ); // NaN, such division is erroneous
//BigInt:
    // the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
//Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

//Null
let age;
console.log(age)// age is null.

//
```

**When to use:**
-When you are declaring a variable


## Aha Moments 💡
- [Something that clicked for you]
- [Connection you made between concepts]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Daily Exercises ✅

1. [X] **Exercise 1:** [Set of exercises for testing type of and types]


**My Solution Code / Notes:**
```javascript
//Type number

let numberVar = 912312312312;
let bigIntVar = 12312312312312312312312312312312312312312n;
let stringVar = "HELLO WORLD!"
let boolVar = true;
let nullVar;
let undefinedVar = undefined;
let symbolVar = Symbol("ID");

console.log("Type of number: " + typeof numberVar);
console.log("Type of bigInt: " + typeof bigIntVar);
console.log("Type of string: " + typeof stringVar);
console.log("Type of bool: " + typeof boolVar);
console.log("Type of null: " + typeof nullVar);
console.log("Type of undefined: " + typeof undefinedVar);


let name = "Pedro"
let age = "200"
let templateLiteral = `HELLO MY FRIEDNS
FROM OUTERSPACE MY name ${name}, age: ${age}, birthyear ${age - 2026}
`
```

---

## Code I Wrote (Project/Experiment)

**File(s):** `[day_4_session_4_Data_Types_and_Template_Literals.js]`

**What I built:**
- Basic data type practices and type of operator

**Key techniques used:**
- 

**Bugs I hit:**

---

## Post-Session Recall (CLOSE EVERYTHING FIRST!)

**1. List all 7 primitive types from memory.**
-Number, bitnumber, string, null, undefined, symbol, boolean

**2. Demonstrate type coercion: What does `"5" + 3` return? What about `"5" - 3`? Why?**
Becase Js converts in the first one to string because + is concatenating the first string and the second one it give us NaN because the first is a string and you cannot use that operator in a string.

**3.  Write a template literal example from memory.**
- let hello = `Change the wordl my guy ${name}""

**4. What's one thing I still don't fully understand?**
[Honest answer]

**5. The "ELI5" Summary**
- Data types are like the different forms a block can have.

---

## Next Session Focus
- Arrow functions
---

## Reflection

**What went well:**
- I remebered the dataypes

**What was hard:**
- Maybe understanding coercing

**Time management:**
- Did I stay focused? Not the whole time

**Energy level:** 4/10
**Confidence on this topic:** 8/10

---
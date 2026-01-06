# Session 2: Arrow Functions This
**Date:** Monday Jan 5 2026
**Time:** 20:10 : 21:30
**Duration:** 80 minutes
**Review Date:** Jan 8 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. What is `this` in JavaScript?
2. Why do arrow functions handle `this` differently?

**My guesses:**
- This is a like a way that every method has to access the attributes of the object they are in.
-  The main difference between arrow functions and function declarations is that the arrow function doesnt have the capability of having his own this, they share the one from above.

---

## Resources Used 📚
- [JavaScript.info: Arrow Functions Revisited](https://javascript.info/arrow-functions) (15 min)
---

## Notes (Write in MY words during session)

### "This" in methods

**What it is:**
-Is a way to access the information of an object in a method, the value fo this is the object before dot, the one used to call the method.
**Why it exists:**
-It exist because it makes accesing properties from a method more easily and to prevent accesing the wrong object when executing the method itself.
**How it works:**
-"this" is assigned at call time, not at definition time meaning that the value depends on how the function is invoked, for example, if you use
obj.fn(), the this will be the obj but in fn() will be undefined because it doesnt have any object before the dot.

**Example:**
```javascript
// Code example with comments explaining each line
let user = { name = "John"};
let admin = {name = "Admin"};

function sayHi(){
    alert(this.name);
}

user.f = sayHi();
admin.f = sayHi();
//here we use the same function in two different objects

user.f();
admin.f();
//these calls have different this.
//The first call will acess the name of user, the second one of admin.
```

**When to use:**
- When you want to access the information of an object in a method or regular function, the arrow functions dont have that, they take the this from the outer scope.



## Aha Moments 💡
- arrow functions doesnt have this
- the this only exists in execution and only if the method that is calling it is invoked with the object before the dot
---

## Confusion Points ❓
- why arrow functions are is not suitable to be a constructor
- Constructors in JS in depth

---

## Daily Exercises ✅

1. [X] **Exercise 1:** Created an object with a method with regular functions
2. [X] **Exercise 2:** Create an object with a method using a regular function. Log `this`. What do you see?
3. [X] **Exercise 3:** Create a `setTimeout` inside an object method. Why does `this` break? Fix it with an arrow function.

**My Solution Code / Notes:**
```javascript

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

// the result is undefined because we are not accesing from a method, 
//  meaning that the this will be the one from the function and because 
// the value of this is set to the object before dot in execution

//2.
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    // ... your code ...
    read() {
        this.a = +prompt("Number 1: ", 0);
        this.b = +prompt("Number 2: ", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Chaining
/*
There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
*/
//Modify the code of up, down, and showStep to make the calls chainable, like this:
let ladder = {
    step: 0,
    up() {
        this.step++
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

// THis works because we are return the object so 
// if we chain the same method, the this value will 
// be the object where we called the first method.

//Exercises

// 1. Create an object with a method using a regular function. Log `this`. What do you see?
let person = {
    name: "Pedro",
    sayHi() {
        console.log(this)
    }
}
person.sayHi()
//I see the object, because we are using the object before the dot 
// so in this case it doesnt give us any error also we are calling it from a method.

// 2. Change that method to an arrow function. Log `this`. What changed?
person.sayHi = () => console.log(this)
// This return undefined because the this value is just undefined because we never set this, and because this is called in execution on methods so we never really set this and in the outer lexical enviroment doesnt exist either

// 3. Create a `setTimeout` inside an object method. Why does `this` break? Fix it with an arrow function.
person.setCountDown = setTimeout(function(){
    console.log(this)
},0)
// This breaks because the function passed to setTimeout is called without an object before the dot, so this is undefined and not the object.

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

**1.  Explain lexical `this` in your own words.**
- Lexical this is basically when an arrow functions is used to access a this, it will check the lexical enviroment of the outer scope
**2. Give 2 situations where you should NOT use arrow functions.**
- When using it as a constructor or when we want to use argument attribute
**3.How would you fix a `this` problem in a callback without using arrow functions?**
- creating a variable before the callback so i will access the variable containing this

**4. What's one thing I still don't fully understand?**
-Constructors in JS

**5. The "ELI5" Summary**
-This is like a mirror, if i want to see my hair and the color, i can use the action of look at the mirror and i will be able to see my hair color, etc.

---

## Next Session Focus
- Destructuring arrays

---

## Reflection

**What went well:**
- I understood mainly the this an arrow functios in depth

**What was hard:**
- Understanding this and lexical enviroment this when using function declarations

**Time management:**
- Did I stay focused? YEs

**Energy level:** 5/10
**Confidence on this topic:** 7/10

---
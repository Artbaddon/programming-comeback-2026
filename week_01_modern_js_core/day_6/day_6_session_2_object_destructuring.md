# Session 2: Destructuring, spread and rest
**Date:** Tuesday Jan 6 2026
**Time:** 20:00 : 20:50
**Duration:** 50 minutes
**Review Date:** Jan 9 (Spaced Repetition)

---

## Pre-Session Questions (Answer BEFORE you start)
1. How is object destructuring different from array destructuring?
2. Can you rename variables during destructuring?

**My guesses:**
- In object destructuring we need to have the same variable name as the object we are taking from and the order doesnt matter
- IN this case you cant
---

## Resources Used 📚
- [JavaScript.info: Destructuring - Objects](https://javascript.info/destructuring-assignment#object-destructuring)


---

## Notes (Write in MY words during session)

### Destructuring assignment Arrays

**What it is:**
- Is a special syntax that allow us to "unpack" objects into variables.
 


**Why it exists:**
- Because you sometimes only need certain variables and not the whole object.
**How it works:**
-It works by iterating over the right value, its kind of a syntax sugar of calling for of, over the value of the right side of = and assigning the value

**Example:**
```javascript
    //Basic synxtax = let {var1, var2} = {var1:...,var2:...};
    let options = {
        title :"Menu",
        width: 100,
        heigth: 200
    }

    let {title, width, height} = options;
    //Propreties options.title, options.width and options.heigth are assigned to the corresponding variables
    //In this case the order doesnt matter

    //The patter of the left side can be more complex and you can secify the mapping between the properties you want to take and the variables.
    // If we want to assign a property name to a variable withanother name we can do the following:
    let options2 = {
        title :"Icon",
        width: 300,
        heigth: 100
    }
    let {title: t, width : w, heigth : h} = options2;
    //The colon says basically what goes where, so title goes to the var t, etc

    //We can also use default values
    let user = {name:"Victor"}
    let {userName = prompt("name?"), surname =prompt(surname?)} = user
    //We can also combine it with the : synax

    let {name:userName = prompt("name?"), surname:otherName =prompt(surname?)} = user;

    //We can also use the rest pattern here

    {
    let user = { name: "Victor", age: 26, city: "Dublin" }
    let { name, ...rest } = user;
    console.log(name)
    console.log(rest.age)
    }

    //Nested destructuring
    //If an object or an array contains other nested objects anda arrays we can use more complex patterns on the left side to extract deeper portions
    let player = {
    name: "Berserker",
    race: {
        name: "Warrior",
        damage: 123
    },
    passives: ["undiying glory", "fury axe"],
    powers: [
        {
        name: "Axe age",
        damage: 25
        },
        {
        name: "Sword thrust",
        damage: 20
        }]
    }

    let {
    name: playerName = "Guest",
    race: {
        name: raceName = "Human",
        damage: raceDamage = 100
    },
    passives: [...items],
    powers: [{ name: powerName1 },
        { name: powerName2 }]
    } = player;

    console.log(powerName1)
```

**When to use:**
-  when you have need to only take the username and role of the user object you use destructuring to not use innecesary data in that moment.


## Aha Moments 💡
- How nested destructuring works and how to use default values 
- [Connection you made between concepts]

---

## Confusion Points ❓
- [What's still fuzzy]
- [Questions to research later]

---

## Daily Exercises ✅

1. [X] **Exercise 1:** Destructuring exercises.
2. [X] **Exercise 2:** Destructuring with default value
3. [X] **Exercise 3:** Destructuring with nested values

**My Solution Code / Notes:**
```javascript
//Destructuring assignment
let user = {
    name: "John",
    years: 30
};
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

let { name, years: age, isAdmin = true } = user

//The maximal salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let topPaid = [0, null];

    for (let [key, value] of Object.entries(salaries)) {
        value > topPaid[0] ?
            topPaid[0] = value :
            topPaid[1] = key
    }

    return `The top paid is ${topPaid[1]} with a salarie of ${topPaid[0]}`;
}


// 1. Extract `name` and `age` from `{ name: "John", age: 25, city: "NYC" }`.
{
    let person = { name: "John", age: 25, city: "NYC" };
    // 2. Extract `name` but rename it to `userName`.
    let { name: username, age } = person;

    // 3. Extract `country` with default value "Unknown" from an object that doesn't have it.

    let { country = "Oklahoma" } = person

    // 4. Destructure a nested object: `{ user: { name: "John", address: { city: "NYC" } } }`.

    let person2 = { user: { name: "John", address: { city: "NYC" } } };

    let { user: { name: personName }, user: { address: { city } } } = person2

    console.log(personName, city)
}



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

**1. How do you rename a variable during destructuring?**
- using : at then right side


**2. Write nested destructuring to get `city` from `{ person: { address: { city: "X" } } }`.**
```javascript
let person ={ person: { address: { city: "X" } } };

let {person:{address:{city}}} = person;
```
**3. What does `const { a, ...rest } = obj` give you?.**
-it gives me a first a variable a and an array with the other attributes of an object.

**4. What's one thing I still don't fully understand?**


**5. The "ELI5" Summary**
- - imagine you have a row of boxes, you can open the ones you want and can skip the ones that you dont

## Next Session Focus
- rest-parameters

---

## Reflection

**What went well:**
- understood how the destructuring works in basic exercises
**What was hard:**
- The nested ones

**Time management:**
- Did I stay focused? Yes

**Energy level:** 5/10
**Confidence on this topic:** 8/10

---
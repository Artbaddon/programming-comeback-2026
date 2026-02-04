# Session 1: Active recalling
**Date:** Tuesday Feb 03 2026
**Time:** [19:10- 20:21]
**Duration:** 70 minutes


---

## Notes 

### All Previous Questions for active recalling
1. Explain the difference between `let` and `const` without looking.
   -The main difference between let and const is that let can be re-assigned multiple times and you can initiliaze it as null, but with const you can only have 1 value and have to initialize it with a value that is not null.
2. What is the Temporal Dead Zone?
   -Is the state of a variable after hoisting but before initialization, meaning that you cannot access yet but it exists.
3. When would you ever use `var`? (Trick question!)
   -You normally use var in old or legacy code when is the only available
4. List all 7 primitive types from memory.
   Number, string, boolean, bigint, null, symbol
5. Why is `typeof null` equal to "object"? (Historical bug!)
   -Because in the first implementation of js the types were represented with numbers and 0 was for objects and because null represents an empty pointer, it is type object.
6. Write a template literal example from memory.
   ```javascript
   const template = `Hello world`

   ```
7. Write the shortest possible arrow function that doubles a number.
    ```javascript
     const doubleNum = n => n * 2;
    ```
8. How do you implicitly return an object from an arrow function?
     ```javascript
    const getUser = id => {
        const users = ["victor","carlos"];
        const ages = [24,26]

        return ({name : users[id], ages : ages[id] })
    }
    ```
9.  What's the difference between `x => x * 2` and `x => { x * 2 }`?
    -The first one has an implicit return because is oneliner and the second one doesnt have a return because it has {} so it will return undefined.
10. Explain lexical `this` in your own words.
    -The lexical "this" is basically when you have for example an arrow function that doesnt have a this, it takes the this from the outer scope
11. Give 2 situations where you should NOT use arrow functions.
    -Whenever you want to use the this, or for example in a constructor you cannot use it or if you want to use the args for accesing the arguments
12. How would you fix a `this` problem in a callback without using arrow functions?
    -You fix it by storing this in a variable (commonly self or that) before the callback, then using that variable inside the callback, since regular functions have their own this.
13. 1. How do you skip elements in array destructuring?
    -By putting a ,
14. What does `const [first, ...rest] = arr` do?
    -This basically will put the first item of the array in a variable called first and the rest in an array called rest.
15. Write the swap pattern from memory: swap `a` and `b` using destructuring.
    ```javascript

    let a = 2;
    let b = 3;
    [b, a] = [a, b]
    ```
16. How do you rename a variable during destructuring?
    -putting : after the name of the variable
17. Write nested destructuring to get `city` from `{ person: { address: { city: "X" } } }`.
    ```javascript
    const obj = { person: { address: { city: "X" } } };

    const {person:{address:{city}}} = obj;
   
    ```
18. What does `const { a, ...rest } = obj` give you?
    -This basically will take the a attribute from the method and will save it as a variable called a, and will put the rest in an obj called rest
19. What's the difference between spread and rest?
    -Rest is used in functions for specifying all the args into an array, spread is the opposite meaning that is used for passing all items for an iterable as arguments to a function.
20. Why is `[...arr]` a shallow copy? What's the danger?
    -Is a shallow copy because it copies the object but at a top level, the danger is that you still have the nested objects as reference not independent values
21. How do you merge two objects with spread?
    ```Javascript
        const obj1 = { person: { address: { city: "X" } } };
        const obj2 = {car:"car", name:"name"};

        const merged = {...obj1, ...obj2}
    ```
22. Write a sum function with rest parameters from memory.
    ```javascript
        function sum(...numbers){
            let total = 0;
            for(const num of numbers){
                total+=num
            }
            return total;
        }
    ```
23. What's the difference between rest parameters and the `arguments` object?
    -rest parameters is an array you can use all the methods without any issue and arguments is an array-like so you cannot use the same methods and is harder to do operations
24. Can rest parameters be anywhere in the parameter list?
    -No, they can only be in the last part,
25. Does `map()` modify the original array?
    -Nope it as a functional method so it doesnt mutate the original
26. What are the 3 parameters the callback receives?
    item the actual item we are in, index the index of the ite, array the original array map was called from.
27. What happens if you don't return anything in the callback?
    -you will have an ampty array because it returns undefined
28. What does the filter callback need to return?
    -a truthy value
29. How do you chain `filter()` and `map()`?
    ```javascript
        const numbers = [1,2,3,4,5]
        const doubled = numbers.map(itm=>itm*2).filter(ele=>ele%2===0)
    ```
30. What's a quick way to remove all falsy values from an array?
    -by just putting the itm as the return value because it will convert it to boolean automatically
31. What are the two required parameters of the reduce callback?
    -accumulator and the actual item we are in.
32. What happens if you don't provide an initial value?
    -the initial value will be 0, and will be a string or number
33. Explain reduce like you're teaching a 5-year-old (ELI5).
    -imagine you want to group all the toys that are blue and want to sum how many they are, you use reduce to reduce a huge list of toys to a more organized one
34. What does `some()` return if the array is empty?
    -false because no element meets the criteria
35. What does `every()` return if the array is empty?
     -true because no element violates the condition
37. When would you use `includes()` vs `find()`?
    find will give you the item itself so if you want to have the value you use find but includes will only return boolean so if you want to check if an item is in an array but dont want the value, you use includes
38. What are the three Promise states?
    -fulliled, rejected,pending 
39. What do `resolve` and `reject` do?
    -resolve is for fullfiling a promise and reject will throw a rejected state.
40. Does a Promise execute immediately or lazily?
    -it executes immediatly but you will only can access it by using await or then but it executes as soon as it is called
41. What does an `async` function always return?
    A promise
42. Can you use `await` outside an async function?
    no you cant in vanilla js
43. Rewrite Promise.then().then() as async/await from memory.
    ```javascript
    
    async function resolved(){
        return new Promise(resolve()=>{
            setTimeout(()=>resolve(123),1000)
        })
    }

    const number = await resolved();


    ```
44. How do you catch errors with async/await?
    -by using try catch
45. What does `Promise.all()` do if one Promise rejects?
    -it will throw an error and go directly to catch if it has it, it will return a rejected promise
46. What's `Promise.allSettled()` and when would you use it?
    -when you want to execute independent async operations, for example if you want to access multiple data that doesnt need the other ones
47. What does `fetch()` return?
    -it return a promise with a value if is resolved or a rejected one
48. Why do we need to call `.json()` on the response?
    -to transform it is a better way to handle it as an object
49. Is a 404 response a rejected Promise?
50. What headers do you need for JSON POST requests?
    ```javascript

    const respone = await fetch(url, {
        headers:{
            "Content-Type":"application/json",
           
        },
        method:"POST",
        body:JSON.stringify({name:"VICOTR"})
    })
    ```
51. What's the second argument to `fetch()`?
    -options, for example method, or the body if is a post request
52. How do you add authorization headers?
    -by using Authorization option
    

---

## Next Session Focus
- DOM METHODS

---

## Reflection

**What went well:**
- I remebered in a 80% the topics and could answer the questions mainly correctly and without any help just remembering

**What was hard:**
- To remember the first topics, like lexical this, and TDZ

**Time management:**
- Did I stay focused? YEs

**Energy level:** 6/10
**Confidence on this topic:** 8/10

---
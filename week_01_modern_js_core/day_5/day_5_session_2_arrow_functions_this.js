
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

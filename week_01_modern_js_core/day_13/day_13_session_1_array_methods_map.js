
{
    const numbers = [1, 2, 3, 4, 5];
    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    // 1. Double all numbers
    const doubledNumbers = numbers.map(item => item * 2);

    // 2. Get array of just names from users
    const usersName = users.map(item => item.name)
    // 3. Create array of strings: "Alice is 25 years old"
    const arrayOfInfo = users.map(ele => `${ele.name} is ${ele.age} years old`);
    // 4. Add index to each: [{ ...user, index: 0 }, ...]
    const indexedUsers = users.map((ele, idx, array) => {
        const actualobj = ele;
        actualobj.index = idx;
        return actualobj
    })
}
let numbers = [2, 5, 6, 7, 8, 9, 10]
// Convert numbers to their squares
const squares = numbers.map((ele) => Math.pow(ele, 2))
// Convert strings to uppercase
const array = ["I", "am", "the", "one", "human", "who", "dont", "walk"];

const upperCasedarray = array.map((ele) => ele.toUpperCase())

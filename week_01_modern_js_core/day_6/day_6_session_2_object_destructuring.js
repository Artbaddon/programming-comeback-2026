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



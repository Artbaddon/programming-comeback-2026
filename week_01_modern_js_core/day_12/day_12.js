// Clone and extend array
// Given [1,2,3], create a new array adding 4,5 without mutating the original.
const ojb1 = [1, 2, 3];

const newObj = [...ojb1, 4, 5]
// Rest parameters
// Write sum(first, ...nums) that ignores first and sums the rest.
function sum(first, ...nums) {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    return sum;
}

// Destructuring + rest
// From { id, name, role, active }, extract id and put the rest into meta.

let obj = { id: 1, name: "pedro", role: "Admin", active: false }
let { id, ...meta } = obj;

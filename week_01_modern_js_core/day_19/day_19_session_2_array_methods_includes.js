
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true }
];

// 1. Check if ANY user is under 18
const usersUnder18 = users.some(ele => ele.age < 18)
console.log(usersUnder18)
// 2. Check if ALL users are active

const allAreActive = users.some(ele => ele.active);
// 3. Check if ALL users are over 15
const allUsersAreOver15 = users.some(ele => ele > 15);

// 4. Build an isValidForm function that checks all fields are filled
const fields = [{
    name: "value1",
    value: "213",
},
{
    name: "value2",
    value: "",
}]
function isValidForm(fields) {
    return fields.every(f => f.value !== "")
}

const data = [
    { id: 1, name: "Alice", department: "Engineering", salary: 80000, active: true },
    { id: 2, name: "Bob", department: "Marketing", salary: 60000, active: true },
    { id: 3, name: "Charlie", department: "Engineering", salary: 90000, active: false },
    { id: 4, name: "Diana", department: "Marketing", salary: 70000, active: true },
    { id: 5, name: "Eve", department: "Engineering", salary: 85000, active: true }
];

// 1. Get names of all active employees (filter + map)
const allActive = data.filter(ele => ele.active).map(ele => ele.name)

// 2. Calculate total salary of Engineering department (filter + reduce)
const engineeringSalary = data.filter(ele => ele.department === "Engineering").reduce((acc, curr) => acc + curr.salary, 0)
// 3. Get average salary of active employees (filter + reduce)
const averageSalaryOfActive = data.filter(user => user.active).reduce((acc, curr) => acc + curr.salary, 0)
// 4. Group employees by department (reduce to object)
const groupedEmployes = data.reduce((curr, user) => {

    curr[user.department] = curr[user.department] || [];
    curr[user.department].push(user)
}, {})
// 5. Find the highest paid active employee (filter + reduce OR sort)
const highestPaidActive = data.filter((ele) => ele.active).reduce((acc, curr) => {
    return curr.salary > acc.salary ? curr : acc
}
)
// 6. Check if all Engineering employees earn > 75000 (filter + every)
const allEarnGood = data.filter(ele => ele.department === "Engineering").every(ele => ele.salary > 75000);
console.log(allEarnGood)
// 7. Transform to: { Alice: "Engineering", Bob: "Marketing", ... } (reduce)

const nameAndDepartment = data.reduce((acc, curr) => {
    acc[curr.name] = curr.department

    return acc
}, {})
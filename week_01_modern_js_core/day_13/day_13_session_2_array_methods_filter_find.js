
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Watch", price: 200, inStock: true }
];

// 1. Get only products in stock
const productsOnStock = products.filter(item => item.inStock);
// 2. Get products under $400
const producstUnder400 = products.filter(item => item.price < 400)
// 3. Get products that are in stock AND under $400
const productsOnStockAndUnder400 = products.filter(item => item.price < 400 && item.inStock)
// 4. Remove falsy values from: [0, 1, "", "hello", null, undefined, false, true]
const onlyTrueVal = [0, 1, "", "hello", null, undefined, false, true].filter(item => item)
// 5. Chain: Get names of products in stock (filter + map)
const namesProducstOnStock = products.filter(item => item.inStock).map(item => item.name)
// Remove inactive users from a users list
const users = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true }
];
const activeUsers = users.filter(item => item.active)
// Show only completed tasks in a todo app
const todos = [
    { task: "Study JS", done: true },
    { task: "Gym", done: false },
    { task: "Sleep", done: true }
];

// Select error logs from all logs
const logs = [
    { level: "info", msg: "Started" },
    { level: "error", msg: "Failed" },
    { level: "warn", msg: "Low memory" }
];
const errorLogs = logs.filter(ele => ele.level.toLowerCase() === "error");
// Users with at least one admin role
{
    const users = [
        { name: "A", roles: ["user"] },
        { name: "B", roles: ["user", "admin"] },
        { name: "C", roles: [] }
    ];

    const adminUsers = users.filter(ele => ele.roles.includes("admin"))
}

// Students who passed all exams

const students = [
    { name: "A", grades: [80, 90, 70] },
    { name: "B", grades: [60, 40, 70] }
];

const studendsWhoPassedAllExams = students.filter(ele => ele.grades.every((ele) => ele >= 60))
//Users with at least one valid payment
{
    const users = [
        { name: "A", payments: [{ amount: 0 }, { amount: 50 }] },
        { name: "B", payments: [{ amount: -10 }] },
        { name: "C", payments: [] }
    ];

    const userWithValidPayment = users.filter(item => {
        for (const payment of item.payments) {
            if (payment.amount > 0) return true;
        }
        return false
    })
}
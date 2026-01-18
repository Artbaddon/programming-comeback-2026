const { use } = require("react");

// 1–2. Users
const users = [
    {
        id: 1,
        email: "a@mail.com",
        subscriptions: [
            { active: true, expiresAt: "2026-03-01" },
            { active: false, expiresAt: "2025-01-01" }
        ],
        payments: [
            { amount: 20, status: "ok", date: "2025-01-01" },
            { amount: 15, status: "failed", date: "2025-02-10" }
        ],
        role: "admin",
        lastLogin: "2026-01-10"
    },
    {
        id: 2,
        email: "b@mail.com",
        subscriptions: [
            { active: true, expiresAt: "2025-01-01" }
        ],
        payments: [
            { amount: 30, status: "ok", date: "2025-02-01" }
        ],
        role: "user",
        lastLogin: "2025-12-01"
    },
    {
        id: 3,
        email: "c@mail.com",
        subscriptions: [],
        payments: [
            { amount: 50, status: "failed", date: "2024-12-01" },
            { amount: 60, status: "failed", date: "2025-01-15" }
        ],
        role: "moderator",
        lastLogin: "2026-01-12"
    }
];

// 3. Products
const products = [
    {
        name: "Laptop",
        variants: [
            { stock: 5, reserved: 5 },
            { stock: 3, reserved: 1 }
        ]
    },
    {
        name: "Mouse",
        variants: [
            { stock: 0, reserved: 0 }
        ]
    },
    {
        name: "Keyboard",
        variants: [
            { stock: 10, reserved: 2 }
        ]
    }
];

// 4. Transactions
const transactions = [
    { id: "t1", amount: 200, currency: "USD", flags: [] },
    { id: "t2", amount: 1500, currency: "USD", flags: ["review"] },
    { id: "t3", amount: 2500, currency: "EUR", flags: ["suspicious"] },
    { id: "t4", amount: 3000, currency: "USD", flags: ["suspicious"] }
];
// 1. Active users with valid subscription
// Given users with subscriptions: [{ active, expiresAt }], return emails of users that have at least one active subscription not expired.
// 1. Active users with valid subscription
// Given users with subscriptions: [{ active, expiresAt }], return emails of users that have at least one active subscription not expired.
const usersWithActiveSubs = users.filter((user) => {
    const subscriptions = user.subscriptions;
    if (subscriptions.length) {
        if (sub.active && new Date(sub.expiresAt) > Date.now()) {
            return true;
        }
    }
    return false;

}).map((user) => user.email)


// 2. First failed payment per user
// From users with payments: [{ amount, status, date }], return an array like:
// { userId, firstFailedPaymentDate }
// Only include users that have at least one failed payment.
const failedPayments = users.filter((user) => {
    const payments = user.payments;
    for (const payment of payments) {
        if (payment.status === "failed") {
            return true
        }
    }
}).map((user) => {
    const payments = user.payments;

    let i = 0;
    while (i < payments.length) {
        const payment = payments[i]
        if (payment.status === "failed") {
            return { id: user.id, firstFailedPaymentDate: payment.date }
        }
        i++;
    }


})

console.log(failedPayments)

// 3. Products that are effectively in stock
// Products have variants: [{ stock, reserved }].
// Return product names where total (stock - reserved) > 0.
//    {
//         name: "Keyboard",
//         variants: [
//             { stock: 10, reserved: 2 }
//         ]
//     }
const effectivelyInStockProducts = products.filter((product) => {
    let variants = product.variants;
    let stock = 0;
    let reserved = 0;
    //sum all stock and reserved;
    for (const variant of variants) {
        stock += variant.stock;
        reserved += variant.reserved
    }

    return (stock - reserved) > 0;

})
// 4. Find the first risky transaction
// Transactions have { id, amount, currency, flags }.
// Find the first transaction where:

// amount > 1000

// flags includes "suspicious"
// const transactions = [
//     { id: "t1", amount: 200, currency: "USD", flags: [] },
//     { id: "t2", amount: 1500, currency: "USD", flags: ["review"] },
//     { id: "t3", amount: 2500, currency: "EUR", flags: ["suspicious"] },
//     { id: "t4", amount: 3000, currency: "USD", flags: ["suspicious"] }
// ];
// Return the whole object.
const firstRiskyTransaction = transactions.find((transaction) => {
    if (transaction.flags.includes("suspicious") && transaction.amount > 1000) {
        return true;
    }
})
console.log(firstRiskyTransaction)
// 5. Normalize users for UI
// From users { id, name, role, lastLogin }, return:

// only users with role "admin" or "moderator"

// mapped to { id, label } where label = "NAME (ROLE)" in uppercase

// sorted is NOT allowed
const normalizedUsers = users.filter((user) => {
    return user.role === "admin" || user.role === "moderator"
}).map((user) => ({ id: user.id, label: `NAME (${user.role.toUpperCase()})` }))
console.log(normalizedUsers)
const users = [
    {
        id: 1,
        name: "Ana",
        age: 28,
        active: true,
        role: "admin",
        payments: [120, 0, 50],
        address: { city: "Bogotá", country: "CO" }
    },
    {
        id: 2,
        name: "Luis",
        age: 17,
        active: false,
        role: "user",
        payments: [],
        address: { city: "Medellín", country: "CO" }
    },
    {
        id: 3,
        name: "Sofía",
        age: 35,
        active: true,
        role: "user",
        payments: [200, 150],
        address: null
    },
    {
        id: 4,
        name: "Carlos",
        age: 42,
        active: true,
        role: "moderator",
        payments: [0, 0],
        address: { city: "Cali", country: "CO" }
    }
];

// find the first active user who has at least one payment > 100
const activeUsers = users.find(item => {
    for (const itm of item.payments) {
        if (itm > 100) {
            return true;
        }
    }
    if (item.active) {

    }

})

console.log(activeUsers)
// filter users who are adults, active, and have no address
const adultsWithNoAdress = users.find(item => {
    return item.age > 18 && item.address === null
})
// map users into { id, name, totalPaid }
const mappedUsers = users.map(item => {
    let total = 0;
    for (const payment of item.payments) {
        total += payment
    }
    return ({ id: item.id, name: item.name, total })
})
// filter users whose all payments are 0 (careful with empty arrays)
const paymentsAreAllZero = users.filter(user => {
    let total;
    if (Array.isArray((user.payments)) && user.payments.length) {
        total = 0;
        for (const payment of user.payments) {
            total += payment
        }
    }
    return total === 0
})


// filter users whose total payments >= age * 5
const totalPayments = users.filter(item => {
    let totalPayments = item.payments.reduce((acc, curr) => acc + curr, 0)
    return totalPayments >= item.age * 5;
})
console.log(totalPayments)
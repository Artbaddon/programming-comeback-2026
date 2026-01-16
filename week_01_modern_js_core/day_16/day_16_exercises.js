// 1. Users with complex activity

// Data:

{
    const users = [
        { id: 1, name: "Ana", logs: [5, 0, 3] },
        { id: 2, name: "Luis", logs: [0, 0, 0] },
        { id: 3, name: "Eva", logs: [2, 1, 4] }
    ]
    const usersWithComplexActivity = users.filter(user => {

        let totalZero = 0;

        const logs = user.logs


        for (const log of logs) {
            if (+log === 0) {
                totalZero++
            }
        }
        return totalZero >= 2
    })
    console.log(usersWithComplexActivity)
}

// Task:
// Get names of users who have at least two non-zero logs.

// 2. Orders with valid payments

// Data:
{
    const orders = [
        { id: 1, payments: [{ amount: 0 }, { amount: 20 }] },
        { id: 2, payments: [{ amount: -5 }, { amount: 0 }] },
        { id: 3, payments: [{ amount: 10 }, { amount: 15 }] }
    ];
    const validPayments = orders.filter(order => {
        let payments = order.payments
        let total = 0;
        for (const payment of payments) {
            total += payment.amount
        }
        return total > 0;

    })

    console.log(validPayments)
}
// Task:
// Find orders that have more than one payment > 0.

// 3. Products price normalization

// Data:

{
    const products = [
        { name: "A", prices: [10, 12, 11] },
        { name: "B", prices: [] },
        { name: "C", prices: [20] }
    ];

    const product = products.filter((item) => {
        let totalPayments = 0;
        for (const itm of item.prices) {
            if (Number(itm) > 0) {
                {
                    totalPayments++;

                }
            }
        }
        return totalPayments > 1
    })
}

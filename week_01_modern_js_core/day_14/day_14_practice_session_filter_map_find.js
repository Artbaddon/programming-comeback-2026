// 1. map — full name + age

// TODO: return { fullName, age }
{
    {
        const users = [
            { firstName: "Ana", lastName: "Perez", birthYear: 1998 },
            { firstName: "Luis", lastName: "Gomez", birthYear: 1985 }
        ];

        const result = users.map(user => ({ fullName: `${user.firstName} ${user.lastName}`, age: 2025 - user.birthYear }));

        console.log(result)
    }
}

// 2. map — order totals

// TODO: return { id, total }

{
    const orders = [
        { id: 1, items: [{ price: 10 }, { price: 25 }] },
        { id: 2, items: [{ price: 5 }, { price: 5 }, { price: 5 }] }
    ];

    const result = orders.map(order => {
        const { id, items: prices } = order
        let total = 0;
        for (let i = 0; i < prices.length; i++) {
            total += prices[i].price
        }
        return { id, total }
    });

    console.log(result)
}
// 3. map — price with tax

// TODO: apply 19% if category === "tech", else 10%

{
    const products = [
        { name: "Mouse", price: 50, category: "tech" },
        { name: "Book", price: 30, category: "education" }
    ];

    const result = products.map(product => {
        let { name, price, category } = result;
        let tax = price * 0.10;
        if (category === "tech") {
            tax = price * 0.19;
            price += tax
        } else {
            price += tax;
        }
        return { name, price, category }
    });
}
// 4. filter — active users

// TODO: not banned AND lastLoginDaysAgo ≤ 30

{
    const users = [
        { name: "Ana", banned: false, lastLoginDaysAgo: 10 },
        { name: "Luis", banned: true, lastLoginDaysAgo: 5 },
        { name: "Sofia", banned: false, lastLoginDaysAgo: 45 }
    ];

    const result = users.filter(user => !user.banned && user.lastLoginDaysAgo <= 30);
}

// 5. filter — orders with refunded items

// TODO: keep orders with at least one refunded item

{
    const orders = [
        { id: 1, items: [{ refunded: false }, { refunded: true }] },
        { id: 2, items: [{ refunded: false }] }
    ];

    const result = orders.filter(order => {
        let { items: orders } = order;
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].refunded) {
                return true
            }
        }
    });

    console.log(result)
}

// 6. filter — avg score > 80

// TODO: calculate average score

{
    const users = [
        { name: "Ana", scores: [90, 85, 88] },
        { name: "Luis", scores: [70, 60, 75] }
    ];

    const result = users.filter(user => {
        const { scores } = user;
        let total = 0;
        for (const score of scores) {
            total += score;
        }
        total /= scores.length

        return total > 80;
    });
    console.log(result)
}
// 7. find — credit limit exceeded

// TODO: first order where total > creditLimit

{
    const creditLimit = 100;
    const orders = [
        { id: 1, total: 80 },
        { id: 2, total: 120 },
        { id: 3, total: 200 }
    ];

    const result = orders.find(order => order.total > creditLimit);
}

// 8. find — incomplete profile

// TODO: missing email OR phone

{
    const users = [
        { name: "Ana", email: "a@mail.com", phone: "123" },
        { name: "Luis", email: null, phone: "456" }
    ];

    const result = users.find(user => {
        return !user.email || !user.phone

    });
}
// 9. find — failed payment after success

// TODO: status === "failed" AND hadPreviousSuccess

{
    const payments = [
        { id: 1, status: "success", hadPreviousSuccess: false },
        { id: 2, status: "failed", hadPreviousSuccess: true },
        { id: 3, status: "failed", hadPreviousSuccess: false }
    ];

    const result = payments.find(payment => {
        // TODO 
        return payment.status === 'failed' && payment.hadPreviousSuccess

    });
}

// 10. HARD — subscription without valid payment

// TODO: active subscription AND no valid payment method

{
    const users = [
        {
            name: "Ana",
            subscriptionActive: true,
            paymentMethods: [{ valid: true }]
        },
        {
            name: "Luis",
            subscriptionActive: true,
            paymentMethods: [{ valid: false }]
        }
    ];

    const result = users.find(user => {
        let { paymentMethods } = user;
        let totalInvalid = 0;
        for (let i = 0; i < paymentMethods.length; i++) {
            if (!paymentMethods[i].valid) totalInvalid++;
        }
        return totalInvalid.paymentMethods.length && user.subscriptionActive;
    });
}

// 11. HARD — all orders cancelled

// TODO: user has orders AND all are cancelled

const users = [
    {
        name: "Ana",
        orders: [{ status: "cancelled" }, { status: "cancelled" }]
    },
    {
        name: "Luis",
        orders: [{ status: "completed" }]
    }
];

const result = users.filter(user => {
    let { orders } = user;
    let totalCancelled = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status === "cancelled") {
            totalCancelled++
        }

    }
    return totalCancelled === orders.length;
});

const numbers = [1, 2, 3, 4, 5];

const orders = [
    { product: "Laptop", amount: 1000 },
    { product: "Phone", amount: 500 },
    { product: "Phone", amount: 500 },
    { product: "Tablet", amount: 300 }
];
const toFlatten = [[1, 2], [3, 4], [5]];

// 1. Sum all numbers
const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
// 2. Find the maximum number
const maxNumber = numbers.reduce((acc, curr) => curr > acc ? curr : acc, numbers[0])
// 3. Calculate total of all orders
const totalOfAllOrder = orders.reduce((acc, curr) => acc + curr.amount, 0)
// 4. Count occurrences: { Laptop: 1, Phone: 2, Tablet: 1 }
const concurrences = orders.reduce((acc, curr) => {
    acc[[curr.product]] = acc[[curr.product]] || 0;
    acc[[curr.product]]++;
    return acc;
}, {})
// 5. Group orders by product: { Laptop: [{amount}, {amount}], Phone: [{amount}] }
const ordersByProduct = orders.reduce((acc, curr) => {
    acc[[curr.product]] = acc[[curr.product]] || [];
    acc[[curr.product]].push({ amount: curr.amount })
    return acc;
}, {})
// 6. Flatten [[1,2], [3,4], [5]] into [1,2,3,4,5]
const flattenedArr = toFlatten.reduce((acc, curr) => {
    acc.push(...curr)
    return acc
}, [])
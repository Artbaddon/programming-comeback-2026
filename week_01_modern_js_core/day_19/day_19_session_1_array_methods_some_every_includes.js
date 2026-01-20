//SOME
// Check if any number is even
const numbers = [1, 3, 5, 8];

const numberIsEven = numbers.some((ele) => ele % 2 == 0);

// Check if any number is negative
const numbers2 = [4, 6, -2, 9]
const thereAreNegatives = numbers2.some(ele => ele < 0);

console.log(thereAreNegatives)

// Check if any string is empty
// ['hi','', 'ok']
const stringArr = ['hi', '', 'ok'];
const stringIsEmpty = stringArr.some(ele => ele === "");

console.log(stringIsEmpty)
// Check if any user is inactive
// 
const userIsInactive = [{ active: true }, { active: false }]
const anyUserInactive = userIsInactive.some(ele => ele.active);
console.log(anyUserInactive);

// Check if any age is under 18
const agesArr = [21, 25, 17, 30];
const thereAreMinors = agesArr.some(ele => ele < 18);
console.log(thereAreMinors);

// Check if any value is null or undefined

const valuesArr = [1, null, 3];
const hasNullOrUnd = valuesArr.some(ele => typeof ele === "undefined", ele === null)
// Check if any product is out of stock
// [{stock:3},{stock:0}]
const productStock = [{ stock: 3 }, { stock: 0 }]
const productIsOutOfStock = productStock.some(ele => ele.stock < 1);
console.log(productIsOutOfStock)

// Check if any string contains a number
// ['abc','a1c','xyz']
const stringsArr = ['abc', 'a1c', 'xyz'];
const stringContainsANumber = stringsArr.some((ele) => {
    for (const l of ele) {
        if (!isNaN(+l)) return true;
    }
})

// Check if any score is greater than 90
// [55,72,91,88]
const scoresArr = [55, 72, 91, 88];

const scoreIsGreaterThan90 = scoresArr.some(ele => ele > 90);
// Check if any object is missing a required key (id)
// [{id:1},{name:'x'}]
const users1 = [{ id: 1 }, { name: 'x' }];
const arrIsMissingId = users1.some(ele => !ele[id])
console.log(arrIsMissingId)

//every 
{
    // Check if all numbers are positive
    // [1, 3, 5, 7]
    const numbers = [1, 3, 5, 7];
    const allArePositive = numbers.every(ele => ele > 0);
    // Check if all numbers are even
    // [2, 4, 6, 8]
    const numbers2 = [2, 4, 6, 8];
    const areNumbsAreEven = numbers2.every(ele => ele % 2 === 0);
    // Check if all strings are non-empty
    // ['a', 'b', 'c']
    const string = ['a', 'b', 'c'];
    const allAreNonEmpty = string.every(ele => ele.length);
    console.log(allAreNonEmpty)

    // Check if all users are active
    // [{active:true}, {active:true}]
    const users = [{ active: true }, { active: true }];
    const allAreActive = users.every(ele => ele.active)
    console.log(allAreActive)
    // Check if all ages are 18 or older
    // [21, 30, 18]
    const ages = [21, 30, 18];
    const allAreOld = ages.every(ele => ele > 18);
    // Check if all values are not null or undefined
    // [1, 2, 3]

    const values = [1, 2, 3];
    const allAreNotNull = values.every(ele => ele !== null && ele !== undefined);
    // Check if all products are in stock (stock > 0)
    // [{stock:2}, {stock:5}]
    const products = [{ stock: 2 }, { stock: 5 }];
    const allAreInStock = products.every(ele => ele.stock > 0)
    // Check if all emails contain @
    // ['a@b.com', 'x@y.net']
    const emailsArr = ['a@b.com', 'x@y.net'];
    const allAreValid = emailsArr.every(ele => ele.match(/@/gm));
    // Check if all scores are ≤ 100
    // [88, 92, 100]

    // Check if all objects have an id property
    // [{id:1}, {id:2}]
    const idsArray = [{ id: 1 }, { id: 2 }]
    const allHaveId = idsArray.every(ele => ele["id"])
}


// 1. Create a Promise that resolves after 2 seconds with "Done!"
const delayed = new Promise((resolve, reject) => {

    // Your code
    setTimeout(resolve("DOne"), 2000)
});

// 2. Create a Promise that randomly resolves or rejects (50/50)
const coinFlip = new Promise((resolve, reject) => {
    // Your code
    //generate a random num
    const random = Math.floor(Math.random() * (10 - 1) + 1);

    if (random % 2 === 0) {
        reject(new Error("Rejected"));
    } else {
        resolve("OK")
    }
});

// 3. Wrap setTimeout in a Promise:
function delay(ms) {
    // Return a Promise that resolves after ms milliseconds
    setTimeout(resolve("ok"), ms)
}

// 4. Create a Promise that rejects if a number is negative:
function validatePositive(num) {
    return new Promise((resolve, reject) => {
        if (num < 0) reject(new Error("Error number is negative"))
        resolve("ok")
    });
}
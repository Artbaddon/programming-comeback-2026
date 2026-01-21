
// --- MOCK DATA FOR TESTING ---
const DB = {
    users: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
    posts: [{ userId: 1, content: "Promises are cool!" }]
};

// --- LEVEL 1: THE BASICS ---

// 1. The Instant Success
const ex1 = Promise.resolve("Hello World");
// Use .then() to log the result here:
ex1.then((result) => console.log(result))

// 2. The Delayed Gift
const ex2 = new Promise((resolve) => {
    setTimeout(() => resolve(42), 2000);
});
// Handle ex2 here:
ex2.then(result => alert(result))


// 3. The Immediate Rejection
const ex3 = Promise.reject(new Error("Access Denied"));
// Handle the error here using .catch():
ex2.catch(error => console.error(error))

// --- LEVEL 2: CHAINING & FLOW ---

// 4. The Formatter (Chaining)
const ex4 = Promise.resolve("javascript");
// Chain: 1. Convert to Uppercase -> 2. Log result
ex4
    .then(result => result.toUpperCase())
    .then(result => console.log(result))

// 5. The Safety Net
const ex5 = new Promise((res, rej) => {
    Math.random() > 0.5 ? res("Success!") : rej("Failure!");
});
// Handle with .then, .catch, and .finally:
ex5
    .then(res => console.log(res))
    .catch(error => console.error(error))
    .finally(console.log("clenaed"))

// 6. The Data Cleaner
const dataSet6 = [10, 20, "error", 40];
const ex6 = Promise.resolve(dataSet6);
// Chain: 1. Filter out strings -> 2. Log the resulting array
ex6
    .then(() => {
        return dataSet6.filter(ele => typeof ele === "number")
    })
    .then(result => console.log(result))

// --- LEVEL 3: REAL-WORLD SIMULATION ---

// 7. API Fetch Simulation
function fetchUser(isLoggedIn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isLoggedIn ? resolve(DB.users[0]) : reject("Not Authorized");
        }, 1000);
    });
}
// Test fetchUser(true) and fetchUser(false) here:
fetchUser(true).then(res => console.log(res))
fetchUser(false).catch(err => console.log(err))

// 8. The Password Validator
function validatePassword(pw) {
    return new Promise((resolve, reject) => {
        pw.length >= 8 ? resolve("Password saved") : reject("Password too short");
    });
}
// Use it and ensure a .finally() logs "Validation attempt recorded"
validatePassword("12345678")
    .finally(() => console.log("Validation attempt recorded"))
    .then(result => console.log(result))

// --- LEVEL 4: ADVANCED LOGIC ---

// 9. The Fallback Pattern (Recovery)
const ex9 = Promise.reject("Primary Server Down");
// Catch the error, RETURN "Connected to Backup Server", then .then() to log it.
ex9.catch(() => {
    return "Connected to Backup Server"
}).then(result => console.log(result))

// 10. The Sequential User Journey
const getUser = () => new Promise(res => setTimeout(() => res(DB.users[0]), 500));
const getPost = (userId) => new Promise(res => setTimeout(() => res(DB.posts.find(p => p.userId === userId)), 500));

getUser()
    .then(user => getPost(user.id))
    .then(post => console.log(post))
    .catch(err => console.error(err))
// Call getUser, then use the ID to call getPost, then log the content.
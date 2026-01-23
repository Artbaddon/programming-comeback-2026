
// =======================
// ASYNC / AWAIT PRACTICE
// =======================

// Fake APIs (ready to use)
const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

// Helper
const delay = (ms) => new Promise(res => setTimeout(res, ms));

/* =========================================================
   LEVEL 1 — BASICS (1–5)
========================================================= */

// 1. async function that returns "hello async"
async function ex1() {
    // TODO
    return "Hello Async";
}

// 2. async function that throws an error, catch it
async function ex2() {
    // TODO
    try {
        throw new Error("THRHOWING ERROR")
    } catch (error) {
        console.error(error.message)
    }
}

// 3. await a promise that resolves after 1 second
{
    async function ex3() {
        // TODO
        return new Promise((resolve) => {
            setTimeout(() => resolve("resolved"), 1000)
        })
    }
    async function main() {
        let value = await ex3();
        console.log(value)
    }
}



// 4. convert Promise.then to async/await
async function ex4() {
    // Promise.resolve(5).then(x => x * 2)
    // TODO
    const x = await Promise.resolve(5)
    return x * 2;
}
async function main() {
    let value = await ex4();

}
async function getValue() {
    await delay(500)
    return 5;
}
// 5. async function used inside another async function
async function ex5() {
    // TODO
    const value = await getValue();

    return value;
}

/* =========================================================
   LEVEL 2 — AWAIT & ERRORS (6–10)
========================================================= */

// 6. await two promises sequentially
async function ex6() {
    // TODO
    const getValue = await Promise.resolve(5)
    const anotherValue = await Promise.resolve(6)
    return getValue * anotherValue
}

async function getProfilePictureUrl(id) {

    const profilePictures = [
        { url: "url1", id: 1 }, { url: "url2", id: 1 }, { url: "url3", id: 3 }
    ]
    const profilePic = profilePictures.find((ele) => ele.id === id)
    return new Promise((resolve) => {
        setTimeout(() => resolve(profilePic.url), 1000);
    })
}
async function getUsername(id) {
    const users = [
        { userID: 1, name: "VIctor" },
        { userID: 1, name: "Pablo" },
        { userID: 1, name: "Carlos" },
        { userID: 1, name: "Fred" }
    ]
    const user = users.find((ele) => ele.userID === id)

    return new Promise((resolve) => {
        setTimeout(() => resolve(user.name), 2000)
    })
}
// 7. await two promises with Promise.all
async function ex7() {

    const results = await Promise.all([getUsername(1), getProfilePictureUrl(1)])

    console.log(results)
}

// 8. try/catch rejected promise
async function ex8() {
    try {
        await Promise.reject(new Error("Promise Rejected"))
    } catch (err) {

        console.error(err)

    }
}

// 9. always return a value even if error happens
async function userIsLoggedIn(userId) {
    const users = [
        { userID: 1, name: "VIctor", isLogged: true },
        { userID: 2, name: "Pablo", isLogged: false },
        { userID: 3, name: "Carlos", isLogged: false },
        { userID: 4, name: "Fred", isLogged: true }
    ]
    const user = users.find((ele) => ele.userID === userId)
    return user ? user.isLogged : false;
}
async function ex9() {
    // TODO
    try {
        const userCanAccess = await userIsLoggedIn(1)

        if (!userCanAccess) {

            throw new Error("user is not logged in")

        }

        console.log("Redirecting to dashboard....")

        return true;

    } catch (error) {
        console.log(error.message)
        return false;
    }
}

// 10. show what async returns (comment explanation)
async function ex10() {
    // TODO
}

/* =========================================================
   LEVEL 3 — FETCH BASICS (11–14)
========================================================= */

// 11. fetch users and log names
async function ex11() {
    // TODO
    const response = await fetch(USERS_API);
    const result = await response.json();

    for (let i = 0; i < 10; i++) {
        console.log(result[i].name)
    }


}

// 12. handle non-200 response manually
async function ex12() {
    // TODO
    try {
        const response = await fetch("USERS_API");

        if (!response.ok) {
            throw new Error(`response statues ${response.status}`)
        }

        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.error(error.message)
    }
}

// 13. reusable fetch function
async function fetchJSON(url) {
    // TODO

    const response = await fetch(url);

    if (response.ok) {
        throw new Error(`response status ${response.status}`);
    }

    return await response.json();


}


// 14. fetch users → return { id, name }
async function ex14() {
    // TODO
    const response = await fetch(USERS_API);

    if (!response.ok) {
        throw new Error(`status ${response.status}`);

    }

    const result = await response.json();

    const users = result.reduce((acc, user) => {
        acc.push({
            id: user.id,
            name: user.name
        })

        return acc;

    }, [])

    console.log(users)
}



// 20. retry fetch 3 times before failing
async function fetchWithRetry(url, retries = 3) {
    // TODO
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        if (retries === 0) {
            throw err
        }

        return fetchWithRetry(url, retries - 1)
    }


}

/* =========================================================
   RUN TESTS (uncomment one at a time)
========================================================= */

// ex1().then(console.log);
// ex2();
// ex3();
// ex4().then(console.log);
// ex5();

// ex6();
// ex7();
// ex8();
// ex9().then(console.log);
// ex10();

// ex11();
// ex12();
// ex14().then(console.log);

// ex15();
// ex16();
// ex17();

// ex18();
// ex19();
// fetchWithRetry(USERS_API).then(console.log);

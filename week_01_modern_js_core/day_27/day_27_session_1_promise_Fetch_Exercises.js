
// Task 3: Resource Pre-loader
async function loadResource(resource) {

    const loadTime = Math.floor(Math.random() * 5 + 1) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const officialResource = getResource(resource);
            if (!officialResource) {
                return reject(new Error(`Error, could not find a resource called ${resource}`))
            }
            resolve(`Loaded resource ${resource} after ${loadTime / 1000} seconds => ${officialResource}`)

        }, loadTime)

    })

}

function getResource(resource) {
    switch (resource.toLowerCase()) {
        case "map":
            return ["X", "X", "X", " ", "X", " "];
        case "playerskin":
            return "SKIN 1"
        case "soundsettings":
            return { volume: "69", sound: "stereo" }
        default:
            return false;

    }
}
// Objective: Simulate loading a "Game" where you need the Map, PlayerSkin, and SoundSettings before starting.

async function startGame() {
    const resources = await Promise.all([loadResource("Map"), loadResource("PlayerSkin"), loadResource("SoundSettings")])

    console.log("Game Has Started", resources)

}
// Test Data: 3 promises resolving with strings. Ensure the "Game Starts" log only appears after all 3 are done.

// Topic 2: Promise.allSettled (The Resilient Report)
// Task 4: The Batch Emailer

// Objective: Process a list of email attempts. Log how many were "fulfilled" and how many were "rejected."
async function tryEmail(email) {
    const loadTime = Math.floor(Math.random() * 3 + 1) * 1000;
    const regex = /@/
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (regex.test(email)) {
                return resolve("sent")
            }
            return reject(new Error("invalid"))
        }, loadTime)
    })

}

async function processEmailAttempts() {
    const attempts = await Promise.allSettled([
        tryEmail("a@gmail.com"),
        tryEmail("agmail.com"),
        tryEmail("a2@gmail.com"),
        tryEmail("agmail.com"),
    ])

    const totalAttempts = attempts.reduce((acc, cur) => {
        acc[cur.status] = acc[cur.status] | 0;

        acc[cur.status]++


        return acc
    }
        , {})
    console.log(totalAttempts)
}
// Test Data: const attempts = [Promise.resolve('sent'), Promise.reject('invalid'), Promise.resolve('sent')];

// Task 5: Dashboard Widget Loader

// Objective: Fetch data for 3 widgets. Map through the results and return an array where failed widgets are replaced with a "Fallback Data" string.

// Test Data: [fetchWidget1(), fetchWidget2(), fetchWidget3()].

// Task 6: The Log Harvester

// Objective: Try to fetch logs from 3 different servers. Even if 2 fail, you must return the data from the 1 that succeeded.

// Test Data: Use one resolve and two rejects.

// Topic 3: Promise.race (The Sprint)
// Task 7: The 1-Second Deadline

// Objective: Make a fetch request. If it doesn't finish in 1 second, the "Timeout" wins and logs "Connection timed out."

// Test Data: Use a fetch and a setTimeout promise of 1000ms.

// Task 8: Fastest Mirror Search

// Objective: You have two search APIs. Trigger both at once and return the result of the one that finishes first.

// Test Data: apiA (200ms delay), apiB (500ms delay).

// Task 9: Global "Abort" Simulation

// Objective: Race a long data process against a "Cancel" button promise. If the user clicks cancel (simulated by a promise that resolves on a timer), stop the operation.

// Test Data: process: 5s, cancel: 2s.

// Topic 4: Error Handling (Try/Catch/Finally)
// Task 10: The Loading Toggle

// Objective: Write a function that sets a variable isLoading to true, tries a fetch, and always sets isLoading to false at the end, regardless of success or failure.

// Test Data: A fetch to a non-existent URL.

// Task 11: Specific Error Messaging

// Objective: In your catch block, differentiate between a TypeError (like a bad URL) and a custom Error (like a 404 response).

// Test Data: Try to fetch an invalid domain.

// Task 12: The Fallback Return

// Objective: Write a function that fetches a list. If it fails, instead of throwing an error, it returns an empty array [] so the rest of the app doesn't break.

// Test Data: fetch('https://wrong-api.com').

// Topic 5: Fetch (GET & Basics)
// Task 13: The Response.ok Check

// Objective: Fetch a post. If the ID is invalid (like 9999), throw an error that says "Post not found" using res.ok.

// Test Data: const ID = 9999;

// Task 14: Text to Object

// Objective: Fetch from an API, check if it's successful, and convert the response specifically to JSON.

// Test Data: https://jsonplaceholder.typicode.com/todos/1

// Task 15: Header Inspector

// Objective: Fetch any public URL and log the Content-Type header found in the response headers.

// Test Data: Use any JSONPlaceholder URL.

// Topic 6: Fetch with Headers & POST (The Payload)
// Task 16: The Authorized Post

// Objective: Create a new "Post" on a server. You must include an Authorization header and a Content-Type header.

// Requirements: Method POST, Body must be stringified.

// Test Data: const myPost = { title: "JS", body: "Learning" };

// Task 17: Update (PUT) Request

// Objective: Update an existing item (ID 1). Use the PUT method to replace the data.

// Requirements: Method PUT, Headers include application/json.

// Task 18: The Versioned Request

// Objective: Send a GET request, but include a custom header X-API-Version: 2.

// Test Data: Any valid endpoint.
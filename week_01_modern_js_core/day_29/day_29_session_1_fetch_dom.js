

// 2. Create a reusable API client:
const api = {
    async get(endpoint) { /* ... */ },
    async post(endpoint, data) { /* ... */ },
    async put(endpoint, data) { /* ... */ },
    async delete(endpoint) { /* ... */ }
};
// 3. Add authorization header:
async function fetchWithAuth(url, token) {
    // Add "Authorization": "Bearer {token}" header
    const response = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${token}`

        }
    })
    if (!response.ok) throw new Error(`Fetch failed with status ${response.status}`);
    const result = await response.json();

    return result
}

const headers1 = { url: "aaa", headers: { a: "b", b: "b", c: "c" } };

const { url, headers: { ...options } } = headers1;



// Exercise 1: The "Smart" Header Merger
// Goal: Create a function that handles dynamic headers.

// The Task: Write a function customFetch(url, options) that:

// Always includes 'Content-Type': 'application/json' by default.

// Accepts an optional token. If provided, it adds the Authorization header.

// Allows the user to override any header via the options object.

// Success Criteria: If I call customFetch(url, { headers: { 'Content-Type': 'text/plain' } }), the final request should use text/plain, not the default.

async function customFecth(url, { method = "GET", token, customHeaders: userHeaders, ...otherOptions }) {

    const finalHeaders = { "Content-type": "application/json", ...userHeaders };

    if (token) {
        finalHeaders["Authorization"] = `Bearer ${token}`
    }
    const config = {
        method,
        headers: finalHeaders,
        ...otherOptions
    }


    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error(`Error response status ${response.status.toString()}`)
        }

        return await response.json();
    } catch (error) {
        throw error
    }


}
// Exercise 2: The "Status-Specific" Error Handler
// Goal: Master try/catch logic with different HTTP status codes.

// The Task: Write a fetch wrapper that handles specific errors differently:

// If the status is 401, console.error("Redirecting to login...").

// If the status is 404, return a custom message: "Resource not found".

// For any other error (500, etc.), throw a generic Error.

// Bonus: Use a finally block to log "Request finished" regardless of success or failure.

async function handleDifferentErrors(url) {

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status)

        return await response.json();
    } catch (error) {
        if (error.message == "401") console.error("Redirect error")
        else if (error.message == "404") console.error("Resource not found")
        else console.error("Generic error")

        throw Error;
    } finally {
        console.log("Request finished")
    }
}
// Exercise 3: The Timeout Race
// Goal: Combine fetch with a timeout using Promise.race.

// The Task: Create a function fetchWithTimeout(url, ms).

// Create a "timeout promise" that rejects after ms milliseconds.

// Use Promise.race() to compete your fetch call against that timeout.

// If the timeout wins, the function should throw "Request took too long".

// Note: This is an alternative to AbortController and is excellent practice for understanding how Promises compete.

async function timeoutReject(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Request took too long")),ms);
    })
}

async function fetchWithTimeout(url, ms) {
    try {
        const response = await Promise.race([fetch(url), timeoutReject(ms)])

        if (!response.ok) throw new error(`request failed with status ${response.status}`)

    } catch (error) {
        console.error(error)
        throw error
    }

}


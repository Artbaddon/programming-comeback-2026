
// Exercise 4: The POST Request (The "Body" Builder)
// Goal: Practice sending data to a server rather than just receiving it.

// The Task: Write a function submitComment(commentObj, token).

// Requirements: 1. The method must be 'POST'. 2. It must include the token in the headers. 3. It must take the commentObj (e.g., { text: "Hello!" }) and turn it into a JSON string for the body.

// Key Challenge: Remember that a POST request usually requires both Content-Type: application/json and a stringified body.
async function submitComment(commentObj, token, url) {

    const finalHeaders = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    const options = {
        headers: finalHeaders,
        method: "POST",
        body: JSON.stringify(commentObj)
    }
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Post failed ${response.status}`)
        }

        return await response.json();
    } catch (error) {
        console.error("Submission error", error);
        throw error
    }

}


// Exercise 5: The "No-JSON" Response (Handling Blobs/Text)
// Goal: Practice handling responses that aren't JSON (like a profile picture or a plain text log).

// The Task: Write a function fetchProfileType(url).

// Requirements:

// Check the Content-Type header of the response (Hint: use response.headers.get('content-type')).

// If the type is application/json, return response.json().

// If the type starts with text/, return response.text().

// Key Challenge: Learning that response.json() isn't the only way to read a body!

// Exercise 6: The "Retry" Logic (The Persistence Test)
// Goal: Practice using try/catch to attempt a failed request more than once.

// The Task: Write a function fetchWithRetry(url, retries = 3).

// Requirements:

// Try to fetch the URL.

// If it fails (caught in the catch block), check if you have retries left.

// If yes, call the function again (decrementing the retry count).

// If no retries are left, finally throw the error.

// Key Challenge: This uses recursion inside your catch block.
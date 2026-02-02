// Exercise: Robust fetch handler

// Write a function fetchSmart(url) that:

// Uses fetch(url)

// If status is not OK → throw an error with status code

// Reads Content-Type

// If application/json → return parsed JSON

// If text/* → return text

// Otherwise → return Blob

// Handles network errors with try/catch

async function fetchSmart(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) throw new Error(response.status)

        const responseHeaders = response.headers.get("content-type") || "";

        if (responseHeaders.includes("application/json")) {
            return await response.json()
        }
        if (responseHeaders.includes("text/")) {
            return await response.text();
        }

        return await response.blob()
    } catch (err) {
        console.log(`Fetch failed with error status ${err.message}`)
    }
}
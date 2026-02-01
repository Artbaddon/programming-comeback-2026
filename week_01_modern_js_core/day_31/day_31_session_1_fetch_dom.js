// Exercise 5: The "No-JSON" Response (Handling Blobs/Text)
// Goal: Practice handling responses that aren't JSON (like a profile picture or a plain text log).

// The Task: Write a function fetchProfileType(url).

// Requirements:

// Check the Content-Type header of the response (Hint: use response.headers.get('content-type')).

// If the type is application/json, return response.json().

// If the type starts with text/, return response.text().

// Key Challenge: Learning that response.json() isn't the only way to read a body!
async function fetchProfilePicture(url) {


    const response = await fetch(url);
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    const responseContentType = response.headers.get('content-type') || "";
    if (responseContentType.includes("application/json")) {
        return response.json();
    }
    if (responseContentType.startsWith("text/")) {
        return response.text;
    }

    throw new error("Unsupported content type")


}

async function getUserData(username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    // 1. Fetch the data
    const response = await fetch(url);
    // 2. Check if response.ok is true
    if (!response.ok) throw new Error(response.status)

    // 3. Parse JSON
    const result = await response.json();
    // 4. Log the specific fields (name, public_repos, followers)
    console.log(`name: ${result.name}, public_repos: ${result.public_repos}, followers ${result.followers}`)
  } catch (error) {
    // 5. Handle errors
    if (error.message === "404") console.error("User not found!")
  }
}

// Test it out!
getUserData('octocat');
getUserData('this-user-definitely-does-not-exist-12345');

async function getSomething() {
  try {
    const response = await fetch("https://randomuser.me/api/")

    if (!response.ok) throw new Error(`Fetch failed: ${response.status}`)

    const user = await response.json();


    const { name, email } = user.results[0]
    console.log(`User: ${name.first} ${name.last} Email: ${email}}`)
  } catch (error) {
    console.error(error);
    throw error
  }


}

getSomething()
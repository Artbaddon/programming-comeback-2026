const BASE_URL = "https://randomuser.me/api/"
const fetchUser = async () => {
  try {
    // 1. Call the fetch function
    const response = await fetch(BASE_URL)
    if (!response.ok) throw new Error(response.status)
    // 2. Convert response to JSON
    const result = await response.json()
    // 3. Extract and log the data


    const { first, last } = result.results[0].name;
    console.log(first, last)
  } catch (error) {
    console.error("Oops, something went wrong:", error);
  }
};

fetchUser()
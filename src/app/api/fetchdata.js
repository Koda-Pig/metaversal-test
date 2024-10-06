/**
 * Fetch data from the API.
 *
 * @param {Object} params - The parameters for the fetch request.
 * @param {number} [params.userId] - The ID of the user (optional).
 * @param {'posts' | 'users'} params.dataType - Type of data to fetch.
 * @param {number} [params.limit] - The limit of items to fetch (optional).
 * @param {number} [params.skip] - The number of items to skip (optional).
 * @param {string} [params.sortBy] - The field to sort the data by (optional).
 *
 * @returns {Promise<Object>} The fetched data.
 */
export const fetchData = async ({ dataType, userId, limit, skip, sortBy }) => {
  const baseUrl = "https://dummyjson.com/";

  let path = "";
  if (dataType === "posts") {
    if (userId) {
      path = `posts/user/${userId}`;
    } else {
      path = "posts";
    }
  } else if (dataType === "users") {
    if (userId) {
      path = `users/${userId}`;
    } else {
      path = "users";
    }
  } else {
    throw new Error(`Unsupported dataType: ${dataType}`);
  }

  // Create a URL object
  const url = new URL(path, baseUrl);

  // Append query parameters
  if (limit !== undefined && limit !== null) {
    url.searchParams.append("limit", limit);
  }
  if (skip !== undefined && skip !== null) {
    url.searchParams.append("skip", skip);
  }
  if (sortBy) {
    url.searchParams.append("sortBy", sortBy);
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    console.error("Unable to fetch data:", error);
    throw error;
  }
};

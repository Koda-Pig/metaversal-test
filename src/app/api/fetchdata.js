/**
 * Fetch data from the API.
 *
 * @param {Object} params - The parameters for the fetch request.
 * @param {number} params.userId - The ID of the user.
 * @param {'posts' | 'users'} params.dataType - posts or users
 * @param {number} [params.limit] - The limit of items to fetch (optional).
 * @param {number} [params.skip] - The number of items to skip (optional).
 *
 * @returns {Promise<void>} The fetched data.
 */

// generate types for userId, url, limit, skip

export const fetchData = async ({ dataType, userId, limit, skip }) => {
  let url = `https://dummyjson.com/${dataType}`;

  if (userId) {
    url += `/user/${userId}`;
  }

  if (limit && skip) {
    url += `?limit=${limit}&skip=${skip}`;
  } else if (limit) {
    url += `?limit=${limit}`;
  } else if (skip) {
    url += `?skip=${skip}`;
  }

  try {
    const response = await fetch(url);
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    console.error("Unable to fetch data: ", error);
    return error;
  }
};

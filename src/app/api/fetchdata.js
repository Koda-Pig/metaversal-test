/**
 * Fetch data from the API.
 *
 * @param {Object} params - The parameters for the fetch request.
 * @param {number} [params.userId] - The ID of the user (optional).
 * @param {'posts' | 'users'} params.dataType - Type of data to fetch.
 * @param {number} [params.limit] - The limit of items to fetch (optional).
 * @param {number} [params.skip] - The number of items to skip (optional).
 * @param {string} [params.sortBy] - The field to sort the data by (optional).
 * @param {number} [params.delay] - The delay in milliseconds between 0 and 5000 (optional).
 *
 * @returns {Promise<Object>} The fetched data.
 */
import { LRUCache } from "lru-cache";

const cache = new LRUCache({
  max: 100, // max items in cache
  ttl: 1000 * 60 * 60, // 1 hour time-to-live
  allowStale: false,
});

export const fetchData = async ({
  dataType,
  userId,
  limit = 0,
  skip = 0,
  sortBy,
  delay = 0,
}) => {
  const cacheKey = `dummyjson_${dataType}-${
    userId || "all"
  }-limit${limit}-skip${skip}-sortBy${sortBy || "none"}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.info("Serving from LRU cache");
    return cachedData;
  }

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
    throw new Error(
      `Unsupported dataType: ${dataType}. Must be either 'posts' or 'users'. Got: ${dataType}`
    );
  }

  const url = new URL(path, baseUrl);

  // Append query parameters
  if (limit !== undefined && limit !== null) {
    url.searchParams.append("limit", limit);
  }
  if (skip !== undefined && skip !== null) {
    url.searchParams.append("skip", skip);
  }
  if (delay !== undefined && delay !== null) {
    url.searchParams.append("delay", delay);
  }
  if (sortBy) {
    url.searchParams.append("sortBy", sortBy);
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "Cache-Control":
          "public, max-age=3600, stale-while-revalidate=60, stale-if-error=60",
      },
    });
    if (!response.ok) {
      console.error(
        `HTTP error! Status: ${response.status}. Path ${url.pathname}`
      );
      return null;
    }

    // Empty response
    if (response.status === 204) {
      console.warn("No content found in response");
      return null;
    }

    const fetchedData = await response.json();

    // Store in cache
    cache.set(cacheKey, fetchedData);

    return fetchedData;
  } catch (error) {
    console.error("Unable to fetch data:", error.message);
    throw error;
  }
};

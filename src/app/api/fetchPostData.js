export const fetchPostData = async ({ limit = 0, skip = 0 } = {}) => {
  const data = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const postData = await data.json();
  return postData;
};

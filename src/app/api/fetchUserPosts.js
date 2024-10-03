export const fetchUserPosts = async (userId) => {
  const data = await fetch(`https://dummyjson.com/posts/user/${userId}`);
  const postData = await data.json();
  return postData;
};

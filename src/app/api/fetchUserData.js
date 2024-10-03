export const fetchUserData = async ({ limit = 0, skip = 0 } = {}) => {
  const data = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );
  const userData = await data.json();
  return userData;
};

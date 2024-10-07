import { fetchData } from "@/app/api/fetchdata";

export const limitItems = (items, limit) => {
  return items.slice(0, limit);
};

export const calculateTotalLikes = (posts) => {
  return posts.reduce((acc, post) => {
    return acc + post.reactions.likes;
  }, 0);
};

export const sortPostsByLikeCount = (posts) => {
  return posts.sort((a, b) => b.post.reactions.likes - a.post.reactions.likes);
};

export const sortUsersByPostCount = (users) => {
  return users.sort((a, b) => b.posts.total - a.posts.total);
};

export const addUsersToPosts = async (posts) => {
  return await Promise.all(
    posts.map(async (post) => {
      try {
        const user = await fetchData({
          userId: post.userId,
          dataType: "users",
        });
        return { post, user };
      } catch {
        console.warn(`No user found for post ${post.id}`);
        return { post, user: null };
      }
    })
  );
};

export const addPostsToUsers = async (users) => {
  return await Promise.all(
    users.map(async (user) => {
      try {
        const posts = await fetchData({
          userId: user.id,
          dataType: "posts",
        });
        return { ...user, posts };
      } catch {
        console.warn(`No posts found for user ${user.id}`);
        return { ...user, posts: null };
      }
    })
  );
};

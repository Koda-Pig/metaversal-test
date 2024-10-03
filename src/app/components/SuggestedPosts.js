import Post from "./Post";

const sortPostsByLikeCount = (posts) => {
  return posts.sort((a, b) => b.reactions.likes - a.reactions.likes);
};

const limitPosts = (posts, limit) => {
  return posts.slice(0, limit);
};

const SuggestedPosts = ({ posts }) => {
  const sortedPosts = sortPostsByLikeCount(posts);
  const limitedPosts = limitPosts(sortedPosts, 2);

  return (
    <>
      <h2 className="text-black font-extrabold text-2xl mb-4">
        Suggested posts
      </h2>
      <section>
        {limitedPosts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </>
  );
};

export default SuggestedPosts;

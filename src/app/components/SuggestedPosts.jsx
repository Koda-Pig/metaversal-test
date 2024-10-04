import { limitItems } from "../lib";
import Post from "./Post";

const sortPostsByLikeCount = (posts) => {
  return posts.sort((a, b) => b.reactions.likes - a.reactions.likes);
};

const SuggestedPosts = ({ posts }) => {
  const sortedPosts = sortPostsByLikeCount(posts);
  const limitedPosts = limitItems(sortedPosts, 2);

  return (
    <section>
      <h2 className="text-black font-extrabold text-2xl mb-4">
        Suggested posts
      </h2>
      {limitedPosts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default SuggestedPosts;

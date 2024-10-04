import { limitItems } from "../lib";
import Post from "./Post";
import Section from "./Section";

const sortPostsByLikeCount = (posts) => {
  return posts.sort((a, b) => b.reactions.likes - a.reactions.likes);
};

const SuggestedPosts = ({ posts }) => {
  const sortedPosts = sortPostsByLikeCount(posts);
  const limitedPosts = limitItems(sortedPosts, 2);

  return (
    <Section title="Suggested posts">
      <div className="space-y-4">
        {limitedPosts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default SuggestedPosts;

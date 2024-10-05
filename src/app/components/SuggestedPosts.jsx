import { limitItems } from "@/app/lib";
import Post from "./Post";
import Section from "./Section";

const sortPostsByLikeCount = (posts) => {
  return posts.sort((a, b) => b.post.reactions.likes - a.post.reactions.likes);
};

const SuggestedPosts = async ({ posts }) => {
  const sortedPosts = sortPostsByLikeCount(posts);
  const limitedPosts = limitItems(sortedPosts, 2);

  return (
    <Section title="Suggested posts">
      <div className="space-y-4">
        {limitedPosts?.map(({ post, user }) => {
          return <Post key={post.id} post={post} user={user} />;
        })}
      </div>
    </Section>
  );
};

export default SuggestedPosts;

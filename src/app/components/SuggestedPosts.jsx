import { limitItems } from "../lib";
import Post from "@/app/components/Post";
import Section from "@/app/components/Section";

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

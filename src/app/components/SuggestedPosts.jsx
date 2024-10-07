import { fetchData } from "@/app/api/fetchdata";
import { limitItems, addUsersToPosts, sortPostsByLikeCount } from "@/app/lib";
import Post from "@/app/components/Post";
import ErrorMessage from "@/app/components/ErrorMessage";

const SuggestedPosts = async () => {
  const postData = await fetchData({
    dataType: "posts",
    delay: 2000,
  });
  const posts = postData?.posts;
  const postsWithUsers = await addUsersToPosts(posts);

  if (!postsWithUsers?.length) {
    return <ErrorMessage errorTitle="Error loading posts" />;
  }

  const sortedPosts = sortPostsByLikeCount(postsWithUsers);
  const limitedPosts = limitItems(sortedPosts, 2);

  return (
    <div className="grid gap-4">
      {limitedPosts?.map(({ post, user }) => {
        return <Post key={post.id} post={post} user={user} />;
      })}
    </div>
  );
};

export default SuggestedPosts;

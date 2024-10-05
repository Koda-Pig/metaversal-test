import Header from "@/app/components/Header";
import RecentPosts from "@/app/components/RecentPosts";
import UserFull from "@/app/components/UserFull";
import { fetchData } from "@/app/api/fetchdata";
import Main from "@/app/components/Main";

const Page = async ({ params }) => {
  const { id } = params;

  const postsData = await fetchData({
    dataType: "posts",
  });
  const posts = postsData.posts;

  const postsWithUsers = await Promise.all(
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

  const user = await fetchData({
    userId: id,
    dataType: "users",
  });

  const stats = await fetchData({
    userId: id,
    dataType: "posts",
  });

  const profile = { ...user, ...stats };

  return (
    <>
      <Header title="Profile" returnButton={true} />
      <Main>
        <UserFull user={profile} />
        <RecentPosts posts={postsWithUsers} />
      </Main>
    </>
  );
};

export default Page;

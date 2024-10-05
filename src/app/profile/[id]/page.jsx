import Header from "@/app/components/Header";
import RecentPosts from "@/app/components/RecentPosts";
import UserFull from "@/app/components/UserFull";
import { fetchData } from "@/app/api/fetchdata";

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

  const userProfile = await fetchData({
    userId: id,
    dataType: "users",
  });

  return (
    <>
      <Header title="Profile" returnButton={true} />
      <main className="px-4 py-8 space-y-12 max-w-[668px] mx-auto">
        <UserFull user={userProfile} />
        <RecentPosts posts={postsWithUsers} />
      </main>
    </>
  );
};

export default Page;

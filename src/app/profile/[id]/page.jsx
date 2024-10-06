import Header from "@/app/components/Header";
import RecentPosts from "@/app/components/RecentPosts";
import UserFull from "@/app/components/UserFull";
import { fetchData } from "@/app/api/fetchdata";
import ErrorMessage from "@/app/components/ErrorMessage";
import Main from "@/app/components/Main";

const Page = async ({ params }) => {
  const { id } = params;

  const user = await fetchData({
    userId: id,
    dataType: "users",
  });

  if (!user) {
    console.warn(`No user found for id ${id}`);
    return (
      <>
        <Header title="Profile" returnButton={true} />
        <Main>
          <ErrorMessage errorTitle="User not found" />
        </Main>
      </>
    );
  }

  const stats = await fetchData({
    userId: id,
    dataType: "posts",
  });

  const profile = { ...user, ...stats };

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

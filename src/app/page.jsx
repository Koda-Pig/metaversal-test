import { fetchData } from "./api/fetchdata";
import Button from "./components/Button";
import SuggestedPosts from "./components/SuggestedPosts";
import Header from "./components/Header";
import WhoToFollow from "./components/WhoToFollow";
import RecentPosts from "./components/RecentPosts";

const Page = async () => {
  const postsData = await fetchData({
    dataType: "posts"
  });
  const posts = postsData.posts;

  const userData = await fetchData({
    dataType: "users"
  });
  const users = userData.users;

  if (!users?.length || !posts?.length) {
    console.warn("No users and/ or posts found");

    return (
      <div className="p-6">
        <h1 className="text-center p-5 text-2xl font-bold">Error</h1>
        <Button
          label="Try again"
          classes="mx-auto"
          type="secondary"
          action="reload"
        />
      </div>
    );
  }

  const usersWithPosts = await Promise.all(
    users.map(async (user) => {
      try {
        const posts = await fetchData({
          userId: user.id,
          dataType: "posts"
        });
        return { ...user, posts };
      } catch {
        console.warn(`No posts found for user ${user.id}`);
        return { ...user, posts: [] };
      }
    })
  );

  return (
    <>
      <Header title="Feed" />
      <main className="px-4 py-8 space-y-12 max-w-[668px] mx-auto">
        <SuggestedPosts posts={posts} />
        <WhoToFollow users={usersWithPosts} />
        <RecentPosts posts={posts} />
      </main>
    </>
  );
};

export default Page;

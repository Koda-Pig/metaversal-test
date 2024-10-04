import { fetchData } from "./api/fetchdata";
import Button from "./components/Button";
import SuggestedPosts from "./components/SuggestedPosts";
import WhoToFollow from "./components/WhoToFollow";

const Home = async () => {
  const suggestedPostsData = await fetchData({
    dataType: "posts"
  });
  const suggestedPosts = suggestedPostsData.posts;

  const userData = await fetchData({
    dataType: "users"
  });
  const users = userData.users;

  if (!users?.length || !suggestedPosts?.length) {
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
      {/* Need to check this shadow fits mockups exactly */}
      <header className="bg-white shadow h-14 grid place-items-center px-2">
        <h3 className="text-center text-lg font-extrabold">Feed</h3>
      </header>
      <main className="px-4 pt-8 space-y-12 max-w-[668px] mx-auto">
        <SuggestedPosts posts={suggestedPosts} />
        <WhoToFollow users={usersWithPosts} />
      </main>
    </>
  );
};

export default Home;

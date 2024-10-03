import { fetchPostData } from "./api/fetchPostData";
import { fetchUserData } from "./api/fetchUserData";
import { fetchUserPosts } from "./api/fetchUserPosts";
import SuggestedPosts from "./components/SuggestedPosts";
import WhoToFollow from "./components/WhoToFollow";

const Home = async () => {
  const suggestedPostsData = await fetchPostData();
  const suggestedPosts = suggestedPostsData.posts;

  const userData = await fetchUserData();
  const users = userData.users;

  const usersWithPosts = await Promise.all(
    users.map(async (user) => {
      const posts = await fetchUserPosts(user.id);
      return { ...user, posts };
    })
  );

  return (
    <>
      {/* Need to check this shadow fits mockups exactly */}
      <header className="bg-white shadow h-14 grid place-items-center px-2">
        <h3 className="text-center text-lg font-extrabold">Feed</h3>
      </header>
      <main className="px-4 pt-8">
        <SuggestedPosts posts={suggestedPosts} />
        <WhoToFollow users={usersWithPosts} />
      </main>
    </>
  );
};

export default Home;

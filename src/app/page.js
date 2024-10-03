import { fetchPostData } from "./api/fetchPostData";
import SuggestedPosts from "./components/SuggestedPosts";

const Home = async () => {
  const suggestedPostsData = await fetchPostData();
  const suggestedPosts = suggestedPostsData.posts;

  return (
    <>
      {/* Need to check this shadow fits mockups exactly */}
      <header className="bg-white shadow h-14 grid place-items-center px-2">
        {/* <h3 className="text-center text-lg font-extrabold py-3.5">Feed</h3> */}
        <h3 className="text-center text-lg font-extrabold">Feed</h3>
      </header>
      <main className="px-4 pt-8">
        <SuggestedPosts posts={suggestedPosts} />
      </main>
    </>
  );
};

export default Home;

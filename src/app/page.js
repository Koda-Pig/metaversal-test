import Post from "./components/Post";

const Feed = async () => {
  // limit to 5 posts initially
  const data = await fetch("https://dummyjson.com/posts?limit=5");
  const postData = await data.json();
  const posts = postData?.posts;

  return (
    <>
      {/* Need to check this shadow fits mockups exactly */}
      <header className="bg-white shadow h-14 grid place-items-center px-2">
        {/* <h3 className="text-center text-lg font-extrabold py-3.5">Feed</h3> */}
        <h3 className="text-center text-lg font-extrabold">Feed</h3>
      </header>
      <main className="px-4 pt-8">
        <h2 className="text-black font-extrabold text-2xl mb-4">
          Suggested posts
        </h2>
        <section>
          {posts?.length > 0 &&
            posts.map((post) => <Post key={post.id} {...post} />)}
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Feed;

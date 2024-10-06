import { Suspense } from "react";
import { fetchData } from "@/app/api/fetchdata";
import Button from "@/app/components/Button";
import SuggestedPosts from "@/app/components/SuggestedPosts";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import WhoToFollow from "@/app/components/WhoToFollow";
import RecentPosts from "@/app/components/RecentPosts";
import Spinner from "@/app/components/Spinner";
import Main from "@/app/components/Main";

const Page = async () => {
  const postsData = await fetchData({
    dataType: "posts",
  });
  const posts = postsData.posts;
  const userData = await fetchData({
    dataType: "users",
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
      <Header title="Feed" />

      <Main>
        <Section title="Suggested posts">
          <Suspense
            fallback={<Spinner showLoadingText={true} classNames="py-12" />}
          >
            <SuggestedPosts />
          </Suspense>
        </Section>

        <Section title="Who to follow">
          <Suspense
            fallback={<Spinner showLoadingText={true} classNames="py-12" />}
          >
            <WhoToFollow />
          </Suspense>
        </Section>

        <RecentPosts posts={postsWithUsers} />
      </Main>
    </>
  );
};

export default Page;

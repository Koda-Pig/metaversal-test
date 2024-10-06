import { Suspense } from "react";
import Header from "@/app/components/Header";
import RecentPosts from "@/app/components/RecentPosts";
import UserFull from "@/app/components/UserFull";
import Main from "@/app/components/Main";
import Spinner from "@/app/components/Spinner";

const Page = async ({ params }) => {
  const { id } = params;

  return (
    <>
      <Header title="Profile" returnButton={true} />
      <Main>
        <Suspense
          fallback={<Spinner showLoadingText={true} classNames="py-12" />}
        >
          <UserFull userId={id} />
        </Suspense>
        <RecentPosts />
      </Main>
    </>
  );
};

export default Page;

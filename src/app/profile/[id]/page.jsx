import { Suspense } from "react";
import Header from "@/app/components/Header";
import RecentPosts from "@/app/components/RecentPosts";
import UserFull from "@/app/components/UserFull";
import SkeletonUserFull from "@/app/components/SkeletonUserFull";
import Main from "@/app/components/Main";
import Section from "@/app/components/Section";

const Page = async ({ params }) => {
  const { id } = params;

  return (
    <>
      <Header title="Profile" returnButton={true} />
      <Main>
        <Suspense fallback={<SkeletonUserFull />}>
          <UserFull userId={id} />
        </Suspense>
        <Section title="Recent">
          <RecentPosts userId={id} />
        </Section>
      </Main>
    </>
  );
};

export default Page;

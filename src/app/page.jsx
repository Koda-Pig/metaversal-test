import { Suspense } from "react";
import SuggestedPosts from "@/app/components/SuggestedPosts";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import WhoToFollow from "@/app/components/WhoToFollow";
import RecentPosts from "@/app/components/RecentPosts";
import SkeletonPost from "@/app/components/SkeletonPost";
import Main from "@/app/components/Main";
import SkeletonUserSummary from "@/app/components/SkeletonUserSummary";

const Page = async () => {
  return (
    <>
      <Header title="Feed" />

      <Main>
        <Section title="Suggested posts">
          <Suspense
            fallback={
              <div className="space-y-4">
                <SkeletonPost repeats={2} />
              </div>
            }
          >
            <SuggestedPosts />
          </Suspense>
        </Section>

        <Section title="Who to follow">
          <Suspense
            fallback={
              <div className="grid sm:grid-cols-auto-fill-100 gap-4">
                <SkeletonUserSummary repeats={4} />
              </div>
            }
          >
            <WhoToFollow />
          </Suspense>
        </Section>

        <Section title="Recent">
          <RecentPosts />
        </Section>
      </Main>
    </>
  );
};

export default Page;

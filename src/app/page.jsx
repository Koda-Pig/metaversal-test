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
        <Suspense
          fallback={
            <>
              <Section title="Suggested posts">
                <div className="grid gap-4">
                  <SkeletonPost repeats={2} />
                </div>
              </Section>
              <Section title="Who to follow">
                <div className="grid sm:grid-cols-auto-fill-100 gap-4">
                  <SkeletonUserSummary repeats={4} />
                </div>
              </Section>
            </>
          }
        >
          <Section title="Suggested posts">
            <SuggestedPosts />
          </Section>

          <Section title="Who to follow">
            <WhoToFollow />
          </Section>
        </Suspense>

        <Section title="Recent">
          <RecentPosts />
        </Section>
      </Main>
    </>
  );
};

export default Page;

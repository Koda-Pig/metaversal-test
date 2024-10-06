import { Suspense } from "react";
import SuggestedPosts from "@/app/components/SuggestedPosts";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import WhoToFollow from "@/app/components/WhoToFollow";
import RecentPosts from "@/app/components/RecentPosts";
import Spinner from "@/app/components/Spinner";
import Main from "@/app/components/Main";

const Page = async () => {
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

        <Section title="Recent">
          <Suspense
            fallback={<Spinner showLoadingText={true} classNames="py-12" />}
          >
            <RecentPosts />
          </Suspense>
        </Section>
      </Main>
    </>
  );
};

export default Page;

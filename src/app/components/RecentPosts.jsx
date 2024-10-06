"use client";

import { useState, useEffect, useRef } from "react";
import Post from "@/app/components/Post";
import Section from "@/app/components/Section";
import Spinner from "@/app/components/Spinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import { limitItems } from "@/app/lib";

const RecentPosts = ({ posts }) => {
  const bottomRef = useRef(null);
  const [displayedPosts, setDisplayedPosts] = useState(
    posts?.length ? limitItems(posts, 5) : []
  );
  const [showError, setShowError] = useState(false);

  if (!posts?.length) {
    return (
      <Section title="Recent">
        <ErrorMessage errorTitle="Error loading posts" />
      </Section>
    );
  }

  const morePostsToShow = displayedPosts.length < posts.length;

  const addMorePosts = () => {
    console.log("Adding more posts");
    if (!morePostsToShow) return;
    try {
      setDisplayedPosts((prev) => {
        const nextPosts = posts.slice(prev.length, prev.length + 5);
        return [...prev, ...nextPosts];
      });
    } catch (error) {
      setShowError(true);
      console.error("Error adding more posts", error);
    }
  };

  useEffect(() => {
    if (!bottomRef.current || showError) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        addMorePosts();
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(bottomRef.current);

    return () => {
      if (!observer || !bottomRef?.current) return;
      observer.unobserve(bottomRef.current);
    };
  }, [posts, showError, morePostsToShow]);

  return (
    <Section title="Recent">
      <div className="space-y-4">
        {displayedPosts?.map(({ post, user }) => (
          <Post key={post.id} post={post} user={user} />
        ))}
        {showError && <ErrorMessage errorTitle="Error loading posts" />}
        <span id="bottom-of-page" ref={bottomRef} />
        {morePostsToShow && !showError && <Spinner />}
        {!morePostsToShow && !showError && (
          <p className="text-center text-gray-400">
            You've seen <em>all</em> of the posts. Now stop scrolling and get
            back to work!
          </p>
        )}
      </div>
    </Section>
  );
};

export default RecentPosts;

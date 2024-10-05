"use client";

import { useState, useEffect, useRef } from "react";
import Post from "@/app/components/Post";
import Section from "@/app/components/Section";
import Spinner from "@/app/components/Spinner";
import { limitItems } from "../lib";

const ARTIFICIAL_DELAY = 1000;

const RecentPosts = ({ posts }) => {
  console.log(posts);
  const bottomRef = useRef(null);
  const [displayedPosts, setDisplayedPosts] = useState(limitItems(posts, 5));
  const morePostsToShow = displayedPosts.length < posts.length;

  const addMorePosts = () => {
    setDisplayedPosts((prev) => {
      const nextPosts = posts.slice(prev.length, prev.length + 5);
      return [...prev, ...nextPosts];
    });
  };

  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        // Simulate network delay so you can see the spinner
        setTimeout(() => {
          addMorePosts();
        }, ARTIFICIAL_DELAY);
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
  }, [posts]);

  return (
    <Section title="Recent posts">
      <div className="space-y-4">
        {/* {displayedPosts?.map(({ post, user }) => (
          <Post key={post.id} post={post} user={user} />
        ))} */}
        {displayedPosts?.map(({ post, user }) => {
          // return console.log(post, user);
          return <Post key={post.id} post={post} user={user} />;
        })}
        <span id="bottom-of-page" ref={bottomRef}></span>
        {morePostsToShow ? (
          <Spinner />
        ) : (
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

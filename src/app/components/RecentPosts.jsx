"use client";

import { useState, useEffect, useRef } from "react";
import Post from "./Post";
import Section from "./Section";
import Spinner from "./Spinner";
import { limitItems } from "../lib";

const ARTIFICIAL_DELAY = 1000;

const RecentPosts = ({ posts }) => {
  const bottomRef = useRef(null);
  const [displayedPosts, setDisplayedPosts] = useState(limitItems(posts, 5));
  const showSpinner = displayedPosts.length < posts.length;

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
        threshold: 0.5
      }
    );

    observer.observe(bottomRef.current);

    return () => {
      observer.unobserve(bottomRef.current);
    };
  }, [posts]);

  return (
    <Section title="Recent posts">
      <div className="space-y-4">
        {displayedPosts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <span id="bottom-of-page" ref={bottomRef}></span>
        {showSpinner && <Spinner />}
      </div>
    </Section>
  );
};

export default RecentPosts;

"use client";

import { useState, useEffect, useRef } from "react";
import Post from "./Post";
import Section from "./Section";
import { limitItems } from "../lib";

const RecentPosts = ({ posts }) => {
  const bottomRef = useRef(null);
  const [displayedPosts, setDisplayedPosts] = useState(limitItems(posts, 5));

  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setDisplayedPosts((prev) => {
              const nextPosts = posts.slice(prev.length, prev.length + 5);
              return [...prev, ...nextPosts];
            });
          }, 2000);
        }
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
      </div>
    </Section>
  );
};

export default RecentPosts;

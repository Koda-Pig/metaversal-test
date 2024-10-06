"use client";

import { useState, useEffect, useRef } from "react";
import Post from "@/app/components/Post";
import Spinner from "@/app/components/Spinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import { limitItems, addUsersToPosts } from "@/app/lib";
import { fetchData } from "@/app/api/fetchdata";

const RecentPosts = () => {
  const bottomRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      try {
        const postData = await fetchData({
          dataType: "posts",
          delay: 2000,
        });
        const initialPosts = postData?.posts ?? [];
        const postsWithUsers = await addUsersToPosts(initialPosts);
        setPosts(postsWithUsers);
        setDisplayedPosts(limitItems(postsWithUsers, 5));
      } catch (error) {
        setShowError(true);
        console.error("Error fetching posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPosts();
  }, []);

  const addMorePosts = () => {
    if (!hasMorePosts || showError) return;

    const nextPosts = posts.slice(
      displayedPosts.length,
      displayedPosts.length + 5
    );

    if (nextPosts.length === 0) {
      setHasMorePosts(false);
      return;
    }

    setDisplayedPosts((prev) => [...prev, ...nextPosts]);
  };

  useEffect(() => {
    if (!bottomRef.current || showError || !hasMorePosts) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) addMorePosts();
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(bottomRef.current);

    return () => {
      if (observer && bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [displayedPosts, posts, showError, hasMorePosts]);

  if (loading) return <Spinner />;

  if (showError) return <ErrorMessage errorTitle="Error loading posts" />;

  return (
    <div className="space-y-4">
      {displayedPosts?.map(({ post, user }) => (
        <Post key={post.id} post={post} user={user} />
      ))}
      <span id="bottom-of-page" ref={bottomRef} />
      {hasMorePosts && !showError && <Spinner />}
    </div>
  );
};

export default RecentPosts;

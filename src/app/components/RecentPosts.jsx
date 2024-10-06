"use client";

import { useState, useEffect, useRef } from "react";
import Post from "@/app/components/Post";
import Spinner from "@/app/components/Spinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import { addUsersToPosts } from "@/app/lib";
import { fetchData } from "@/app/api/fetchdata";

const BATCH_SIZE = 5;

const RecentPosts = () => {
  const bottomRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [skip, setSkip] = useState(0);

  const fetchPosts = async (skipCount) => {
    try {
      const postData = await fetchData({
        dataType: "posts",
        skip: skipCount,
        limit: BATCH_SIZE,
        delay: 2000,
      });

      const fetchedPosts = postData?.posts ?? [];

      if (fetchedPosts.length === 0) {
        setHasMorePosts(false);
        return;
      }

      const postsWithUsers = await addUsersToPosts(fetchedPosts);

      setPosts((prevPosts) => [...prevPosts, ...postsWithUsers]);
      setSkip((prevSkip) => prevSkip + BATCH_SIZE);
    } catch (error) {
      setShowError(true);
      console.error("Error fetching posts", error);
    } finally {
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchPosts(skip);
  }, []);

  const addMorePosts = () => {
    if (isFetchingMore || !hasMorePosts || showError) return;

    setIsFetchingMore(true);
    fetchPosts(skip);
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
  }, [posts, showError, hasMorePosts]);

  if (loading && posts.length === 0) return <Spinner />;

  if (showError) return <ErrorMessage errorTitle="Error loading posts" />;

  return (
    <div className="space-y-4">
      {posts?.map(({ post, user }, index) => (
        <Post key={`${post.id}-${index}`} post={post} user={user} />
      ))}
      <span id="bottom-of-page" ref={bottomRef} />
      {hasMorePosts && !showError && <Spinner />}
    </div>
  );
};

export default RecentPosts;

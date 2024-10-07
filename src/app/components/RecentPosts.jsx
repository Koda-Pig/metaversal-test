"use client";

import { useState, useEffect, useRef } from "react";
import Post from "@/app/components/Post";
import Spinner from "@/app/components/Spinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import { addUsersToPosts } from "@/app/lib";
import { fetchData } from "@/app/api/fetchdata";
import SkeletonPost from "@/app/components/SkeletonPost";

const BATCH_SIZE = 5;

const RecentPosts = ({ userId = undefined }) => {
  const bottomRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [skip, setSkip] = useState(0);

  const fetchPosts = async (skipCount) => {
    try {
      const postData = await fetchData({
        userId: userId !== undefined ? userId : undefined,
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
    }
  };

  useEffect(() => {
    fetchPosts(skip);
  }, []);

  const addMorePosts = () => {
    if (!hasMorePosts || showError) return;

    fetchPosts(skip);
  };

  useEffect(() => {
    if (!bottomRef.current || showError || !hasMorePosts) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) addMorePosts();
      },
      { threshold: 0.5 }
    );

    observer.observe(bottomRef.current);

    return () => {
      if (observer && bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, [posts, showError, hasMorePosts]);

  if (loading && posts.length === 0)
    return (
      <div className="grid gap-4">
        <SkeletonPost repeats={5} />
      </div>
    );

  if (showError) return <ErrorMessage errorTitle="Error loading posts" />;

  return (
    <div className="grid gap-4">
      {posts?.map(({ post, user }, index) => (
        <Post key={`${post.id}-${index}`} post={post} user={user} />
      ))}
      <span id="bottom-of-page" ref={bottomRef} />
      {hasMorePosts && !showError && <Spinner />}
    </div>
  );
};

export default RecentPosts;

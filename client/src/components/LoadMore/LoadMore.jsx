"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { getAllPost } from "@/actions/post";

export function LoadMore() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the ref element is visible
  });

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const loadMorePosts = async () => {
    setLoading(true);
    await delay(2000);

    const nextPage = (page % 7) + 1;
    const newPost = (await getAllPost(nextPage)) ?? {};

    setPosts((prevPosts) => [...prevPosts, ...newPost]);
    setPage(nextPage);
    setLoading(false);
  };

  useEffect(() => {
    if (inView && !loading) {
      loadMorePosts();
    }
  }, [inView, loading]);

  return (
    <div>
    

     
    </div>
  );
}

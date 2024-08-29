"use client";
import { useEffect, useState } from "react";
import { getPostById } from "@/actions/post";
import Loader from "@/components/ui/Loader/Loader";
import Post from "@/components/communityPage/Post/Post";
import Sidebar from "@/components/communityPage/SinglePostPage/Sidebar";

const SinglePostPage = ({ params }) => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const tagOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "App Development", label: "App Development" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Software Engineering", label: "Software Engineering" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Internet of Things", label: "Internet of Things" },
    { value: "Machine Learning", label: "Machine Learning" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getPostById({ id: params.id });

        if (response.success) {
          setPostData(response.result);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!postData) {
    return <p>No post found.</p>;
  }

  const { id, content, tag, image, date_created, user_created, likes } =
    postData; // Destructure data

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-16">
      <Sidebar tagOptions={tagOptions} highlightedTags={tag} />
      <div className="w-full md:ml-[20%] p-6 flex justify-center items-center">
        <div className="w-full md:max-w-3xl">
          <Post
            id={id}
            description={content}
            tag={tag}
            image={image}
            date_created={date_created}
            user_created={user_created}
            likes={likes}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

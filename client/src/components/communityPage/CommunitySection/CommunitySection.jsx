"use client";
import { useRef, useState, useEffect } from "react";
import Post from "../Post/Post";
import CommunityList from "../CommunityList/CommunityList";
import Image from "next/image";
import { createPost, getAllPost } from "@/actions/post";
import postdata from "@/data/communityPage/PostData";
import { useRouter } from "next/navigation";
import Select from "react-select";
import Fuse from "fuse.js";
import InfiniteScroll from "react-infinite-scroll-component";

const CommunitySection = () => {
  const [postData, setPostData] = useState(postdata);
  const [filteredPosts, setFilteredPosts] = useState(postdata);
  const [searchQuery, setsearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const fileInputRef = useRef(null);
  const [data, setData] = useState({ description: "", tags: "" });
  const router = useRouter();
  const handleFileInputChange = () => {
    document.getElementById("fileInput").click();
  };


  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllPost().then((res) => setPostData(res.result));


  }, []);

  useEffect(() => {
    fetchData(page);
    // Cleanup scroll event on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);
  useEffect(() => {    window.addEventListener('scroll', handleScroll);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await getAllPost()
    // const data = await response.json();
    setItems((prevItems) => [...prevItems, ...response.result]);
    setLoading(false);
  };


  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  }

  const fuse = new Fuse(postData, {
    keys: ["content", "tag"],
    threshold: 0.3, // Adjust to make the search more/less fuzzy
  });

  const handleSearchQuery = (e) => {
    const query = e.target.value.toLowerCase();
    setsearchQuery(query);

    if (query.trim() === "") {
      setFilteredPosts(postData);
      setError("");
      return;
    }

    const result = fuse.search(query).map(({ item }) => item);

    setFilteredPosts(result);
    setError(result.length === 0 ? "No Such Posts Found!" : "");
  };

  const handleSearchSubmit = () => {
    const filteredData = postData.filter(
      (post) =>
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredPosts(filteredData);
    if (filteredData.length === 0) {
      setError("No Such Posts Found!");
    } else {
      setError("");
    }
  };

  const tagOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "App Development", label: "App Development" },
    { value: "Database Management", label: "Database Management" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Software Engineering", label: "Software Engineering" },
  ];

  // Filter state
  const [selectedTag, setSelectedTag] = useState(null);
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
      setFilteredPosts(postData);
      setError("");
    } else {
      setSelectedTag(tag);
      const filteredData = postData.filter((post) => post.tag.includes(tag));
      setFilteredPosts(filteredData);
      if (filteredData.length === 0) {
        setError("No posts found for this tag.");
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = async () => {
    const file = fileInputRef.current.files[0];

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    const postData = {
      content: data.description,
      tag: data.tags,
    };

    try {
      const response = await createPost(postData, formData);

      if (response.success) {
        // Update the state to include the new post
        setPostData([response.result, ...postData]);
        setFilteredPosts([response.result, ...filteredPosts]);
        setData({ description: "", tag: [] });
        setIsEditing(false);
        setError("");
        toast.success("Post created successfully!");
      } else {
        setError("Failed to create post.");
      }
    } catch (e) {
      console.error("Error uploading post:", e);
      setError("Error uploading post.");
    }
  };
  // console.log(filteredPosts);
  // console.log(postData);


//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
// //   const [error, setError] = useState('');
//   const pageSize = 10; // Number of posts to fetch per page

//   const loadMorePosts = async () => {
//     try {
//       const response = await getAllPost(page, pageSize);
//       const newPosts = response.result || [];

//       // Check if there are no more posts
//       if (newPosts.length < pageSize) {
//         setHasMore(false); // No more posts if less than pageSize
//       }

//       if (newPosts.length > 0) {
//         setPosts((prevPosts) => [...prevPosts, ...newPosts]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setError('Failed to load posts');
//       setHasMore(false); // Stop loading if there's an error
//     }
//   };

//   useEffect(() => {
//     // Initial load of posts
//     loadMorePosts();
//   }, []);



 



  return (
    <div className="flex flex-col">
      {/* px-7 mbXSmall:px-10 mbMedSmall:px-14 mbMedium:px-16 pr-2 ml-10 */}
      <div className="flex items-center justify-between p-6 ml-8 ">
        <div className="h-4 w-4 flex items-center justify-center gap-2.5">
          <Image src="/images/back.png" width={20} height={20} />
          <button
            className=""
            onClick={() => {
              router.push("/");
            }}
          >
            Back
          </button>
        </div>
        <div className="flex flex-wrap gap-2 p-4">
          {tagOptions.map((tag) => (
            <button
              key={tag.value}
              onClick={() => handleTagClick(tag.value)}
              className={`px-4 py-2 rounded-full ${
                selectedTag === tag.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        <div className="relative laptop:mr-1 tbPortrait:mr-3 min-[1250px]:mr-4">
          <div className="absolute inset-y-0 left-0 pl-4 pt-1 flex items-center">
            <span className=" w-4 h-4 mbXSmall:w-5 mbXSmall:h-5 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 laptop:w-4 laptop:h-4 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/search.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchQuery}
            className="pl-10 self-center border-[1.5px] border-[#DCDCE7] rounded-full py-2.5 px-4 w-[7rem] mbXSmall:w-[9rem] mbMedSmall:w-[11rem] mbSmall:w-[13rem] mbMedium:w-[16rem] laptop:w-[15rem] min-[1100px]:w-[16rem] tbPortrait:w-[17rem] min-[1400px]:w-[19.5rem] min-[1500px]:w-[21rem] tbLandscape:w-[23rem]"
          />
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row items-center laptop:items-start justify-end gap-10 laptop:gap-8 p-6 max-w-full w-screen mt-10">
        <div className="order-2 laptop:order-2 flex flex-col gap-6 items-center justify-center w-full mbXSmall:w-[90%] mbSmall:w-[80%] mbMedium:w-[70%] laptop:w-[37%] tbPortrait:w-[40%] tbLandscape:w-[43%]">
     
            {error && <p className="my-10 text-5xl">{error}</p>}
            {searchQuery !== "" || selectedTag
              ? filteredPosts.map((item) => (
                  <Post
                    key={item.id}
                    id={item.id}
                    date_created={item.date_created}
                    description={item.content}
                    tag={item.tag}
                    image={item.image}
                    user_created={item.user_created}
                    likes={item.likes}
                  />
                ))
              : postData.map((item) => (
                  <Post
                    key={item.id}
                    id={item.id}
                    date_created={item.date_created}
                    description={item.content}
                    tag={item.tag}
                    image={item.image}
                    user_created={item.user_created}
                    likes={item.likes}
                  />
                ))}
           {loading && <p>Loading...</p>}


          {/* <CommunityList /> */}
        </div>

        <div className=" order-1 laptop:order-2 flex items-center justify-center gap-3  w-full mbXSmall:w-[90%] mbSmall:w-[80%] mbMedium:w-[70%] laptop:w-[33%] tbPortrait:w-[30%]">
          <div className=" self-start ">
            <span className="w-10 h-10 mbMedSmall:w-12 mbMedSmall:h-12 mbSmall:w-12 mbSmall:h-12 mbMedium:w-14 mbMedium:h-14 laptop:w-12 laptop:h-12 inline-block rounded-full relative cursor-pointer">
              <Image
                src="/images/profile.png"
                fill
                alt="about"
                className="object-contain"
              />
            </span>
          </div>
          {isEditing ? (
            <div className="w-full flex flex-col items-start gap-3 transition-all ease-in-out">
              <textarea
                placeholder="Write a description..."
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                className="border-[1.5px] border-[#DCDCE7] rounded-xl p-2 w-full h-[15rem] resize-none appearance-none"
              ></textarea>
              <Select
                isMulti
                options={tagOptions}
                value={tagOptions.filter((tag) =>
                  data.tags.includes(tag.value)
                )}
                onChange={(selectedTags) => {
                  const selectedTagNames = selectedTags.map((tag) => tag.value);
                  const limitedSelectedTags = selectedTagNames.slice(0, 3);
                  setData({ ...data, tags: limitedSelectedTags });
                }}
                className="w-full"
              />

              <label
                htmlFor="fileInput"
                className="flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="ml-1 w-4 h-4 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-7 laptop:h-7 inline-block rounded-full relative cursor-pointer">
                  <Image
                    src="/images/media.png"
                    fill
                    alt="Media"
                    className="object-contain"
                  />
                </span>
                <h1 className="text-sm mbMedSmall:text-base">Media</h1>
                <input
                  id="fileInput"
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                />
              </label>
              {/* TODO: Improve the button */}
              <button
                className="border rounded-xl text-lg p-2 text-white w-full bg-[#1F3DD9]"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center justify-center gap-2 self-center"
              >
                <span className="w-4 h-4 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-7 laptop:h-7 inline-block rounded-full relative cursor-pointer">
                  <Image
                    src="/images/cancel.png"
                    fill
                    alt="Media"
                    className="object-contain"
                  />
                </span>
                <h1>Cancel</h1>
              </button>
            </div>
          ) : (
            <div className="transition-all w-full ease-in-out flex flex-col justify-center items-start gap-2">
              <input
                type="text"
                placeholder="Start a post"
                onClick={() => setIsEditing(true)}
                className="border-[1.5px] border-[#DCDCE7] rounded-full w-full h-[3rem] p-4"
              />
              <label
                htmlFor="fileInput"
                className="flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="ml-1 w-4 h-4 mbMedSmall:w-5 mbMedSmall:h-5 mbSmall:w-5 mbSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-7 laptop:h-7 inline-block rounded-full relative cursor-pointer">
                  <Image
                    src="/images/media.png"
                    fill
                    alt="Media"
                    className="object-contain"
                  />
                </span>
                <h1 className="text-sm mbMedSmall:text-base">Media</h1>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onClick={handleFileInputChange}
                />
              </label>
            </div>
          )}
          {/* <input
            type="text"
            placeholder="Start a post"
            className="border-[1.5px] border-[#DCDCE7] rounded-full w-[20rem] h-[3rem] p-4"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;

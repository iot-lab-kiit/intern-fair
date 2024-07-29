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
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";
import Loader from "@/components/ui/Loader/Loader";
import Link from "next/link";

const CommunitySection = () => {
  const [postData, setPostData] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(postdata);
  const [searchQuery, setsearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [data, setData] = useState({ description: "", tags: "" });
  const router = useRouter();
  const [isPostImg, setIsPostImg] = useState("");

  const handleFileInputChange = () => {
    document.getElementById("fileInput").click();
  };

  useEffect(() => {
    setIsLoading(true);
    getAllPost(0, 10)
      .then((res) => setPostData(res.result))
      .finally(() => setIsLoading(false));
  }, []);

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
    if (result.length === 0) {
      toast.error(`No posts found for "` + searchQuery + `"`); // Error message
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

    if (!data.description || !data.tags) {
      toast.error("Description and tags are mandatory!");
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    const postData = {
      content: data.description,
      tag: data.tags,
    };

    try {
      setIsLoading(true);
      const response = await createPost(postData, formData);
      if (response.success) {
        setPostData((prevData) => [response.result, ...prevData]);
        setFilteredPosts([response.result, ...filteredPosts]);
        setData({ description: "", tag: [] });
        setIsEditing(false);
        setError("");

        toast.success("Post created successfully!");
      } else {
        setError("Failed to create post.");
      }
    } catch (e) {
      toast.error("Error uploading post");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputImg = () => {
    const imgInput = document.getElementById("fileInput");
    const imageName = imgInput.files[0] ? imgInput.files[0].name : "";
    setIsPostImg(imageName);
  };

  const POSTS_PER_PAGE = 10;
  const [offset, setOffset] = useState(POSTS_PER_PAGE);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();

  const loadMorePosts = async () => {
    if (hasMoreData) {
      const apiPosts = (await getAllPost(offset, POSTS_PER_PAGE)).result;

      console.log(offset, POSTS_PER_PAGE);
      if (apiPosts.length === 0) setHasMoreData(false);

      setPostData((prevPosts) => [...prevPosts, ...apiPosts]);
      setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    }
  };
  useEffect(() => {
    if (isInView && hasMoreData) {
      loadMorePosts();
    }
  }, [isInView, hasMoreData]);
  return (
    <div className="flex">
      <Sidebar
        tagOptions={tagOptions}
        handleTagClick={handleTagClick}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      <div className="flex flex-col md:ml-[25vw] tbPortrait:ml-[25vw] mt-16 w-full">
        {/* px-7 mbXSmall:px-10 mbMedSmall:px-14 mbMedium:px-16 pr-2 ml-10 */}
        <div className="flex items-center justify-between p-6">
          <div className="h-4 w-4 ml-4 flex items-center justify-center gap-2.5">
            <Image src="/images/back.png" width={20} height={20} />
            <Link href="/">Back</Link>
          </div>
        </div>

        <div className="flex flex-col laptop:flex-row items-center laptop:items-start justify-start gap-10 laptop:gap-8 max-w-full mt-10">
          <div className="order-2 laptop:order-2 flex flex-col gap-6 items-center justify-center w-[90%] mbXSmall:w-[90%] mbMedSmall:w-[90%] mbSmall:w-[85%] mbMedium:w-[85%] laptop:w-[55%] tbPortrait:w-[55%]">
            {/* Search bar */}
            <div className="relative ml-10 mbXSmall:ml-0">
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
                className="pl-10  min-w-[15rem] w-[60vw] mbMedium:w-[45vw] laptop:w-[30vw] tbLandscape:w-[30rem] border-[1.5px] border-[#DCDCE7] rounded-full py-2.5"
              />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <>
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
                        likesUserCollection={item.likesUserCollection}
                        share={item.share}
                        shareUserCollection={item.shareUserCollection}
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
                        likesUserCollection={item.likesUserCollection}
                        share={item.share}
                        shareUserCollection={item.shareUserCollection}
                      />
                    ))}
            <div className="...">
              {hasMoreData && <div ref={scrollTrigger}></div>}
            </div>
              </>
            )}
          </div>

          <div className="order-1 mbXSmall:mr-5 mbSmall:mr-10 mbMedium:mr-0 laptop:order-2 laptop:fixed laptop:right-5 md:ml-0 lg:ml-40  flex items-center justify-center gap-3 w-[90%] mbXSmall:w-[80%]  mbSmall:w-[60%] mbMedium:w-[70%] laptop:w-[28%] tbPortrait:w-[30%]">
            <div className="self-start ">
              <span className="w-10 h-10 inline-block rounded-full relative cursor-pointer">
                <Image
                  src="/images/profile.png"
                  fill
                  alt="about"
                  className="object-contain"
                />
              </span>
            </div>
            {isEditing ? (
              <div className="w-full flex flex-col items-center gap-3 transition-all ease-in-out">
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
                    const selectedTagNames = selectedTags.map(
                      (tag) => tag.value
                    );
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
                    onChange={() => {
                      handleInputImg();
                    }}
                  />
                </label>
                <p>
                  <b>{isPostImg != "" && `Uploaded ${isPostImg}`}</b>
                </p>

                {/* TODO: Improve the button */}
                <button
                  className="border rounded-xl text-lg p-2 text-white w-full bg-indigo-700 "
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
    </div>
  );
};

export default CommunitySection;

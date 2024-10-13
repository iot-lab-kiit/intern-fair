"use client";
import {
  updatePost,
  getPostById,
  updateLikes,
  updateShare,
} from "@/actions/post";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { jwtDecode } from "jwt-decode";
import { RWebShare } from "react-web-share";
const Post = ({
  id,
  description,
  tag,
  image,
  date_created,
  user_created,
  likes: initialLikes,
  likesUserCollection = [],
  shareUserCollection = [],
  share: initialShare,
  handlePostClick,
}) => {
  const [expanded, setexpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes || 0);
  const [saved, setsaved] = useState(false);

  const [date, setDate] = useState(new Date(date_created));
  const [shared, setShared] = useState(false);
  const [shareCount, setShareCount] = useState(parseInt(initialShare) || 0);
  const token = document.cookie;
  const decode = jwtDecode(token);
  const text =
    "🌍 CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation and formatting of HTML CSS consists of selectors, properties, and values. Selectors are patterns that target HTML elements, allowing developers to apply styles selectively. Properties are the styling attributes, such as color, font-size.";

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setexpanded(!expanded);
  };
  const toggleSave = () => {
    setsaved(!saved);
  };
  const toggleLike = () => {
    setLiked((prev) => !prev);
    handleLikes(id, decode.id);
  };

  useEffect(() => {
    const likedd = likesUserCollection.some(
      (user) => user.directus_users_id.id === decode.id
    );
    if (likedd) setLiked(true);
  }, [likesUserCollection]);

  // useEffect(() => {
  //   const hasShared = shareUserCollection.some(
  //     (user) => user.directus_users_id.id === decode.id
  //   );
  //   setShared(true);
  //   // setShareCount(parseInt(initialShare) || 0);
  // }, [shareUserCollection]);

  const handleLikes = (id, userID) => {
    if (!liked) {
      setLiked(true);
      setLikes((prevLikes) => prevLikes + 1);
      updateLikes(JSON.stringify({ id, userID }));
    } else {
      setLiked(false);
      setLikes((prevLikes) => prevLikes - 1);
      updateLikes(JSON.stringify({ id, userID }));
    }
  };
  // function getQueryParam() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   return window.location.href;
  // }
  // const url=getQueryParam();
  const handleShare = async (id, userID) => {
    const hasShared = shareUserCollection.some(
      (user) => user.directus_users_id.id === userID
    );

    if (!hasShared) {
      await updateShare(JSON.stringify({ id, userID }));
      setShareCount((prevShareCount) => prevShareCount + 1);
    }
  };

  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedTime = formatter.format(date);
  return (
    // w-[28rem] tbPortrait:w-[32rem] min-[1400px]:w-[36rem] tbLandscape:w-[40rem]

    <div className="p-2 mbSmall:p-4 border-[1.5px] border-[#DCDCE7] min-w-[300px] rounded-lg ml-10 mbXSmall:ml-0 mbMedSmall:w-[95%]">
      <div
        className="flex flex-col items-start justify-center gap-3 mbMedSmall:gap-4 border-[#E7E8EC] border-b-2 p-4 cursor-pointer"
        onClick={() => handlePostClick(id)}
      >
        <div className="flex justify-start items-center gap-2 mbSmall:gap-3 mbMedium:gap-4 w-full font-Gilroy-Medium">
          <div className="">
            <span className="w-10 h-10 inline-block rounded-full relative cursor-pointer">
              <Image
                src={`/images/profile.png`}
                fill
                alt="about"
                className="object-cover"
              />
            </span>
          </div>
          <div className="flex-col flex gap-1 self-start mbSmall:self-center mbSmall:gap-0">
            <h1 className="text-[#09123E] text-[0.8rem] mbMedSmall:text-[0.9rem] mbSmall:text-base mbMedium:text-lg leading-5 mbMedium:leading-7 tbPortrait:text-xl tbLandscape:text-2xl font-semibold">
              {user_created.first_name}
            </h1>
            <p className="text-[#7D8195] font-medium text-[0.7rem] mbMedSmall:text-[0.7rem] leading-3 mbSmall:text-base mbMedium:text-base tbPortrait:text-lg">
              {/* {date_created} */}
              {formattedDate} &nbsp;&nbsp;{formattedTime}
            </p>
          </div>
        </div>
        <div className="">
          <p className=" text-[0.7rem] leading-4 mbXSmall:text-xs mbMedSmall:text-[0.85rem] mbMedSmall:leading-4 mbSmall:text-base mbSmall:leading-5 mbMedium:text-base tbPortrait:text-lg mbMedium:leading-6 tbLandscape:text-xl">
            {expanded ? <>{description}</> : <>{description.slice(0, 200)} </>}
            {!expanded && description.length > 200 && (
              <button
                className="text-[#2A5885]"
                onClick={(e) => toggleExpanded(e)}
              >
                Show more...
              </button>
            )}
          </p>
        </div>

        <div
          className="flex items-center justify-center flex-wrap gap-1 mbMedSmall:gap-2 mbSmall:gap-3 "
          suppressHydrationWarning
        >
          {tag &&
            tag.length > 0 &&
            tag.map((t, index) => (
              <button className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.6rem] mbMedSmall:text-[0.65rem] mbSmall:text-[0.7rem] leading-4 mbMedium:text-sm laptop:text-sm tbPortrait:text-base p-[0.2rem] px-[0.6rem] mbMedSmall:p-[0.3rem] mbMedSmall:px-[0.7rem] mbSmall:p-[0.3rem] mbSmall:px-4  mbMedium:p-[0.25rem]   mbMedium:px-4 laptop:p-[0.35rem] laptop:px-4 rounded-full">
                {t}
              </button>
            ))}
        </div>
        {image && (
          <div className="w-full">
            <span className="w-full h-[8rem] mbXSmall:h-[10rem] mbMedSmall:h-[12rem] mbSmall:h-[14rem] mbMedium:h-[16rem] laptop:h-[18rem] tbPortrait:h-[20rem]  inline-block relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
                fill
                alt="about"
                className="object-cover"
              />
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-start justify-center gap-6">
          <div
            className="flex items-center justify-center gap-2"
            onClick={() => handleLikes(id, decode.id)}
          >
            {liked ? <FcLike size={32} /> : <GoHeart size={32} />}
            <p className="text-[#0f0f0f] text-sm mbSmall:text-base mbMedium:text-lg">
              {likes}
            </p>
          </div>
          {/* currently share is removed */}
          <div
            className="flex items-center justify-center gap-2"
            onClick={() => handleShare(id, decode.id)}
          >
            <span className="w-5 h-5 mbMedSmall:w-5 mbMedSmall:h-5 mbMedium:w-6 mbMedium:h-6 laptop:w-6 laptop:h-6 tbPortrait:w-8 tbPortrait:h-8  inline-block rounded-full relative cursor-pointer">
              <RWebShare
                data={{
                  text: description,
                }}
              >
                <Image
                  src="/images/SharePost.png"
                  fill
                  alt="about"
                  className="object-contain"
                />
              </RWebShare>
            </span>
            <p className="text-[#191717] text-sm mbSmall:text-base mbMedium:text-lg">
              {shareCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;

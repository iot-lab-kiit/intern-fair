"use client";
import { updatePost } from "@/actions/post";
import Image from "next/image";
import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";

const Post = ({
  id,
  description,
  tag,
  image,
  date_created,
  user_created,
  likes,
  handlePostClick,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [date, setDate] = useState(new Date(date_created));

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const toggleSave = () => {
    setSaved(!saved);
  };
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const handleLikes = (id, like) => {
    updatePost(JSON.stringify({ id, likes: like + 1 }))
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
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
    <div
      className="p-2 mbSmall:p-4 border-[1.5px] max-h-[30rem] border-[#DCDCE7] min-w-[300px] rounded-lg ml-10 mbXSmall:ml-0  mbSmall:w-[95%] cursor-pointer"
      onClick={() => handlePostClick(id)}
    >
      <div className="flex flex-col items-start justify-center gap-3 mbMedSmall:gap-4 border-[#E7E8EC] border-b-2 p-4">
        <div className="flex justify-start items-center gap-2 mbSmall:gap-3 mbMedium:gap-4 w-full font-Gilroy-Medium">
          <div>
            <span className="w-10 h-10 inline-block rounded-full relative cursor-pointer">
              <Image
                src={`/images/profile.png`}
                fill
                alt="profile"
                className="object-contain"
              />
            </span>
          </div>
          <div className="flex-col flex gap-1 self-start mbSmall:self-center mbSmall:gap-0">
            <h1 className="text-[#09123E] text-[0.8rem] mbMedSmall:text-[0.9rem] mbSmall:text-base mbMedium:text-lg leading-5 mbMedium:leading-7 tbPortrait:text-xl tbLandscape:text-2xl font-semibold">
              {user_created.first_name}
            </h1>
            <p className="text-[#7D8195] font-medium text-[0.7rem] mbMedSmall:text-[0.7rem] leading-3 mbSmall:text-base mbMedium:text-base tbPortrait:text-lg">
              {formattedDate} &nbsp;&nbsp;{formattedTime}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[0.7rem] leading-4 mbXSmall:text-xs mbMedSmall:text-[0.85rem] mbMedSmall:leading-4 mbSmall:text-base mbSmall:leading-5 mbMedium:text-base tbPortrait:text-lg mbMedium:leading-6 tbLandscape:text-xl">
            {expanded ? <>{description}</> : <>{description.slice(0, 200)} </>}
            {!expanded && description.length > 200 && (
              <button className="text-[#2A5885]" onClick={toggleExpanded}>
                Show more...
              </button>
            )}
          </p>
        </div>
        <div
          className="flex items-center justify-center flex-wrap gap-1 mbMedSmall:gap-2 mbSmall:gap-3"
          suppressHydrationWarning
        >
          {tag &&
            tag.length > 0 &&
            tag.map((t, index) => (
              <button
                key={index}
                className="border-[1.5px] border-[#4C64E1] text-[#1F3DD9] text-[0.6rem] mbMedSmall:text-[0.65rem] mbSmall:text-[0.7rem] leading-4 mbMedium:text-sm laptop:text-sm tbPortrait:text-base p-[0.2rem] px-[0.6rem] mbMedSmall:p-[0.3rem] mbMedSmall:px-[0.7rem] mbSmall:p-[0.3rem] mbSmall:px-4  mbMedium:p-[0.25rem] mbMedium:px-4 laptop:p-[0.35rem] laptop:px-4 rounded-full"
              >
                {t}
              </button>
            ))}
        </div>
        {image && (
          <div className="w-full relative overflow-hidden aspect-video">
            <Image
              src={`https://directus.iotkiit.in/assets/${image}`}
              fill
              alt="about"
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-start justify-center gap-6">
          <div
            className="flex items-center justify-center gap-2"
            onClick={() => handleLikes(id, likes)}
          >
            <p className="text-[#191717] text-sm mbSmall:text-base mbMedium:text-lg">
              {likes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTopics } from "@/actions/topic";
import { useRouter } from "next/navigation";

const Card = () => {
  const [topics, setTopics] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopics();
      if (response.success) {
        setTopics(response.result);
      } else {
        console.error(response.message);
      }
    };

    fetchData();
  }, []);

  const handleExploreClick = (name) => {
    router.push(`/courses/#${name.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <>
      {topics.map((topic, i) => (
        <div
          key={i}
          className="m-2 border-[#DCDCE7] border-2 rounded-lg p-4 laptop:p-6 flex flex-col items-start justify-between gap-5 flex-grow-0 flex-shrink-0 min-w-0 pl-4 basis-1/2 laptop:basis-[45%] mbMedSmall:basis-[70%] mbXSmall:basis-[85%] mbMini:basis-[95%] tbLandscape:basis-4/12"
        >
          <div className="flex items-center justify-between w-full">
            <h1 className="font-Gilroy-Medium text-[1rem] mbMini:leading-4 mbXSmall:text-lg mbMedium:text-xl mbSmall:text-[1.3rem] mbSmall:leading-7 tbPortrait:text-[1.65rem] tbPortrait:leading-8">
              {topic.name}
            </h1>
            <button className="p-1 mbMini:px-3 mbXSmall:px-5 rounded-lg bg-[#4543B5] text-white">
              New
            </button>
          </div>
          <p className="self-start mbMini:text-xs mbXSmall:text-sm mbSmall:text-base tbPortrait:w-[70%] mbMedium:w-[75%] mbSmall:w-[80%] mbMini:w-full text-[#A4A4A4]">
            {topic.description}
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="font-Gilroy-Medium">
              <h2 className="text-[#1B1B1B] mbMini:text-[0.7rem] mbXSmall:text-[0.75rem] mbXSmall:leading-4 mbSmall:text-[0.85rem] mbSmall:leading-4 mbMedium:text-sm laptop:text-base tbPortrait:text-lg">
                Duration
              </h2>
              <p className="text-[#A4A4A4] mbMini:text-[0.75rem] mbXSmall:text-[0.75rem] mbXSmall:leading-4 mbSmall:text-[0.85rem] mbSmall:leading-4 mbMedium:text-sm laptop:text-base tbPortrait:text-lg">
                14 - 15 hours
              </p>
            </div>
            <div className="self-end">
              <button
                className="flex items-center justify-center gap-2 font-Gilroy-Medium rounded-2xl p-2 mbMini:px-3 mbXSmall:px-5 border-2 border-black mbMini:text-xs mbXSmall:text-sm"
                onClick={() => handleExploreClick(topic.name)}
              >
                Explore
                <span>
                  <Image
                    className="tbPortrait:w-[1vw] mbSmall:w-[1.4vw] mbMini:w-[3vw]"
                    src="/icons/Vector_black.png"
                    alt="Description of your image"
                    width={15}
                    height={20}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

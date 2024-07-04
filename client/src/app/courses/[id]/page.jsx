"use client";
import ReactMarkdown from "react-markdown";
import ReactHtmlParser from "react-html-parser";
import { useEffect, useState } from "react";
import { getsubSubtopics, getDummySubSubtopics } from "@/actions/topic";
import CodeSnippet from "@/components/courses/CodeSnippet/CodeSnippet";
import Loader from "@/components/ui/Loader/Loader";

const page = ({ params }) => {
  const [data, setData] = useState();

  // NOTE: For integrating with the backend, replace getDummySubSubtopics with getsubSubtopics and change the selection of images and videos according to the new backend response which has images and videos in assets of directus
  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const subTopicData = await getDummySubSubtopics();
        // const subTopicData = await getsubSubtopics(params.id);
        // console.log(subTopicData);
        setData(subTopicData);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchSubTopics();
  }, [params.id]);
  console.log(data);

  if (!data) {
    return <Loader />;
  }

  const { result } = data || {};
  const { name, subSubTopicID } = result || {};

  return (
    <div className="w-full p-10 px-6 mbXSmall:px-10 mbMedium:px-16 flex flex-col items-center justify-center gap-4 mbMedSmall:gap-6 mbMedium:gap-8 ">
      <h1 className="text-base mbXSmall:text-lg mbMedSmall:text-xl mbMedium:text-2xl tbPortrait:text-3xl tbLandscape:text-4xl text-[#081245] font-semibold">
        {name}
      </h1>
      {subSubTopicID &&
        subSubTopicID.map((subTopic) => (
          <div
            key={subTopic.id}
            className="w-full flex flex-col items-start justify-center gap-5"
          >
            <h2 className="text-[#081245] text-sm mbXSmall:text-sm mbMedSmall:text-base mbMedium:text-lg tbPortrait:text-xl tbLandscape:text-2xl font-semibold">
              {subTopic.subTitle}
            </h2>
            <p className="text-[#0a0b0e] font-medium text-xs mbMedSmall:text-sm mbMedium:text-base tbPortrait:text-lg tbLandscape:text-xl">
              {subTopic.content}
            </p>
            {subTopic.code_snippet && (
              <CodeSnippet
                language={subTopic.code_language}
                code={subTopic.code_snippet}
              />
            )}
            {subTopic.images.length > 0 && (
              <div>
                {subTopic.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>
            )}
            {subTopic.videos && subTopic.videos.length > 0 && (
              <div>
                {subTopic.videos.map((video, index) => (
                  <video key={index} controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default page;

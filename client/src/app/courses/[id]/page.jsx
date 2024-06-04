"use client";
import React, { useEffect, useState } from "react";
import { getsubSubtopics, getDummySubSubtopics } from "@/actions/topic";
import CodeSnippet from "@/components/courses/CodeSnippet/CodeSnippet";
import Loader from "@/components/courses/Loader/Loader";

const Page = ({ params }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        // const subTopicData = await getDummySubSubtopics();
        const subTopicData = await getsubSubtopics(params.id);
        setData(subTopicData);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchSubTopics();
  }, [params.id]);

  if (!data) {
    return <Loader />;
  }

  const { result } = data || {};
  const { name, subSubTopicID } = result || {};

  return (
    <div className="w-full mbMedium:w-[90%] p-10 px-6 mbXSmall:px-10 mbMedium:px-16 flex flex-col items-start justify-center gap-4 mbMedSmall:gap-6 mbMedium:gap-8">
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
            <p className="text-[#09123E] font-medium text-xs mbMedSmall:text-sm mbMedium:text-base tbPortrait:text-lg tbLandscape:text-xl">
              {subTopic.content}
            </p>
            {subTopic.code_snippet && (
              <CodeSnippet
                language={subTopic.code_language}
                code={subTopic.code_snippet}
              />
            )}
            {subTopic.images && subTopic.images.length > 0 && (
              <div className="w-full flex flex-col mbSmall:flex-row items-center justify-start gap-4 flex-wrap">
                {subTopic.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://43.204.145.188/assets/${image.directus_files_id.id}`}
                    alt={`Image ${index + 1}`}
                    onError={(e) => console.error("Error loading image:", e)}
                    className="w-full aspect-video mbSmall:w-[47%] tbPortrait:w-[49%]"
                  />
                ))}
              </div>
            )}
            {subTopic.videos && subTopic.videos.length > 0 && (
              <div className="w-full flex flex-col mbSmall:flex-row items-center justify-start gap-4 flex-wrap">
                {subTopic.videos.map((video, index) => (
                  <div
                    key={index}
                    className="w-full mbSmall:w-[47%] tbPortrait:w-[49%] "
                  >
                    <video
                      className="w-full h-full object-cover aspect-video"
                      controls
                      muted
                    >
                      <source
                        src={`http://43.204.145.188/assets/${video.directus_files_id.id}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Page;

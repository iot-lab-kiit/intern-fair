"use client";
import MarkdownRenderer from "@/app/utils/md";
import { useEffect, useState } from "react";
import { getsubTopicContent } from "@/actions/topic";
import Loader from "@/components/ui/Loader/Loader";

const page = ({ params }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const subTopicData = await getsubTopicContent(params.id);
        setData(subTopicData.result.content);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchSubTopics();
  }, [params.id]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen mbMedium:w-[80%] mbXSmall:px-10 mbMedium:px-16 flex flex-col items-start justify-center gap-4 mbMedSmall:gap-6 mbMedium:gap-8 ">
      {data && (
        <div className="max-w-[90vw] overflow-x-hidden mx-4 my-12">
          {" "}
          <MarkdownRenderer content={data} />
        </div>
      )}
    </div>
  );
};

export default page;

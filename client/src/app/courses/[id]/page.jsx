"use client";

import ReactMarkdown from "react-markdown";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { useEffect, useState } from "react";
import { getSubtopicsByTopicId } from "@/actions/topic";

const page = ({ params }) => {
  // params = { id : uuid}
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchSubTopics = async () => {
      try {
        const subTopicData = await getSubtopicsByTopicId(params.id);
        setData(subTopicData.result);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchSubTopics();
  }, []);

  return (
    <>
      {/* {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <ReactMarkdown>{item.MD}</ReactMarkdown>
          <br />
          <div>{ReactHtmlParser(item.description)}</div>
        </div>
      ))} */}
      {
        <div>
          <h1>{data.name}</h1>
          <>Markdown : </>
          <ReactMarkdown>{data.MD}</ReactMarkdown>
          <br />
          <br />
          <>HTML : </>
          <div>{ReactHtmlParser(data.decription)}</div>
          <br />
          <br />
          <>HTML 2: </>
          <div dangerouslySetInnerHTML={{ __html: data.decription }}></div>
        </div>
      }
    </>
  );
};

export default page;

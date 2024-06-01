"use client";
import ReactMarkdown from "react-markdown";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from "react-html-parser";
import {useEffect, useState} from "react";
import {getSubtopicsByTopicId} from "@/actions/topic";
// import content from "@/data/courses/content";
import CodeSnippet from "@/components/courses/CodeSnippet/CodeSnippet";

const page = ({params}) => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchSubTopics = async () => {
            try {
                const subTopicData = await getSubtopicsByTopicId(params.id);
                setData(subTopicData);
            } catch (error) {
                console.error("Error fetching topics:", error);
            }
        };
        fetchSubTopics();
    }, [params.id]);
    console.log(data);
    return (
        <>
            <div className="w-full mbMedium:w-[80%] p-10 px-6 mbXSmall:px-10 mbMedium:px-16 flex flex-col items-start justify-center gap-4 mbMedSmall:gap-6 mbMedium:gap-8 ">
                <h1 className="text-base mbXSmall:text-lg mbMedSmall:text-xl mbMedium:text-2xl tbPortrait:text-3xl tbLandscape:text-4xl text-[#081245] font-semibold"></h1>
                {data && (
                    <div className="w-full flex flex-col items-start justify-center gap-5">
                        <h1 className="text-[#081245] text-sm mbXSmall:text-sm mbMedSmall:text-base mbMedium:text-lg tbPortrait:text-xl tbLandscape:text-2xl font-semibold">{data.result.name}</h1>
                        {/* <p className="text-[#09123E] font-medium text-xs mbMedSmall:text-sm mbMedium:text-base tbPortrait:text-lg tbLandscape:text-xl">{data.result.description}</p> */}
                        {/* <ReactMarkdown>{item.MD}</ReactMarkdown> */}
                        <br />
                        <div>{ReactHtmlParser(data.result.decription)}</div>
                        {data.result.MD && <CodeSnippet language="md" code={data.result.MD} />}
                    </div>
                )}
            </div>
        </>
    );
};

export default page;
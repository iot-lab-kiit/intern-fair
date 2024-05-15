"use client";

import ReactMarkdown from "react-markdown";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from "react-html-parser";

const page = () => {
    const data = [
        {
            id: "bd3ff3c4-c965-4af7-921d-f89ed5c4fb97",
            user_created: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_created: "2024-03-26T09:50:38.912Z",
            user_updated: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_updated: "2024-05-14T20:36:21.693Z",
            name: "sample_subTopic",
            description:
                "<p>Hola, yo soy subtema de muestra</p>\n<p>&nbsp;</p>\n<p>https://www.youtube.com/watch?v=GYN3ub8Qb_I</p>\n<p>&nbsp;</p>\n<p>[YOutube](https://www.youtube.com/watch?v=GYN3ub8Qb_I)</p>\n<p>&nbsp;</p>\n<p>https://www.youtube.com/watch?v=GYN3ub8Qb_I</p>",
            topicID: "ca31de52-8d5e-4b7f-b68e-b898c7241381",
            MD: "# Hello World\n\n[YOutube](https://www.youtube.com/watch?v=GYN3ub8Qb_I)",
        },
        {
            id: "2f7a4b6d-2b56-483f-bb6d-aa4ed08a256c",
            user_created: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_created: "2024-03-27T11:25:17.512Z",
            user_updated: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_updated: "2024-05-13T18:42:09.258Z",
            name: "another_subTopic",
            description: "<p>Another sample subtopic description.</p>",
            topicID: "ca31de52-8d5e-4b7f-b68e-b898c7241381",
            MD: "# Another Sample Subtopic\n\nThis is just a sample description.",
        },
        {
            id: "8c896f6e-53b8-42db-a267-4e6497df7b0d",
            user_created: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_created: "2024-03-28T14:03:52.721Z",
            user_updated: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_updated: "2024-05-12T14:20:33.444Z",
            name: "yet_another_subTopic",
            description: "<p>Yet another sample subtopic description.</p>",
            topicID: "ca31de52-8d5e-4b7f-b68e-b898c7241381",
            MD: "# Yet Another Sample Subtopic\n\nThis is just another sample description.",
        },
        {
            id: "4a0e91be-7a06-4d2d-847b-dc4655ac3a20",
            user_created: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_created: "2024-03-29T16:40:41.025Z",
            user_updated: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_updated: "2024-05-11T09:15:27.937Z",
            name: "one_more_subTopic",
            description: "<p>One more sample subtopic description.</p>",
            topicID: "ca31de52-8d5e-4b7f-b68e-b898c7241381",
            MD: "# One More Sample Subtopic\n\nThis is just one more sample description.",
        },
        {
            id: "6a4f75d1-35e0-44c5-a159-44937dcb6487",
            user_created: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_created: "2024-03-30T18:55:32.819Z",
            user_updated: "7253dfa5-8039-4eda-b6c5-a3e2666bea3f",
            date_updated: "2024-05-10T06:30:17.619Z",
            name: "final_subTopic",
            description: "<p>Final sample subtopic description.</p>",
            topicID: "ca31de52-8d5e-4b7f-b68e-b898c7241381",
            MD: "# Final Sample Subtopic\n\nThis is just the final sample description.",
        },
    ];
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <ReactMarkdown>{item.MD}</ReactMarkdown>
                    <br />
                    <div>{ReactHtmlParser(item.description)}</div>
                </div>
            ))}
        </>
    );
};

export default page;
"use server";
import { clientToken } from "@/db/directus";
import { readItem, readItems } from "@directus/sdk";

// Get all topics
export const getTopics = async () => {
  try {
    // FIXME : Highly inefficient, need to optimize
    const result = await clientToken(process.env.TOKEN).request(
      readItems("Topic", {
        fields: [
          "id",
          "name",
          {
            subTopicID: ["id", "name"],
          },
        ],
      })
    );
    console.log(result);
    if (!result) throw new Error("No topics found");
    return { success: true, message: "Found all topics", result };
  } catch (e) {
    console.log(e);
    // throw new Error(e.errors[0].message || e.message);
  }
};

// Get a topic by ID
export const getTopicById = async (id) => {
  try {
    const result = await clientToken(process.env.TOKEN).request(
      readItem("Topic", id)
    );
    if (!result) throw new Error("Topic not found");

    return { success: true, message: "Found topic by ID", result: result };
  } catch (e) {
    console.log(e);
    throw new Error(e.errors[0].message || e.message);
  }
};

// Get subtopics by their IDs
export const getSubtopicsByTopicId = async (subtopicIds) => {
  try {
    const subTopicData = await clientToken(process.env.TOKEN).request(
      readItems("SubTopic", subtopicIds, {
        fields: ["id", "name"],
      })
    );
    console.log(subTopicData);
    if (!subTopicData) throw new Error("No Subtopics found");
    return {
      success: true,
      message: "Found subtopics by IDs",
      result: subTopicData,
    };
  } catch (error) {
    console.log(error);
    // throw new Error(e.errors[0].message || e.message);
  }
};

// Get subtopics by their IDs
export const getsubSubtopics = async (subtopicIds) => {
  try {
    const subSubTopicData = await clientToken(process.env.TOKEN).request(
      readItem("SubTopic", subtopicIds, {
       
        fields: [
          "id",
          "name",
          {
            subSubTopicID: ["id", "subTitle", "content","code_snippet","code_language","images","videos"],
          },
        ],
      })
    );
    console.log(subSubTopicData);
    if (!subSubTopicData) throw new Error("No Subtopics found");
    return {
      success: true,
      message: "Found subtopics by IDs",
      result: subSubTopicData,
    };
  } catch (error) {
    console.log(error);
    // throw new Error(e.errors[0].message || e.message);
  }
};

"use server";
import { clientToken } from "@/db/directus";
import { readItem, readItems } from "@directus/sdk";

// Get all topics
export const getTopics = async () => {
  try {
    const result = await clientToken(process.env.TOKEN).request(
      readItems("Topic")
    );
    console.log(result);
    if (!result) {
      throw new Error("No topics found");
    }

    return { success: true, message: "Found all topics", result: result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

// Get a topic by ID
export const getTopicById = async (id) => {
  try {
    const result = await clientToken(process.env.TOKEN).request(
      readItem("Topic", id)
    );
    if (!result) {
      throw new Error("Topic not found");
    }
    return { success: true, message: "Found topic by ID", result: result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

// Get subtopics by their IDs
export const getSubtopicsByTopicId = async (subtopicIds) => {
  try {

    console.log(subtopicIds);
    const subTopicData = await clientToken(process.env.TOKEN).request(
      readItem("SubTopic", subtopicIds)
    );
    console.log(subTopicData);


    return {
      success: true,
      message: "Found subtopics by IDs",
      result: subTopicData,
    };
  } catch (error) {
    console.error(error);
    // throw new Error("Failed to fetch subtopics");
  }
};

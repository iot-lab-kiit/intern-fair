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
      readItem("SubTopic", subtopicIds, {
        fields: ["name", "MD", "decription"],
      })
    );

    return {
      success: true,
      message: "Found subtopics by IDs",
      result: subTopicData,
    };
  } catch (e) {
    console.log(e);
    throw new Error(e.errors[0].message || e.message);
  }
};

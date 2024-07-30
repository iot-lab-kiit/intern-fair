"use server";

import { cookies } from "next/headers";
import { clientToken } from "@/config/directus";
import { readItem, readItems } from "@directus/sdk";

export const getTopics = async () => {
  try {
    const user_token = cookies().get("user_session").value;
    const result = await clientToken(user_token).request(
      readItems("Topic", {
        fields: [
          "id",
          "name",
          "description",
          { SubTopicID: ["id", "name", "order"] },
        ],
      })
    );

    if (!result) throw new Error("No topics found");
    return { success: true, message: "Found all topics", result };
  } catch (e) {
    console.error(e);
    throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const getTopicById = async (id) => {
  try {
    const user_token = cookies().get("user_session").value;
    const result = await clientToken(user_token).request(readItem("Topic", id));
    if (!result) throw new Error("Topic not found");

    return { success: true, message: "Found topic by ID", result: result };
  } catch (e) {
    console.error(e);
    throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const getSubtopicsByTopicId = async (subtopicIds) => {
  try {
    const user_token = cookies().get("user_session").value;
    const subTopicData = await clientToken(user_token).request(
      readItem("SubTopic", { fields: ["id", "name"] })
    );

    if (!subTopicData) throw new Error("No Subtopics found");
    return {
      success: true,
      message: "Found subtopics by IDs",
      result: subTopicData,
    };
  } catch (e) {
    console.error(e);
    throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const getsubTopicContent = async (subtopicIds) => {
  try {
    const user_token = cookies().get("user_session").value;
    const subSubTopicData = await clientToken(user_token).request(
      readItem("SubTopic", subtopicIds, { fields: ["content"] })
    );
    if (!subSubTopicData) throw new Error("No Subtopics found");
    return {
      success: true,
      message: "Found content",
      result: subSubTopicData,
    };
  } catch (e) {
    console.error(e);
    throw new Error(e.errors?.[0]?.message || e.message);
  }
};

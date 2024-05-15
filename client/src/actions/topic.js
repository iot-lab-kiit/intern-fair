"use server";
import { clientToken } from "@/db/directus";
import {
  createItem,
  updateItem,
  deleteItem,
  readItem,
  readItems,
} from "@directus/sdk";

// Create a new topic and its associated subtopic
export const createTopic = async (data) => {
    try {
        // Create the topic
        const topicResult = await clientToken(process.env.TOKEN).request(
            createItem("Topic", {
                name: data.name
            })
        );
        
        if (!topicResult) {
            throw new Error("Topic creation failed");
        }

        // If subtopic data is provided, create the subtopic
        if (data.subtopic) {
            const subtopicResult = await clientToken(process.env.TOKEN).request(
                createItem("Subtopic", {
                    name: data.subtopic.name,
                    description: data.subtopic.description,
                    topic_id: topicResult.id 
                })
            );

            if (!subtopicResult) {
                throw new Error("Subtopic creation failed");
            }
        }

        // Return success message
        return { success: true, message: "Topic and subtopic (if provided) created successfully", result: topicResult };
    } catch (e) {
        throw new Error(e.errors[0].message);
    }
};

// Get all topics
export const getTopics = async () => {
    try {
        const result = await clientToken(process.env.TOKEN).request(
            readItems("Topic")
        );
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

// Update a topic
export const updateTopic = async (id, data) => {
    try {
        const result = await clientToken(process.env.TOKEN).request(
            updateItem("Topic", id, {
                name: data.name
            })
        );
        if (!result) {
            throw new Error("Topic update failed");
        }

   
        if (data.subtopic) {
            const subtopicResult = await clientToken(process.env.TOKEN).request(
                updateItem("Subtopic", data.subtopic.id, {
                    name: data.subtopic.name,
                    description: data.subtopic.description,
                    topic_id: result.id  
                })
            );

            if (!subtopicResult) {
                throw new Error("Subtopic update failed");
            }
        }
        return { success: true, message: "Topic updated successfully", result };
    } catch (e) {
        throw new Error(e.errors[0].message);
    }
};

// Delete a topic by ID
export const deleteTopic = async (id) => {
    try {
        if (!id) {
            throw new Error("Please provide the ID");
        }

        // Delete the topic
        const result = await clientToken(process.env.TOKEN).request(
            deleteItem("Topic", id)
        );
        if (!result) {
            throw new Error("Topic deletion failed");
        }

     
        const subtopicsResult = await clientToken(process.env.TOKEN).request(
            deleteItem("Subtopic", {
                filter: {
                    topic_id: id
                }
            })
        );
        if (!subtopicsResult) {
            throw new Error("Subtopic deletion failed");
        }
        
        return { success: true, message: "Topic and associated subtopics deleted successfully", result };
    } catch (e) {
        throw new Error(e.errors[0].message);
    }
};

// Get a subtopic by ID
export const getSubtopicById = async (id) => {
    try {
        const result = await clientToken(process.env.TOKEN).request(
            readItem("Subtopic", id)
        );
        if (!result) {
            throw new Error("Subtopic not found");
        }
        return { success: true, message: "Found subtopic by ID", result: result };
    } catch (e) {
        throw new Error(e.errors[0].message);
    }
};

// Update a subtopic
export const updateSubtopic = async (id, data) => {
    try {
        const result = await clientToken(process.env.TOKEN).request(
            updateItem("Subtopic", id, {
                name: data.name,
                description: data.description
            })
        );
        if (!result) {
            throw new Error("Subtopic update failed");
        }
        return { success: true, message: "Subtopic updated successfully", result };
    } catch (e) {
        throw new Error(e.errors[0].message);
    }
};

// Delete a subtopic by ID
export const deleteSubtopic = async (id) => {
    try {
        if (!id) {
            throw new Error("Please provide the ID");
        }
        const result = await clientToken(process.env.TOKEN).request(
            deleteItem("Subtopic", id)
        );
        if (!result) {
            throw new Error("Subtopic deletion failed");
        }
        return { success: true, message: "Subtopic deleted successfully", result };
    } catch (e) {
        throw new Error(e.errors[0].message);
    }
};

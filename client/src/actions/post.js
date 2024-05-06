"use server";
import { client } from "@/db/directus";
import {
  createItem,
  updateItem,
  deleteItem,
  readItem,
  readItems,
} from "@directus/sdk";

const validateData = (data) => {
  if (!data.content || !data.Tags || !data.status) {
    throw new Error("Missing Required Fields: Content, Status,Tags");
  }

  if (typeof data.Content !== "string") {
    throw new Error("Content must be a string");
  }

  if (
    !Array.isArray(data.Tags) ||
    !data.Tags.every((tag) => typeof tag == "string")
  ) {
    throw new Error("Tags must be an array of String");
  }

  if (!["Draft", "Published", "Archived"].includes(data.status)) {
    throw new Error(
      "Status must be either 'draft' or 'published' or 'archive'"
    );
  }
};

// Create POST
export const createPost = async (data) => {
  try {
    validateData(data);
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(
      createItem("Post", {
        content: data.content,
        Tags: data.Tags, // needs to be an array of string
      })
    );
    if (!result) throw new Error("Post Not created");
    return { success: true, message: "Post created successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};
//Get All POST
export const getAllPost = async () => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(readItems("Post"));
    if (!result) throw new Error("No post found");
    return { success: true, message: "Found All Post", result };
  } catch (e) {
    console.log(e);
    throw new Error(e.errors[0].message);
  }
};
// Get POST By Id
export const getPostById = async (data) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(readItem("Post", data.id));
    if (!result) throw new Error("No post found with that id");
    return { success: true, message: "Post with the Id", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};
// Update POst
export const updatePost = async (data) => {
  try {
    validateData(data);
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(
      updateItem("Post", data.id, {
        content: data.content,
        Tags: data.Tags, // string array
      })
    );
    if (!result) throw new Error("Post Not updated");
    return { success: true, message: "Post Updated successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};
//Delete POST
export const deletePost = async (data) => {
  try {
    if (!data.id) {
      throw new Error("Please provide the id");
    }
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(deleteItem("Post", data.id));
    if (!result) throw new Error("Post Not Deleted");
    return { success: true, message: "Post Deleted successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

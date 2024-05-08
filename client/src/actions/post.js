"use server";
import { clientToken } from "@/db/directus";
import {
  createItem,
  updateItem,
  deleteItem,
  readItem,
  readItems,
} from "@directus/sdk";

const validateData = (data) => {
  if (!data.content || !data.tag)
    throw new Error("Missing Required Fields: Content, Tags");

  if (typeof data.Content !== "string")
    throw new Error("Content must be a string");

  if (
    !Array.isArray(data.tag) ||
    !data.tag.every((tag) => typeof tag == "string")
  )
    throw new Error("Tags must be an array of String");
};

// Create POST
export const createPost = async (data) => {
  try {
    validateData(data);
    const result = await clientToken(process.env.TOKEN).request(
      createItem("Post", {
        content: data.content,
        tag: data.tag,
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
    const result = await clientToken(process.env.TOKEN).request(
      readItems("Post")
    );
    if (!result) throw new Error("No post found");
    return { success: true, message: "Found All Post", result: result };
  } catch (e) {
    console.log(e);
    throw new Error(e.errors[0].message);
  }
};
// Get POST By Id
export const getPostById = async (data) => {
  try {
    const result = await clientToken(process.env.TOKEN).request(
      readItem("Post", data.id)
    );
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
    const result = await clientToken(process.env.TOKEN).request(
      updateItem("Post", data.id, {
        content: data.content,
        tag: data.tag,
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
    const result = await clientToken(process.env.TOKEN).request(
      deleteItem("Post", data.id)
    );
    if (!result) throw new Error("Post Not Deleted");
    return { success: true, message: "Post Deleted successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

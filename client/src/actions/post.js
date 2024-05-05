"use server";
import { client } from "@/db/directus";
import { createItem, updateItem, deleteItem, readItem } from "@directus/sdk";

// Create POST
export const createPost = async (data) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(
      createItem("Post", {
        content: data.content,
        Tags: data.Tags,
        status: data.status,
      })
    );
    if (!result) throw new Error("Post Not created");
    return { success: true, message: "Post created successfully", result };
  } catch (error) {
    throw new Error(e.errors[0].message);
  }
};
//Get All POST
export const getAllPost = async () => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(readItem("Post"));
    if (!result) throw new Error("No post found");
    return { success: true, message: "Found All Post", result };
  } catch (error) {
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
  } catch (error) {
    throw new Error(e.errors[0].message);
  }
};
// Update POst
export const updatePost = async (data) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(
      updateItem("Post", data.id, {
        content: data.content,
        Tags: data.Tags,
        status: data.status,
      })
    );
    if (!result) throw new Error("Post Not updated");
    return { success: true, message: "Post Updated successfully", result };
  } catch (error) {
    throw new Error(e.errors[0].message);
  }
};
//Delete POST
export const deletePost = async (data) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(deleteItem("Post", data.id));
    if (!result) throw new Error("Post Not Deleted");
    return { success: true, message: "Post Deleted successfully", result };
  } catch (error) {
    throw new Error(e.errors[0].message);
  }
};

"use server";
import { clientToken } from "@/db/directus";
import {
  createItem,
  updateItem,
  deleteItem,
  readItem,
  readItems,
  uploadFiles,
  updateFile,
} from "@directus/sdk";

const validateData = (data) => {
  if (!data.content || !data.tag)
    throw new Error([{ message: "Missing Required Fields: Content, Tags" }]);

  if (typeof data.content !== "string")
    throw new Error([{ message: "Content must be a string" }]);

  if (
    !Array.isArray(data.tag) ||
    !data.tag.every((tag) => typeof tag == "string")
  )
    throw new Error([{ message: "Tags must be an array of String" }]);
};

// Create POST
export const createPost = async (data, formData) => {
  try {
    let result;
    if (formData.get("file")) {
      const fileUploadResponse = await clientToken(process.env.TOKEN).request(
        uploadFiles(formData)
      );


      const updateResponse = await clientToken(process.env.TOKEN).request(
        updateFile(fileUploadResponse.id, {
          location: "46e88712-846e-4e1d-af06-0a907aa5e04a",
        })
      );
      result = fileUploadResponse.id;
    }

    const postResponse = await clientToken(process.env.TOKEN).request(
      createItem("Post", {
        content: data.content,
        tag: data.tag,
        image: result || null,
      })
    );

    if (!postResponse) throw new Error("Post not created");

    return {
      success: true,
      message: "Post created successfully",
      result: postResponse,
    };
  } catch (e) {
    console.error("Error in createPost:", e);
    throw new Error(e.errors?.[0]?.message || e.message);
  }
};


//Get All POST
export const getAllPost = async () => {
  try {
    const result = await clientToken(process.env.TOKEN).request(
      readItems("Post", {
        fields: [
          "id",
          "content",
         "tag",
          "image",
          "date_created",
          {
            user_created: ["id", "first_name", "last_name", "email"],
          },
        ],
      })
    );
    if (!result) throw new Error([{ message: "No post found" }]);
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
    if (!result) throw new Error([{ message: "No post found with that id" }]);
    return { success: true, message: "Post with the Id", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};
// Update POst
export const updatePost = async (data) => {
  try {
    data = JSON.parse(data);
    const result = await clientToken(process.env.TOKEN).request(
      updateItem("Post", data.id, {
        content: data.content,
        tag: data.tag,
        likes: data.likes,
        share: data.share,
      })
    );
    if (!result) throw new Error([{ message: "Post Not updated" }]);
    return { success: true, message: "Post Updated successfully", result };
  } catch (e) {
    console.log(e);
    // throw new Error(e.errors[0].message);
  }
};
//Delete POST
export const deletePost = async (data) => {
  try {
    if (!data.id) throw new Error([{ message: "Please provide the id" }]);

    const result = await clientToken(process.env.TOKEN).request(
      deleteItem("Post", data.id)
    );
    if (!result) throw new Error([{ message: "Post Not Deleted" }]);
    return { success: true, message: "Post Deleted successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

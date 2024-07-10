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

import { cookies } from "next/headers";

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
    const user_token = cookies().get("user_session").value;
    let result;
    if (formData.get("file")) {
      const fileUploadResponse = await clientToken(user_token).request(
        uploadFiles(formData)
      );

      if (!fileUploadResponse.id) {
        throw new Error("File upload failed");
      }

      const updateResponse = await clientToken(user_token).request(
        updateFile(fileUploadResponse.id, {
          location: "46e88712-846e-4e1d-af06-0a907aa5e04a",
        })
      );

      result = fileUploadResponse.id;
    }

    const postResponse = await clientToken(user_token).request(
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

// Get All POST
export const getAllPost = async (offset, POSTS_PER_PAGE) => {
  try {
    const user_token = cookies().get("user_session").value;
    const result = await clientToken(user_token).request(
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
          "likes",
          {
            likesUserCollection: [
              { directus_users_id: ["id", "first_name", "last_name", "email"] },
            ],
          },
        ],
        offset: parseInt(offset),
        limit: parseInt(POSTS_PER_PAGE), // Limit for pagination
      })
    );

    if (!result) throw new Error([{ message: "No post found" }]);
    return { success: true, message: "Found All Post", result: result };
  } catch (error) {
    console.log(error);
    // throw new Error(e.errors[0].message || e.message);
  }
};

// Get POST By Id
export const getPostById = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    console.log("data:", data);
    const result = await clientToken(user_token).request(
      readItem("Post", data.id, {
        likesUserCollection: data.likedBy,
      })
    );
    if (!result) throw new Error([{ message: "No post found with that id" }]);
    return { success: true, message: "Post with the Id", result };
  } catch (e) {
    throw new Error(e.errors[0].message || e.message);
  }
};

// Update POst
export const updatePost = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    data = JSON.parse(data);
    console.log(data);
    const result = await clientToken(user_token).request(
      updateItem("Post", data.id, {
        content: data.content,
        tag: data.tag,
        likes: data.likes,
        share: data.share,
        likesUserCollection: data.likedBy,
      })
    );
    if (!result) throw new Error([{ message: "Post Not updated" }]);
    return { success: true, message: "Post Updated successfully", result };
  } catch (e) {
    console.log(e);
    // throw new Error(e.errors[0].message || e.message);
  }
};

export const updateLikes = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    data = JSON.parse(data);
    console.log(data);
    const post = await clientToken(user_token).request(
      readItem("Post", data.id)
    );

    console.log(post);
    let likedBy = post.likesUserCollection;
    if (!likedBy.includes(data.userID)) likedBy.push(data.userID);
    else likedBy = likedBy.filter((user) => user !== data.userID);

    const result = await clientToken(user_token).request(
      updateItem("Post", data.id, {
        likesUserCollection: likedBy,
        likes: likedBy.length,
      })
    );
    console.log(result);
    if (!result) throw new Error([{ message: "liked" }]);
    return { success: true, message: "Post liked successfully", result };
  } catch (error) {
    console.log(error);
  }
};

// Delete POST
// export const deletePost = async (data) => {
//   try {
//     if (!data.id) throw new Error([{ message: "Please provide the id" }]);

//     const result = await clientToken(user_token).request(
//       deleteItem("Post", data.id)
//     );
//     if (!result) throw new Error([{ message: "Post Not Deleted" }]);
//     return { success: true, message: "Post Deleted successfully", result };
//   } catch (e) {
//     throw new Error(e.errors[0].message || e.message);
//   }
// };

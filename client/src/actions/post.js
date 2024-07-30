"use server";

import {
  createItem,
  updateItem,
  readItem,
  readItems,
  uploadFiles,
  updateFile,
  readUser,
} from "@directus/sdk";
import { cookies } from "next/headers";
import { clientToken } from "@/config/directus";

export const createPost = async (data, formData) => {
  try {
    const user_token = cookies().get("user_session").value;
    let result;
    if (formData.get("file")) {
      const fileUploadResponse = await clientToken(user_token).request(
        uploadFiles(formData)
      );

      if (!fileUploadResponse.id) throw new Error("File upload failed");

      const updateResponse = await clientToken(user_token).request(
        updateFile(fileUploadResponse.id, {
          location: "e8ac07d7-1503-41f6-bd0e-6528c9301ac7",
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
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

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
          { user_created: ["id", "first_name", "last_name", "email"] },
          "likes",
          {
            likesUserCollection: [
              { directus_users_id: ["id", "first_name", "last_name", "email"] },
            ],
          },
          "share",
          {
            shareUserCollection: [
              { directus_users_id: ["id", "first_name", "last_name", "email"] },
            ],
          },
        ],
        offset: parseInt(offset),
        limit: parseInt(POSTS_PER_PAGE),
      })
    );

    if (!result) throw new Error([{ message: "No post found" }]);
    return { success: true, message: "Found All Post", result: result };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const getPostById = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    "data:", data;
    const result = await clientToken(user_token).request(
      readItem("Post", data.id, {
        likesUserCollection: data.likedBy,
      })
    );
    if (!result) throw new Error([{ message: "No post found with that id" }]);
    return { success: true, message: "Post with the Id", result };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const updatePost = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    data = JSON.parse(data);
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
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const updateLikes = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    data = JSON.parse(data);

    const post = await clientToken(user_token).request(
      readItem("Post", data.id, {
        fields: [
          {
            likesUserCollection: [
              { directus_users_id: ["id", "first_name", "last_name", "email"] },
            ],
          },
        ],
      })
    );

    let likedBy = post.likesUserCollection.map(
      (like) => like.directus_users_id.id
    );

    if (!likedBy.includes(data.userID)) likedBy.push(data.userID);
    else likedBy = likedBy.filter((user) => user !== data.userID);

    const result = await clientToken(user_token).request(
      updateItem("Post", data.id, {
        likesUserCollection: likedBy.map((userId) => ({
          directus_users_id: { id: userId },
          Post_id: { id: data.id },
        })),
        likes: likedBy.length,
      })
    );

    if (!result) throw new Error([{ message: "liked" }]);
    return { success: true, message: "Post liked successfully", result };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const updateShare = async (data) => {
  try {
    const user_token = cookies().get("user_session").value;
    data = JSON.parse(data);

    const user = await clientToken(user_token).request(
      readUser(data.userID, {
        fields: ["id", "first_name", "last_name", "email"],
      })
    );
    const post = await clientToken(user_token).request(
      readItem("Post", data.id, {
        fields: [
          {
            shareUserCollection: [
              { directus_users_id: ["id", "first_name", "last_name", "email"] },
            ],
          },
        ],
      })
    );

    const existingShareUsers = post.shareUserCollection.map(
      (share) => share.directus_users_id
    );

    if (!existingShareUsers.some((user) => user.id === data.userID)) {
      existingShareUsers.push({ id: data.userID });
    }

    const result = await clientToken(user_token).request(
      updateItem("Post", data.id, {
        share: existingShareUsers.length,
        shareUserCollection: existingShareUsers.map((user) => ({
          directus_users_id: { id: user.id },
          Post_id: { id: data.id },
        })),
      })
    );
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

"use server";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${
  process.env.TOKEN || "y1L8fkNd81K2HlLZM5EKASL-z4lzxu9V"
}`;
// Create POST
export const createPost = async (req, res) => {
  try {
    const response = await axios.post(
      "http://43.204.145.188/items/Post",
      req.body
    );
    if (!response) {
      res.status(404).json({ message: "Post not created" });
    }
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
  }
};
//Get All POST
export const getAllPost = async (req, res) => {
  try {
    const response = await axios.get("http://43.204.145.188/items/Post");
    if (!response) {
      res.status(404).json({ message: "No Post Found" });
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};
// Get POST By Id
export const getPostById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`http://43.204.145.188/items/Post/${id}`);
    if (!response) {
      res.status(404).json({ message: "Post By Id not Found" });
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};
// Update POst
export const updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.patch(
      `http://43.204.145.188/items/Post/${id}`,
      req.body
    );
    if (!response) {
      res.status(404).json({ message: "Post not Updated" });
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};
//Delete POST
export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.delete(
      `http://43.204.145.188/items/Post/${id}`
    );
    if (!response) {
      res.status(404).json({ message: "Post not Deleted" });
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};

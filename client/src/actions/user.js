"use server";
import User from "@/models/user";
import dbConnect from "@/db/connectDb";

dbConnect();

export const getUser = async () => {
  try {
    const user = await User.find();
    return { data: user };
  } catch (error) {
    return { error: error.message };
  }
};

export const createUser = async (userData) => {
  try {
    // send email to user
    const user = await User.create(userData);
    return { data: user };
  } catch (error) {
    return { error: error.message };
  }
};

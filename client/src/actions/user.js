"use server";
import { client } from "@/db/directus";
import {
  createUser,
  rest,
  passwordRequest,
  passwordReset,
} from "@directus/sdk";

// Create an account
export const createUserr = async (data) => {
  try {
    // use token
    await client.login(process.env.USER, process.env.PASS);
    const [fName, lName] = data.name.split(" ");
    const result = await client.request(
      createUser({
        first_name: fName,
        last_name: lName,
        email: data.email,
        password: data.password,
        role: "3a56d810-4e75-40ee-a21c-884e4b92ea23", // use env
      })
    );
    if (!result) throw new Error("User not created");
    return { success: true, message: "User created successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

// Login a user
export const getUserr = async (formData) => {
  try {
    const result = await client.login(formData.email, formData.password, {
      mode: "cookie",
    });
    return { success: true, message: "User logged in successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
};

// // request password reset
export const resetPasswordRequest = async (formData) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    // Use token
    await client.request(passwordRequest(JSON.parse(formData).email,'http://localhost:3000/change-pass'));
    return {
      success: true,
      message: "Reset password mail sent. If user exists.",
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send reset link");
  }
};

// // password reset
export const resetPassword = async (formData,token) => {
  try {
    // console.log(formData,token)
    const result = await client.request(
      passwordReset(token,formData.cnfpassword)
    );
    return { success: true, message: "Password reset successfully" };
  } catch (error) {
    console.error(error);
    throw new Error(e.errors[0].message);
  }
};

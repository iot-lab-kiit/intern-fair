"use server";
import { createUser, passwordRequest, passwordReset } from "@directus/sdk";
import { client, clientToken } from "@/db/directus";
import { cookies } from "next/headers";

export const createUserr = async (data) => {
  try {
    const cookieStore = cookies();
    console.log("All cookies:", cookieStore.getAll());
    const user_token = cookieStore.get("user_token");
    const [fName, lName] = data.name.split(" ");
    const result = await clientToken(user_token).request(
      createUser({
        first_name: fName,
        last_name: lName,
        email: data.email,
        password: data.password,
        role: process.env.USER_ROLE,
      })
    );

    if (!result) throw new Error("User not created");
    return { success: true, message: "User created successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message || e.message);
  }
};

export const getUserr = async (formData) => {
  try {
    const result = await client.login(formData.email, formData.password, {
      mode: "cookie",
    });
    // console.log("All cookies:", cookieStore.getAll());
    return { success: true, message: "User logged in successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message || e.message);
  }
};

// request password reset
export const resetPasswordRequest = async (formData) => {
  try {
    const cookieStore = cookies();
    const user_email = cookieStore.get("email");
    const user_password = cookieStore.get("password");
    await client.login(user_email, user_password);
    // Use token
    await client.request(passwordRequest(JSON.parse(formData).email, 'http://localhost:3000/change-pass'));
    return {
      success: true,
      message: "Reset password mail sent. If user exists.",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send reset link");
  }
};

// password reset
export const resetPassword = async (formData, token) => {
  try {
    const result = await client.request(
      passwordReset(token, formData.cnfpassword)
    );
    return { success: true, message: "Password reset successfully" };
  } catch (error) {
    console.error(error);
    throw new Error(e.errors[0].message);
  }
};

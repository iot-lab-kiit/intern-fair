"use server";

import { client, clientToken } from "@/config/directus";
import { createUser, passwordRequest, passwordReset } from "@directus/sdk";

export const createUserr = async (data) => {
  try {
    const [fName, lName] = data.name.split(" ");
    const result = await clientToken(process.env.TOKEN).request(
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
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const getUserr = async (formData) => {
  try {
    const result = await client.login(formData.email, formData.password, {
      mode: "cookie",
    });
    return { success: true, message: "User logged in successfully", result };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const resetPasswordRequest = async (formData) => {
  try {
    await clientToken(process.env.TOKEN).request(
      passwordRequest(JSON.parse(formData).email)
    );

    return {
      success: true,
      message: "Reset password mail sent. If user exists.",
    };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const resetPassword = async (formData, token) => {
  try {
    await client.request(passwordReset(token, formData.cnfpassword));
    return { success: true, message: "Password reset successfully" };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

// Obsolete

export const googleCreateUserr = async (data) => {
  try {
    data.password=hashPassword(data.password);
    const [fName, lName] = data.name.split(" ");
    const result = await clientToken(process.env.TOKEN).request(
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
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

export const googleGetUserr = async (formData) => {
  try {
    const result = await client.login(formData.email, formData.password, {
      mode: "cookie",
    });
    return { success: true, message: "User logged in successfully", result };
  } catch (e) {
    console.error(e);
    //  throw new Error(e.errors?.[0]?.message || e.message);
  }
};

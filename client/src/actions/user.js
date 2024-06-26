"use server";
import { createUser } from "@directus/sdk";
import { client, clientToken } from "@/db/directus";

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
    throw new Error(e.errors[0].message || e.message);
  }
};

export const getUserr = async (formData) => {
  try {
    const result = await client.login(formData.email, formData.password, {
      mode: "cookie",
    });
    return { success: true, message: "User logged in successfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message || e.message);
  }
};

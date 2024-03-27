"use server";
import { client } from "@/db/directus";
import { createUser, authentication, rest, login } from "@directus/sdk";

export const createUserr = async (data) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const [fName, lName] = data.name.split(" ");
    const result = await client.request(
      createUser({
        first_name: fName,
        last_name: lName,
        email: data.email,
        password: data.password,
        role: "79858458-13aa-4215-9987-c457e6b322ca",
      })
    );
    if (!result) throw new Error("User not created");
    return { success: true, message: "User created successfully", data: null };
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const getUserr = async (formData) => {
  try {
    await client.login(process.env.USER, process.env.PASS);
    const result = await client.request(
      login(formData.email, formData.password)
    );
    // const result = await client.request(readUser(user_id));
    console.log(result);
    return { success: true, result };
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

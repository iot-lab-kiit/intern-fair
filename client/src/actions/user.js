"use server";
import { client } from "@/db/directus";
import { createUser,rest, passwordRequest,passwordReset } from "@directus/sdk";

// Create an account
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


// request password reset
export const resetPasswordRequest = async(email)=>{
  try {
    const result = await client.request(passwordRequest({email}));
    console.log(result.message);
    return { success: true, message: "link sent succesfully", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
}



// password reset
export const resetPassword = async(formdata)=>{
  try {
    const result = await client.request(passwordReset('reset_token', 'new_password'));
    return { success: true, message: "password reset", result };
  } catch (e) {
    throw new Error(e.errors[0].message);
  }
}
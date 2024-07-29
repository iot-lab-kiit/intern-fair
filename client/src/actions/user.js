"use server";
import { cookies } from "next/headers";
import { client, clientToken } from "@/db/directus";
import { createUser, passwordRequest, passwordReset, readUsers} from "@directus/sdk";
import crypto from "crypto";
const hashPassword=(password)=>{
  const hash=crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}
export const createUserr = async (data) => {
  try {
    const user_token = cookies().get("user_token").value;
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

// request password reset
export const resetPasswordRequest = async (formData) => {
  try {
    const cookieStore = cookies();
    const user_email = cookieStore.get("email");
    const user_password = cookieStore.get("password");
    await client.login(process.env.USER, process.env.PASS);
    // Use token
   
    await client.request(
      passwordRequest(
        JSON.parse(formData).email
        
      )
    );
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
    console.log(e)
    throw new Error("error Occured");
  }
};
export const googleGetUserr = async (formData,name) => {
  try {
    const res = await clientToken(process.env.TOKEN).request(readUsers({
      fields: ["*"],
    }));
    formData.password=hashPassword(formData.password);
    // console.log("this is hashed password ",formData.password)
    // console.log(res);
    //filter throught the res for formdata.email
    // if the user is found then login 
    //else if the user is not found then create a new user and login
    // console.log(user.password)
    const user = res.find(user => user.email === formData.email);
    if (user) {
      const result = await client.login(formData.email, formData.password, {
        mode: "cookie",
      });
      return { success: true, message: "User logged in successfully", result };
    }
    else{
      console.log("Else block")
      const [fName, lName] = name.split(" ");
      const resp = await clientToken(process.env.TOKEN).request(
        createUser({
          first_name: fName,
          last_name: lName,
          email: formData.email,
          password: formData.password,
          role: process.env.USER_ROLE,
        })
      );
      if (!resp) throw new Error("User not created");
      // console.log("User created Successfully ",result)
      const result = await client.login(formData.email, formData.password,{
        mode: "cookie",
      });
      console.log("User logged",resp)
      return { success: true, message: "User logged in successfully", result };
    }
  } catch (e) {
    console.log(e)
    throw new Error(e.errors[0].message || e.message);
  }
};
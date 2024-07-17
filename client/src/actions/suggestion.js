"use server"

import { clientToken } from "@/db/directus";
import { createItem } from "@directus/sdk";

const validateData = (data) => {
    if (!data.name || !data.email || !data.suggestion)
        throw new Error([{ message: "Missing Required Fields: Name, Email and Suggestion" }]);

    if (typeof data.name !== "string" || typeof data.email !== "string")
        throw new Error([{ message: "Name and Email must be a string" }]);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        throw new Error([{ message: "Invalid Email Format" }]);
    }
};

export const createSuggestion=async (data)=>{
    try {
        validateData(data);
        const suggestionResponse = await clientToken(process.env.TOKEN).request(
            createItem("Suggestion", {
                name: data.name,
                email: data.email,
                suggestion: data.suggestion,
            })
        );
        if (!suggestionResponse) throw new Error("Suggestion not created");

        return {
            success: true,
            message: "Suggestion created successfully",
            result: suggestionResponse,
        };
    } catch (e) {
        console.error("Error in createSuggestion:", e);
        throw new Error(e.errors?.[0]?.message || e.message);
    }
}
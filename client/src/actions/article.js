import { client } from "@/db/directus";
import { readRoles } from "@directus/sdk";

export const result = await client.request(readRoles());

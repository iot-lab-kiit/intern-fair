import { clientR } from "@/db/directus";
import { readRoles } from "@directus/sdk";

export const result = await clientR.request(readRoles({ fields: ["id"] }));

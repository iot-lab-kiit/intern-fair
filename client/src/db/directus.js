import { createDirectus, rest, authentication } from "@directus/sdk";

export const client = createDirectus(process.env.DIRECTUS_URL)
  .with(authentication())
  .with(rest());

await client.login(process.env.USER, process.env.PASS);

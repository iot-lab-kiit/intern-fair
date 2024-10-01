import {
  createDirectus,
  rest,
  authentication,
  staticToken,
} from "@directus/sdk";

export const client = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL)
  .with(authentication("json"))
  .with(rest());

export const clientToken = (token) => {
  return createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL)
    .with(staticToken(token))
    .with(rest());
};

import { createDirectus, rest, graphql } from "@directus/sdk";

// Client with REST support
export const clientR = createDirectus(process.env.DIRECTUS_URL).with(rest());

// Client with GraphQL support
export const clientG = createDirectus(process.env.DIRECTUS_URL).with(graphql());

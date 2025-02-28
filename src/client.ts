import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rq03gqf2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-23",
});

export default client;

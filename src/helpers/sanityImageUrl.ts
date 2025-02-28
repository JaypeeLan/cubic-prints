/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rq03gqf2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-23",
});

const builder = ImageUrlBuilder({
  projectId: "rq03gqf2",
  dataset: "production",
});

export function urlFor(source: any) {
  return builder.image(source);
}

export default client;

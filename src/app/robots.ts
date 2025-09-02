// app/robots.ts
import { BASE_URL } from "@/lib/contants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = BASE_URL || "";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

// app/sitemap.ts
import { BASE_URL } from "@/lib/contants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BASE_URL || "";
  const pages = ["", "/stay", "/contact"];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}

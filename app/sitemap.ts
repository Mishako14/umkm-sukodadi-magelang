import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://umkm-sukodadi.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://umkm-sukodadi.vercel.app/umkm",
      lastModified: new Date(),
    },
  ];
}
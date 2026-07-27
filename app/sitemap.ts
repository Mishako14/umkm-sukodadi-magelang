import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://umkm-sukodadi-magelang.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://umkm-sukodadi-magelang.vercel.app/umkm",
      lastModified: new Date(),
    },
  ];
}
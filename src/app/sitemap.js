import { getAllBlogPosts } from "@/data/blogPosts";
import { buildCanonicalUrl } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = [
    {
      path: "/",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/blog",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogRoutes = getAllBlogPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes].map((entry) => ({
    url: buildCanonicalUrl(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

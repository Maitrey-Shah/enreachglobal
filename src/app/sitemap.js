import { getAllBlogPosts } from "@/data/blogPosts";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const staticRoutes = ["", "/blog"];
  const blogRoutes = getAllBlogPosts().map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: new Date(),
  }));
}

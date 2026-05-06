import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/data/blogPosts";
import { SITE_NAME, buildCanonicalUrl } from "@/lib/site";

const blogPosts = getAllBlogPosts();

export const metadata = {
  title: "Industrial Scrap Market Blog",
  description:
    "Read Enreach Global insights on copper scrap trading, aluminium scrap recycling, and brass scrap market trends for industrial buyers.",
  keywords: [
    "industrial scrap blog",
    "copper scrap trading insights",
    "aluminium scrap recycling blog",
    "brass scrap market trends",
    "metal scrap export insights",
  ],
  alternates: {
    canonical: buildCanonicalUrl("/blog"),
  },
  openGraph: {
    title: `Industrial Scrap Market Blog | ${SITE_NAME}`,
    description:
      "Read Enreach Global insights on copper scrap trading, aluminium scrap recycling, and brass scrap market trends for industrial buyers.",
    url: buildCanonicalUrl("/blog"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Industrial Scrap Market Blog | ${SITE_NAME}`,
    description:
      "Read Enreach Global insights on copper scrap trading, aluminium scrap recycling, and brass scrap market trends for industrial buyers.",
  },
};

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fdf8f1_0%,#f6f2eb_48%,#efe7dc_100%)] text-slate-950">
        <Navbar activeSection="blog" />

        <section className="px-5 pb-10 pt-20 sm:px-6 lg:px-8 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl" data-reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                Blog
              </p>
              <h1 className="mt-4 text-5xl leading-tight font-semibold text-slate-950 md:text-6xl">
                Industrial market insights for smarter scrap trade decisions.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Explore SEO-focused articles on copper scrap trading, aluminium
                scrap recycling, and brass scrap demand to support sourcing,
                export planning, and industrial market visibility.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

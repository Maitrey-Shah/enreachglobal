import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/data/blogPosts";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildPageMetadata,
} from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

const blogPosts = getAllBlogPosts();

const blogTitle = "Industrial Scrap Market Blog";
const blogDescription =
  "Read Enreach Global insights on copper scrap trading, aluminium scrap recycling, brass scrap demand, and bulk industrial scrap export strategy.";
const blogKeywords = [
  "industrial scrap blog",
  "copper scrap trading insights",
  "aluminium scrap recycling blog",
  "brass scrap market trends",
  "metal scrap export insights",
  "bulk scrap export blog",
];

export const metadata = buildPageMetadata({
  title: blogTitle,
  description: blogDescription,
  keywords: blogKeywords,
  path: "/blog",
  type: "website",
});

export default function BlogPage() {
  const structuredData = [
    buildCollectionPageSchema({
      title: blogTitle,
      description: blogDescription,
      path: "/blog",
      about: [
        "Copper scrap exporters",
        "Aluminium scrap suppliers",
        "Brass scrap recycling",
        "Industrial metal trading",
      ],
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
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

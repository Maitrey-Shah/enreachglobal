import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import {
  formatBlogDate,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blogPosts";
import { SITE_NAME, buildCanonicalUrl } from "@/lib/site";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

function buildArticleStructuredData(post, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [buildCanonicalUrl(post.image)],
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.keywords,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: canonicalUrl,
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description:
        "The requested Enreach Global blog article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = buildCanonicalUrl(`/blog/${post.slug}`);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    category: post.category,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug);
  const canonicalUrl = buildCanonicalUrl(`/blog/${post.slug}`);
  const articleStructuredData = buildArticleStructuredData(post, canonicalUrl);

  return (
    <>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fdf8f1_0%,#f6f2eb_48%,#efe7dc_100%)] text-slate-950">
        <Navbar activeSection="blog" />

        <article
          className="px-5 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-20"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleStructuredData),
            }}
          />

          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl">
              <nav
                aria-label="Breadcrumb"
                className="text-sm text-slate-500"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link
                      href="/blog"
                      className="transition-colors duration-300 hover:text-slate-700"
                    >
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-slate-700">{post.category}</li>
                </ol>
              </nav>

              <header className="mt-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="rounded-full bg-white/85 px-4 py-2 font-semibold uppercase tracking-[0.26em] text-slate-600">
                    {post.category}
                  </span>
                  <time dateTime={post.date} itemProp="datePublished">
                    {formatBlogDate(post.date)}
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h1
                  className="mt-6 text-5xl leading-tight font-semibold text-slate-950 md:text-6xl"
                  itemProp="headline"
                >
                  {post.title}
                </h1>

                <p
                  className="mt-6 max-w-3xl text-lg leading-8 text-slate-600"
                  itemProp="description"
                >
                  {post.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[28px] border border-slate-200/80 bg-white/85 px-5 py-5 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.4)] sm:px-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f4ef] text-base font-semibold text-slate-900">
                    {post.author.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                      Author
                    </p>
                    <p
                      className="mt-1 text-lg font-semibold text-slate-950"
                      itemProp="author"
                    >
                      {post.author.name}
                    </p>
                    <p className="text-sm text-slate-500">{post.author.role}</p>
                  </div>
                </div>
              </header>
            </div>

            <figure className="relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-[36px] border border-white/70 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
                itemProp="image"
              />
            </figure>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
              <div className="rounded-[32px] border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.24)] sm:p-10">
                <div className="prose prose-slate max-w-none">
                  {post.content.map((section) => (
                    <section
                      key={section.heading}
                      className="not-first:mt-12"
                    >
                      <h2 className="text-3xl font-semibold text-slate-950">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      {section.subsections?.map((subsection) => (
                        <div key={subsection.heading} className="mt-7">
                          <h3 className="text-xl font-semibold text-slate-950">
                            {subsection.heading}
                          </h3>
                          <div className="mt-3 space-y-4 text-base leading-8 text-slate-700">
                            {subsection.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      ))}

                      {section.list?.length ? (
                        <div className="mt-7">
                          <h3 className="text-xl font-semibold text-slate-950">
                            {section.listHeading || "Key considerations"}
                          </h3>
                          <ul className="mt-4 space-y-3 text-base leading-8 text-slate-700">
                            {section.list.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 rounded-[20px] bg-[#f7f4ef] px-5 py-4"
                              >
                                <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-slate-900" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </section>
                  ))}

                  <section className="mt-12 rounded-[28px] border border-slate-200 bg-[#fbf8f3] px-6 py-7">
                    <h2 className="text-3xl font-semibold text-slate-950">
                      {post.conclusionTitle || "Conclusion"}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      {post.conclusion}
                    </p>
                  </section>
                </div>
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.22)]">
                  <h2 className="text-2xl font-semibold text-slate-950">
                    Key Takeaways
                  </h2>
                  <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                    {post.keyTakeaways.map((item) => (
                      <li key={item} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {relatedPosts.length ? (
          <section className="px-5 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Related Posts
                </p>
                <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
                  More market insights from {SITE_NAME}.
                </h2>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </>
  );
}

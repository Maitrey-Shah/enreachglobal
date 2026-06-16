import Image from "next/image";
import Link from "next/link";

import { formatBlogDate } from "@/data/blogPosts";

export default function BlogCard({ post, priority = false }) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_34px_80px_-36px_rgba(15,23,42,0.35)]">
      <Link
        href={`/blog/${post.slug}`}
        className="block focus:outline-none"
        aria-label={`Read ${post.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
          <span className="rounded-full bg-[#f7f4ef] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-slate-600">
            {post.category}
          </span>
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        </div>

        <h2 className="mt-5 text-3xl font-semibold text-slate-950">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors duration-300 hover:text-slate-700"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

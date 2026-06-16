"use client";

import Image from "next/image";

function LinkedInIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.7-5.44A1.97 1.97 0 0 0 3.28 5c0 1.08.78 1.94 1.93 1.94h.03c1.18 0 1.94-.86 1.94-1.94A1.9 1.9 0 0 0 5.27 3.06h-.03ZM20.72 12.97c0-3.44-1.84-5.04-4.3-5.04-1.98 0-2.87 1.08-3.36 1.85V8.5H9.68c.04.86 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.92-1.38 1.36 0 1.9 1.04 1.9 2.57V20h3.38v-7.03Z" />
    </svg>
  );
}

export default function TeamSection({ members }) {
  return (
    <section id="team" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
            Team
          </p>
          <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
            Our Team
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A focused commercial and operations team supports sourcing, grading,
            documentation, and responsive coordination across industrial scrap
            transactions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {members.map((member) => (
            <article
              key={`${member.name}-${member.designation}`}
              data-reveal
              className="group overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_34px_80px_-36px_rgba(15,23,42,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} ${member.designation}`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 640px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {member.designation}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${member.name} on LinkedIn`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

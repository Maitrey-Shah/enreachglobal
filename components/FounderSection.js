"use client";

import Image from "next/image";
import { useState } from "react";

const PURPOSE_CARDS = [
  {
    title: "Our Mission",
    paragraphs: [
      "At Enreach Global Inc., our mission is to connect scrap metal suppliers and global buyers through transparent, efficient, and reliable trading solutions.",
      "We are committed to delivering competitive pricing, advance payment options, exceptional customer service, and dependable logistics that create long-term value for our partners.",
      "By fostering strong business relationships built on trust, integrity, and professionalism, we aim to simplify the global scrap metal supply chain while supporting responsible recycling and sustainable resource recovery.",
    ],
  },
  {
    title: "Our Vision",
    paragraphs: [
      "Our vision is to become a leading global scrap metal trading company recognized for excellence, reliability, and ethical business practices.",
      "We strive to expand our international presence, strengthen our global network, and earn a significant share of the global recycling and metal trading market.",
      "Through innovation, customer-focused service, and unwavering commitment to quality, we aspire to be the preferred partner for suppliers, recyclers, manufacturers, and buyers worldwide, contributing to a more sustainable and resource-efficient future.",
    ],
  },
];

const CORE_VALUES = [
  {
    title: "Integrity",
    text: "We conduct every transaction with honesty, transparency, and accountability, building trust with customers, suppliers, and partners.",
  },
  {
    title: "Customer Commitment",
    text: "Our customers are at the center of everything we do. We focus on delivering exceptional service, responsive communication, and tailored solutions.",
  },
  {
    title: "Excellence",
    text: "We continuously strive for the highest standards in sourcing, trading, logistics, and customer satisfaction.",
  },
  {
    title: "Reliability",
    text: "We honor our commitments and deliver consistent results through dependable processes and strong industry relationships.",
  },
  {
    title: "Professionalism",
    text: "We approach every partnership with respect, expertise, and a commitment to long-term success.",
  },
  {
    title: "Sustainability",
    text: "We support responsible recycling practices that help conserve natural resources and promote a circular economy.",
  },
  {
    title: "Growth Through Partnership",
    text: "We believe lasting success is built through mutually beneficial relationships that create value for all stakeholders.",
  },
];

const STORY_HIGHLIGHTS = [
  {
    label: "Journey",
    title: "Canadian roots, global reach",
    text: "Founded in Calgary in 2023, Enreach Global was built to connect reliable scrap metal supply with international industrial demand.",
  },
  {
    label: "Purpose",
    title: "Create trusted trade flow",
    text: "We simplify sourcing, purchasing, export coordination, and relationship management so partners can trade with confidence.",
  },
  {
    label: "Values",
    title: "Integrity before volume",
    text: "Transparency, reliability, professionalism, and sustainable resource recovery guide every supplier and buyer relationship.",
  },
];

const STORY_TIMELINE = [
  ["2023", "Incorporated in Calgary, Alberta with a focused mandate for global scrap metal trading."],
  ["Today", "Serving suppliers, recyclers, manufacturers, traders, and international buyers with disciplined execution."],
  ["Next", "Building a respected global brand known for ethical trade, quality sourcing, and long-term partnerships."],
];

const FOUNDERS = [
  {
    name: "Kishan Hirpara",
    role: "Founder",
    image: "/assets/founders/kishan-hirpara.jpeg",
    imagePosition: "center center",
    description:
      "Kishan Hirpara brings a strong technical foundation and strategic mindset to Enreach Global, with experience across metal recycling, logistics, and international trade. His leadership focuses on transparent supplier relationships, disciplined operations, and long-term value creation for global buyers.",
    paragraphs: [
      "Kishan Hirpara is a Founder of Enreach Global Inc., bringing a strong technical foundation and strategic mindset to the organization.",
      "He holds a Master's degree in Chemical Engineering from the University of Calgary and has over five years of professional experience in metal recycling, logistics, and international trade. His background provides deep insight into industrial materials, resource efficiency, and global supply chain operations.",
      "Kishan plays a key role in supplier relationships, operations strategy, and business development. His focus is on creating a transparent and efficient trading structure that ensures value for both suppliers and international buyers.",
      "With a strong belief in ethical business practices and long-term partnerships, he has been instrumental in shaping Enreach Global into a reliable and growing international trading company.",
      "His leadership is driven by discipline, consistency, and a vision to establish a globally respected brand in the scrap metal industry.",
    ],
  },
  {
    name: "Biraj Gajera",
    role: "Founder",
    image: "/assets/founders/biraj-gajera.jpeg",
    imagePosition: "center center",
    description:
      "Biraj Gajera brings deep commercial experience in sales, operations, and business development. He leads with a practical, relationship-first approach, helping expand supplier networks, strengthen trade execution, and build trusted international partnerships.",
    paragraphs: [
      "Biraj Gajera is a Founder of Enreach Global Inc. and brings over seven years of experience in sales, operations, and business development.",
      "He holds a Bachelor's degree in Information Systems and Business Management from SAIT (Southern Alberta Institute of Technology), giving him a strong foundation in both technical understanding and business strategy.",
      "Biraj plays a key role in supplier acquisition, operations management, and strategic business development. His strengths lie in relationship building, negotiation, market development, and closing high-volume trade deals across the scrap metal supply chain.",
      "Before founding Enreach Global, Biraj built his experience in sales and management roles, where he developed strong capabilities in client relations, team coordination, and performance-driven operations.",
      "At Enreach Global, he has been instrumental in expanding supplier networks, strengthening operational efficiency, and driving business growth through trusted partnerships and consistent execution.",
      "Biraj believes in building long-term business relationships based on trust, reliability, and mutual growth. His leadership approach is practical, results-driven, and focused on creating sustainable value in international trade.",
      "His vision is to help build Enreach Global into a globally recognized trading company known for professionalism, fair dealing, and strong market presence.",
    ],
  },
];

const cardClassName =
  "border border-slate-200/80 bg-white/85 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.3)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_-38px_rgba(15,23,42,0.36)]";

const founderCardClassName =
  "group relative flex h-full flex-col items-center overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white px-6 pb-8 pt-8 text-center shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-slate-300/80 hover:bg-white/90 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] hover:backdrop-blur-xl sm:px-8 sm:pb-10 sm:pt-10 lg:px-10";

function SectionHeading({ badge, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
        {badge}
      </p>
      <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 7.58a1.84 1.84 0 1 0 0-3.68 1.84 1.84 0 0 0 0 3.68Zm13.9 6.03c0-3.1-1.65-4.54-3.86-4.54a3.33 3.33 0 0 0-3 1.65h-.04V8.98H9.3v10.27h3.18v-5.08c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.54 1.66 2.73v4.99h3.19v-5.64Z" />
    </svg>
  );
}

function FounderPortrait({ founder }) {
  const [hasImageError, setHasImageError] = useState(false);
  const initials = founder.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative mx-auto h-[188px] w-[188px] overflow-hidden rounded-full border-[6px] border-white bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:h-[220px] sm:w-[220px]">
      {hasImageError ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 text-5xl font-semibold text-slate-400">
          {initials}
        </div>
      ) : (
        <Image
          src={founder.image}
          alt={`${founder.name}, ${founder.role} of Enreach Global Inc.`}
          fill
          sizes="(min-width: 640px) 220px, 188px"
          quality={95}
          className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          style={{ objectPosition: founder.imagePosition }}
          onError={() => setHasImageError(true)}
        />
      )}
    </div>
  );
}

export default function FounderSection() {
  return (
    <div id="about" className="scroll-mt-28">
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div data-reveal>
              <SectionHeading
                badge="Our Story"
                title="About Enreach Global Inc."
                description="A Canadian metal trading company built to connect dependable scrap supply with global industrial opportunity through trust, clarity, and disciplined execution."
              />
              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 lg:text-[1.05rem]">
                <p>
                  Enreach Global Inc. was founded in 2023 in Calgary, Alberta
                  with a clear purpose: to make international scrap metal trade
                  more transparent, reliable, and commercially valuable for
                  every partner in the supply chain.
                </p>
                <p>
                  We source, purchase, and export ferrous and non-ferrous scrap
                  metals for suppliers, recyclers, manufacturers, demolition
                  contractors, independent dealers, traders, and global buyers.
                  Our mission is to create efficient trading partnerships backed
                  by competitive pricing, advance payment options, dependable
                  logistics, and responsive communication.
                </p>
                <p>
                  Our vision is to become a trusted name in the global recycling
                  and commodities market by combining ethical business
                  practices, sustainable resource recovery, strong execution,
                  and long-term relationship building.
                </p>
              </div>
            </div>

            <div data-reveal className={`overflow-hidden rounded-[32px] ${cardClassName}`}>
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-slate-950 p-7 text-white sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    Company Journey
                  </p>
                  <div className="mt-7 space-y-7">
                    {STORY_TIMELINE.map(([year, text]) => (
                      <div key={year} className="relative pl-7">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]"
                        />
                        <p className="font-serif text-2xl font-semibold">
                          {year}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/68">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 bg-white p-6 sm:p-7">
                  {STORY_HIGHLIGHTS.map((item) => (
                    <article
                      key={item.label}
                      className="rounded-[22px] border border-slate-200/80 bg-[#f8fafc] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_-32px_rgba(15,23,42,0.35)]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200/80 bg-white px-7 py-7 text-center sm:px-10">
                <p className="font-serif text-xl leading-8 font-semibold text-slate-950 sm:text-2xl">
                  Enreach Global Inc. - Connecting Metal Resources with Global
                  Opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="founder"
        className="scroll-mt-28 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto max-w-4xl text-center">
            <p className="mx-auto inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 shadow-sm">
              Founder Message
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
              Meet Our Founders
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Driving Global Growth Through Trust, Innovation &amp; Industry
              Expertise
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
            {FOUNDERS.map((founder, index) => (
              <article
                key={founder.name}
                data-reveal
                className={founderCardClassName}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
                />
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Founder 0{index + 1}
                </p>
                <FounderPortrait founder={founder} />
                <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#b8a46a] to-transparent" />
                <h3 className="mt-5 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  {founder.name}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {founder.role}
                </p>
                <p className="mt-6 flex-1 text-base leading-8 text-slate-600">
                  {founder.description}
                </p>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-950 hover:text-white"
                    aria-label={`Connect with ${founder.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="h-5 w-5" />
                    LinkedIn
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          <article
            data-reveal
            className="mt-8 overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.08)] bg-white/90 p-7 shadow-[0_15px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-9 lg:p-10"
          >
            <h3 className="text-3xl font-semibold text-slate-950">
              Our Shared Vision
            </h3>
            <div className="mt-6 grid gap-5 text-base leading-8 text-slate-600 lg:grid-cols-2 lg:gap-10">
              <p>
                Together, the founders of Enreach Global Inc. share a clear
                mission: to build a trusted global scrap metal trading company
                that delivers value through transparency, efficiency, and
                strong partnerships.
              </p>
              <p>
                By combining technical expertise and commercial experience,
                Kishan Hirpara and Biraj Gajera are committed to positioning
                Enreach Global as a reliable and respected name in the
                international recycling and commodities market.
              </p>
            </div>
          </article>

          <blockquote
            data-reveal
            className="mt-7 rounded-[36px] bg-slate-950 px-7 py-10 text-white shadow-[0_40px_90px_-42px_rgba(15,23,42,0.65)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Founders&apos; Philosophy
            </p>
            <p className="mt-6 max-w-5xl font-serif text-2xl leading-relaxed font-medium text-white sm:text-3xl lg:text-4xl">
              &ldquo;Trust is the foundation of every successful trade. We
              believe in building relationships that last, not just
              transactions that close.&rdquo;
            </p>
            <footer className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Founders, Enreach Global Inc.
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Purpose"
            title="Mission & Vision"
            description="A clear purpose guides every relationship, transaction, and long-term decision."
          />

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {PURPOSE_CARDS.map((card, index) => (
              <article
                key={card.title}
                className={`relative overflow-hidden rounded-[32px] p-7 sm:p-9 lg:p-10 ${cardClassName}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-slate-500 to-transparent" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Purpose 0{index + 1}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950">
                  {card.title}
                </h3>
                <div className="mt-6 space-y-5">
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Our Values"
            title="Core Values"
            description="The standards that shape how we trade, collaborate, and grow."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CORE_VALUES.map((value, index) => (
              <article
                key={value.title}
                className={`rounded-[28px] p-7 sm:p-8 ${cardClassName} ${
                  index === CORE_VALUES.length - 1
                    ? "md:col-span-2 xl:col-span-3"
                    : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Value {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

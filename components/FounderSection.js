"use client";

const ABOUT_PARAGRAPHS = [
  "Founded in 2023, Enreach Global Inc. is a Canadian incorporated scrap metal trading company headquartered in Calgary, Alberta. We specialize in the sourcing, purchasing, and international export of high-quality scrap metals, serving suppliers, recyclers, manufacturers, and buyers across global markets.",
  "At Enreach Global, we are committed to creating efficient and profitable trading partnerships throughout the metal recycling industry. We purchase container-load quantities of ferrous and non-ferrous scrap metals from a wide range of suppliers, including scrap yards, industrial manufacturers, demolition contractors, metal recyclers, government auctions, independent scrap dealers, and traders.",
  "Our product portfolio includes HMS 1 & 2, steel scrap, aluminum, copper, brass, stainless steel, catalytic converters, e-scrap, and other recyclable metal materials. Through our extensive sourcing network and strong international relationships, we supply quality scrap materials to customers across South Asian and other international markets.",
  "What sets Enreach Global apart is our commitment to providing highly competitive pricing, advance payment options, and dependable service. We understand that suppliers value security, speed, and transparency. That's why we focus on building long-term relationships based on trust, ethical business practices, and consistent performance.",
  "Our experienced team works closely with suppliers and buyers to ensure smooth transactions, reliable logistics, and timely delivery from origin to destination.",
  "As a growing company in the global recycling industry, we recognize the importance of sustainable resource management. By facilitating the recovery, recycling, and responsible movement of valuable metal resources, we contribute to a more sustainable and circular economy while helping businesses maximize the value of their recyclable materials.",
  "Our vision is to become one of the most trusted and respected scrap metal trading companies in the industry, earning a strong market presence through exceptional service, ethical business practices, and long-term partnerships.",
  "With a dedicated team, a growing global network, and a customer-first approach, Enreach Global Inc. is committed to connecting suppliers and buyers through reliable, transparent, and value-driven scrap metal trading solutions.",
];

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

const FOUNDERS = [
  {
    name: "Kishan Hirpara",
    role: "Founder",
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

export default function FounderSection() {
  return (
    <div id="about" className="scroll-mt-28">
      <section id="founder" className="scroll-mt-28 px-5 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Founders"
            title="Meet Our Founders"
            description={
              <>
                <span className="block">
                  At Enreach Global Inc., our leadership is built on industry
                  expertise, transparency, reliability, and long-term
                  partnerships.
                </span>
                <span className="mt-4 block">
                  Founded with a shared vision to create a trusted global scrap
                  metal trading company, our founders combine technical
                  knowledge, operational excellence, and business expertise to
                  deliver value-driven solutions across international markets.
                </span>
              </>
            }
          />

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <article
                key={founder.name}
                className={`flex h-full flex-col rounded-[32px] p-7 sm:p-9 lg:p-10 ${cardClassName}`}
              >
                <h3 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                  {founder.name}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {founder.role}
                </p>
                <div className="mt-7 flex-1 space-y-5 border-t border-slate-200/80 pt-6">
                  {founder.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article
            className={`mt-7 rounded-[32px] p-7 sm:p-9 lg:p-10 ${cardClassName}`}
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
          <SectionHeading badge="Our Story" title="About Enreach Global Inc." />

          <article className={`mt-10 overflow-hidden rounded-[36px] ${cardClassName}`}>
            <div className="grid gap-x-12 gap-y-6 px-7 py-9 sm:px-10 sm:py-12 lg:grid-cols-2 lg:px-14 lg:py-14">
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-slate-600 lg:text-[1.05rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="border-t border-slate-200/80 bg-slate-950 px-7 py-7 text-center sm:px-10">
              <p className="font-serif text-xl leading-8 font-semibold text-white sm:text-2xl">
                Enreach Global Inc. - Connecting Metal Resources with Global
                Opportunities.
              </p>
            </div>
          </article>
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

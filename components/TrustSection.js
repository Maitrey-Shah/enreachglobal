"use client";

export default function TrustSection({
  whyChooseUsItems,
  companyStatistics,
  industryExpertise,
  globalPresenceIndicators,
  serviceOfferings,
  industryFocus,
}) {
  return (
    <section id="trust" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
            Trust & Credibility
          </p>
          <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
            Why industrial buyers choose Enreach Global.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We combine sourcing discipline, documentation clarity, and responsive
            coordination to support premium scrap trading relationships that feel
            commercially reliable from the first enquiry.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {whyChooseUsItems.map((item) => (
            <article
              key={item.title}
              data-reveal
              className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_30px_70px_-36px_rgba(15,23,42,0.32)]"
            >
              <h3 className="text-2xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-[32px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.3)] lg:grid-cols-4">
          {companyStatistics.map((stat) => (
            <div key={stat.label} data-reveal className="rounded-[24px] bg-[#f7f4ef] p-6">
              <div className="text-3xl font-semibold text-slate-950">{stat.value}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div
            data-reveal
            className="rounded-[30px] border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.24)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Services
            </p>
            <div className="mt-5 grid gap-4">
              {serviceOfferings.map((service) => (
                <div key={service.title} className="rounded-[20px] bg-[#f7f4ef] px-5 py-4">
                  <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{service.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="rounded-[30px] border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.24)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Industries
            </p>
            <div className="mt-5 grid gap-4">
              {industryFocus.map((industry) => (
                <div key={industry.title} className="rounded-[20px] bg-[#f7f4ef] px-5 py-4">
                  <h3 className="text-xl font-semibold text-slate-950">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{industry.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            data-reveal
            className="rounded-[30px] border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.24)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Industry Expertise
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {industryExpertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-[#f7f4ef] px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="rounded-[30px] border border-slate-200/80 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.24)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Global Presence
            </p>
            <div className="mt-5 grid gap-3">
              {globalPresenceIndicators.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] bg-[#f7f4ef] px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

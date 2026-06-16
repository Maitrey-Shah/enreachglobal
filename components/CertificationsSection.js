"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function CloseIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CertificationsSection({ certifications }) {
  const [activeCertification, setActiveCertification] = useState(null);

  useEffect(() => {
    if (!activeCertification) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCertification(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeCertification]);

  return (
    <>
      <section
        id="certifications"
        className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Certifications & Compliance
            </p>
            <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
              Credentials prepared to strengthen buyer confidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This section is structured for ISO certifications, export
              registrations, memberships, and quality documentation so approved
              client credentials can be presented with the same premium feel as
              the rest of the website.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {certifications.map((certification) => (
              <article
                key={certification.id}
                data-reveal
                className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_34px_80px_-36px_rgba(15,23,42,0.35)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveCertification(certification)}
                  className="block w-full text-left"
                  aria-label={`View ${certification.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={certification.image}
                      alt={certification.title}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 640px) 40vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {certification.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {certification.description}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4">
                      View Certificate
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeCertification ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 px-5 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeCertification.title}
          onClick={() => setActiveCertification(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close certificate preview"
              onClick={() => setActiveCertification(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-700 transition-colors duration-300 hover:bg-white hover:text-slate-950"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10]">
              <Image
                src={activeCertification.image}
                alt={activeCertification.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Certification Preview
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950">
                {activeCertification.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {activeCertification.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

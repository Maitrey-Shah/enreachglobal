"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COMPANY_LINKEDIN_URL } from "@/data/companyProfile";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_PHONE,
} from "@/lib/site";

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "Our Story" },
  { id: "products", label: "Products" },
  { id: "locations", label: "Locations" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

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

export default function Footer({ onNavigate }) {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const getSectionHref = (sectionId) =>
    sectionId === "blog" ? "/blog" : sectionId === "home" ? "/" : `/#${sectionId}`;

  const handleLinkClick = (sectionId) => {
    if (isHomePage && typeof onNavigate === "function") {
      onNavigate(sectionId);
      return;
    }

    router.push(
      sectionId === "blog" ? "/blog" : sectionId === "home" ? "/" : `/#${sectionId}`
    );
  };

  return (
    <footer className="bg-[#0f172a] px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div className="max-w-sm">
          <div className="group flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 md:h-[4.5rem] md:w-[4.5rem]">
              <Image
                src="/logo.svg"
                alt="Enreach Global logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105 group-hover:opacity-95"
              />
            </div>

            <div className="min-w-0">
              <p className="font-serif text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-slate-100">
                Enreach Global
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            Premium metal scrap trading company specializing in aluminium,
            copper, and brass.
          </p>
          <a
            href={COMPANY_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Enreach Global on LinkedIn"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.id}
                href={getSectionHref(link.id)}
                onClick={(event) => {
                  if (isHomePage && typeof onNavigate === "function") {
                    event.preventDefault();
                    handleLinkClick(link.id);
                  }
                }}
                className="w-fit text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
            <p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="transition duration-300 hover:text-white"
              >
                Email: {COMPANY_EMAIL}
              </a>
            </p>
            <p>
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s+/g, "")}`}
                className="transition duration-300 hover:text-white"
              >
                Phone: {COMPANY_PHONE}
              </a>
            </p>
            <p>Location: {COMPANY_LOCATION}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/12 pt-6 text-sm text-slate-400">
        <p>&copy; 2026 Enreach Global. All rights reserved.</p>
        <a
          href="https://ecliptixsolutions.com/"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-4 block w-fit text-center text-xs font-medium tracking-[0.08em] text-slate-500 transition-colors duration-300 hover:text-slate-200"
        >
          Designed and Developed by Ecliptix Solutions
        </a>
      </div>
    </footer>
  );
}

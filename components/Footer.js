"use client";

import Image from "next/image";

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "locations", label: "Locations" },
  { id: "contact", label: "Contact" },
];

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#0f172a] px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div className="max-w-sm">
          <div className="group flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 md:h-[4.5rem] md:w-[4.5rem]">
              <Image
                src="/enreachlogo-transparent.png"
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
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate?.(link.id)}
                className="w-fit text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
            <a
              href="mailto:info@enreachglobal.com"
              className="transition duration-300 hover:text-white"
            >
              Email: info@enreachglobal.com
            </a>
            <p>Phone: +1 4034087454</p>
            <p>Location: Canada</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/12 pt-6 text-sm text-slate-400">
        &copy; 2026 Enreach Global. All rights reserved.
      </div>
    </footer>
  );
}

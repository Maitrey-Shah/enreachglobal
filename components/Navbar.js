"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "locations", label: "Locations" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const PRODUCT_GROUPS = [
  {
    id: "aluminium",
    label: "Aluminium Scrap",
    items: [
      { id: "tally", label: "Tally" },
      { id: "ubc", label: "UBC" },
      { id: "cables", label: "Aluminium Cables" },
      { id: "utensils", label: "Aluminium Utensils" },
    ],
  },
  {
    id: "copper",
    label: "Copper Scrap",
    items: [
      { id: "copper-berry", label: "Berry" },
      { id: "copper-birch-cliff", label: "Birch Cliff" },
    ],
  },
  {
    id: "brass",
    label: "Brass Scrap",
    items: [
      { id: "brass-honey", label: "Honey Scrap" },
      { id: "brass-rod", label: "Brass Rod" },
    ],
  },
];

function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M4.5 10h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

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

export default function Navbar({
  activeSection = "home",
  onNavigate,
  onProductNavigate,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(PRODUCT_GROUPS[0].id);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(false);

  const productsRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  const activeGroup =
    PRODUCT_GROUPS.find((group) => group.id === activeMenu) ?? PRODUCT_GROUPS[0];
  const isHomePage = pathname === "/";
  const getSectionHref = (sectionId) =>
    sectionId === "blog" ? "/blog" : sectionId === "home" ? "/" : `/#${sectionId}`;
  const getProductHref = (productId) => `/#${productId}`;

  const clearTimer = (timerRef) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openProductsMenu = () => {
    clearTimer(closeTimeoutRef);
    clearTimer(openTimeoutRef);

    openTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(true);
    }, 150);
  };

  const closeProductsMenu = () => {
    clearTimer(openTimeoutRef);
    clearTimer(submenuTimeoutRef);
    clearTimer(closeTimeoutRef);

    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
      setActiveMenu(PRODUCT_GROUPS[0].id);
    }, 200);
  };

  const setHoveredMenu = (menuId) => {
    clearTimer(closeTimeoutRef);
    clearTimer(submenuTimeoutRef);

    submenuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(menuId);
      setIsProductsOpen(true);
    }, 90);
  };

  const handleBlur = (event) => {
    const nextFocusedElement = event.relatedTarget;

    if (!productsRef.current?.contains(nextFocusedElement)) {
      closeProductsMenu();
    }
  };

  const handleNavClick = (sectionId) => {
    setIsMobileOpen(false);
    setExpandedMobileMenu(false);
    setIsProductsOpen(false);

    if (sectionId === "blog") {
      router.push("/blog");
      return;
    }

    if (isHomePage && typeof onNavigate === "function") {
      onNavigate(sectionId);
      return;
    }

    router.push(sectionId === "home" ? "/" : `/#${sectionId}`);
  };

  const handleProductClick = (productId) => {
    setIsMobileOpen(false);
    setExpandedMobileMenu(false);
    setIsProductsOpen(false);

    if (isHomePage && typeof onProductNavigate === "function") {
      onProductNavigate(productId);
      return;
    }

    router.push(`/#${productId}`);
  };

  useEffect(() => {
    return () => {
      clearTimer(openTimeoutRef);
      clearTimer(closeTimeoutRef);
      clearTimer(submenuTimeoutRef);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(event) => {
            if (isHomePage && typeof onNavigate === "function") {
              event.preventDefault();
              handleNavClick("home");
            }
          }}
          className="group flex items-center gap-3 text-left text-slate-950 sm:gap-4"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-14 w-14 flex-shrink-0 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
              <Image
                src="/logo.svg"
                alt="Enreach Global"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105 group-hover:opacity-95"
                priority
              />
            </div>

            <div className="min-w-0 leading-tight">
              <p className="text-[0.62rem] tracking-[0.18em] text-gray-500 sm:text-xs sm:tracking-[0.2em]">
                GLOBAL METAL TRADE
              </p>
              <p className="font-serif text-lg font-semibold transition-colors duration-300 group-hover:text-slate-700 sm:text-xl lg:text-2xl">
                Enreach Global
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {NAV_ITEMS.slice(0, 2).map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={getSectionHref(item.id)}
                onClick={(event) => {
                  if (item.id === "blog") {
                    return;
                  }

                  if (isHomePage && typeof onNavigate === "function") {
                    event.preventDefault();
                    handleNavClick(item.id);
                  }
                }}
                className={`rounded-full px-4 py-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            ref={productsRef}
            className="relative"
            onMouseEnter={openProductsMenu}
            onMouseLeave={closeProductsMenu}
            onFocus={openProductsMenu}
            onBlur={handleBlur}
          >
            <button
              type="button"
              onClick={() => handleNavClick("products")}
              aria-expanded={isProductsOpen}
              aria-haspopup="true"
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                activeSection === "products" || isProductsOpen
                  ? "bg-slate-950 text-white"
                  : "text-slate-800 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              Products
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-4 flex -translate-x-1/2 items-start gap-3 transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isProductsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="min-w-[260px] rounded-[18px] border border-slate-200/80 bg-white p-3 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.32)]">
                {PRODUCT_GROUPS.map((group) => {
                  const isActive = activeMenu === group.id;

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onMouseEnter={() => setHoveredMenu(group.id)}
                      onFocus={() => setHoveredMenu(group.id)}
                      className={`group flex w-full items-center justify-between rounded-[14px] px-3.5 py-3 text-left text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-slate-100 text-slate-950"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      }`}
                    >
                      <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                        {group.label}
                      </span>
                      <ArrowRightIcon className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  );
                })}
              </div>

              <div
                className={`min-w-[250px] rounded-[18px] border border-slate-200/80 bg-white p-3 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.32)] transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isProductsOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[10px] opacity-0"
                }`}
              >
                <div className="px-3.5 pb-2 pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {activeGroup.label}
                </div>
                <div className="space-y-1">
                  {activeGroup.items.map((item) => (
                    <Link
                      key={item.id}
                      href={getProductHref(item.id)}
                      onClick={(event) => {
                        if (isHomePage && typeof onProductNavigate === "function") {
                          event.preventDefault();
                          handleProductClick(item.id);
                        } else {
                          setIsMobileOpen(false);
                          setExpandedMobileMenu(false);
                          setIsProductsOpen(false);
                        }
                      }}
                      className="group flex w-full items-center justify-between rounded-[14px] px-3.5 py-3 text-left text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-slate-950"
                    >
                      <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                        {item.label}
                      </span>
                      <ArrowRightIcon className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {NAV_ITEMS.slice(3).map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={getSectionHref(item.id)}
                onClick={(event) => {
                  if (item.id === "blog") {
                    return;
                  }

                  if (isHomePage && typeof onNavigate === "function") {
                    event.preventDefault();
                    handleNavClick(item.id);
                  }
                }}
                className={`rounded-full px-4 py-2.5 text-sm font-medium uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-800 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/#contact"
            onClick={(event) => {
              if (isHomePage && typeof onNavigate === "function") {
                event.preventDefault();
                handleNavClick("contact");
              }
            }}
            className="ml-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Get In Touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          className="rounded-full border border-slate-200 p-3 text-slate-900 lg:hidden"
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          {isMobileOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileOpen ? "max-h-[44rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="space-y-2 px-5 py-5 sm:px-6">
          {NAV_ITEMS.slice(0, 2).map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`block w-full rounded-[14px] px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <div className="rounded-[18px] border border-slate-200/80 p-2">
            <button
              type="button"
              onClick={() => setExpandedMobileMenu((current) => !current)}
              className="flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left text-sm font-medium uppercase tracking-[0.14em] text-slate-800 transition-colors duration-300 hover:bg-slate-100"
            >
              <span>Products</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
                  expandedMobileMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                expandedMobileMenu
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-2 px-1 pb-1 pt-2">
                  {PRODUCT_GROUPS.map((group) => (
                    <div key={group.id} className="rounded-[14px] bg-slate-50/80 p-2">
                      <div className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {group.label}
                      </div>
                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleProductClick(item.id)}
                            className="group flex w-full items-center justify-between rounded-[12px] px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-white hover:text-slate-950"
                          >
                            <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                              {item.label}
                            </span>
                            <ArrowRightIcon className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {NAV_ITEMS.slice(3).map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`block w-full rounded-[14px] px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-slate-800"
          >
            Get In Touch
          </button>
        </nav>
      </div>
    </header>
  );
}

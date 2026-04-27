"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapCard from "@/components/MapCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const SECTION_IDS = ["home", "about", "products", "locations", "contact"];

const HERO_IMAGES = ["/hero1.png", "/hero2.jpg", "/hero3.jpg"];

const PRODUCT_DETAILS = [
  {
    id: "tally",
    category: "Aluminium Scrap",
    title: "Tally",
    description:
      "Old sheet aluminium scrap commonly sourced from siding, gutters, and other clean, uncoated sheet applications.",
    highlights: [
      "Old sheet aluminium scrap",
      "Collected from siding and gutters",
      "Best processed clean and uncoated",
    ],
    image: "/hero1.png",
  },
  {
    id: "ubc",
    category: "Aluminium Scrap",
    title: "UBC",
    description:
      "Used beverage cans with one of the highest recycling recovery rates in the metal supply chain.",
    highlights: [
      "Used beverage cans",
      "High recycling recovery rate",
      "Can return to shelf in about 60 days",
    ],
    image: "/hero2.jpg",
  },
  {
    id: "cables",
    category: "Aluminium Scrap",
    title: "Aluminium Cables",
    description:
      "Power transmission and industrial aluminium wire grades supplied in clean and insulated variants.",
    highlights: [
      "Power transmission wires",
      "Clean and insulated types",
      "Sorted for efficient downstream recovery",
    ],
    image: "/hero3.jpg",
  },
  {
    id: "utensils",
    category: "Aluminium Scrap",
    title: "Aluminium Utensils",
    description:
      "Household and kitchen aluminium items prepared for recycling after separation from mixed material components.",
    highlights: [
      "Kitchen and cookware items",
      "Remove plastic and steel parts first",
      "Prepared for cleaner melt recovery",
    ],
    image: "/hero2.jpg",
  },
];

const SECONDARY_PRODUCTS = [
  {
    id: "copper-berry",
    group: "Copper Scrap",
    title: "Berry",
    description:
      "High-purity copper wire and cable scrap valued for conductivity and consistent industrial reuse.",
    image: "/hero3.jpg",
  },
  {
    id: "copper-birch-cliff",
    group: "Copper Scrap",
    title: "Birch Cliff",
    description:
      "Recovered copper-bearing fractions processed for quality grading, sorting, and export readiness.",
    image: "/hero1.png",
  },
  {
    id: "brass-honey",
    group: "Brass Scrap",
    title: "Honey Scrap",
    description:
      "Clean yellow brass scrap suited to secondary melting programs and precision metal manufacturing.",
    image: "/hero2.jpg",
  },
  {
    id: "brass-rod",
    group: "Brass Scrap",
    title: "Brass Rod",
    description:
      "Brass rod and turning grades handled for high-value recovery across engineering and fabrication sectors.",
    image: "/hero3.jpg",
  },
];

const LOCATION_CARDS = [
  {
    title: "Global Sourcing",
    text: "We collaborate with suppliers worldwide to maintain a strong and consistent scrap procurement network.",
  },
  {
    title: "Export Coordination",
    text: "We handle documentation, compliance, and shipment planning for seamless international trade.",
  },
  {
    title: "Industrial Buyers",
    text: "We supply refineries, smelters, and processors with reliable bulk scrap materials.",
  },
];

const CONTACT_FEATURES = [
  "Aluminium, Copper, Brass supply",
  "Global sourcing support",
  "Fast quotation & shipment coordination",
];

const CONTACT_FORM_TYPES = [
  { id: "buyer", label: "Buyer" },
  { id: "seller", label: "Seller" },
  { id: "enterprise", label: "Enterprise" },
];

const CONTACT_FORM_FIELDS = {
  buyer: [
    {
      name: "materialRequired",
      label: "Material Required",
      placeholder: "Material Required",
      type: "select",
      options: ["Aluminium Scrap", "Copper Scrap", "Brass Scrap"],
    },
    {
      name: "quantity",
      label: "Quantity (tons)",
      placeholder: "Quantity (tons)",
      type: "number",
      min: "0",
    },
    {
      name: "location",
      label: "Location",
      placeholder: "Location",
      type: "text",
    },
  ],
  seller: [
    {
      name: "scrapType",
      label: "Scrap Type",
      placeholder: "Scrap Type",
      type: "text",
    },
    {
      name: "availableQuantity",
      label: "Available Quantity",
      placeholder: "Available Quantity",
      type: "number",
      min: "0",
    },
    {
      name: "pickupLocation",
      label: "Pickup Location",
      placeholder: "Pickup Location",
      type: "text",
    },
  ],
  enterprise: [
    {
      name: "companyName",
      label: "Company Name",
      placeholder: "Company Name",
      type: "text",
    },
    {
      name: "businessType",
      label: "Business Type",
      placeholder: "Business Type",
      type: "select",
      options: ["Buyer", "Seller", "Both"],
    },
    {
      name: "monthlyVolume",
      label: "Monthly Volume",
      placeholder: "Monthly Volume",
      type: "text",
    },
    {
      name: "countriesOfOperation",
      label: "Countries of Operation",
      placeholder: "Countries of Operation",
      type: "text",
    },
  ],
};

const INITIAL_QUOTE_FORM = {
  inquiryType: "buyer",
  name: "",
  email: "",
  message: "",
  materialRequired: "",
  quantity: "",
  location: "",
  scrapType: "",
  availableQuantity: "",
  pickupLocation: "",
  companyName: "",
  businessType: "",
  monthlyVolume: "",
  countriesOfOperation: "",
};

const INITIAL_QUICK_ENQUIRY_FORM = {
  name: "",
  email: "",
  requirement: "",
};

const INITIAL_SUBMISSION_STATE = {
  isLoading: false,
  success: "",
  error: "",
};

function ClosePanelIcon({ className = "" }) {
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
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [quoteForm, setQuoteForm] = useState(INITIAL_QUOTE_FORM);
  const [quickEnquiryForm, setQuickEnquiryForm] = useState(
    INITIAL_QUICK_ENQUIRY_FORM
  );
  const [quoteSubmission, setQuoteSubmission] = useState(
    INITIAL_SUBMISSION_STATE
  );
  const [quickSubmission, setQuickSubmission] = useState(
    INITIAL_SUBMISSION_STATE
  );
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const pageRef = useRef(null);
  const floatingButtonRef = useRef(null);
  const floatingPanelRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-text]",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
            },
          }
        );
      });
    }, pageRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!floatingButtonRef.current) {
      return undefined;
    }

    const tween = gsap.to(floatingButtonRef.current, {
      y: -8,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => tween.kill();
  }, []);

  useEffect(() => {
    if (!isEnquiryOpen || !floatingPanelRef.current) {
      return;
    }

    gsap.fromTo(
      floatingPanelRef.current,
      { opacity: 0, scale: 0.8, y: 18 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
      }
    );
  }, [isEnquiryOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const offset = 92;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const handleQuoteFieldChange = (event) => {
    const { name, value } = event.target;

    if (quoteSubmission.success || quoteSubmission.error) {
      setQuoteSubmission(INITIAL_SUBMISSION_STATE);
    }

    setQuoteForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitContactForm = async (payload) => {
    console.log("[contact] submitting payload", payload);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));

    console.log("[contact] response received", {
      ok: response.ok,
      status: response.status,
      result,
    });

    if (!response.ok) {
      throw new Error(result.error || "Unable to send your enquiry right now.");
    }

    return result;
  };

  const handleQuoteRequest = async (event) => {
    event.preventDefault();

    const activeQuoteFields =
      CONTACT_FORM_FIELDS[quoteForm.inquiryType] ?? CONTACT_FORM_FIELDS.buyer;
    const details = Object.fromEntries(
      activeQuoteFields.map((field) => [field.label, quoteForm[field.name]])
    );

    setQuoteSubmission({
      isLoading: true,
      success: "",
      error: "",
    });

    try {
      await submitContactForm({
        formType: "quote",
        inquiryType: quoteForm.inquiryType,
        name: quoteForm.name.trim(),
        email: quoteForm.email.trim(),
        message: quoteForm.message.trim(),
        details,
      });

      setQuoteSubmission({
        isLoading: false,
        success: "Thank you. Your enquiry has been sent successfully.",
        error: "",
      });
      setQuoteForm((current) => ({
        ...INITIAL_QUOTE_FORM,
        inquiryType: current.inquiryType,
      }));
    } catch (error) {
      setQuoteSubmission({
        isLoading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry right now.",
      });
    }
  };

  const handleQuickEnquiryFieldChange = (event) => {
    const { name, value } = event.target;

    if (quickSubmission.success || quickSubmission.error) {
      setQuickSubmission(INITIAL_SUBMISSION_STATE);
    }

    setQuickEnquiryForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleQuickEnquirySubmit = async (event) => {
    event.preventDefault();

    setQuickSubmission({
      isLoading: true,
      success: "",
      error: "",
    });

    try {
      await submitContactForm({
        formType: "quick-enquiry",
        name: quickEnquiryForm.name.trim(),
        email: quickEnquiryForm.email.trim(),
        message: quickEnquiryForm.requirement.trim(),
      });

      setQuickSubmission({
        isLoading: false,
        success: "Thank you. Your enquiry has been sent successfully.",
        error: "",
      });
      setQuickEnquiryForm(INITIAL_QUICK_ENQUIRY_FORM);
    } catch (error) {
      setQuickSubmission({
        isLoading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry right now.",
      });
    }
  };

  const activeQuoteFields =
    CONTACT_FORM_FIELDS[quoteForm.inquiryType] ?? CONTACT_FORM_FIELDS.buyer;
  const contactInputClassName =
    "rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/45 focus:border-white/35 focus:bg-white/10";

  return (
    <>
      <main
        ref={pageRef}
        className="w-full overflow-x-hidden bg-[radial-gradient(circle_at_top,#fdf8f1_0%,#f6f2eb_48%,#efe7dc_100%)] text-slate-950"
      >
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onProductNavigate={scrollToSection}
        />

        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden scroll-mt-24 text-center"
        >
          {HERO_IMAGES.map((image, index) => {
            const scale = index === currentImage ? 1 : 1.08;

            return (
              <img
                key={image}
                src={image}
                alt="Industrial metal trading"
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(${scale})`,
                }}
              />
            );
          })}

          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f2eb] to-transparent" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-white">
            <p
              data-hero-text
              className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-white/78"
            >
              Premium Metal Scrap Trading
            </p>
            <h1
              data-hero-text
              className="max-w-5xl text-5xl leading-[0.98] font-semibold md:text-7xl lg:text-[5.5rem]"
            >
              Trading Industrial Value
            </h1>
            <p
              data-hero-text
              className="mt-6 max-w-2xl text-base leading-8 text-white/86 md:text-xl"
            >
              Precision-driven scrap trading for aluminium, copper, and brass
              industries.
            </p>
            <div data-hero-text className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Get In Touch
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("products")}
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Explore Products
              </button>
            </div>

            <div data-hero-text className="mt-10 flex items-center gap-3">
              {HERO_IMAGES.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "w-12 bg-white"
                      : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div data-reveal className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                About
              </p>
              <h2 className="max-w-2xl text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
                Global metal trading built for disciplined industrial supply
                chains.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Enreach Global supplies aluminium, copper, and brass scrap to
                modern processors with a focus on consistency, quality
                alignment, and commercial clarity. We operate like a long-term
                industrial partner, not a transactional broker.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["12+", "Active trade relationships"],
                  ["3", "Core metal categories"],
                  ["Global", "Sourcing and buyer network"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-slate-200/80 bg-white/85 p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-34px_rgba(15,23,42,0.38)]"
                  >
                    <div className="text-3xl font-semibold text-slate-950">
                      {value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#d8e9e3]" />
              <div className="absolute -bottom-6 right-8 h-32 w-32 rounded-full bg-[#eadfd3]" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)]">
                <img
                  src="/hero2.jpg"
                  alt="Industrial metal facility"
                  className="h-[520px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div data-reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                Products
              </p>
              <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
                Premium scrap grades arranged for fast industrial decisions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                From aluminium sheet and beverage cans to copper wire and brass
                recovery grades, our portfolio is structured for buyers who care
                about clarity, traceability, and reliable throughput.
              </p>
            </div>

            <div
              id="aluminium"
              data-reveal
              className="mt-12 grid gap-6 rounded-[32px] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)] lg:grid-cols-3"
            >
              {[
                [
                  "Aluminium Scrap",
                  "Tally, UBC, cables, and utensil grades prepared for efficient recycling and downstream melting.",
                ],
                [
                  "Copper Scrap",
                  "Berry and Birch Cliff grades chosen for conductivity value, sorting quality, and industrial reuse.",
                ],
                [
                  "Brass Scrap",
                  "Honey Scrap and Brass Rod streams ready for foundries, refiners, and engineering buyers.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[24px] bg-[#f7f4ef] p-6 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Category
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {PRODUCT_DETAILS.map((product) => (
                <article
                  key={product.id}
                  id={product.id}
                  data-reveal
                  className="scroll-mt-28 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_34px_80px_-36px_rgba(15,23,42,0.35)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {product.category}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-slate-950">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {product.description}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {product.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-[18px] bg-[#f7f4ef] px-4 py-3 text-sm leading-6 text-slate-700"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {SECONDARY_PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  id={product.id}
                  data-reveal
                  className="scroll-mt-28 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_34px_80px_-36px_rgba(15,23,42,0.35)]"
                >
                  <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full min-h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-7">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                        {product.group}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-slate-950">
                        {product.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="locations"
          className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div data-reveal className="relative">
              <div className="absolute -left-5 top-10 hidden h-28 w-28 rounded-full bg-[#dbe8f5] blur-2xl lg:block" />
              <MapCard />
            </div>

            <div className="space-y-6">
              <div data-reveal className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Locations
                </p>
                <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
                  Global Presence &amp; Operations
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  We operate across key global scrap markets ensuring efficient
                  sourcing, logistics, and delivery.
                </p>
              </div>

              <div className="grid gap-4">
                {LOCATION_CARDS.map((card) => (
                  <div
                    key={card.title}
                    data-reveal
                    className="rounded-xl border border-slate-200/80 bg-white/90 p-6 shadow-md transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_24px_55px_-34px_rgba(15,23,42,0.35)]"
                  >
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8">
          <div
            data-reveal
            className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-slate-950 px-6 py-12 text-white shadow-[0_40px_100px_-40px_rgba(15,23,42,0.55)] sm:px-8 lg:px-12 lg:py-16"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/65">
                  Contact
                </p>
                <h2 className="mt-4 text-4xl leading-tight font-semibold md:text-5xl">
                  Ready to Trade Premium Scrap?
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Tell us your requirements and our team will connect with you.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Reliable aluminium, copper, and brass availability",
                    "Commercial support tailored to industrial buyers",
                    "Disciplined documentation and export planning",
                    "Responsive coordination from inquiry to shipment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/8 p-6 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.8)] backdrop-blur">
                <div className="space-y-3">
                  {CONTACT_FEATURES.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white/82"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 text-base text-white"
                      >
                        &#10003;
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={handleQuoteRequest}
                  className="mt-6 grid gap-4"
                  aria-busy={quoteSubmission.isLoading}
                >
                  <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/6 p-1">
                    {CONTACT_FORM_TYPES.map((type) => {
                      const isActive = quoteForm.inquiryType === type.id;

                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() =>
                            setQuoteForm((current) => ({
                              ...current,
                              inquiryType: type.id,
                            }))
                          }
                          disabled={quoteSubmission.isLoading}
                          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 ${
                            isActive
                              ? "bg-white text-slate-950"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={quoteForm.name}
                    onChange={handleQuoteFieldChange}
                    placeholder="Name"
                    required
                    disabled={quoteSubmission.isLoading}
                    className={contactInputClassName}
                  />
                  <input
                    type="email"
                    name="email"
                    value={quoteForm.email}
                    onChange={handleQuoteFieldChange}
                    placeholder="Email"
                    required
                    disabled={quoteSubmission.isLoading}
                    className={contactInputClassName}
                  />
                  <textarea
                    name="message"
                    value={quoteForm.message}
                    onChange={handleQuoteFieldChange}
                    placeholder="Message"
                    rows={4}
                    required
                    disabled={quoteSubmission.isLoading}
                    className={`${contactInputClassName} resize-none`}
                  />
                  {activeQuoteFields.map((field) =>
                    field.type === "select" ? (
                      <select
                        key={field.name}
                        name={field.name}
                        value={quoteForm[field.name]}
                        onChange={handleQuoteFieldChange}
                        required
                        disabled={quoteSubmission.isLoading}
                        className={contactInputClassName}
                      >
                        <option value="">{field.label}</option>
                        {field.options.map((option) => (
                          <option key={option} value={option} className="text-slate-950">
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        value={quoteForm[field.name]}
                        onChange={handleQuoteFieldChange}
                        placeholder={field.placeholder}
                        min={field.min}
                        required
                        disabled={quoteSubmission.isLoading}
                        className={contactInputClassName}
                      />
                    )
                  )}
                  <button
                    type="submit"
                    disabled={quoteSubmission.isLoading}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f6d365] via-[#f7b267] to-[#ea580c] px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02]"
                  >
                    {quoteSubmission.isLoading ? "Sending..." : "Request Quote"}
                  </button>
                  {(quoteSubmission.success || quoteSubmission.error) && (
                    <p
                      aria-live="polite"
                      className={`text-sm leading-6 ${
                        quoteSubmission.error ? "text-rose-300" : "text-emerald-300"
                      }`}
                    >
                      {quoteSubmission.error || quoteSubmission.success}
                    </p>
                  )}
                  <div className="border-t border-white/10 pt-4 text-sm leading-7 text-white/60">
                    <p>Email: info@enreachglobal.com</p>
                    <p>Phone: +1 4034087454</p>
                    <p>Location: Canada</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={scrollToSection} />
      <WhatsAppButton />

      <div className="fixed bottom-6 right-6 z-50 flex max-w-[calc(100vw-1.5rem)] flex-col items-end sm:max-w-none">
        <button
          ref={floatingButtonRef}
          type="button"
          aria-expanded={isEnquiryOpen}
          aria-controls="quick-enquiry-panel"
          onClick={() => setIsEnquiryOpen(true)}
          className={`rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:bg-slate-800 ${
            isEnquiryOpen
              ? "pointer-events-none translate-y-3 scale-90 opacity-0"
              : "opacity-100"
          }`}
        >
          Enquire Now
        </button>

        <div
          id="quick-enquiry-panel"
          ref={floatingPanelRef}
          className={`fixed bottom-6 right-6 z-50 w-[min(20rem,calc(100vw-1.5rem))] border border-white/45 bg-white/80 p-5 backdrop-blur-lg shadow-2xl rounded-xl transition-all duration-500 ${
            isEnquiryOpen
              ? "pointer-events-auto visible translate-y-0 scale-100 opacity-100"
              : "pointer-events-none invisible translate-y-4 scale-[0.8] opacity-0"
          }`}
        >
          <button
            type="button"
            aria-label="Close quick enquiry form"
            onClick={() => setIsEnquiryOpen(false)}
            className="absolute right-3 top-3 rounded-full p-2 text-slate-500 transition-colors duration-300 hover:bg-slate-100 hover:text-slate-950"
          >
            <ClosePanelIcon className="h-4 w-4" />
          </button>

          <div className="pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Quick Enquiry
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-slate-950">
              Quick Enquiry
            </h3>
          </div>

          <form
            onSubmit={handleQuickEnquirySubmit}
            className="mt-5 grid gap-3"
            aria-busy={quickSubmission.isLoading}
          >
            <input
              type="text"
              name="name"
              value={quickEnquiryForm.name}
              onChange={handleQuickEnquiryFieldChange}
              placeholder="Name"
              required
              disabled={quickSubmission.isLoading}
              className="rounded-xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
            />
            <input
              type="email"
              name="email"
              value={quickEnquiryForm.email}
              onChange={handleQuickEnquiryFieldChange}
              placeholder="Email"
              required
              disabled={quickSubmission.isLoading}
              className="rounded-xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
            />
            <textarea
              name="requirement"
              value={quickEnquiryForm.requirement}
              onChange={handleQuickEnquiryFieldChange}
              placeholder="Requirement"
              rows={4}
              required
              disabled={quickSubmission.isLoading}
              className="resize-none rounded-xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
            />
            <button
              type="submit"
              disabled={quickSubmission.isLoading}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:from-[#0f172a] hover:via-[#1e293b] hover:to-[#334155]"
            >
              {quickSubmission.isLoading ? "Sending..." : "Send Enquiry"}
            </button>
            {(quickSubmission.success || quickSubmission.error) && (
              <p
                aria-live="polite"
                className={`text-sm leading-6 ${
                  quickSubmission.error ? "text-rose-700" : "text-emerald-700"
                }`}
              >
                {quickSubmission.error || quickSubmission.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

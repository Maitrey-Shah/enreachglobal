import { getAllBlogPosts } from "@/data/blogPosts";
import { FOUNDERS } from "@/data/companyProfile";
import {
  INDUSTRY_FOCUS,
  PRODUCT_DETAILS,
  SECONDARY_PRODUCTS,
  SERVICE_OFFERINGS,
} from "@/data/homeContent";

const PAGE_ITEMS = [
  {
    id: "page-home",
    type: "Page",
    title: "Home",
    description: "Enreach Global premium industrial metal scrap trading homepage.",
    href: "/",
    sectionId: "home",
    keywords: ["enreach global", "homepage", "industrial metal trading"],
  },
  {
    id: "page-about",
    type: "Page",
    title: "About Enreach Global",
    description: "Company overview focused on disciplined sourcing and industrial trade.",
    href: "/#about",
    sectionId: "about",
    keywords: ["about", "company overview", "metal scrap trading company"],
  },
  {
    id: "page-products",
    type: "Page",
    title: "Products",
    description: "Explore aluminium, copper, and brass scrap categories.",
    href: "/#products",
    sectionId: "products",
    keywords: ["products", "scrap categories", "aluminium copper brass"],
  },
  {
    id: "page-locations",
    type: "Page",
    title: "Locations",
    description: "Global sourcing, export coordination, and industrial buyer support.",
    href: "/#locations",
    sectionId: "locations",
    keywords: ["locations", "global presence", "export coordination"],
  },
  {
    id: "page-contact",
    type: "Page",
    title: "Contact",
    description: "Request a quote or connect with Enreach Global.",
    href: "/#contact",
    sectionId: "contact",
    keywords: ["contact", "request quote", "enquiry"],
  },
  {
    id: "page-blog",
    type: "Page",
    title: "Blog",
    description: "Read industrial scrap market insights and SEO-focused resources.",
    href: "/blog",
    keywords: ["blog", "resources", "market insights"],
  },
];

const founderItem = {
  id: "leadership-founder",
  type: "Leadership",
  title: "Meet Our Founders",
  description:
    "Meet the founders of Enreach Global Inc. and discover their shared vision for trusted global scrap metal trading.",
  href: "/#founder",
  sectionId: "founder",
  keywords: [
    "founders",
    "Kishan Hirpara",
    "Biraj Gajera",
    "Calgary",
    "global scrap metal trading",
    "integrity",
    "long-term partnerships",
  ],
};

const trustItem = {
  id: "page-trust",
  type: "Service",
  title: "Why Choose Us",
  description: "Trade execution, buyer alignment, and export-ready coordination.",
  href: "/#trust",
  sectionId: "trust",
  keywords: ["why choose us", "trust", "credibility", "trade coordination"],
};

export const GLOBAL_SEARCH_ITEMS = [
  ...PAGE_ITEMS,
  founderItem,
  trustItem,
  ...SERVICE_OFFERINGS.map((service) => ({
    id: `service-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    type: "Service",
    title: service.title,
    description: service.text,
    href: "/#trust",
    sectionId: "trust",
    keywords: [service.title, service.text, "service", "support"],
  })),
  ...INDUSTRY_FOCUS.map((industry) => ({
    id: `industry-${industry.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    type: "Industry",
    title: industry.title,
    description: industry.text,
    href: "/#trust",
    sectionId: "trust",
    keywords: [industry.title, industry.text, "industry", "buyers"],
  })),
  ...PRODUCT_DETAILS.map((product) => ({
    id: `product-${product.id}`,
    type: "Product",
    title: product.title,
    description: `${product.category}. ${product.description}`,
    href: `/#${product.id}`,
    productId: product.id,
    keywords: [product.category, ...product.highlights, product.description],
  })),
  ...SECONDARY_PRODUCTS.map((product) => ({
    id: `product-${product.id}`,
    type: "Product",
    title: product.title,
    description: `${product.group}. ${product.description}`,
    href: `/#${product.id}`,
    productId: product.id,
    keywords: [product.group, product.description],
  })),
  ...FOUNDERS.map((founder) => ({
    id: `founder-${founder.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    type: "Leadership",
    title: founder.name,
    description: founder.designation,
    href: "/#founder",
    sectionId: "founder",
    keywords: [founder.name, founder.designation, "founder", "leadership"],
  })),
  ...getAllBlogPosts().map((post) => ({
    id: `blog-${post.slug}`,
    type: "Blog",
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    keywords: [post.category, post.excerpt, ...post.keywords],
  })),
];

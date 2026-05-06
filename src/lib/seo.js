import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_LOGO,
  COMPANY_PHONE,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  buildCanonicalUrl,
  buildImageUrl,
} from "@/lib/site";

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} industrial scrap trading`,
  type = "website",
  noIndex = false,
}) {
  const canonical = buildCanonicalUrl(path);

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: buildCanonicalUrl("/"),
    logo: buildImageUrl(COMPANY_LOGO),
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    address: {
      "@type": "PostalAddress",
      addressCountry: COMPANY_LOCATION,
    },
    areaServed: "Worldwide",
    knowsAbout: DEFAULT_KEYWORDS,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: buildCanonicalUrl("/"),
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: buildImageUrl(COMPANY_LOGO),
      },
    },
    inLanguage: "en",
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: buildImageUrl(DEFAULT_OG_IMAGE),
    url: buildCanonicalUrl("/"),
    logo: buildImageUrl(COMPANY_LOGO),
    email: COMPANY_EMAIL,
    telephone: COMPANY_PHONE,
    address: {
      "@type": "PostalAddress",
      addressCountry: COMPANY_LOCATION,
    },
    areaServed: "Worldwide",
    description: SITE_DESCRIPTION,
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.path),
    })),
  };
}

export function buildWebPageSchema({
  title,
  description,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: buildCanonicalUrl(path),
    inLanguage: "en",
    keywords: keywords.join(", "),
    isPartOf: buildCanonicalUrl("/"),
  };
}

export function buildCollectionPageSchema({
  title,
  description,
  path,
  about,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: buildCanonicalUrl(path),
    about,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: buildCanonicalUrl("/"),
    },
  };
}

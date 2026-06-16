export const SITE_NAME = "Enreach Global";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enreachglobal.com";
export const SITE_DESCRIPTION =
  "Enreach Global is a premium metal scrap trading company specializing in aluminium, copper, and brass supply for industrial buyers worldwide.";
export const DEFAULT_OG_IMAGE = "/hero3.jpg";
export const COMPANY_LOGO = "/logo.svg";
export const COMPANY_EMAIL = "info@enreachglobal.com";
export const COMPANY_PHONE = "+1 4034087454";
export const COMPANY_LOCATION = "Canada";
export const DEFAULT_KEYWORDS = [
  "metal scrap trading",
  "aluminium scrap supplier",
  "copper scrap trading",
  "brass scrap exporter",
  "industrial scrap buyer",
  "industrial metal trading",
  "bulk scrap export",
  "global scrap sourcing",
];

export function buildCanonicalUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildImageUrl(path = DEFAULT_OG_IMAGE) {
  return new URL(path, SITE_URL).toString();
}

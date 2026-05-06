export const SITE_NAME = "Enreach Global";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enreachglobal.com";
export const DEFAULT_OG_IMAGE = "/hero3.jpg";

export function buildCanonicalUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enreach Global | Premium Metal Scrap Trading",
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  description:
    "Enreach Global is a premium metal scrap trading company specializing in aluminium, copper, and brass supply for industrial buyers worldwide.",
  keywords: [
    "metal scrap trading",
    "aluminium scrap supplier",
    "copper scrap trading",
    "brass scrap exporter",
    "industrial scrap buyer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enreach Global | Premium Metal Scrap Trading",
    description:
      "Enreach Global is a premium metal scrap trading company specializing in aluminium, copper, and brass supply for industrial buyers worldwide.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Enreach Global premium metal scrap trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enreach Global | Premium Metal Scrap Trading",
    description:
      "Enreach Global is a premium metal scrap trading company specializing in aluminium, copper, and brass supply for industrial buyers worldwide.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-950">
        {children}
      </body>
    </html>
  );
}

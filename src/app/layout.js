import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

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
  description: SITE_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  category: "Industrial metal scrap trading",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enreach Global | Premium Metal Scrap Trading",
    description: SITE_DESCRIPTION,
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
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  const globalStructuredData = [
    buildOrganizationSchema(),
    buildWebsiteSchema(),
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-950">
        {globalStructuredData.map((schema, index) => (
          <script
            key={`${schema["@type"]}-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}

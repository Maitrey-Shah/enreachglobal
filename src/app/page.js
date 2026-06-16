import HomePageClient from "@/components/HomePageClient";
import {
  CERTIFICATIONS,
  FOUNDERS,
} from "@/data/companyProfile";
import {
  buildCertificationSchemas,
  buildLocalBusinessSchema,
  buildPageMetadata,
  buildPersonSchema,
  buildWebPageSchema,
} from "@/lib/seo";

const homeTitle = "Industrial Metal Scrap Trading Company";
const homeDescription =
  "Enreach Global supplies aluminium scrap, copper scrap, and brass scrap for industrial buyers with disciplined sourcing, export coordination, and commercial clarity.";
const homeKeywords = [
  "industrial metal scrap trading company",
  "aluminium scrap supplier",
  "copper scrap exporters",
  "brass scrap recycling supplier",
  "bulk scrap export",
  "industrial metal trading",
  "global scrap sourcing",
  "scrap trading company canada",
];

export const metadata = buildPageMetadata({
  title: homeTitle,
  description: homeDescription,
  keywords: homeKeywords,
  path: "/",
});

export default function HomePage() {
  const structuredData = [
    buildLocalBusinessSchema(),
    ...FOUNDERS.map((founder) =>
      buildPersonSchema({
        name: founder.name,
        jobTitle: founder.designation,
        description: founder.story,
        sameAs: [founder.linkedin],
        email: founder.email.replace("mailto:", ""),
        knowsAbout: founder.expertise,
      })
    ),
    buildWebPageSchema({
      title: homeTitle,
      description: homeDescription,
      path: "/",
      keywords: homeKeywords,
    }),
    ...buildCertificationSchemas(CERTIFICATIONS),
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <HomePageClient />
    </>
  );
}

import { COMPANY_EMAIL } from "@/lib/site";

export const COMPANY_LINKEDIN_URL =
  process.env.NEXT_PUBLIC_COMPANY_LINKEDIN_URL ||
  "https://www.linkedin.com/company/company-linkedin-url";

export const FOUNDER_LINKEDIN_URL =
  process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN_URL ||
  "https://www.linkedin.com/in/founder-linkedin-url";

export const FOUNDERS = [
  {
    name: "Kishan Hirpara",
    designation: "Founder",
    linkedin: FOUNDER_LINKEDIN_URL,
    email: `mailto:${COMPANY_EMAIL}`,
    story:
      "Kishan Hirpara is a Founder of Enreach Global Inc. with a Master's degree in Chemical Engineering from the University of Calgary and over five years of professional experience in metal recycling, logistics, and international trade.",
    expertise: [
      "Global scrap metal trading",
      "Supplier relationships",
      "International buyer partnerships",
    ],
  },
  {
    name: "Biraj Gajera",
    designation: "Founder",
    linkedin: FOUNDER_LINKEDIN_URL,
    email: `mailto:${COMPANY_EMAIL}`,
    story:
      "Biraj Gajera is a Founder of Enreach Global Inc. with a Bachelor's degree in Information Systems and Business Management from SAIT and over seven years of experience in sales, operations, and business development.",
    expertise: [
      "Trade execution",
      "Commercial partnerships",
      "International scrap logistics",
    ],
  },
];

export const FOUNDER_PROFILE = FOUNDERS[0];

export const TEAM_MEMBERS = [
  {
    name: "Team Member 01",
    designation: "Trade Operations Lead",
    image: "/hero2.jpg",
    linkedin: COMPANY_LINKEDIN_URL,
  },
  {
    name: "Team Member 02",
    designation: "Commercial Partnerships Manager",
    image: "/hero3.jpg",
    linkedin: COMPANY_LINKEDIN_URL,
  },
  {
    name: "Team Member 03",
    designation: "Export Documentation Specialist",
    image: "/hero1.png",
    linkedin: COMPANY_LINKEDIN_URL,
  },
  {
    name: "Team Member 04",
    designation: "Material Quality & Grading Coordinator",
    image: "/hero2.jpg",
    linkedin: COMPANY_LINKEDIN_URL,
  },
];

export const CERTIFICATIONS = [
  {
    id: "iso-certification-placeholder",
    title: "ISO Certification Placeholder",
    image: "/hero2.jpg",
    description:
      "Reserved for the client-provided ISO certification or equivalent quality management credential.",
  },
  {
    id: "export-compliance-placeholder",
    title: "Export Certification Placeholder",
    image: "/hero3.jpg",
    description:
      "Reserved for the client-provided export compliance, registration, or documentation credential.",
  },
  {
    id: "industry-membership-placeholder",
    title: "Industry Membership Placeholder",
    image: "/hero1.png",
    description:
      "Reserved for approved industry membership badges, association credentials, or trade body recognition.",
  },
  {
    id: "quality-standards-placeholder",
    title: "Quality Standards Placeholder",
    image: "/logo.svg",
    description:
      "Reserved for government registrations, grading standards, or client-approved compliance documentation.",
  },
];

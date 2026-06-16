export const SECTION_IDS = ["home", "about", "products", "locations", "contact"];

export const HERO_IMAGES = ["/hero1.png", "/hero2.jpg", "/hero3.jpg"];

export const PRODUCT_DETAILS = [
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

export const SECONDARY_PRODUCTS = [
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

export const LOCATION_CARDS = [
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

export const CONTACT_FEATURES = [
  "Aluminium, Copper, Brass supply",
  "Global sourcing support",
  "Fast quotation & shipment coordination",
];

export const CONTACT_FORM_TYPES = [
  { id: "buyer", label: "Buyer" },
  { id: "seller", label: "Seller" },
  { id: "enterprise", label: "Enterprise" },
];

export const CONTACT_FORM_FIELDS = {
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

export const ABOUT_STATS = [
  ["12+", "Active trade relationships"],
  ["3", "Core metal categories"],
  ["Global", "Sourcing and buyer network"],
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Disciplined Material Grading",
    text: "We focus on clearer sorting, practical quality expectations, and commercially accurate scrap category alignment.",
  },
  {
    title: "Export-Ready Coordination",
    text: "Documentation, shipment planning, and buyer communication are handled with the consistency industrial trade demands.",
  },
  {
    title: "Responsive Commercial Support",
    text: "We help buyers and suppliers move from enquiry to execution with faster quoting and clearer deal communication.",
  },
];

export const COMPANY_STATISTICS = [
  {
    value: "12+",
    label: "Trade relationships supported",
  },
  {
    value: "3",
    label: "Core metal categories managed",
  },
  {
    value: "Global",
    label: "Sourcing and buyer market reach",
  },
  {
    value: "End-to-End",
    label: "Coordination from enquiry to shipment",
  },
];

export const INDUSTRY_EXPERTISE = [
  "Secondary Metal Manufacturers",
  "Refineries & Smelters",
  "Foundries & Engineering Buyers",
  "Scrap Processors",
  "Export-Focused Industrial Traders",
];

export const GLOBAL_PRESENCE_INDICATORS = [
  "North America trade coordination",
  "Cross-border documentation support",
  "Industrial buyer sourcing alignment",
];

export const SERVICE_OFFERINGS = [
  {
    title: "Global Scrap Sourcing",
    text: "Material sourcing support across aluminium, copper, and brass categories.",
  },
  {
    title: "Export Documentation",
    text: "Shipment paperwork and compliance coordination built for cross-border industrial trade.",
  },
  {
    title: "Industrial Buyer Matching",
    text: "Commercial alignment between feedstock quality and downstream manufacturing requirements.",
  },
];

export const INDUSTRY_FOCUS = [
  {
    title: "Refineries & Smelters",
    text: "Buyers seeking dependable bulk scrap inputs with clearer sorting expectations.",
  },
  {
    title: "Recycling Processors",
    text: "Processors focused on recovery efficiency and lower contamination risk.",
  },
  {
    title: "Engineering Manufacturers",
    text: "Manufacturers sourcing copper and brass scrap for controlled secondary production.",
  },
];

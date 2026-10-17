export const metadata = {
  title: "Export Logistics & Cold Chain Shipping Services",
  description:
    "Comprehensive agricultural export logistics from Gujarat, India. Temperature-controlled reefer containers, APEDA packaging, and expedited sea/air freight to global ports.",
  keywords: [
    "Export logistics India",
    "Cold chain shipping Gujarat",
    "Reefer container fruit export",
    "Vegetable export packaging",
    "Mundra port export dispatch",
    "Fidox shipping"
  ],
  alternates: {
    canonical: "https://www.fidoxinternational.com/shipping",
  },
  openGraph: {
    title: "Export Logistics & Cold Chain Shipping Services | Fidox",
    description:
      "Comprehensive agricultural export logistics from Gujarat, India. Reefer containers and expedited freight.",
    url: "https://www.fidoxinternational.com/shipping",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fidox Export Logistics and Cold Chain Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Logistics & Cold Chain Shipping Services | Fidox",
    description:
      "Comprehensive agricultural export logistics from Gujarat, India. Temperature-controlled reefer containers and global freight.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ShippingLayout({ children }) {
  return children;
}

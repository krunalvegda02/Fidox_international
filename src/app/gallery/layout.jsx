export const metadata = {
  title: "Export Operations & Facility Gallery",
  description:
    "View Fidox's on-site export facility, cold storage terminals, farm packhouses, and container loading operations in Gujarat, India.",
  keywords: [
    "Export facility Gujarat",
    "Packhouse images India",
    "Container loading gallery",
    "Fidox operations",
    "Agricultural export warehouse"
  ],
  alternates: {
    canonical: "https://www.fidoxinternational.com/gallery",
  },
  openGraph: {
    title: "Export Operations & Facility Gallery | Fidox",
    description:
      "View Fidox's on-site export facility, cold storage terminals, and container loading operations in Gujarat, India.",
    url: "https://www.fidoxinternational.com/gallery",
    siteName: "Fidox",
    images: [
      {
        url: "https://www.fidoxinternational.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fidox Export Operations & Facility Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Operations & Facility Gallery | Fidox",
    description:
      "View Fidox's on-site export facility, cold storage terminals, and container loading operations in Gujarat, India.",
    images: ["https://www.fidoxinternational.com/images/og-image.jpg"],
  },
};

export default function GalleryLayout({ children }) {
  return children;
}

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and international data security standards for Fidox International agricultural trade partners.",
  alternates: {
    canonical: "https://www.fidoxinternational.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Fidox",
    description:
      "Privacy Policy and international data security standards for Fidox International agricultural trade partners.",
    url: "https://www.fidoxinternational.com/privacy",
    siteName: "Fidox",
    images: [
      {
        url: "https://www.fidoxinternational.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fidox International Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Fidox",
    description:
      "Privacy Policy and international data security standards for Fidox International agricultural trade partners.",
    images: ["https://www.fidoxinternational.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }) {
  return children;
}

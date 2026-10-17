export const metadata = {
  title: "Terms of Service & Trade Agreements",
  description:
    "Standard international merchant trade terms, Incoterms (FOB, CIF, CFR), and product specifications for Fidox International.",
  alternates: {
    canonical: "https://www.fidoxinternational.com/terms",
  },
  openGraph: {
    title: "Terms of Service & Trade Agreements | Fidox",
    description:
      "Standard international merchant trade terms, Incoterms (FOB, CIF, CFR), and product specifications for Fidox International.",
    url: "https://www.fidoxinternational.com/terms",
    siteName: "Fidox",
    images: [
      {
        url: "https://www.fidoxinternational.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fidox International Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Trade Agreements | Fidox",
    description:
      "Standard international merchant trade terms, Incoterms (FOB, CIF, CFR), and product specifications for Fidox International.",
    images: ["https://www.fidoxinternational.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }) {
  return children;
}

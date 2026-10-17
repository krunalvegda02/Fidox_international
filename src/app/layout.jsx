import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "../styles/global.css";
import clsx from "clsx";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.fidoxinternational.com"),
  title: {
    default: "Fidox | Leading Export Company in India | Fruits, Spices & Agricultural Products Exporter",
    template: "%s | Fidox",
  },
  description:
    "Fidox is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
  keywords: [
    "Fidox",
    "Export company in India",
    "Exporter in India",
    "Fruits exporter",
    "Indian spices exporter",
    "Fruits supplier",
    "Pomegranate exporter",
    "Banana supplier",
    "Agriculture products exporter",
    "Merchant exporter",
    "Onion exporter India",
    "Food exporter",
    "Mango exporter",
    "Green chilli exporter",
    "Export company in Gujarat",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fidoxinternational.com",
    siteName: "Fidox",
    title: "Fidox | Leading Export Company in India | Fruits, Spices & Agricultural Products Exporter",
    description:
      "Fidox is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fidox - Leading Export Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidox | Leading Export Company in India | Fruits, Spices & Agricultural Products Exporter",
    description:
      "Fidox is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
    images: ["/images/og-image.jpg"],
    creator: "@mitrayexim",
    site: "@mitrayexim",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.fidoxinternational.com/#organization",
        "name": "Fidox",
        "legalName": "Fidox International",
        "alternateName": ["Fidox", "Fidox International", "Fidox Export India"],
        "url": "https://www.fidoxinternational.com",
        "logo": "https://www.fidoxinternational.com/newLogo.png",
        "description":
          "Fidox is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91 7778886559",
            "contactType": "sales",
            "email": "info@fidoxinternational.com",
            "areaServed": ["IN", "AE", "SA", "QA", "OM", "KW", "US", "GB", "NL", "DE", "SG", "MY"],
            "availableLanguage": ["English", "Hindi", "Gujarati"],
          },
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No 57, Ground Floor, R.S. No 21 Main Road, Lakhabaval",
          "addressLocality": "Jamnagar",
          "addressRegion": "Gujarat",
          "postalCode": "361006",
          "addressCountry": "IN",
        },
        "sameAs": [
          "https://www.linkedin.com/in/mitray-exim-1a894b3b3",
          "https://www.instagram.com/mitrayexim",
          "https://x.com/MitrayExim",
        ],
        "knowsAbout": [
          "Fidox",
          "Export company in India",
          "Exporter in India",
          "Fruits exporter",
          "Indian spices exporter",
          "Fruits supplier",
          "Pomegranate exporter",
          "Banana supplier",
          "Agriculture products exporter",
          "Merchant exporter",
          "Onion exporter India",
          "Food exporter",
          "Mango exporter",
          "Green chilli exporter",
          "Export company in Gujarat",
        ],
      },
      {
        "@type": ["LocalBusiness", "WholesaleStore"],
        "@id": "https://www.fidoxinternational.com/#localbusiness",
        "name": "Fidox - Leading Export Company in India",
        "url": "https://www.fidoxinternational.com",
        "image": "https://www.fidoxinternational.com/images/og-image.jpg",
        "telephone": "+91 7778886559",
        "email": "info@fidoxinternational.com",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No 57, Ground Floor, R.S. No 21 Main Road, Lakhabaval",
          "addressLocality": "Jamnagar",
          "addressRegion": "Gujarat",
          "postalCode": "361006",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.4707",
          "longitude": "70.0577",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00",
          },
        ],
        "areaServed": [
          "Worldwide",
          "India",
          "United Arab Emirates",
          "Saudi Arabia",
          "Qatar",
          "Oman",
          "Kuwait",
          "United Kingdom",
          "United States",
          "European Union",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.fidoxinternational.com/#website",
        "url": "https://www.fidoxinternational.com",
        "name": "Fidox International",
        "publisher": {
          "@id": "https://www.fidoxinternational.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.fidoxinternational.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which countries does Fidox export fruits, spices, and agricultural products to?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fidox exports fresh fruits, spices, onions, and agricultural products across core global trade corridors including UAE, Saudi Arabia, Qatar, Oman, Kuwait, the United Kingdom, USA, and European markets."
            }
          },
          {
            "@type": "Question",
            "name": "What certifications does Fidox hold as an export company in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fidox maintains strict compliance with APEDA, FSSAI, IEC, FIEO, and Spices Board of India standards, with complete phytosanitary and SGS quality inspections."
            }
          },
          {
            "@type": "Question",
            "name": "What export varieties of fruits and vegetables are supplied by Fidox?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fidox specializes as a pomegranate exporter (Bhagwa variety), banana supplier (Grand Naine G9), mango exporter (Gir Kesar and Alphonso), onion exporter (Nashik Red and Pink), and fresh green chilli exporter (G4 and Teja)."
            }
          },
          {
            "@type": "Question",
            "name": "Which ports in Gujarat are used for export shipments by Fidox?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fidox operates primarily through Gujarat's top deep-water ports including Mundra Port, Kandla (Deendayal) Port, and Pipavav Port for swift reefer and container vessel dispatch."
            }
          }
        ]
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Cloudinary to eliminate 300ms DNS/TCP/TLS handshake delay for images */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={clsx(inter.variable, outfit.variable, 'min-h-screen', 'flex', 'flex-col', 'bg-white', 'antialiased', 'text-slate-900', 'font-inter', 'selection:bg-brand-gold', 'selection:text-brand-navy')}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* UNIFIED NAVIGATION SYSTEM */}
        <Header />

        <main id="main-content" className={clsx('flex-1', 'relative')}>
          {/* SMOOTH SECTION TRANSITION MASK */}
          <div className={clsx('absolute', 'top-0', 'left-0', 'w-full', 'h-32', 'bg-gradient-to-b', 'from-white', 'to-transparent', 'pointer-events-none', 'z-10')}></div>

          {children}
        </main>

        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}

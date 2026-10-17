"use client";

import { Container } from "@/components/shared/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";

export function FeaturedProducts() {
  // Let's pick the specific products seen in the screenshot, or just the first 3
  // Pomegranate (Bhagwa Variety) - slug: pomegranate
  // Premium Red Chilli Powder - slug: red-chilli-powder
  // 1121 Basmati Rice (XXL Grain) - slug: 1121-basmati-rice
  const featuredSlugs = ['pomegranate', 'red-chilli-powder', '1121-basmati-rice'];
  const featured = PRODUCTS.filter(p => featuredSlugs.includes(p.slug));

  // If for some reason they don't match, fallback to first 3
  const displayProducts = featured.length === 3 ? featured : PRODUCTS.slice(0, 3);

  return (
    <div className="py-20 md:py-32 relative bg-white overflow-hidden" id="products">
      <Container>
        <div className="text-center mb-16 relative">
          <h2 className="text-6xl md:text-[10rem] font-black text-brand-gold/90 uppercase tracking-tighter leading-none select-none">
            PRODUCTS.
          </h2>
          <div className="relative -mt-6 md:-mt-12 z-10 max-w-2xl mx-auto">
            <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
              DISCOVER A CURATED SELECTION OF INDIA'S FINEST VEGETABLES, FRESH FRUITS, AND HIGH-QUALITY SPICES, PREPARED FOR GLOBAL DELIVERY.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {displayProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/products">
            <button className="group relative px-8 py-4 bg-brand-navy rounded-xl text-white font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-500 flex items-center gap-3">
              EXPLORE FULL EXPORT CATALOG <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

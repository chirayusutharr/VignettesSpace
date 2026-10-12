
"use client";

import products from "../data/product.json";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
};

type ProductCardProps = {
  productId: number;
};

export default function ProductCard({ productId }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  const product = products.find((item) => item.id === productId);
  const whatsappNumber = "916367816145";

  if (!product) return null;

  const message = encodeURIComponent(
    `Hi, I'm interested in ${product.name}.`
  );

  return (
    <article className="w-full overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_12px_40px_rgba(41,61,50,0.10)] transition-shadow hover:shadow-[0_16px_48px_rgba(41,61,50,0.15)] sm:p-4">
      {/* Product image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-[#EFEEEC]">
        {/* Price and category */}
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#293D32] px-4 py-2.5 text-sm text-white">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="rounded-full bg-white/90 px-4 py-2.5 text-sm text-[#293D32]">
            {product.category}
          </span>
        </div>

        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product details and actions */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg text-[#293D32]">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-[#62675E]">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {/* Like button */}
          <button
            type="button"
            onClick={() => setLiked((previous) => !previous)}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={liked}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0EFED] transition hover:bg-[#E6E4DE]"
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-6 w-6 ${liked
                  ? "fill-[#A77B51] stroke-[#A77B51]"
                  : "fill-none stroke-[#293D32]"
                }`}
              strokeWidth="1.7"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
          </button>

          {/* WhatsApp enquiry */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#293D32] text-white transition hover:bg-[#3B5547]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-none stroke-current"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
              <path d="M8.5 8.5c.5 2.5 2.5 4.5 5 5l1.2-1.2 2 1c-.2 1.3-1.2 2-2.5 2-3.5-.5-6.5-3.5-7-7 0-1.3.7-2.3 2-2.5l1 2-1.7 1.7Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

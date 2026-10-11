
"use client";

import { useState } from "react";

export default function ProductCard() {
  const [liked, setLiked] = useState(false);

  return (
    <article className="w-full max-w-[440px] rounded-[30px] bg-white p-4 shadow-[0_12px_40px_rgba(41,61,50,0.10)] sm:p-5">
      {/* Product image and badges */}
      <div className="relative overflow-hidden rounded-[22px] bg-[#EFEEEC]">
        <div className="absolute left-3 top-3 z-10 flex gap-2">
          <span className="rounded-2xl bg-[#293D32] px-4 py-3 text-sm text-white">
            3,999/-
          </span>
          <span className="rounded-2xl bg-white/90 px-4 py-3 text-sm text-[#293D32]">
            Oak
          </span>
        </div>

        <img
          src="https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/original/JtstbWTS4L-FannyFloorLamp.jpg"
          alt="Minimal wooden designer chair"
          className="h-[320px] w-full object-contain p-5 sm:h-[360px]"
        />
      </div>

      {/* Dimensions, rating and actions */}
      <div className="mt-3 grid grid-cols-[1.5fr_0.7fr_0.8fr_0.8fr] gap-2">
        <div className="flex flex-col justify-center rounded-2xl bg-[#F5F4F1] px-3 py-3">
          <span className="text-xs tracking-[0.2em] text-[#8A8A7F]">
            W&nbsp;&nbsp; H&nbsp;&nbsp; D
          </span>
          <span className="mt-1 whitespace-nowrap text-sm font-medium text-[#293D32]">
            58 × 79 × 60
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F5F4F1] p-2">
          <span className="text-lg text-[#C69A45]">★</span>
          <span className="text-sm font-medium text-[#293D32]">4.9</span>
        </div>

        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="flex items-center justify-center rounded-2xl bg-[#F0EFED] transition hover:bg-[#E6E4DE]"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-7 w-7 ${liked ? "fill-[#A77B51] stroke-[#A77B51]" : "fill-none stroke-[#293D32]"}`}
            strokeWidth="1.7"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="View product"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center justify-center rounded-2xl bg-[#F0EFED] text-[#293D32] transition hover:bg-[#E6E4DE]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-none stroke-current"
            strokeWidth="1.6"
          >
            <path d="M5 8h14l1 13H4L5 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            <circle cx="9" cy="13" r=".7" fill="currentColor" />
            <circle cx="15" cy="13" r=".7" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Product name and price */}
      
    </article>
  );
}

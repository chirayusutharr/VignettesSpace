
import ProductCard from "./ProductCard";

export default function ProductSection() {
    return (
        <section
            id="products"
            className="relative overflow-hidden bg-[#F8F7F3] py-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
                {/* Left: Section heading */}
                <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#A77B51]">
                        Curated Collection
                    </p>

                    <h2 className="font-serif text-3xl leading-tight text-[#293D32] sm:text-4xl lg:text-5xl">
                        Thoughtful Pieces for Your Space
                    </h2>

                    <p className="mt-5 max-w-md text-sm leading-7 text-[#62675E] sm:text-base">
                        Discover carefully selected pieces that bring character,
                        warmth, and timeless design into your home.
                    </p>
                </div>
                
                

                {/* Right: Product card */}
                <div className="relative w-[980px] overflow-hidden">
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-50"
                        style={{
                            background:
                                "linear-gradient(to left, transparent, #f8f7f36c 80%)",
                        }}
                    />
                    
                    <div className="flex items-center gap-8 overflow-x-auto py-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {/* Product Card 1 — fully visible */}
                        <div className="w-full max-w-[360px] shrink-0">
                            <ProductCard productId={4} />
                        </div>

                        {/* Product Card 2 — partially visible */}
                        <div className="w-[360px] shrink-0">
                            <ProductCard productId={2} />
                        </div>
                        <div className="w-full max-w-[360px] shrink-0">
                            <ProductCard productId={3} />
                        </div>
                        
                    </div>

                    {/* Fade the second card toward the right edge */}
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-50"
                        style={{
                            background:
                                "linear-gradient(to right, transparent, #f8f7f3 90%)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

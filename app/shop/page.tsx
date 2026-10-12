
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/product.json";

export default function ShopPage() {
  return (

    <main>
     <Navbar />
    <div className="min-h-screen bg-[#F8F7F3] px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-12" >
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A77B51]">
            The Vignettes Collection
          </p>

          <h1 className="font-serif text-4xl text-[#293D32] sm:text-5xl lg:text-6xl">
            Shop All Pieces
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#62675E] sm:text-base">
            Thoughtfully selected pieces to bring character,
            warmth, and timeless design into your space.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#A77B51]" />

          <p className="mt-5 text-xs tracking-widest text-[#62675E]">
            {products.length} PIECES
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="shop-card-enter min-w-0"
              style={{
                animationDelay: `${Math.min(index * 100, 900)}ms`,
              }}
            >
              <ProductCard productId={product.id} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {products.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-[#293D32]">
              New pieces are coming soon.
            </p>
            <p className="mt-3 text-sm text-[#62675E]">
              Please check back later.
            </p>
          </div>
        )}
      </div>
      </div>
    </main>
  );
}

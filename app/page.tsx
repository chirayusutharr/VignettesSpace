import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import ProductCard from "./components/ProductCard";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero3D />

        <section
          id="products"
          className="bg-[#E8E4D7] px-6 py-20 sm:px-10 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Section heading */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A77B51]">
                The curated collection
              </p>

              <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#293D32] sm:text-5xl">
                Thoughtful pieces.
                <br />
                Timeless living.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[#62675E]">
                Discover furniture chosen for its craftsmanship, natural
                materials, and ability to make a space feel like home.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex border-b border-[#A77B51] pb-2 text-sm uppercase tracking-[0.15em] text-[#293D32] transition hover:text-[#A77B51]"
              >
                Enquire about this piece →
              </a>
            </div>

            {/* Product card */}
            <div className="flex justify-center md:justify-end">
              <ProductCard />
            </div>
          </div>
        </section>


        {/* Keep your other sections here */}
      </main>


    </>
  );
}
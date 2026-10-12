import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import ProductCard from "./components/ProductCard";
import DesignJournal from "./components/DesignJournal";
import Footer from "./components/Footer";
import products from "./data/product.json";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero3D />

        <ProductSection />
        <DesignJournal />


        {/* Keep your other sections here */}
        <Footer />
      </main>


    </>
  );
}
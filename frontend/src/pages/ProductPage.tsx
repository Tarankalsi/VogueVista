import { useState, useEffect } from "react";
import Footer from "../components/general/Footer";
import Navbar from "../components/general/Navbar";
import Gallery from "../components/ProductPage/Gallery";
import GalleryCarousel from "../components/ProductPage/GalleryCarousel";
import ProductDetails from "../components/ProductPage/ProductDetails";

export default function ProductPage() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1025);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const product = {
    name: "Vintage Button Down white",
    offers: ["Buy 2 Get 10% Off | Code : SUM10", "Buy 5 Get 20% Off | Code: SUM20"],
    stock: 4,
    description:
      "This white button down shirt features a regular fit that flatters all body shapes. The broad collar adds a touch of class and professionalism to your look. Versatile enough for work, parties, or everyday wear. Upgrade your wardrobe with this timeless piece.",
    price: 2199,
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="mt-20 sm:mt-12">
      <Navbar hover={false} fixed={true} />
      </div>
     

      <div className="lg:pt-24 mb-8 grid grid-cols-1 lg:grid-cols-8 gap-4">
        {isMobileView && <GalleryCarousel />}
        {!isMobileView && (
          <div className="lg:col-span-5 w-full flex justify-center">
            <Gallery />
          </div>
        )}
        <div className="lg:col-span-3 mx-10">
          <ProductDetails product={product} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

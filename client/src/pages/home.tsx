import { useEffect } from "react";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import CharactersSection from "@/components/home/characters-section";
import GallerySection from "@/components/home/gallery-section";
import VideosSection from "@/components/home/videos-section";
import BehindScenesSection from "@/components/home/behind-scenes-section";
import FAQSection from "@/components/home/faq-section";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "@/App.css";

const Home = () => {
  useEffect(() => {
    // Set document title
    document.title = "Amaran - Official Fan Website";

    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Welcome to the official fan website for the gripping action war film Amaran. Learn about the real-life heroes, delve into the intense story, browse the gallery and videos, and get exclusive behind-the-scenes access.";
    document.head.appendChild(metaDescription);

    // Add website logo (favicon)
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = "/logo.svg"; // Adjust this path as needed
    document.head.appendChild(faviconLink);

    // Clean up the meta tags when component unmounts
    return () => {
      // Clean up the meta description
      const existingMetaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (existingMetaDescription) {
        existingMetaDescription.remove();
      }

      // Clean up the favicon
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        existingFavicon.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col select-none">
      <Header />

      <main className="select-none">
        <HeroSection />
        <AboutSection />
        <CharactersSection />
        <GallerySection />
        <VideosSection />
        <BehindScenesSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

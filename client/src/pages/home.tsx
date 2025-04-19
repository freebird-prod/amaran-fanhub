import { useEffect } from "react";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import CharactersSection from "@/components/home/characters-section";
import GallerySection from "@/components/home/gallery-section";
import VideosSection from "@/components/home/videos-section";
import BehindScenesSection from "@/components/home/behind-scenes-section";
import TimelineSection from "@/components/home/timeline-section";
import FAQSection from "@/components/home/faq-section";
import NewsSection from "@/components/home/news-section";
import ContactSection from "@/components/home/contact-section";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Home = () => {
  useEffect(() => {
    // Set document title
    document.title = "Ämaran - Official Fan Website";
    
    // Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Official fan website for the epic sci-fi adventure film Ämaran. Explore characters, gallery, videos, and behind-the-scenes content.";
    document.head.appendChild(metaDescription);
    
    return () => {
      // Clean up the meta tag when component unmounts
      const existingMeta = document.querySelector('meta[name="description"]');
      if (existingMeta) {
        existingMeta.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <CharactersSection />
        <TimelineSection />
        <GallerySection />
        <VideosSection />
        <BehindScenesSection />
        <FAQSection />
        <NewsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOVIE_INFO } from "@/lib/constants";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 46, 0.7), rgba(18, 18, 18, 0.9)), url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center pt-28 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-accent animate-pulse"
        >
          {MOVIE_INFO.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/90 text-shadow"
        >
          {MOVIE_INFO.tagline} Experience the adventure that critics are calling "the cinematic event of the year."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            size="lg" 
            variant="destructive"
            className="bg-secondary hover:bg-secondary/80 text-foreground px-8 py-7"
            onClick={() => scrollToSection("#about")}
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-muted hover:bg-muted/80 text-foreground border border-secondary/50 px-8 py-7"
            onClick={() => scrollToSection("#videos")}
          >
            Watch Trailer
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-12"
        >
          <a 
            href="#about" 
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
          >
            <ChevronDown className="mx-auto text-accent/80 hover:text-accent w-8 h-8 transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

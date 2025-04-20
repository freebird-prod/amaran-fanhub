import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
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
      className="h-screen flex items-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 70, 0.3), rgba(10, 15, 35, 0.97)), url('https://assets-in.bmscdn.com/discovery-catalog/events/et00388085-reywyxjhxn-landscape.jpg')`
      }}
    >
      {/* Animated stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 0.6 + 0.1
            }}
            animate={{
              opacity: [null, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center pt-28 md:pt-0 relative z-10 flex flex-col justify-center min-h-[90vh]">
        <motion.div
          className="flex items-center justify-center gap-1 sm:gap-2 mb-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Star className="text-accent w-4 sm:w-6 h-4 sm:h-6" fill="currentColor" />
          <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-white">In Theaters October 31, 2024</p>
          <Star className="text-accent w-4 sm:w-6 h-4 sm:h-6" fill="currentColor" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-accent animate-glow tracking-wider"
        >
          {MOVIE_INFO.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-2 text-foreground/90 text-shadow"
        >
          {MOVIE_INFO.tagline}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8 text-foreground/70"
        >
         "Don't miss the adventure critics are hailing as 'the cinematic event of the year!'"
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-6 sm:mb-10 flex justify-center items-center gap-2 sm:gap-4"
        >
          <div className="flex gap-1 sm:gap-2 items-center">
            <Star className="text-accent w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" />
            <Star className="text-accent w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" />
            <Star className="text-accent w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" />
            <Star className="text-accent w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" />
            <Star className="text-accent w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-accent">{MOVIE_INFO.rating}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mx-auto w-full max-w-md sm:max-w-none"
        >
          <Button 
            size="lg" 
            className="bg-background/30 text-foreground font-semibold border border-secondary/50 px-6 sm:px-8 py-6 sm:py-7 backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base"
            onClick={() => scrollToSection("#about")}
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-background/30 text-foreground font-semibold border border-secondary/50 px-6 sm:px-8 py-6 sm:py-7 backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base"
            onClick={() => scrollToSection("#videos")}
          >
            Watch Trailer
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="mt-8 sm:mt-12 flex justify-center"
        >
          <a 
            href="#about" 
            aria-label="Scroll down"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
            className="bg-background/10 hover:bg-background/20 rounded-full p-1 transition-colors duration-300 backdrop-blur-sm"
          >
            <ChevronDown className="text-accent/80 hover:text-accent w-6 sm:w-8 h-6 sm:h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

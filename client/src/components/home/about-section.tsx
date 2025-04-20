import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MOVIE_INFO } from "@/lib/constants";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background select-none">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-accent">About The Film</h2>
            <p className="text-lg mb-6 font-semibold">{MOVIE_INFO.synopsis}</p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Director</h3>
                <p>{MOVIE_INFO.director}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2 gap-2">Writer</h3>
                <p>{MOVIE_INFO.writer}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Runtime</h3>
                <p>{MOVIE_INFO.runtime}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Release Date</h3>
                <p>{MOVIE_INFO.releaseDate}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {MOVIE_INFO.genres.map((genre, idx) => (
                <Badge key={idx} variant="default" className="bg-muted px-3 py-1 rounded text-sm">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="relative border-4 border-accent/30 rounded-md overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLoGX0-mHG864EGj5pfnBUjVEKBTQ40TwT8yoxgNzzLF_Ayr0Bu4P3fSWA4yoQj84-oI7W" 
                alt="Amaran movie poster" 
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-accent/90 text-dark px-4 py-2 rounded font-bold">
                {MOVIE_INFO.rating}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

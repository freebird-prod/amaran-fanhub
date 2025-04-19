import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UNIVERSE_TIMELINE } from "@/lib/constants";

const TimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="timeline" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Universe Timeline
        </motion.h2>

        <motion.p
          className="text-xl text-center max-w-3xl mx-auto mb-16 text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore the key events that shaped the universe of Ämaran, from humanity's first steps beyond Earth to the discovery of ancient secrets among the stars.
        </motion.p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30 z-0"></div>
          
          {/* Timeline events */}
          {UNIVERSE_TIMELINE.map((event, index) => (
            <motion.div 
              key={event.year}
              className={`relative z-10 flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                x: isInView ? 0 : (index % 2 === 0 ? -50 : 50) 
              }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              {/* Content container */}
              <div 
                className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}
              >
                <div className="bg-muted p-6 rounded-lg shadow-lg border border-accent/10 hover:border-accent/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-accent mb-1">{event.year}</h3>
                  <h4 className="text-xl font-semibold mb-3">{event.title}</h4>
                  <p className="text-foreground/80">{event.description}</p>
                </div>
              </div>
              
              {/* Center point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent w-6 h-6 rounded-full border-4 border-background"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
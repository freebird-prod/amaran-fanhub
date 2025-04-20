import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BEHIND_THE_SCENES } from "@/lib/constants";

const BehindScenesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="behind-scenes" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Behind the Scenes of Amaran
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-accent">
            {BEHIND_THE_SCENES.mainContent.title}
          </h3>
          <p className="text-lg mb-6">{BEHIND_THE_SCENES.mainContent.description}</p>
          <blockquote className="border-l-4 border-secondary pl-4 italic mb-6 text-left sm:text-center">
            "{BEHIND_THE_SCENES.mainContent.quote}"
            <footer className="text-foreground/80 not-italic mt-2">
              — {BEHIND_THE_SCENES.mainContent.quoteAuthor}
            </footer>
          </blockquote>
          <p className="text-lg">{BEHIND_THE_SCENES.mainContent.additionalText}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEHIND_THE_SCENES.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              className="bg-muted p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-accent">{aspect.title}</h3>
              <p className="mb-4">{aspect.description}</p>
              <img
                src={aspect.imageUrl}
                alt={aspect.imageAlt}
                className="w-full h-52 object-cover rounded-lg mb-3"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindScenesSection;

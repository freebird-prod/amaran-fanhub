import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CHARACTERS, MOVIE_INFO } from "@/lib/constants";

const CharacterCard = ({ character, index }: { character: typeof CHARACTERS[0]; index: number }) => {
  return (
    <motion.div 
      className="character-card group perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative h-full transform-style-3d transition-transform duration-800 group-hover:[transform:rotateY(180deg)]">
        {/* Card Front */}
        <div className="card-front absolute inset-0 backface-hidden bg-muted rounded-lg shadow-xl overflow-hidden">
          <img 
            src={character.imageUrl} 
            alt={character.name} 
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-accent">{character.name}</h3>
            <p className="text-sm text-secondary mb-2">{character.role}</p>
            <p className="text-foreground/80">{character.shortDescription}</p>
          </div>
        </div>

        {/* Card Back */}
        <div className="card-back absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-muted rounded-lg shadow-xl overflow-hidden h-full p-6">
          <h3 className="text-2xl font-bold mb-4 text-accent">{character.name}</h3>
          <p className="mb-4">{character.fullDescription}</p>
          <div className="mb-4">
            <h4 className="text-sm text-secondary mb-1">Strengths</h4>
            <p>{character.strengths}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-sm text-secondary mb-1">Weaknesses</h4>
            <p>{character.weaknesses}</p>
          </div>
          <div>
            <h4 className="text-sm text-secondary mb-1">Portrayed By</h4>
            <p>{character.actor}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CharactersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="characters" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-primary to-background relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('https://images.unsplash.com/photo-1598313183973-4effcded8d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[url('https://images.unsplash.com/photo-1598313183973-4effcded8d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover opacity-10 transform rotate-180"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            The Cast of Ämaran
          </h2>
          <p className="text-lg text-foreground/80">
            Meet the extraordinary characters who bring this epic space adventure to life. 
            Hover over the cards to discover more about each character's journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {CHARACTERS.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: CHARACTERS.length * 0.1 }}
        >
          <p className="text-secondary/80 text-lg">
            <span className="text-accent font-semibold">Director:</span> {MOVIE_INFO.director} &nbsp;|&nbsp; 
            <span className="text-accent font-semibold">Writer:</span> {MOVIE_INFO.writer}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersSection;

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CAST } from "../../lib/constants";

const CharacterCard = ({
  character,
  index,
}: {
  character: (typeof CAST)[0];
  index: number;
}) => {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-xl perspective select-none"
      style={{ width: "clamp(180px, 45vw, 280px)", height: "auto" }} // Increased max-width for larger screens.
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image */}
      <img
        src={character.imageUrl}
        alt={character.name}
        className="w-full h-full object-cover rounded-2xl transition-all duration-300 ease-in-out group-hover:brightness-90" // Slightly darker hover.
        style={{ aspectRatio: "3 / 4" }} // Maintain aspect ratio
      />

      {/* Slightly stronger bottom blur */}
      <div className="absolute bottom-0 rounded-2xl inset-x-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* Backdrop Blur and Text Section */}
      <div className="absolute rounded-2xl bottom-0 inset-x-0 h-[40%] backdrop-blur-md bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        {/* Text Content */}
        <motion.div
          className="text-white text-center p-4" // Center text and add padding.
          style={{ borderRadius: "0.5rem" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
            {character.name}
          </h3>
          <h3 className="text-lg sm:text-xl font-bold">as</h3>
          <p className="font-semibold mt-1 text-sm sm:text-base">
            {character.role}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CharactersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // State to handle showing more characters
  const [showAll, setShowAll] = useState(false);

  const visibleCast = showAll ? CAST : CAST.slice(0, 4); 

  return (
    <section
      id="characters"
      ref={sectionRef}
      className="relative py-16 bg-background overflow-hidden rounded-lg select-none"
    >
      {/* Background blur - reduced opacity a bit */}
      <div className="absolute inset-0 backdrop-blur-sm bg-cover bg-center opacity-15 rounded-lg" />

      <div className="relative z-10 container mx-auto px-4 max-w-screen-xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-accent mb-8" // Adjusted mobile text size and margin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.4 }}
        >
          Meet the Cast
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {" "}
          {/* Responsive gap */}
          {visibleCast.map((character, index) => (
            <CharacterCard key={index} character={character} index={index} />
          ))}
        </div>

        {/* "View More Cast" Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-lg text-black bg-yellow-500 py-2 px-6 rounded-lg font-semibold"
          >
            {showAll ? "View Less Cast" : "View More Cast"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CharactersSection;

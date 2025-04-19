import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/constants";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: typeof GALLERY_IMAGES;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Lightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex
}: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent scrolling when lightbox is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, images, currentIndex, setCurrentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative z-10 max-w-6xl px-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button 
              className="absolute top-4 right-4 text-foreground text-3xl hover:text-accent z-20"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <X size={30} />
            </button>
            
            <div className="relative">
              <img 
                src={images[currentIndex].url} 
                alt={images[currentIndex].alt} 
                className="max-w-full max-h-[80vh] mx-auto object-contain"
              />
              {images[currentIndex].caption && (
                <div className="text-foreground/80 text-center mt-2">
                  {images[currentIndex].caption}
                </div>
              )}
            </div>
            
            <div className="flex justify-between mt-4">
              <button 
                className="text-foreground text-2xl hover:text-accent px-4 py-2"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft size={30} />
              </button>
              <button 
                className="text-foreground text-2xl hover:text-accent px-4 py-2"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;

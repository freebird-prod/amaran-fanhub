import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GALLERY_IMAGES } from "@/lib/constants";
import Lightbox from "@/components/ui/lightbox";

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(6); // Initially show 6 images

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleViewMore = () => {
    setVisibleImages(GALLERY_IMAGES.length); // Show all images
  };

  const handleViewLess = () => {
    setVisibleImages(6); // Show only 6 images
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.slice(0, visibleImages).map((image, index) => (
            <motion.div 
              key={image.id}
              className="gallery-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
                onClick={() => openLightbox(index)}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {visibleImages < GALLERY_IMAGES.length ? (
            <Button 
              variant="outline" 
              className="text-lg text-black bg-yellow-500 py-2 px-6 rounded-lg font-semibold"
              onClick={handleViewMore}
            >
              View More Images
            </Button>
          ) : (
            <Button 
              variant="outline" 
              className="text-lg text-black bg-yellow-500 py-2 px-6 rounded-lg font-semibold"
              onClick={handleViewLess}
            >
              View Less Images
            </Button>
          )}
        </motion.div>
      </div>
      
      <Lightbox 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={GALLERY_IMAGES}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </section>
  );
};

export default GallerySection;

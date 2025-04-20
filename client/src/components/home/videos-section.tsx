import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { VIDEOS } from "@/lib/constants";
import VideoPlayer from "@/components/ui/video-player";
import { useState } from "react";

const VideosSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [activeVideo, setActiveVideo] = useState<null | typeof VIDEOS[0]>(null);
  
  const featuredVideo = VIDEOS.find(video => video.featured);
  const otherVideos = VIDEOS.filter(video => !video.featured);

  return (
    <section id="videos" ref={sectionRef} className="py-20 bg-background select-none">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Movie Videos
        </motion.h2>
        
        {featuredVideo && (
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-video bg-muted rounded-lg shadow-xl overflow-hidden border border-secondary/30">
              <img 
                src={featuredVideo.thumbnailUrl} 
                alt={`${featuredVideo.title} thumbnail`} 
                className="w-full h-full object-cover opacity-60"
              />
              <button 
                className="absolute inset-0 flex items-center justify-center transition-colors duration-300"
                onClick={() => setActiveVideo(featuredVideo)}
                aria-label="Play video"
              >
                <div className="bg-accent transition-colors duration-300 w-12 h-12 rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-foreground" />
                </div>
              </button>
              <div className="absolute bottom-4 left-4 bg-background/80 px-4 py-2 rounded">
                <h3 className="text-xl font-bold text-accent">{featuredVideo.title}</h3>
              </div>
            </div>
            <p className="text-center mt-4 text-accent">{featuredVideo.description}</p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherVideos.map((video, index) => (
            <motion.div 
              key={video.id}
              className="video-thumbnail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={video.thumbnailUrl} 
                  alt={`${video.title} thumbnail`} 
                  className="w-full h-full object-cover opacity-80"
                />
                <button 
                  className="absolute inset-0 flex items-center justify-center hover:bg-dark/30 transition-colors duration-300"
                  onClick={() => setActiveVideo(video)}
                  aria-label="Play video"
                >
                  <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-foreground" />
                  </div>
                </button>
              </div>
              <h3 className="text-lg font-bold mt-3 text-accent">{video.title}</h3>
              <p className="text-gray-400 text-sm">{video.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoPlayer 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoUrl={activeVideo?.videoUrl || ""}
        title={activeVideo?.title || ""}
      />
    </section>
  );
};

export default VideosSection;

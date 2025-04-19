import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NEWS_ARTICLES } from "@/lib/constants";

const NewsArticleCard = ({ article, index }: { article: typeof NEWS_ARTICLES[0]; index: number }) => {
  return (
    <motion.article 
      className="bg-muted rounded-lg overflow-hidden shadow-lg border border-muted transition-transform duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
    >
      <img 
        src={article.imageUrl} 
        alt={article.imageAlt} 
        className="w-full h-52 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-accent font-medium">{article.category}</span>
          <span className="text-xs text-foreground/70">{article.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{article.title}</h3>
        <p className="text-foreground/80 mb-4">{article.excerpt}</p>
        <a href="#" className="text-secondary hover:text-accent inline-flex items-center transition duration-200 group">
          Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};

const NewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="news" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Latest News
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article, index) => (
            <NewsArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            variant="destructive" 
            size="lg"
            className="bg-secondary hover:bg-secondary/80 text-foreground px-8 py-6"
          >
            View All News
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;

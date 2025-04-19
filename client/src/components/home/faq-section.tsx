import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-xl text-center max-w-3xl mx-auto mb-16 text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Everything you need to know about Ämaran, from release dates to merchandise and more.
        </motion.p>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <AccordionItem value={`item-${index}`} className="border-accent/20">
                  <AccordionTrigger className="text-lg font-semibold text-accent hover:text-accent/80">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.5 + (FAQ_ITEMS.length * 0.1) }}
        >
          <p className="text-foreground/80">
            Have a question not answered here? 
            <a 
              href="#contact" 
              className="ml-2 text-accent hover:text-accent/80 underline transition-colors"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
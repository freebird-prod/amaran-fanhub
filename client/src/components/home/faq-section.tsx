import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { X } from "lucide-react";

// Movie Data for "Amaran"
const movieData = {
  title: "Amaran",
  language: "Tamil",
  genre: "Biographical Action War",
  director: "Rajkumar Periasamy",
  producers: ["Kamal Haasan", "R. Mahendran", "Vivek Krishnani"],
  production_companies: [
    "Raaj Kamal Films International",
    "Sony Pictures Films India",
  ],
  distributor: "Sony Pictures Films India",
  release_date: "31 October 2024 (Diwali)",
  runtime: "169 minutes",
  country: "India",
  budget: "₹70–200 crore",
  box_office: "₹300–335 crore",
  cast: [
    { actor: "Sivakarthikeyan", role: "Major Mukund Varadarajan" },
    { actor: "Sai Pallavi", role: "Indhu Rebecca Varghese" },
    { actor: "Rahul Bose", role: "Colonel Raghavendra" },
    { actor: "Bhuvan Arora", role: "Lieutenant Vikram" },
  ],
  plot_summary:
    "Amaran follows the story of Indhu Rebecca Varghese, who receives the Ashoka Chakra award on behalf of her late husband, Major Mukund Varadarajan, a decorated officer in the Indian Army. As she journeys to receive the honor, she reflects on Mukund's life, his dedication to duty, and the sacrifices made during his service. The film is adapted from the book series 'India's Most Fearless: True Stories of Modern Military Heroes' by Shiv Aroor and Rahul Singh.",
  music: {
    composer: "G. V. Prakash Kumar",
    lyricists: ["Karthik Netha", "Yugabharathi", "Vivek", "Arivu"],
    soundtrack:
      "The album features eight songs that complement the film's emotional and action-packed sequences.",
  },
  reception: {
    critical_acclaim:
      "The film received widespread praise for its performances, direction, screenplay, and music.",
    box_office_performance:
      "Amaran emerged as the second highest-grossing Tamil film of 2024 and the ninth highest-grossing Indian film of the same year.",
  },
  production_details: {
    announcement:
      "Initially announced in January 2022 as 'Sivakarthikeyan 21', marking the actor's 21st film as a lead.",
    filming_locations: ["Kashmir", "Chennai", "Pondicherry"],
    filming_duration: "Approximately one year",
    cinematography: "Debutant CH Sai",
    editing: "R. Kalaivanan",
  },
  images: [
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Amaran_2024_poster.jpg/220px-Amaran_2024_poster.jpg",
  ],
};

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I'm Amara AI. Ask me anything about the movie 'Amaran'!",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const responseText = await getMovieResponse(input);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: responseText },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I can only answer questions about the movie 'Amaran'.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getMovieResponse = async (input: string) => {
    const lower = input.toLowerCase();

    if (lower === "hii") {
      return `Hello! I'm Amara AI. Feel free to ask me anything about the movie 'Amaran'.`;
    } else if (lower.includes("release date")) {
      return `The movie "${movieData.title}" will be released on ${movieData.release_date}.`;
    } else if (lower.includes("director")) {
      return `The movie "${movieData.title}" is directed by ${movieData.director}.`;
    } else if (lower.includes("cast")) {
      return `The main cast includes: ${movieData.cast
        .map((c) => `${c.actor} as ${c.role}`)
        .join(", ")}.`;
    } else if (lower.includes("plot")) {
      return movieData.plot_summary;
    } else if (lower.includes("soundtrack")) {
      return `Music by ${movieData.music.composer}, lyrics by ${movieData.music.lyricists.join(
        ", "
      )}.`;
    } else if (lower.includes("budget")) {
      return `The budget was ${movieData.budget}.`;
    } else if (lower.includes("box office")) {
      return `Box office collection: ${movieData.box_office}.`;
    } else if (lower.includes("filming locations")) {
      return `Filming took place in: ${movieData.production_details.filming_locations.join(
        ", "
      )}.`;
    } else {
      return "Sorry, I couldn't understand your question. Please try again.";
    }
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-background select-none">
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
          Everything you need to know about Amaran, from release dates to merchandise and more.
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
      </div>
    </section>
  );
};

export default FAQSection;

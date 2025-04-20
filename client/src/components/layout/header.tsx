import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Characters", href: "#characters" },
  { name: "Gallery", href: "#gallery" },
  { name: "Videos", href: "#videos" },
  { name: "Behind the Scenes", href: "#behind-scenes" },
  { name: "FAQ", href: "#faq" },
];

const mobileMenuVariants = {
  open: {
    translateY: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: { duration: 0.4 },
  },
  closed: {
    translateY: "-100%",
    opacity: 0,
    pointerEvents: "none",
    transition: { duration: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.innerWidth < 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const nav = mobileNavRef.current;
    let startY = 0;
    const threshold = 100;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaY = e.touches[0].clientY - startY;
      if (deltaY > threshold) setIsOpen(false);
    };

    if (nav) {
      nav.addEventListener("touchstart", onTouchStart);
      nav.addEventListener("touchmove", onTouchMove);
    }

    return () => {
      if (nav) {
        nav.removeEventListener("touchstart", onTouchStart);
        nav.removeEventListener("touchmove", onTouchMove);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 select-none",
        scrolled
          ? "backdrop-blur-2xl shadow-lg"
          : "bg-transparent border-secondary/20"
      )}
    >
      <nav className="max-w-[100vw] overflow-hidden container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="/"
          className="flex items-center z-20 gap-3 justify-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/logo.svg"
            alt="Amaran Logo"
            className="animate-pulse tracking-wider w-8 h-8 sm:w-10 sm:h-10"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-accent animate-pulse tracking-wider">
            Amaran - Official Fan Website
          </h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors duration-300 px-3 py-2 font-semibold text-sm xl:text-base rounded-md hover:backdrop-blur-md"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
          <Button
            variant="destructive"
            className="bg-yellow-500 hover:bg-yellow-600 text-black ml-2 text-sm xl:text-base"
            onClick={() => scrollToSection("#developer")}
          >
            Developer
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden z-10 relative w-10 h-10 flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                <X className="h-6 w-6 text-foreground" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.4 }}
                className="absolute"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileNavRef}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-primary/30 backdrop-blur-2xl z-40 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-6 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-foreground" />
              </Button>
            </div>

            <nav className="flex flex-col items-center justify-center h-full space-y-5 px-4 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                  className="text-foreground hover:text-accent py-3 px-6 text-lg font-semibold rounded-md hover:bg-primary/30 max-w-full"
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  variant="destructive"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 px-6 py-2"
                  onClick={() => scrollToSection("#contact")}
                >
                  Contact
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

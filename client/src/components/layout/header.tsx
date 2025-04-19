import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Characters", href: "#characters" },
  { name: "Gallery", href: "#gallery" },
  { name: "Videos", href: "#videos" },
  { name: "Behind the Scenes", href: "#behind-scenes" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-primary/90 backdrop-blur-sm border-b border-secondary/20" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center" onClick={(e) => e.preventDefault()}>
          <h1 className="text-2xl sm:text-3xl font-bold text-accent animate-pulse">ÄMARAN</h1>
        </a>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-accent transition duration-200"
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
            className="bg-secondary hover:bg-secondary/80 text-foreground"
            onClick={() => scrollToSection("#contact")}
          >
            Contact
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      
      {/* Mobile navigation */}
      <div 
        className={cn(
          "md:hidden flex-col bg-primary w-full border-t border-muted/30 absolute transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "text-foreground hover:text-accent py-4 px-4 transition duration-200",
              index !== navItems.length - 1 && "border-b border-muted/30",
              item.name === "Contact" && "bg-secondary/60 hover:bg-secondary/80"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;

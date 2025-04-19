import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Characters", href: "#characters" },
  { name: "Timeline", href: "#timeline" },
  { name: "Gallery", href: "#gallery" },
  { name: "Videos", href: "#videos" },
  { name: "Behind the Scenes", href: "#behind-scenes" },
  { name: "FAQ", href: "#faq" },
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
          ? "bg-primary/95 backdrop-blur-md border-b border-secondary/20 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center z-20" onClick={(e) => e.preventDefault()}>
          <h1 className="text-2xl sm:text-3xl font-bold text-accent animate-pulse tracking-wider">ÄMARAN</h1>
        </a>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-6">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors duration-200 px-3 py-2 text-sm xl:text-base rounded-md hover:bg-primary/50"
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
            className="bg-secondary hover:bg-secondary/80 text-foreground ml-2"
            onClick={() => scrollToSection("#contact")}
          >
            Contact
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden z-20" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>
      
      {/* Mobile navigation */}
      <div 
        className={cn(
          "lg:hidden flex flex-col bg-primary/95 backdrop-blur-md w-full fixed inset-0 pt-20 pb-6 z-10 transition-all duration-300 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
        )}
      >
        <div className="overflow-auto flex-grow">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground hover:text-accent py-4 px-6 transition duration-200 flex items-center text-lg border-l-4",
                index !== navItems.length - 1 && "border-b border-muted/30",
                item.name === "Contact" ? "border-l-secondary bg-secondary/10" : "border-l-transparent",
                "hover:border-l-accent hover:bg-primary/60"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              <span className="ml-2">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

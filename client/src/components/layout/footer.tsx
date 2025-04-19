import { COMPANY_INFO } from "@/lib/constants";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary pt-10 pb-6 sm:py-12 border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="col-span-2 xs:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4">ÄMARAN</h3>
            <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4">
              The epic journey through realms unknown begins December 15, 2023.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href={COMPANY_INFO.socialMedia.facebook} 
                className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.twitter} 
                className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.instagram} 
                className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.youtube} 
                className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <a 
                  href="#about" 
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#characters" 
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#characters");
                  }}
                >
                  Characters
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#gallery");
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#videos" 
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#videos");
                  }}
                >
                  Videos
                </a>
              </li>
              <li>
                <a 
                  href="#news" 
                  className="text-foreground/80 hover:text-accent transition duration-200 block py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#news");
                  }}
                >
                  News
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-4 md:mb-0">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-4">Information</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200 block py-1">
                  Showtimes
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200 block py-1">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200 block py-1">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200 block py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200 block py-1">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-0">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-4">Contact</h4>
            <address className="not-italic text-foreground/80 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p>{COMPANY_INFO.name}</p>
              {COMPANY_INFO.address.map((line, i) => (
                <p key={i} className="text-xs sm:text-sm">{line}</p>
              ))}
              <p className="mt-2 sm:mt-4">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-secondary hover:text-accent transition duration-200 block py-1"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="bg-muted/30" />
        
        <div className="pt-4 sm:pt-8 text-center text-foreground/60 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Ämaran - All Rights Reserved. This is a fictional movie website created for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

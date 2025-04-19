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
    <footer className="bg-primary py-12 border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">ÄMARAN</h3>
            <p className="text-foreground/80 mb-4">
              The epic journey through realms unknown begins December 15, 2023.
            </p>
            <div className="flex space-x-4">
              <a 
                href={COMPANY_INFO.socialMedia.facebook} 
                className="text-foreground hover:text-accent transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.twitter} 
                className="text-foreground hover:text-accent transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.instagram} 
                className="text-foreground hover:text-accent transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.youtube} 
                className="text-foreground hover:text-accent transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-foreground/80 hover:text-accent transition duration-200"
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
                  className="text-foreground/80 hover:text-accent transition duration-200"
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
                  className="text-foreground/80 hover:text-accent transition duration-200"
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
                  className="text-foreground/80 hover:text-accent transition duration-200"
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
                  className="text-foreground/80 hover:text-accent transition duration-200"
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
          
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200">
                  Showtimes & Tickets
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/80 hover:text-accent transition duration-200">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Contact</h4>
            <address className="not-italic text-foreground/80 space-y-2">
              <p>{COMPANY_INFO.name}</p>
              {COMPANY_INFO.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="mt-4">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-secondary hover:text-accent transition duration-200"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <Separator className="bg-muted/30" />
        
        <div className="pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Ämaran - All Rights Reserved. This is a fictional movie website created for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

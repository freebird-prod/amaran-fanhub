import { COMPANY_INFO } from "@/lib/constants";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background pt-10 pb-6 sm:py-12 border-t border-secondary/20 select-none" id="developer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          <div className="col-span-2 xs:col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4">
              AMARAN
            </h3>
            <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4">
              The epic journey through realms unknown begins October 31, 2024.
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
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-4">
              Quick Links
            </h4>
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
            <h4 className="text-lg text-yellow-500 font-bold text-foreground mb-2 sm:mb-4">
              Developer
            </h4>
            <div className="flex items-start gap-4 mb-4">
              <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                <img
                  src="/Profile.jpg"
                  alt="Dharun Kumar S H"
                  width={64}
                  height={64}
                  className="object-cover aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium text-foreground text-lg leading-tight">
                  Dharun Kumar S H
                </p>
                <p className="text-sm text-foreground/80 mb-1 leading-tight">
                Full Stack Frontend Developer
                </p>
                <p className="text-xs text-foreground/60 leading-tight">Craze on creating responsive websites.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-foreground/80 leading-snug">
                This project was designed and developed as a portfolio showcase.
              </p>
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/dharun-kumar-s-h-0362702a2/"
                  className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://github.com/dharun-kumarsh"
                  className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:iam.dharunkumarsh@gmail.com"
                  className="text-foreground hover:text-accent transition duration-200 bg-muted/30 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <Mail size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-muted/30" />

        <div className="pt-4 sm:pt-8 text-center text-foreground/60 text-lg">
          <p>
            &copy; {new Date().getFullYear()} Amaran - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

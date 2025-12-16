import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube 
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  const productLinks = [
    { name: t("footer.products.crm"), href: "/products/crm" },
    { name: t("footer.products.marketing"), href: "/products/marketing" },
    { name: t("footer.products.hr"), href: "/products/hr" },
    { name: t("footer.products.finance"), href: "/products/finance" },
    { name: t("footer.products.inventory"), href: "/products/stock" },
    { name: "Assets", href: "/products/assets" }
  ];

  const solutionLinks = [
    { name: "By Industry", href: "/solutions/by-industry" },
    { name: "Manufacturing", href: "/solutions/by-industry" },
    { name: "Healthcare", href: "/solutions/by-industry" },
    { name: "Financial Services", href: "/solutions/by-industry" },
    { name: "Retail", href: "/solutions/by-industry" },
    { name: "Technology", href: "/solutions/by-industry" }
  ];

  const resourceLinks = [
    { name: t("footer.company.blog"), href: "/resources/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "White Papers", href: "/resources/white-papers" },
    { name: "Documentation", href: "/resources/documentation" },
    { name: "API Reference", href: "/resources/documentation" },
    { name: "Release Notes", href: "/resources/release-notes" }
  ];

  const companyLinks = [
    { name: t("footer.company.about"), href: "/company/about" },
    { name: t("footer.company.careers"), href: "/company/careers" },
    { name: t("footer.company.contact"), href: "/contact" },
    { name: t("footer.legal.privacy"), href: "/legal/privacy-policy" },
    { name: t("footer.legal.terms"), href: "/legal/terms-of-service" },
    { name: t("footer.features.security"), href: "/features/security" }
  ];

  return (
    <footer className="bg-brand-navy text-white relative z-50">
      {/* Animated Lines Above Footer */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <svg className="absolute top-8 left-0 w-full opacity-20" height="100" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20" x2="100%" y2="20" stroke="url(#gradient1)" strokeWidth="2">
            <animate attributeName="x1" from="-100%" to="100%" dur="3s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="40" x2="100%" y2="40" stroke="url(#gradient2)" strokeWidth="2">
            <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="60" x2="100%" y2="60" stroke="url(#gradient3)" strokeWidth="2">
            <animate attributeName="x1" from="-100%" to="100%" dur="5s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="5s" repeatCount="indefinite" />
          </line>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="section-padding pt-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/bfa528b8-7900-4256-88f1-1888db75bb90.png" 
                  alt="Azarus ERP" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/80 leading-relaxed">
                Azarus ERP empowers businesses with comprehensive, modular solutions for growth and efficiency. 
                Streamline operations with our self-hosted ERP system designed for modern businesses.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                 <div className="flex items-center gap-3">
                   <Mail className="h-4 w-4 text-brand-orange" />
                   <span className="text-sm">info@azaruserp.com</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <Phone className="h-4 w-4 text-brand-orange" />
                   <span className="text-sm">+44 1865 60 0679</span>
                 </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t("footer.products.title")}</h3>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Solutions</h3>
              <ul className="space-y-2">
                {solutionLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t("footer.company.title")}</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />
      
      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-white/60">
               {t("footer.copyright")}
             </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/book-demo" className="hover:text-white transition-colors">Book Demo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const products = [
    { name: t("products.crm.name"), href: "/products/crm", description: t("products.crm.description") },
    { name: t("products.marketing.name"), href: "/products/marketing", description: t("products.marketing.description") },
    { name: t("products.projects.name"), href: "/products/projects", description: t("products.projects.description") },
    { name: t("products.hr.name"), href: "/products/hr", description: t("products.hr.description") },
    { name: t("products.finance.name"), href: "/products/finance", description: t("products.finance.description") },
    { name: t("products.stock.name"), href: "/products/stock", description: t("products.stock.description") },
    { name: t("products.assets.name"), href: "/products/assets", description: t("products.assets.description") },
    { name: t("products.custom.name"), href: "/products/custom", description: t("products.custom.description") },
  ];

  const features = [
    { name: t("features.analytics"), href: "/features/analytics" },
    { name: t("features.reporting"), href: "/features/reporting" },
    { name: t("features.customization"), href: "/features/customization" },
    { name: t("features.scalability"), href: "/features/scalability" },
    { name: t("features.security"), href: "/features/security" },
    { name: t("features.integration"), href: "/features/integration" },
  ];

  const solutions = [
    { name: t("solutions.byNeed"), href: "/solutions/by-need" },
    { name: t("solutions.bySector"), href: "/solutions/by-sector" },
    { name: t("solutions.resources"), href: "/resources" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/bfa528b8-7900-4256-88f1-1888db75bb90.png" 
            alt="Azarus ERP" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                {t("nav.home")}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.products")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                  {products.map((product) => (
                    <NavigationMenuLink key={product.name} href={product.href} className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy hover:text-white focus:bg-brand-navy focus:text-white">
                      <div className="text-sm font-medium leading-none">{product.name}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-white/90 group-focus:text-white/90">
                        {product.description}
                      </p>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.features")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[300px] lg:w-[400px]">
                  {features.map((feature) => (
                    <NavigationMenuLink key={feature.name} href={feature.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy hover:text-white focus:bg-brand-navy focus:text-white">
                      <div className="text-sm font-medium leading-none">{feature.name}</div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.solutions")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[280px]">
                  {solutions.map((solution) => (
                    <NavigationMenuLink key={solution.name} href={solution.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-navy hover:text-white focus:bg-brand-navy focus:text-white">
                      <div className="text-sm font-medium leading-none">{solution.name}</div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
                {t("nav.pricing")}
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                {t("nav.contact")}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className={cn("ml-auto flex items-center", isRTL ? "space-x-reverse space-x-4" : "space-x-4")}>
          {/* Language Switcher - HIDDEN */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border border-border">
              <DropdownMenuItem 
                onClick={() => changeLanguage('en')}
                className={cn(i18n.language === 'en' && "bg-accent")}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => changeLanguage('ar')}
                className={cn(i18n.language === 'ar' && "bg-accent")}
              >
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <Button asChild variant="hero" size="lg" className="hidden lg:inline-flex">
            <a href="/book-demo">{t("nav.bookDemo")}</a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "left" : "right"} className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="/" className="text-lg font-medium hover:text-primary transition-colors">{t("nav.home")}</a>
                
                {/* Products Collapsible */}
                <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    <span>{t("nav.products")}</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", productsOpen && "rotate-180")} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
                    {products.map((product) => (
                      <a 
                        key={product.name} 
                        href={product.href} 
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {product.name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Features Collapsible */}
                <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    <span>{t("nav.features")}</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", featuresOpen && "rotate-180")} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
                    {features.map((feature) => (
                      <a 
                        key={feature.name} 
                        href={feature.href} 
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {feature.name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Solutions Collapsible */}
                <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    <span>{t("nav.solutions")}</span>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", solutionsOpen && "rotate-180")} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2">
                    {solutions.map((solution) => (
                      <a 
                        key={solution.name} 
                        href={solution.href} 
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {solution.name}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <a href="/pricing" className="text-lg font-medium hover:text-primary transition-colors">{t("nav.pricing")}</a>
                <a href="/contact" className="text-lg font-medium hover:text-primary transition-colors">{t("nav.contact")}</a>
                
                <div className="pt-4 space-y-2">
                  <Button asChild variant="hero" className="w-full">
                    <a href="/book-demo">{t("nav.bookDemo")}</a>
                  </Button>
                  {/* Language buttons - HIDDEN */}
                  {/* <div className="flex justify-center space-x-2 pt-2">
                    <Button
                      variant={i18n.language === 'en' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changeLanguage('en')}
                    >
                      EN
                    </Button>
                    <Button
                      variant={i18n.language === 'ar' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changeLanguage('ar')}
                    >
                      AR
                    </Button>
                  </div> */}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
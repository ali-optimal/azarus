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
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    { name: "Customer Relationship CRM", href: "/products/crm", description: "Manage customer relationships and sales pipeline" },
    { name: "Marketing Automation", href: "/products/marketing", description: "Automate marketing campaigns and lead nurturing" },
    { name: "Projects Management", href: "/products/projects", description: "Plan, track and deliver projects efficiently" },
    { name: "HR & Payroll", href: "/products/hr", description: "Human resources and payroll management" },
    { name: "Finance / Accounting", href: "/products/finance", description: "Complete financial management solution" },
    { name: "Stock Management", href: "/products/stock", description: "Inventory and warehouse management" },
    { name: "Assets Management", href: "/products/assets", description: "Track and manage company assets" },
    { name: "Custom Modules", href: "/products/custom", description: "Tailored solutions for your business needs" },
  ];

  const features = [
    { name: "Advanced Analytics", href: "/features/analytics" },
    { name: "Real-time Reporting", href: "/features/reporting" },
    { name: "Customizability", href: "/features/customization" },
    { name: "Scalability", href: "/features/scalability" },
    { name: "Security", href: "/features/security" },
    { name: "Integration", href: "/features/integration" },
  ];

  const solutions = [
    { name: "By Need", href: "/solutions/by-need" },
    { name: "By Sector", href: "/solutions/by-sector" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wide flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/bfa528b8-7900-4256-88f1-1888db75bb90.png" 
            alt="Azarus ERP" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                  {products.map((product) => (
                    <NavigationMenuLink key={product.name} href={product.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">{product.name}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {product.description}
                      </p>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[300px] lg:w-[400px]">
                  {features.map((feature) => (
                    <NavigationMenuLink key={feature.name} href={feature.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">{feature.name}</div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[200px]">
                  {solutions.map((solution) => (
                    <NavigationMenuLink key={solution.name} href={solution.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">{solution.name}</div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild variant="hero" size="lg" className="hidden lg:inline-flex">
            <a href="/book-demo">Book a Demo</a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="/" className="text-lg font-medium">Home</a>
                <a href="/products" className="text-lg font-medium">Products</a>
                <a href="/features" className="text-lg font-medium">Features</a>
                <a href="/solutions" className="text-lg font-medium">Solutions</a>
                <a href="/pricing" className="text-lg font-medium">Pricing</a>
                <a href="/contact" className="text-lg font-medium">Contact</a>
                <div className="pt-4 space-y-2">
                  <Button asChild variant="hero" className="w-full">
                    <a href="/book-demo">Book a Demo</a>
                  </Button>
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
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { 
  Users, 
  Calculator, 
  UserCog, 
  DollarSign, 
  Clock, 
  Package, 
  ShoppingCart, 
  Building,
  Puzzle
} from "lucide-react";

const ModulesGrid = () => {
  const [activeTab, setActiveTab] = useState("crm");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all tab images when component mounts
  useEffect(() => {
    const imagesToPreload = [
      "/CRM customers page.png",
      "/accounting dashboard final.png",
      "/HR Dashboard final.png",
      "/Payroll main page final.png",
      "/ChatGPT Image Dec 16, 2025, 04_06_53 AM.png",
      "/assets main page (1).png",
      "/stock main page.png",
      "/campaign main image.png",
      "/frm builder (1).png"
    ];

    const preloadImages = imagesToPreload.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = encodeURI(src);
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error("Error preloading images:", err);
        setImagesLoaded(true); // Continue anyway
      });
  }, []);

  const modules = [
    {
      id: "crm",
      icon: Users,
      title: "CRM",
      fullTitle: "Customer Relationship Management",
      description: "Manage customer relationships, sales pipeline, and lead nurturing with advanced automation.",
      detailDescription: "Give your sales team the means to sell efficiently across channels with a structured and repeatable sales process. Capture, engage, convert, and grow at a consistent pace.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics"],
      href: "/products/crm",
      imagePlaceholder: "CRM Dashboard Analytics"
    },
    {
      id: "finance",
      icon: Calculator,
      title: "Finance",
      fullTitle: "Finance / Accounting",
      description: "Complete financial management with automated bookkeeping, reporting, and compliance tools.",
      detailDescription: "Streamline your financial operations with comprehensive accounting tools, automated bookkeeping, and real-time financial reporting to maintain full control of your business finances.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      features: ["Automated Bookkeeping", "Financial Reports", "Tax Compliance"],
      href: "/products/finance",
      imagePlaceholder: "Financial Reports Dashboard"
    },
    {
      id: "hr",
      icon: UserCog,
      title: "HR",
      fullTitle: "HR Management",
      description: "Comprehensive human resources management from recruitment to performance evaluation.",
      detailDescription: "Empower your HR department with tools for complete employee lifecycle management, from recruitment and onboarding to performance reviews and development planning.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      features: ["Employee Records", "Performance Reviews", "Recruitment"],
      href: "/products/hr",
      imagePlaceholder: "HR Management Interface"
    },
    {
      id: "payroll",
      icon: DollarSign,
      title: "Payroll",
      fullTitle: "Payroll System",
      description: "Automated payroll processing with tax calculations, benefits management, and reporting.",
      detailDescription: "Simplify payroll processing with automated calculations, tax compliance, benefits administration, and comprehensive reporting to ensure accurate and timely employee payments.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500",
      features: ["Automated Payroll", "Tax Calculations", "Benefits Management"],
      href: "/products/hr",
      imagePlaceholder: "Payroll Processing Dashboard"
    },
    {
      id: "projects",
      icon: Clock,
      title: "Projects",
      fullTitle: "Project Management",
      description: "Plan, track and deliver projects with comprehensive project management and time tracking tools.",
      detailDescription: "Deliver projects on time and within budget with powerful planning, tracking, and collaboration tools that keep your entire team aligned and productive.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500",
      features: ["Project Planning", "Time Tracking", "Team Collaboration"],
      href: "/products/projects",
      imagePlaceholder: "Project Timeline View"
    },
    {
      id: "stock",
      icon: Package,
      title: "Stock",
      fullTitle: "Stock Management",
      description: "Inventory control with real-time tracking, automated reordering, and warehouse management.",
      detailDescription: "Maintain optimal inventory levels with real-time tracking, automated reordering, and comprehensive warehouse management to reduce costs and prevent stockouts.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500",
      features: ["Inventory Control", "Automated Reordering", "Warehouse Management"],
      href: "/products/stock",
      imagePlaceholder: "Inventory Dashboard"
    },
    {
      id: "marketing",
      icon: ShoppingCart,
      title: "Marketing",
      fullTitle: "Marketing Automation",
      description: "Streamlined marketing campaigns with automation, lead generation, and customer engagement tools.",
      detailDescription: "Scale your marketing efforts with powerful automation tools for campaigns, lead generation, and customer engagement that drive measurable business growth.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500",
      features: ["Email Campaigns", "Lead Generation", "Marketing Analytics"],
      href: "/products/marketing",
      imagePlaceholder: "Marketing Campaign Dashboard"
    },
    {
      id: "assets",
      icon: Building,
      title: "Assets",
      fullTitle: "Assets Management",
      description: "Track and manage company assets with depreciation calculations and maintenance scheduling.",
      detailDescription: "Keep track of all company assets throughout their lifecycle with depreciation tracking, maintenance scheduling, and comprehensive asset performance reporting.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500",
      features: ["Asset Tracking", "Depreciation", "Maintenance Scheduling"],
      href: "/products/assets",
      imagePlaceholder: "Assets Tracking Dashboard"
    },
    {
      id: "custom",
      icon: Puzzle,
      title: "Custom",
      fullTitle: "Custom Modules",
      description: "Tailored solutions built specifically for your unique business requirements and processes.",
      detailDescription: "Get bespoke solutions designed specifically for your unique business processes, with custom workflows, integrations, and features that perfectly match your requirements.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500",
      features: ["Custom Development", "Business Logic", "Integration Ready"],
      href: "/products/custom",
      imagePlaceholder: "Custom Solutions Interface"
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold max-w-5xl leading-tight text-left">
            All your teams across departments.{" "}
            <span className="text-gradient">Better together as one.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-left">
            Comprehensive ERP modules designed to handle every aspect of your business operations, 
            from customer relationships to financial management.
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs List */}
          <TabsList className="w-full justify-start flex-wrap h-auto gap-1.5 md:gap-2 bg-muted/50 p-1.5 md:p-2 rounded-xl md:rounded-2xl mb-6 md:mb-8 lg:mb-12">
            {modules.map((module) => (
              <TabsTrigger
                key={module.id}
                value={module.id}
                className="flex items-center gap-1.5 md:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-lg md:rounded-xl px-3 py-2 md:px-6 md:py-3 text-sm md:text-base transition-all"
              >
                <module.icon className="h-3 w-3 md:h-4 md:w-4" />
                <span className="font-medium">{module.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {modules.map((module) => (
            <TabsContent key={module.id} value={module.id} className="mt-0">
              <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-start">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                      {module.detailDescription.split('.')[0]}.
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {module.detailDescription}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 md:space-y-3 lg:space-y-4">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 md:gap-3">
                        <div className={`rounded-lg ${module.bgColor} p-1 md:p-1.5 text-white mt-0.5`}>
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white" />
                        </div>
                        <span className="text-sm md:text-base text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="default"
                    className="w-full sm:w-auto group lg:size-lg"
                    asChild
                  >
                    <a href={module.href}>
                      Learn More
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </Button>

                  {/* Related Tools/Integrations */}
                  <div className="pt-3 md:pt-4 border-t">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Integrates with:</p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {module.id === "crm" && (
                        <>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">CRM</div>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">Bigin</div>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">Bookings</div>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">SalesIQ</div>
                        </>
                      )}
                      {module.id !== "crm" && (
                        <>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">API</div>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">Webhooks</div>
                          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-muted rounded-lg text-xs md:text-sm font-medium">Third-party</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Content - Dashboard Image */}
                <div className="relative w-full order-1 lg:order-2">
                  {/* Show actual images for modules with screenshots */}
                  {(module.id === "crm" || module.id === "finance" || module.id === "hr" || module.id === "payroll" || module.id === "projects" || module.id === "assets" || module.id === "stock" || module.id === "marketing" || module.id === "custom") ? (
                    <div className="w-full perspective-1000 rounded-lg md:rounded-xl overflow-hidden">
                      <img
                        src={
                          module.id === "crm" ? encodeURI("/CRM customers page.png") :
                          module.id === "finance" ? encodeURI("/accounting dashboard final.png") :
                          module.id === "hr" ? encodeURI("/HR Dashboard final.png") :
                          module.id === "payroll" ? encodeURI("/Payroll main page final.png") :
                          module.id === "projects" ? encodeURI("/ChatGPT Image Dec 16, 2025, 04_06_53 AM.png") :
                          module.id === "assets" ? encodeURI("/assets main page (1).png") :
                          module.id === "stock" ? encodeURI("/stock main page.png") :
                          module.id === "marketing" ? encodeURI("/campaign main image.png") :
                          module.id === "custom" ? encodeURI("/frm builder (1).png") :
                          ""
                        }
                        alt={`${module.fullTitle} Dashboard`}
                        loading="eager"
                        decoding="async"
                        fetchpriority="high"
                        className="w-full h-auto max-w-none animate-in fade-in slide-in-from-right-8 duration-700"
                        style={{
                          transform: 'perspective(1000px) rotateY(0deg)',
                          animation: 'slideIn3D 0.8s ease-out forwards'
                        }}
                      />
                      <style>{`
                        @keyframes slideIn3D {
                          0% {
                            opacity: 0;
                            transform: perspective(1000px) rotateY(-15deg) translateX(50px) scale(0.95);
                          }
                          100% {
                            opacity: 1;
                            transform: perspective(1000px) rotateY(0deg) translateX(0) scale(1);
                          }
                        }
                      `}</style>
                    </div>
                  ) : (
                      // Show placeholder for modules without screenshots
                      <div className="bg-muted/50 rounded-2xl p-8 border-2 border-dashed border-muted-foreground/20 min-h-[500px] flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                            <module.icon className="h-10 w-10 text-white" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-xl font-semibold text-muted-foreground">
                              {module.imagePlaceholder}
                            </p>
                            <p className="text-sm text-muted-foreground/60">
                              Image placeholder - Add your visualization here
                            </p>
                          </div>
                        </div>
                      </div>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-1 group hover:shadow-2xl transition-all duration-500">
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            
            {/* Inner content */}
            <div className="relative bg-gradient-to-br from-orange-500/95 via-pink-600/95 to-purple-700/95 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Floating geometric shapes */}
              <div className="absolute top-8 right-12 w-12 h-12 border-2 border-white/30 rounded-lg rotate-12 animate-pulse"></div>
              <div className="absolute bottom-12 left-16 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-24 w-8 h-8 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Content */}
              <div className="relative text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Custom Solutions Available
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Need Custom Modules?
                </h3>
                
                <p className="text-white/95 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
                  Our development team can create specialized modules tailored to your unique business requirements. 
                  Get a personalized solution that fits perfectly with your workflow.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold px-8 group/btn" 
                    asChild
                  >
                    <a href="/products/custom" className="flex items-center gap-2">
                      Discuss Custom Development
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white bg-transparent hover:bg-white/10 hover:scale-105 transition-all duration-300 font-semibold px-8" 
                    asChild
                  >
                    <a href="/contact">Contact Sales</a>
                  </Button>
                </div>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-10 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                    <div className="text-white/80 text-sm">Custom Modules</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">48hrs</div>
                    <div className="text-white/80 text-sm">Response Time</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
                    <div className="text-white/80 text-sm">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
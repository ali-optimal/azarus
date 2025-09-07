import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calculator, 
  UserCog, 
  DollarSign, 
  Clock, 
  Package, 
  ShoppingCart, 
  Building,
  Puzzle,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ModulesGrid = () => {
  const { t } = useTranslation();
  
  const modules = [
    {
      icon: Users,
      title: t("products.crm.name"),
      description: t("products.crm.description"),
      color: "from-blue-500 to-blue-600",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics"],
      href: "/products/crm"
    },
    {
      icon: Calculator,
      title: t("products.finance.name"),
      description: t("products.finance.description"),
      color: "from-green-500 to-green-600",
      features: ["Automated Bookkeeping", "Financial Reports", "Tax Compliance"],
      href: "/products/finance"
    },
    {
      icon: UserCog,
      title: t("products.hr.name"),
      description: t("products.hr.description"),
      color: "from-purple-500 to-purple-600",
      features: ["Employee Records", "Performance Reviews", "Recruitment"],
      href: "/products/hr"
    },
    {
      icon: DollarSign,
      title: "Payroll System",
      description: "Automated payroll processing with tax calculations, benefits management, and reporting.",
      color: "from-amber-500 to-amber-600",
      features: ["Automated Payroll", "Tax Calculations", "Benefits Management"],
      href: "/products/hr"
    },
    {
      icon: Clock,
      title: t("products.projects.name"),
      description: t("products.projects.description"),
      color: "from-teal-500 to-teal-600",
      features: ["Project Planning", "Time Tracking", "Team Collaboration"],
      href: "/products/projects"
    },
    {
      icon: Package,
      title: t("products.stock.name"),
      description: t("products.stock.description"),
      color: "from-red-500 to-red-600",
      features: ["Inventory Control", "Automated Reordering", "Warehouse Management"],
      href: "/products/stock"
    },
    {
      icon: ShoppingCart,
      title: t("products.marketing.name"),
      description: t("products.marketing.description"),
      color: "from-indigo-500 to-indigo-600",
      features: ["Email Campaigns", "Lead Generation", "Marketing Analytics"],
      href: "/products/marketing"
    },
    {
      icon: Building,
      title: t("products.assets.name"),
      description: t("products.assets.description"),
      color: "from-pink-500 to-pink-600",
      features: ["Asset Tracking", "Depreciation", "Maintenance Scheduling"],
      href: "/products/assets"
    },
    {
      icon: Puzzle,
      title: t("products.custom.name"),
      description: t("products.custom.description"),
      color: "from-orange-500 to-orange-600",
      features: ["Custom Development", "Business Logic", "Integration Ready"],
      href: "/products/custom"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("modules.title")} <span className="text-gradient"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("modules.subtitle")}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <a key={index} href={module.href} className="block">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm card-hover h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`rounded-xl bg-gradient-to-r ${module.color} p-3 text-white group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {module.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">{t("modules.customNeed.title")}</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {t("modules.customNeed.subtitle")}
            </p>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="/products/custom">{t("modules.customNeed.button")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
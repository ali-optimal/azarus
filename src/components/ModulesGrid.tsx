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

const ModulesGrid = () => {
  const modules = [
    {
      icon: Users,
      title: "Customer Relationship CRM",
      description: "Manage customer relationships, sales pipeline, and lead nurturing with advanced automation.",
      color: "from-blue-500 to-blue-600",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics"],
      href: "/products/crm"
    },
    {
      icon: Calculator,
      title: "Finance / Accounting",
      description: "Complete financial management with automated bookkeeping, reporting, and compliance tools.",
      color: "from-green-500 to-green-600",
      features: ["Automated Bookkeeping", "Financial Reports", "Tax Compliance"],
      href: "/products/finance"
    },
    {
      icon: UserCog,
      title: "HR Management",
      description: "Comprehensive human resources management from recruitment to performance evaluation.",
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
      title: "Project Management",
      description: "Plan, track and deliver projects with comprehensive project management and time tracking tools.",
      color: "from-teal-500 to-teal-600",
      features: ["Project Planning", "Time Tracking", "Team Collaboration"],
      href: "/products/projects"
    },
    {
      icon: Package,
      title: "Stock Management",
      description: "Inventory control with real-time tracking, automated reordering, and warehouse management.",
      color: "from-red-500 to-red-600",
      features: ["Inventory Control", "Automated Reordering", "Warehouse Management"],
      href: "/products/stock"
    },
    {
      icon: ShoppingCart,
      title: "Marketing Automation",
      description: "Streamlined marketing campaigns with automation, lead generation, and customer engagement tools.",
      color: "from-indigo-500 to-indigo-600",
      features: ["Email Campaigns", "Lead Generation", "Marketing Analytics"],
      href: "/products/marketing"
    },
    {
      icon: Building,
      title: "Assets Management",
      description: "Track and manage company assets with depreciation calculations and maintenance scheduling.",
      color: "from-pink-500 to-pink-600",
      features: ["Asset Tracking", "Depreciation", "Maintenance Scheduling"],
      href: "/products/assets"
    },
    {
      icon: Puzzle,
      title: "Custom Modules",
      description: "Tailored solutions built specifically for your unique business requirements and processes.",
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
            Complete <span className="text-gradient">Business Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ERP modules designed to handle every aspect of your business operations, 
            from customer relationships to financial management.
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
            <h3 className="text-2xl font-bold mb-2">Need Custom Modules?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our development team can create specialized modules tailored to your unique business requirements. 
              Get a personalized solution that fits perfectly with your workflow.
            </p>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="/products/custom">Discuss Custom Development</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Factory, Heart, ShoppingCart, Briefcase, Code, GraduationCap } from "lucide-react";

const BySector = () => {
  const sectors = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete manufacturing management from production planning to quality control.",
      features: [
        "Production Planning & Scheduling",
        "Inventory & Supply Chain Management", 
        "Quality Control & Compliance",
        "Equipment Maintenance",
        "Cost Accounting"
      ],
      benefits: "Reduce production costs by 20% and improve delivery times"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for healthcare providers and medical facilities.",
      features: [
        "Patient Management",
        "Medical Records & Compliance",
        "Appointment Scheduling",
        "Billing & Insurance",
        "Inventory & Pharmacy"
      ],
      benefits: "Improve patient care while ensuring regulatory compliance"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Omnichannel retail management with integrated e-commerce capabilities.",
      features: [
        "Multi-channel Sales Management",
        "Inventory & Warehouse Management",
        "Customer Loyalty Programs",
        "POS Integration",
        "Supply Chain Optimization"
      ],
      benefits: "Increase sales by 30% with better inventory management"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Project-based business management for consulting and service companies.",
      features: [
        "Project Management & Time Tracking",
        "Client Relationship Management",
        "Resource Planning & Allocation",
        "Billing & Invoicing",
        "Performance Analytics"
      ],
      benefits: "Improve project profitability by 25%"
    },
    {
      icon: Code,
      title: "Technology",
      description: "Agile solutions for software companies and technology startups.",
      features: [
        "Agile Project Management",
        "Product Development Lifecycle",
        "Customer Support & Ticketing",
        "Subscription Management",
        "Developer Tools Integration"
      ],
      benefits: "Accelerate product delivery and improve team productivity"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive management for educational institutions and training centers.",
      features: [
        "Student Information System",
        "Course & Curriculum Management",
        "Faculty & Staff Management",
        "Financial Aid & Billing",
        "Learning Management Integration"
      ],
      benefits: "Streamline operations and improve student outcomes"
    }
  ];

  const industryStats = [
    { sector: "Manufacturing", improvement: "20% Cost Reduction" },
    { sector: "Healthcare", improvement: "99% Compliance Rate" },
    { sector: "Retail", improvement: "30% Sales Increase" },
    { sector: "Services", improvement: "25% Profit Improvement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Industry-Specific Solutions
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Tailored ERP solutions designed for the unique requirements of your industry sector.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                <a href="/book-demo" className="flex items-center">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                <a href="/contact" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Industry Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Industry Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized ERP configurations for different industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <sector.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">{sector.title}</CardTitle>
                  <CardDescription className="text-base">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-green-600 font-semibold text-sm">
                      ✓ {sector.benefits}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Industry Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven improvements across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{stat.sector}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">{stat.improvement}</div>
                  <p className="text-sm text-muted-foreground">Average customer improvement</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="section-padding">
        <div className="container-wide">
          <Card className="p-12 text-center bg-gradient-subtle">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Don't See Your Industry?</h2>
              <p className="text-xl text-muted-foreground">
                Our flexible platform adapts to any industry. Let us create a custom solution for your specific sector requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/products/custom">Explore Custom Solutions</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/contact">Contact Our Experts</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default BySector;
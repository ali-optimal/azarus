import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Factory, Store, Heart, DollarSign, Cpu, Truck } from "lucide-react";

const ByIndustry = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Streamline production, inventory, and supply chain management with specialized manufacturing modules.",
      features: ["Production Planning", "Quality Control", "Supply Chain", "Equipment Maintenance"]
    },
    {
      icon: Store,
      title: "Retail & E-commerce",
      description: "Optimize inventory, customer experience, and multi-channel sales operations.",
      features: ["Inventory Management", "POS Integration", "Customer Analytics", "Order Fulfillment"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Manage patient data, billing, compliance, and operational efficiency in healthcare settings.",
      features: ["Patient Management", "HIPAA Compliance", "Billing & Claims", "Resource Planning"]
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Handle complex financial operations, regulatory compliance, and client management.",
      features: ["Risk Management", "Regulatory Reporting", "Client Onboarding", "Portfolio Management"]
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Support agile development, project management, and rapid scaling requirements.",
      features: ["Project Tracking", "Resource Allocation", "Sprint Management", "Client Billing"]
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description: "Optimize warehouse operations, transportation, and supply chain visibility.",
      features: ["Warehouse Management", "Route Optimization", "Shipment Tracking", "Carrier Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Solutions by Industry
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Tailored ERP solutions designed for the unique challenges and requirements of your industry.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                  Find Your Industry
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Industry-Specific Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We understand that every industry has unique needs. Our ERP solution adapts to your sector's requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <industry.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {industry.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
};

export default ByIndustry;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Target, TrendingUp, Users, Zap, Shield, Globe } from "lucide-react";

const ByNeed = () => {
  const businessNeeds = [
    {
      icon: Target,
      title: "Customer Management",
      description: "Centralize customer data, track interactions, and build stronger relationships.",
      modules: ["CRM", "Marketing Automation", "Customer Support"],
      benefits: "Increase customer retention by 25%"
    },
    {
      icon: TrendingUp,
      title: "Financial Control",
      description: "Complete financial visibility with automated accounting and reporting.",
      modules: ["Finance & Accounting", "Budgeting", "Reporting"],
      benefits: "Reduce accounting time by 60%"
    },
    {
      icon: Users,
      title: "Team Productivity",
      description: "Streamline operations and improve team collaboration across departments.",
      modules: ["Project Management", "HR & Payroll", "Communication"],
      benefits: "Boost productivity by 40%"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to focus on growth.",
      modules: ["Workflow Automation", "Document Management", "Integration"],
      benefits: "Save 15 hours per week"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure regulatory compliance with robust security and audit trails.",
      modules: ["Security Management", "Audit Logs", "Compliance Tools"],
      benefits: "100% audit compliance"
    },
    {
      icon: Globe,
      title: "Business Scaling",
      description: "Scale your operations globally with multi-location and multi-currency support.",
      modules: ["Multi-Location", "Multi-Currency", "Scalability"],
      benefits: "Scale to any size business"
    }
  ];

  const industries = [
    "Manufacturing", "Healthcare", "Retail", "Professional Services", 
    "Technology", "Non-Profit", "Education", "Construction"
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
                Solutions by Business Need
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Find the perfect ERP solution tailored to your specific business challenges and objectives.
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
                  Get Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Needs Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Common Business Challenges</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Azarus ERP addresses your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessNeeds.map((need, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <need.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{need.title}</CardTitle>
                  <CardDescription className="text-base">
                    {need.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {need.modules.map((module, moduleIndex) => (
                        <span 
                          key={moduleIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold">
                    ✓ {need.benefits}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Azarus ERP adapts to various industry requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <h3 className="font-semibold">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <Card className="p-12 text-center bg-gradient-subtle">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Address Your Business Needs?</h2>
              <p className="text-xl text-muted-foreground">
                Let our experts help you identify the right solution for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/contact">Get Expert Consultation</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/book-demo">Schedule a Demo</a>
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

export default ByNeed;
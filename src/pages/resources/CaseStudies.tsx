import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Clock, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "TechManufacturing Corp: 40% Efficiency Increase",
      industry: "Manufacturing",
      company: "TechManufacturing Corp",
      employees: "500-1000",
      challenge: "Manual processes causing delays and inventory issues",
      solution: "Implemented integrated ERP with real-time inventory tracking",
      results: [
        "40% increase in operational efficiency",
        "25% reduction in inventory costs",
        "50% faster order processing"
      ],
      testimonial: "Azarus ERP transformed our entire operation. We've never been more efficient.",
      author: "Sarah Johnson, COO"
    },
    {
      title: "RetailPlus: Unified Multi-Channel Operations",
      industry: "Retail",
      company: "RetailPlus",
      employees: "200-500",
      challenge: "Disconnected systems across online and physical stores",
      solution: "Unified retail management with integrated POS and e-commerce",
      results: [
        "60% improvement in inventory accuracy",
        "35% increase in customer satisfaction",
        "30% reduction in stockouts"
      ],
      testimonial: "Our customers notice the difference. Seamless experience across all channels.",
      author: "Michael Chen, CEO"
    },
    {
      title: "HealthcarePlus: HIPAA-Compliant Patient Management",
      industry: "Healthcare",
      company: "HealthcarePlus",
      employees: "100-200",
      challenge: "Compliance requirements and patient data management",
      solution: "Custom healthcare ERP with built-in compliance features",
      results: [
        "100% HIPAA compliance achieved",
        "45% reduction in administrative tasks",
        "20% improvement in patient satisfaction"
      ],
      testimonial: "Security and compliance built-in from day one. Exactly what we needed.",
      author: "Dr. Emily Rodriguez, Medical Director"
    },
    {
      title: "LogisticsPro: Supply Chain Optimization",
      industry: "Logistics",
      company: "LogisticsPro",
      employees: "300-500",
      challenge: "Complex multi-warehouse operations and route optimization",
      solution: "Advanced warehouse management with AI-powered routing",
      results: [
        "35% reduction in delivery times",
        "28% decrease in fuel costs",
        "50% improvement in warehouse efficiency"
      ],
      testimonial: "Our customers get their orders faster and we're more profitable than ever.",
      author: "David Kim, Operations Manager"
    },
    {
      title: "FinanceFirst: Regulatory Compliance Automation",
      industry: "Financial Services",
      company: "FinanceFirst",
      employees: "150-300",
      challenge: "Complex regulatory reporting and risk management",
      solution: "Financial ERP with automated compliance reporting",
      results: [
        "80% reduction in reporting time",
        "99.9% audit success rate",
        "90% faster regulatory submissions"
      ],
      testimonial: "Compliance is no longer a burden. It's completely automated.",
      author: "Lisa Thompson, Chief Compliance Officer"
    },
    {
      title: "TechStart: Scaling from Startup to Enterprise",
      industry: "Technology",
      company: "TechStart",
      employees: "50-100",
      challenge: "Rapid growth requiring scalable business processes",
      solution: "Cloud ERP with flexible modules and API integrations",
      results: [
        "10x growth handled seamlessly",
        "75% reduction in manual processes",
        "95% employee adoption rate"
      ],
      testimonial: "Azarus grew with us. From 20 to 200 employees without missing a beat.",
      author: "Robert Martinez, CTO"
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
                  Customer Success Stories
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Discover how businesses across industries have transformed their operations with Azarus ERP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Real Results from Real Customers</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how our ERP solutions have delivered measurable business value across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{study.employees}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      <strong>Challenge:</strong> {study.challenge}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Results:
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm italic mb-2">"{study.testimonial}"</p>
                      <p className="text-xs text-muted-foreground font-semibold">{study.author}</p>
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Proven Track Record</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our customers consistently achieve remarkable results with Azarus ERP.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-muted-foreground">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6 Months</div>
                <div className="text-muted-foreground">Average ROI Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Successful Implementations</div>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
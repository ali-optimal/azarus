import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Sliders, Workflow, Plug, BarChart, Puzzle, Link } from "lucide-react";

const Custom = () => {
  const features = [
    {
      icon: Sliders,
      title: "Custom Fields",
      description: "Add unlimited custom fields to any module with various data types and validation rules."
    },
    {
      icon: Workflow,
      title: "Workflow Builder",
      description: "Visual workflow designer to create custom business processes with approvals and automation."
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Comprehensive REST API for seamless integration with third-party systems and applications."
    },
    {
      icon: BarChart,
      title: "Custom Reports",
      description: "Drag-and-drop report builder with advanced filtering, grouping, and visualization options."
    },
    {
      icon: Puzzle,
      title: "Module Extensions",
      description: "Extend existing modules with custom functionality tailored to your business requirements."
    },
    {
      icon: Link,
      title: "Third-party Connectors",
      description: "Pre-built connectors for popular business applications and cloud services."
    }
  ];

  const workflows = [
    {
      title: "Requirements Analysis",
      description: "Define custom requirements and analyze integration points with existing systems"
    },
    {
      title: "Design & Architecture",
      description: "Create detailed technical specifications and system architecture design"
    },
    {
      title: "Development & Testing",
      description: "Agile development process with continuous testing and quality assurance"
    },
    {
      title: "User Acceptance Testing",
      description: "Comprehensive testing with end users to ensure requirements are met"
    },
    {
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance services"
    }
  ];

  const kpis = [
    { title: "Development Time", value: "45%", description: "Faster than traditional methods" },
    { title: "Integration Success", value: "98.5%", description: "Successful API integrations" },
    { title: "User Adoption", value: "92%", description: "Custom feature adoption rate" },
    { title: "ROI Achievement", value: "240%", description: "Average customization ROI" }
  ];

  const faqs = [
    {
      question: "What types of customizations are possible?",
      answer: "We can customize virtually any aspect of the system including custom fields, workflows, reports, dashboards, integrations, and entirely new modules. Our flexible architecture supports extensive customization without compromising system integrity."
    },
    {
      question: "How long does custom development take?",
      answer: "Development timelines vary based on complexity, but typically range from 2-12 weeks. Simple customizations like custom fields can be completed in days, while complex integrations or new modules may take several weeks. We provide detailed timelines during the planning phase."
    },
    {
      question: "Will customizations affect system updates?",
      answer: "Our customization framework is designed to be update-safe. Custom fields, workflows, and reports are preserved during system updates. We follow best practices to ensure your customizations remain functional as the platform evolves."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in system integrations. Our team can connect Azarus ERP with virtually any system that has an API or supports standard data formats. We have experience with CRM systems, e-commerce platforms, accounting software, and many other business applications."
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
                  Custom Modules
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Tailor Azarus ERP to your unique business needs with custom fields, workflows, integrations, and modules.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                  Discuss Custom Needs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                  <Play className="mr-2 h-4 w-4" />
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Limitless Customization Possibilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform Azarus ERP into the perfect solution for your business with powerful customization tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Custom Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Structured approach to deliver custom solutions that exceed expectations
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {workflows.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KPIs Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Customization Success Metrics</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven results from our custom development projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {kpis.map((kpi, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">{kpi.value}</CardTitle>
                    <CardDescription className="text-lg font-semibold">{kpi.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{kpi.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about custom development services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
};

export default Custom;
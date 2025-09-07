import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Package, Calendar, QrCode, TrendingDown, Settings, FileCheck } from "lucide-react";

const Assets = () => {
  const features = [
    {
      icon: Package,
      title: "Asset Tracking",
      description: "Complete visibility of all assets with location tracking, ownership, and status monitoring."
    },
    {
      icon: TrendingDown,
      title: "Depreciation Management",
      description: "Automated depreciation calculations with multiple methods and customizable schedules."
    },
    {
      icon: Calendar,
      title: "Maintenance Scheduling",
      description: "Preventive maintenance planning with automated reminders and work order generation."
    },
    {
      icon: Settings,
      title: "Asset Lifecycle",
      description: "Complete lifecycle management from acquisition to disposal with full audit trails."
    },
    {
      icon: QrCode,
      title: "Barcode/QR Scanning",
      description: "Mobile scanning capabilities for quick asset identification and status updates."
    },
    {
      icon: FileCheck,
      title: "Compliance Reporting",
      description: "Automated compliance reports for regulatory requirements and internal audits."
    }
  ];

  const workflows = [
    {
      title: "Asset Registration",
      description: "Register new assets with complete details, photos, and documentation"
    },
    {
      title: "Asset Allocation",
      description: "Assign assets to departments, locations, or employees with tracking"
    },
    {
      title: "Maintenance Execution",
      description: "Schedule and track maintenance activities with cost recording"
    },
    {
      title: "Depreciation Processing",
      description: "Calculate and record depreciation using various accounting methods"
    },
    {
      title: "Asset Disposal",
      description: "Manage asset retirement and disposal with proper documentation"
    }
  ];

  const kpis = [
    { title: "Asset Utilization", value: "87%", description: "Average asset utilization rate" },
    { title: "Maintenance Costs", value: "-32%", description: "Reduction in maintenance expenses" },
    { title: "Asset ROI", value: "156%", description: "Return on asset investment" },
    { title: "Compliance Rate", value: "99.5%", description: "Regulatory compliance score" }
  ];

  const faqs = [
    {
      question: "How does asset tracking work across multiple locations?",
      answer: "Our system provides real-time location tracking with barcode/QR code scanning. Assets can be easily transferred between locations with automatic updates to records and notifications to relevant stakeholders."
    },
    {
      question: "What depreciation methods are supported?",
      answer: "We support all major depreciation methods including straight-line, declining balance, sum-of-years digits, and units of production. You can configure different methods for different asset categories."
    },
    {
      question: "Can I schedule preventive maintenance automatically?",
      answer: "Yes, our system automatically schedules maintenance based on time intervals, usage hours, or mileage. It sends reminders to maintenance teams and can generate work orders automatically."
    },
    {
      question: "How does compliance reporting work?",
      answer: "Our compliance module generates automated reports for various regulatory requirements including safety inspections, environmental compliance, and financial reporting standards like GAAP and IFRS."
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
                  Asset Management
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Comprehensive asset lifecycle management with tracking, maintenance scheduling, and compliance reporting.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                  <Play className="mr-2 h-4 w-4" />
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Complete Asset Lifecycle Management</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track, maintain, and optimize your assets from acquisition to disposal with powerful management tools.
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
              <h2 className="text-3xl md:text-4xl font-bold">Asset Management Workflow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Streamlined process from asset acquisition to disposal
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
              <h2 className="text-3xl md:text-4xl font-bold">Asset Performance Metrics</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Monitor key asset metrics to optimize performance and reduce costs
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
                Get answers to common questions about our asset management module
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

export default Assets;
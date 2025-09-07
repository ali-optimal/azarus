import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Package2, Warehouse, ArrowLeftRight, AlertTriangle, Scan, MapPin } from "lucide-react";

const Stock = () => {
  const features = [
    {
      icon: Package2,
      title: "Inventory Tracking",
      description: "Real-time inventory levels with automatic updates and low-stock alerts across all locations."
    },
    {
      icon: Warehouse,
      title: "Warehouse Management",
      description: "Multi-warehouse support with bin locations, pick paths, and storage optimization."
    },
    {
      icon: ArrowLeftRight,
      title: "Stock Transfers",
      description: "Seamless inter-warehouse transfers with tracking and automated reconciliation."
    },
    {
      icon: AlertTriangle,
      title: "Reorder Points",
      description: "Intelligent reorder point calculations with automated purchase order generation."
    },
    {
      icon: Scan,
      title: "Barcode Scanning",
      description: "Mobile barcode scanning for receiving, picking, and cycle counting operations."
    },
    {
      icon: MapPin,
      title: "Multi-Location Support",
      description: "Manage inventory across multiple locations with centralized visibility and control."
    }
  ];

  const workflows = [
    {
      title: "Purchase & Receive",
      description: "Create purchase orders and receive inventory with quality checks"
    },
    {
      title: "Store & Organize",
      description: "Allocate received items to optimal bin locations within warehouses"
    },
    {
      title: "Pick & Pack",
      description: "Efficient picking processes with optimized routes and packing instructions"
    },
    {
      title: "Ship & Track",
      description: "Ship orders with tracking information and inventory adjustments"
    },
    {
      title: "Reorder & Replenish",
      description: "Automated reordering based on demand forecasts and stock levels"
    }
  ];

  const kpis = [
    { title: "Stock Turnover", value: "8.5x", description: "Annual inventory turnover rate" },
    { title: "Order Accuracy", value: "99.7%", description: "Pick and pack accuracy" },
    { title: "Carrying Costs", value: "-28%", description: "Reduction in inventory costs" },
    { title: "Stockout Rate", value: "0.3%", description: "Frequency of stockouts" }
  ];

  const faqs = [
    {
      question: "How does multi-warehouse inventory management work?",
      answer: "Our system provides centralized visibility across all warehouse locations while maintaining local control. You can track inventory levels, perform transfers, and optimize stock distribution based on demand patterns and location performance."
    },
    {
      question: "Can the system automatically reorder stock?",
      answer: "Yes, our intelligent reorder system analyzes historical demand, lead times, and seasonal trends to automatically generate purchase orders when stock levels reach predetermined reorder points. You can set different rules for different product categories."
    },
    {
      question: "What stock valuation methods are supported?",
      answer: "We support multiple inventory valuation methods including FIFO (First In, First Out), LIFO (Last In, First Out), weighted average cost, and specific identification. You can configure different methods for different product categories."
    },
    {
      question: "How does the system integrate with purchasing and sales?",
      answer: "Our stock management module seamlessly integrates with purchasing for automatic PO generation and with sales for real-time availability checks. This ensures accurate inventory levels and prevents overselling while optimizing purchasing decisions."
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
                  Stock Management
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Advanced inventory control with real-time tracking, automated reordering, and multi-warehouse management.
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
              <h2 className="text-3xl md:text-4xl font-bold">Intelligent Inventory Control</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Optimize inventory levels, reduce costs, and improve operational efficiency with smart stock management.
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
              <h2 className="text-3xl md:text-4xl font-bold">Inventory Management Workflow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Optimized inventory flow from purchase to fulfillment
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
              <h2 className="text-3xl md:text-4xl font-bold">Inventory Performance Metrics</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track key inventory metrics to optimize stock levels and reduce costs
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
                Get answers to common questions about our stock management module
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

export default Stock;
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Package2, Warehouse, ArrowLeftRight, AlertTriangle, Scan, MapPin, BarChart3, TrendingUp, Settings } from "lucide-react";

const Stock = () => {
  const features = [
    {
      icon: Package2,
      title: "Real-time Inventory Tracking",
      description: "Monitor inventory levels across all locations with real-time updates, automated alerts, and comprehensive stock visibility."
    },
    {
      icon: Warehouse,
      title: "Multi-Warehouse Management",
      description: "Optimize warehouse operations with bin location management, pick path optimization, and storage capacity planning."
    },
    {
      icon: ArrowLeftRight,
      title: "Automated Stock Transfers",
      description: "Streamline inter-warehouse transfers with automated workflows, tracking, and instant inventory reconciliation."
    },
    {
      icon: AlertTriangle,
      title: "Smart Reorder Management",
      description: "AI-powered reorder point calculations with automated purchase order generation and supplier management."
    },
    {
      icon: Scan,
      title: "Mobile Barcode Solutions",
      description: "Complete mobile scanning capabilities for receiving, picking, cycle counting, and inventory auditing operations."
    },
    {
      icon: MapPin,
      title: "Multi-Location Visibility",
      description: "Centralized control and visibility across multiple warehouses, stores, and distribution centers."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive inventory reports, demand forecasting, and performance analytics for data-driven decisions."
    },
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      description: "Predictive analytics for demand planning, seasonal adjustments, and optimal inventory level recommendations."
    },
    {
      icon: Settings,
      title: "Inventory Optimization",
      description: "ABC analysis, dead stock identification, and inventory turnover optimization for maximum efficiency."
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
        <section className="section-padding pt-20 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #7c3aed 50%, #ec4899 75%, #f97316 100%)'
        }}>
          {/* Animated stars/sparkles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              />
            ))}
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-white">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Stock Management & Inventory Control
                  </h1>
                  <p className="text-xl text-white/90">
                    Advanced inventory control with real-time tracking, automated reordering, and intelligent warehouse management.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold group">
                    <a href="/book-demo" className="flex items-center">
                      Get Started
                    </a>
                  </Button>
                  <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600 transition-all group">
                    <a href="/contact" className="flex items-center">
                      Contact Sales
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Content - Lottie Animation */}
              <div className="relative lg:scale-75 lg:-translate-y-8">
                <DotLottieReact
                  src="https://lottie.host/81765914-782b-470f-918e-9ab451dafcdc/be5Rkq9aoz.lottie"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Wavy bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 -mb-px">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,32 C360,10 720,10 1080,32 C1260,43 1350,48 1440,48 L1440,60 L0,60 Z" fill="white" stroke="white"/>
            </svg>
          </div>
        </section>

        {/* Stock Image Section */}
        <section className="py-16">
          <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img 
                src="/accounting reports - tax summary (1).png" 
                alt="Stock Management Dashboard" 
                className="mx-auto max-w-7xl w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Enhanced Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/40 to-pink-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            
            {/* Geometric shapes and lines */}
            <div className="absolute top-20 left-1/4 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-float" style={{animationDuration: '12s'}} />
            <div className="absolute top-40 right-1/3 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
            <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-float" style={{animationDelay: '1.5s', animationDuration: '14s'}} />
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              />
            ))}
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="container-wide">
            <div className="text-center mb-16 relative">
              <div className="inline-block mb-4 animate-bounce">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 shadow-lg">
                  ✨ Core Features
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Intelligent Stock Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Complete inventory control with AI-powered optimization and real-time visibility
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                    {/* Enhanced gradient background with multiple layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/30 to-transparent" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl" />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  </Card>
                </motion.div>
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
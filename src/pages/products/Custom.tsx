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
      description: "Add unlimited custom fields to any module with various data types and validation rules.",
      benefits: "Capture 100% of your data needs"
    },
    {
      icon: Workflow,
      title: "Workflow Builder",
      description: "Visual workflow designer to create custom business processes with approvals and automation.",
      benefits: "Automate 90% of manual processes"
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Comprehensive REST API for seamless integration with third-party systems and applications.",
      benefits: "Connect with 500+ applications"
    },
    {
      icon: BarChart,
      title: "Custom Reports",
      description: "Drag-and-drop report builder with advanced filtering, grouping, and visualization options.",
      benefits: "Generate insights 10x faster"
    },
    {
      icon: Puzzle,
      title: "Module Extensions",
      description: "Extend existing modules with custom functionality tailored to your business requirements.",
      benefits: "Unlimited functionality expansion"
    },
    {
      icon: Link,
      title: "Third-party Connectors",
      description: "Pre-built connectors for popular business applications and cloud services.",
      benefits: "Reduce integration time by 80%"
    }
  ];

  const workflows = [
    {
      title: "Requirements Analysis",
      description: "Define custom requirements and analyze integration points with existing systems",
      duration: "1-2 weeks"
    },
    {
      title: "Design & Architecture",
      description: "Create detailed technical specifications and system architecture design",
      duration: "1-3 weeks"
    },
    {
      title: "Development & Testing",
      description: "Agile development process with continuous testing and quality assurance",
      duration: "2-8 weeks"
    },
    {
      title: "User Acceptance Testing",
      description: "Comprehensive testing with end users to ensure requirements are met",
      duration: "1-2 weeks"
    },
    {
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance services",
      duration: "Ongoing"
    }
  ];

  const kpis = [
    { title: "Development Speed", value: "45%", description: "Faster than traditional methods", icon: "⚡" },
    { title: "Integration Success", value: "98.5%", description: "Successful API integrations", icon: "🔗" },
    { title: "User Adoption", value: "92%", description: "Custom feature adoption rate", icon: "👥" },
    { title: "ROI Achievement", value: "240%", description: "Average customization ROI", icon: "📈" }
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
      
      {/* Hero Section */}
      <section className="section-padding pt-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #7c3aed 50%, #ec4899 75%, #f97316 100%)'
      }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
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
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  🛠️ Custom Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tailored ERP Solutions
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Transform Azarus ERP into the perfect solution for your unique business needs with custom fields, workflows, integrations, and modules.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold group">
                <a href="/contact" className="flex items-center">
                  Discuss Custom Needs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600 transition-all group">
                <a href="/book-demo" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  View Examples
                </a>
              </Button>
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

      {/* Center Image Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Enhanced Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-pink-400/30 to-orange-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-20 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-20 h-20 border-2 border-orange-300/30 rounded-full animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute bottom-32 right-32 w-16 h-16 border-2 border-pink-300/40 rotate-45" />
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rotate-12" />
          <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-orange-300/20 rounded-full" />
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-700 shadow-lg">
                ⚙️ Customization Platform
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Build Your Perfect ERP</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <img 
                src="/ChatGPT Image Dec 21, 2025, 10_54_41 PM (1) (1).png" 
                alt="Custom ERP Development Platform"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-orange-300/15 to-transparent rounded-full" />
          
          {/* Floating geometric elements */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${0.5 + Math.random() * 1.5})`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-700 shadow-lg">
                ✨ Customization Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Limitless Possibilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every business is unique. Our powerful customization platform adapts to your exact requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-orange-300 hover:border-pink-500 overflow-hidden bg-white">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-green-800 font-semibold text-xs sm:text-sm leading-relaxed">
                        {feature.benefits}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Enhanced Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/25 to-pink-400/25 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-400/25 to-orange-400/25 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
          
          {/* Complex geometric patterns */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-orange-200/40 rounded-full animate-spin" style={{animationDuration: '30s'}} />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-pink-200/50 rotate-45 animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-orange-100/30 to-pink-100/30 rotate-12" />
          
          {/* Floating particles with different sizes */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-10"
              style={{
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 8}s`,
                animation: `pulse ${2 + Math.random() * 3}s infinite`
              }}
            />
          ))}
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                🔄 Development Process
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              From Concept to Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 5-step process ensures your custom solution exceeds expectations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {workflows.map((step, index) => (
                <Card key={index} className="group relative overflow-hidden border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <CardTitle className="text-xl sm:text-2xl text-gray-800 group-hover:text-orange-700 transition-colors">{step.title}</CardTitle>
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 rounded-full text-sm font-semibold mt-2 sm:mt-0">
                            {step.duration}
                          </span>
                        </div>
                        <CardDescription className="text-base text-gray-600 leading-relaxed">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                📊 Success Metrics
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real metrics from successful custom development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {kpis.map((kpi, index) => (
              <div key={index} className="group relative">
                <Card className="text-center p-8 border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Card gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {kpi.icon}
                    </div>
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {kpi.value}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">
                      {kpi.title}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-sm text-gray-600 font-medium">{kpi.description}</p>
                  </CardContent>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Multi-layered background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-300/25 to-transparent rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-orange-200/15 to-pink-200/15 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
          
          {/* Complex geometric arrangements */}
          <div className="absolute top-16 right-16 w-28 h-28 border-2 border-orange-200/30 rotate-12 animate-spin" style={{animationDuration: '25s'}} />
          <div className="absolute bottom-24 left-24 w-20 h-20 border border-pink-200/40 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-16 w-12 h-12 bg-gradient-to-br from-orange-100/40 to-pink-100/40 rotate-45" />
          <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-orange-200/30 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
          
          {/* Scattered micro elements */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-8"
              style={{
                width: `${1 + Math.random() * 4}px`,
                height: `${1 + Math.random() * 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${1.5 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                ❓ Common Questions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Get Your Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about custom ERP development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <AccordionTrigger className="text-left font-semibold py-8 px-8 hover:no-underline text-lg text-gray-800 hover:text-orange-700 transition-colors">
                    <span className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-8 px-8 leading-relaxed text-base pl-20">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default Custom;
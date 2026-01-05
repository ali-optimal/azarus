import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Factory, ShoppingCart, Briefcase, Code } from "lucide-react";

const BySector = () => {
  const sectors = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Transform your manufacturing operations with end-to-end production management, from raw materials to finished goods.",
      animationUrl: "https://lottie.host/81765914-782b-470f-918e-9ab451dafcdc/be5Rkq9aoz.lottie",
      usageContent: "Our ERP system streamlines your entire manufacturing process by integrating production planning, inventory control, and quality assurance into one unified platform. Real-time visibility into production lines enables you to optimize resource allocation, minimize waste, and respond quickly to demand changes. Advanced scheduling algorithms balance workload across equipment and personnel, while automated quality checks ensure consistent product standards. The system tracks every component from supplier to assembly line, providing complete traceability for compliance and continuous improvement initiatives.",
      features: [
        "Real-time Production Monitoring & Control",
        "Advanced Planning & Scheduling (APS)",
        "Inventory & Supply Chain Optimization", 
        "Quality Management & Traceability",
        "Equipment Maintenance & Downtime Tracking",
        "Cost Accounting & Profitability Analysis",
        "Shop Floor Integration & IoT Connectivity",
        "Bill of Materials (BOM) Management"
      ],
      benefits: "Reduce production costs by 20%, improve on-time delivery by 35%, and minimize inventory holding costs"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Unify your online and offline retail operations with seamless omnichannel management capabilities.",
      animationUrl: "https://lottie.host/d7c0407d-c3ac-4a28-9b54-388eafcb45c4/FifDgTkgql.lottie",
      usageContent: "Manage your entire retail ecosystem from a single platform that synchronizes inventory, sales, and customer data across all channels. Whether customers shop online, in-store, or via mobile app, they experience consistent pricing, availability, and service. The system automatically reconciles stock levels across locations, preventing overselling while optimizing inventory distribution. Built-in customer analytics track purchasing patterns and preferences, enabling personalized marketing campaigns and loyalty programs. Point-of-sale integration ensures real-time transaction processing, while the unified customer database creates a 360-degree view of every shopper interaction.",
      features: [
        "Multi-channel Sales & Inventory Sync",
        "Unified Customer Database & CRM",
        "Advanced Warehouse Management",
        "POS Integration & Mobile Commerce",
        "Customer Loyalty & Rewards Programs",
        "Dynamic Pricing & Promotions Engine",
        "Supply Chain & Vendor Management",
        "E-commerce Platform Integration"
      ],
      benefits: "Increase sales by 30%, reduce stockouts by 40%, and improve customer retention by 25%"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Optimize project delivery and maximize billable hours with comprehensive service business management.",
      animationUrl: "https://lottie.host/45acc7c1-109f-4ad8-8d8d-852484f98c0b/41de0yJLeE.lottie",
      usageContent: "Purpose-built for service-oriented businesses, our system transforms how you manage projects, resources, and client relationships. Track every billable minute with integrated time tracking that seamlessly flows into invoicing and financial reporting. Resource management tools provide visibility into team capacity and skills, enabling optimal project staffing and preventing burnout. Project dashboards give real-time insights into progress, profitability, and potential risks, allowing proactive management of scope and budget. The client portal keeps stakeholders informed while reducing administrative overhead through self-service access to project status, documents, and billing information.",
      features: [
        "Project Portfolio Management & Tracking",
        "Time & Expense Tracking with Mobile App",
        "Resource Planning & Capacity Management",
        "Client Relationship & Contract Management",
        "Automated Billing & Invoice Generation",
        "Project Profitability Analytics",
        "Document Management & Collaboration",
        "Client Portal & Self-Service Access"
      ],
      benefits: "Improve project profitability by 25%, increase billable utilization by 18%, and reduce administrative time by 40%"
    },
    {
      icon: Code,
      title: "Technology & Software",
      description: "Accelerate product development and scale operations with agile-ready technology company solutions.",
      animationUrl: "https://lottie.host/930fac90-82e9-4b00-bcee-1febe23571ca/zL8uFrZsqK.lottie",
      usageContent: "Designed for the fast-paced technology sector, our platform supports agile methodologies while providing the structure needed for sustainable growth. Seamlessly integrate with your development tools and workflows, from code repositories to CI/CD pipelines. Sprint planning and backlog management tools align engineering efforts with business priorities, while burndown charts and velocity metrics provide actionable insights for continuous improvement. The subscription management module handles complex pricing models, trial periods, and automated renewals. Customer support integration creates a feedback loop between users and product teams, ensuring that development efforts focus on high-impact features.",
      features: [
        "Agile Project Management & Sprint Planning",
        "Product Roadmap & Feature Prioritization",
        "Developer Tools Integration (Git, Jira, etc.)",
        "Subscription & Licensing Management",
        "Customer Support & Ticketing System",
        "Release Management & Version Control",
        "API Usage Tracking & Analytics",
        "Team Collaboration & Knowledge Base"
      ],
      benefits: "Accelerate product delivery by 30%, improve sprint velocity by 22%, and increase customer satisfaction by 35%"
    }
  ];

  const industryStats = [
    { sector: "Manufacturing", improvement: "20% Cost Reduction" },
    { sector: "Retail", improvement: "30% Sales Increase" },
    { sector: "Services", improvement: "25% Profit Improvement" },
    { sector: "Technology", improvement: "30% Faster Delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #f4971b 0%, #a21464 100%)'
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
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white mt-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  🏭 Industry Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Purpose-Built ERP for Your Industry
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Specialized solutions designed to address the unique challenges and requirements of your sector, delivered out-of-the-box.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold group">
                <a href="/book-demo" className="flex items-center">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600 transition-all group">
                <a href="/contact" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Industry Consultation
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

      {/* Sectors Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-700 shadow-lg">
                ✨ Industry-Specific Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">Tailored for Your Sector</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each solution is pre-configured with industry best practices, workflows, and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-orange-300 hover:border-pink-500 overflow-hidden bg-white">
                <CardHeader className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex-1 w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                        <sector.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl md:text-3xl mb-3">{sector.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {sector.description}
                      </CardDescription>
                    </div>
                    <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto sm:mx-0 sm:ml-4">
                      <DotLottieReact
                        src={sector.animationUrl}
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                  <div className="bg-gradient-to-br from-orange-50/50 to-pink-50/50 rounded-xl p-3 sm:p-5">
                    <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-orange-900">How Our System Works in {sector.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {sector.usageContent}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                      <span className="w-1 h-4 sm:h-6 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full"></span>
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3 group">
                          <div className="w-2 h-2 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                          <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 transition-colors font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 sm:pt-4 border-t-2 border-gradient-to-r from-purple-100 to-blue-100">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 sm:p-4 border border-green-200">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                        </div>
                        <p className="text-green-800 font-semibold text-xs sm:text-sm leading-relaxed">
                          {sector.benefits}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Results Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-orange-100/40 to-pink-100/40 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                📊 Proven Results
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses - see how our industry-specific solutions drive measurable improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industryStats.map((stat, index) => (
              <div key={index} className="group relative">
                <Card className="text-center p-8 border-2 border-transparent hover:border-orange-300 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl overflow-hidden">
                  {/* Card gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">#{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">
                      {stat.sector}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="mb-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        {stat.improvement}
                      </div>
                      <div className="h-1 w-16 mx-auto bg-gradient-to-r from-orange-500 to-pink-500 rounded-full group-hover:w-20 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Average customer improvement</p>
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

      {/* Custom Solutions Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  opacity: Math.random() * 0.6 + 0.2
                }}
              />
            ))}
          </div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/30 rotate-45" />
          <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rotate-12" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
              <div className="p-16 text-center relative">
                {/* Decorative top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-600" />
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-block mb-4">
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-700">
                        🚀 Custom Solutions
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      Don't See Your
                      <span className="block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                        Industry?
                      </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Our flexible platform adapts to any industry. Let us create a custom solution tailored to your specific sector requirements and business processes.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <a href="/products/custom" className="flex items-center">
                        Explore Custom Solutions
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 transition-all duration-300">
                      <a href="/contact" className="flex items-center">
                        <Play className="mr-2 h-5 w-5" />
                        Contact Our Experts
                      </a>
                    </Button>
                  </div>
                  
                  {/* Bottom feature highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">⚡</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Rapid Deployment</h4>
                      <p className="text-sm text-gray-600">Custom solutions in 4-6 weeks</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🔧</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Fully Customizable</h4>
                      <p className="text-sm text-gray-600">Tailored to your exact needs</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">📞</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                      <p className="text-sm text-gray-600">Dedicated support team</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default BySector;
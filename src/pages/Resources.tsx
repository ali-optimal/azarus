import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Video, Download, Code, MessageSquare } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive guides and tutorials for every aspect of your journey",
      color: "from-blue-500 to-indigo-500",
      items: [
        { name: "Getting Started Guide", href: "/resources/documentation", type: "Guide" },
        { name: "Best Practices", href: "/resources/documentation", type: "Guide" },
        { name: "User Manual", href: "/resources/documentation", type: "Manual" },
        { name: "Admin Guide", href: "/resources/documentation", type: "Guide" }
      ]
    },
    {
      icon: FileText,
      title: "Case Studies & Reports",
      description: "Real-world success stories and industry insights",
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Manufacturing Success Story", href: "/resources/case-studies", type: "Case Study" },
        { name: "Healthcare Implementation", href: "/resources/case-studies", type: "Case Study" },
        { name: "ROI Analysis Report", href: "/resources/white-papers", type: "White Paper" },
        { name: "Industry Trends", href: "/resources/white-papers", type: "White Paper" }
      ]
    },
    {
      icon: Video,
      title: "Learning Resources",
      description: "Videos, webinars, and interactive training materials",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Product Demo Videos", href: "/book-demo", type: "Video" },
        { name: "Training Webinars", href: "/book-demo", type: "Webinar" },
        { name: "Feature Tutorials", href: "/resources/documentation", type: "Tutorial" },
        { name: "Implementation Guide", href: "/resources/documentation", type: "Guide" }
      ]
    },
    {
      icon: Code,
      title: "Developer Resources",
      description: "APIs, SDKs, and technical documentation for developers",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "API Documentation", href: "/resources/documentation", type: "API Docs" },
        { name: "SDK Downloads", href: "/resources/documentation", type: "SDK" },
        { name: "Integration Examples", href: "/resources/documentation", type: "Examples" },
        { name: "Developer Forum", href: "/resources/documentation", type: "Forum" }
      ]
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Brochures, templates, and essential business tools",
      color: "from-teal-500 to-cyan-500",
      items: [
        { name: "Product Brochure", href: "/contact", type: "PDF" },
        { name: "Feature Comparison", href: "/contact", type: "PDF" },
        { name: "Implementation Checklist", href: "/contact", type: "Template" },
        { name: "ROI Calculator", href: "/contact", type: "Tool" }
      ]
    },
    {
      icon: MessageSquare,
      title: "Support & Community",
      description: "Get help and connect with other users worldwide",
      color: "from-rose-500 to-pink-500",
      items: [
        { name: "Help Center", href: "/contact", type: "Support" },
        { name: "Community Forum", href: "/contact", type: "Forum" },
        { name: "Submit a Ticket", href: "/contact", type: "Support" },
        { name: "Contact Support", href: "/contact", type: "Contact" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Complete Implementation Guide",
      description: "Step-by-step guide to successfully implement Azarus ERP in your organization.",
      type: "Guide",
      href: "/resources/documentation"
    },
    {
      title: "Manufacturing ROI Case Study",
      description: "How a manufacturing company achieved 300% ROI with Azarus ERP implementation.",
      type: "Case Study",
      href: "/resources/case-studies"
    },
    {
      title: "API Integration Whitepaper",
      description: "Technical deep-dive into integrating Azarus ERP with your existing systems.",
      type: "White Paper",
      href: "/resources/white-papers"
    }
  ];

  const quickLinks = [
    { name: "Blog", href: "/resources/blog", description: "Latest news and insights" },
    { name: "Release Notes", href: "/resources/release-notes", description: "Latest updates and features" },
    { name: "Documentation", href: "/resources/documentation", description: "Complete product documentation" },
    { name: "Case Studies", href: "/resources/case-studies", description: "Customer success stories" },
    { name: "White Papers", href: "/resources/white-papers", description: "Industry insights and research" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden" style={{
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
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  📚 Resource Center
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Everything You Need to Succeed
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                From getting started guides to advanced implementation resources - your complete toolkit for Azarus ERP success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold group">
                <a href="/resources/documentation" className="flex items-center">
                  Browse Documentation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600 transition-all group">
                <a href="/contact" className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get Support
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

      {/* Quick Links Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/20 to-blue-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ⚡ Quick Access
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Jump to Popular Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast-track your learning with our most accessed content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {quickLinks.map((link, index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-indigo-500',
                'from-pink-500 to-rose-500',
                'from-orange-500 to-red-500',
                'from-green-500 to-emerald-500'
              ];
              const icons = ['📝', '📢', '📚', '📊', '📄'];
              
              return (
                <a 
                  key={index} 
                  href={link.href}
                  className="group"
                >
                  <Card className="relative overflow-hidden transition-all duration-300 hover:scale-[1.05] border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl bg-white h-full cursor-pointer">
                    {/* Card gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <CardContent className="relative z-10 p-6 text-center h-full flex flex-col items-center justify-center">
                      <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-3 transition-all duration-300">
                        {icons[index]}
                      </div>
                      
                      <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                        {link.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                        {link.description}
                      </p>
                    </CardContent>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-violet-300/20 to-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ⭐ Featured Content
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Must-Read Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most popular and recently updated content to accelerate your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2 border-gray-200 hover:border-emerald-300 shadow-lg hover:shadow-2xl bg-white h-full">
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-7 w-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 border border-emerald-200 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-1 flex flex-col justify-end">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-white hover:border-emerald-400 transition-all duration-300 rounded-xl py-3 group-hover:shadow-lg" 
                    asChild
                  >
                    <a href={resource.href} className="flex items-center justify-center">
                      <Download className="mr-2 h-4 w-4" />
                      Access Resource
                    </a>
                  </Button>
                </CardContent>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full opacity-10 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                📚 Resource Library
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive collection of resources organized by category to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl bg-white">
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">{category.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl p-4 border border-gray-100">
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="group/item">
                          <a 
                            href={item.href}
                            className="flex justify-between items-center hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-700">{item.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium bg-gradient-to-r ${category.color} bg-opacity-10 text-gray-600 border border-gray-200`}>
                              {item.type}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-15 group-hover:opacity-30 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default Resources;
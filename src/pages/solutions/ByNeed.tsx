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
      benefits: "Increase customer retention by 25%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Financial Control",
      description: "Complete financial visibility with automated accounting and reporting.",
      modules: ["Finance & Accounting", "Budgeting", "Reporting"],
      benefits: "Reduce accounting time by 60%",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Team Productivity",
      description: "Streamline operations and improve team collaboration across departments.",
      modules: ["Project Management", "HR & Payroll", "Communication"],
      benefits: "Boost productivity by 40%",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to focus on growth.",
      modules: ["Workflow Automation", "Document Management", "Integration"],
      benefits: "Save 15 hours per week",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure regulatory compliance with robust security and audit trails.",
      modules: ["Security Management", "Audit Logs", "Compliance Tools"],
      benefits: "100% audit compliance",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Business Scaling",
      description: "Scale your operations globally with multi-location and multi-currency support.",
      modules: ["Multi-Location", "Multi-Currency", "Scalability"],
      benefits: "Scale to any size business",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const industries = [
    "Manufacturing", "Retail", "Professional Services", 
    "Technology", "Non-Profit"
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
                  🎯 Business Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Solutions by Business Need
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Find the perfect ERP solution tailored to your specific business challenges and objectives.
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
                  Get Consultation
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

      {/* Business Needs Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
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
                🎯 Business Challenges
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Solutions That Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Azarus ERP addresses your specific business needs with tailored solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {businessNeeds.map((need, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl bg-white">
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${need.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${need.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <need.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">{need.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {need.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${need.color} rounded-full`}></div>
                      Key Modules:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {need.modules.map((module, moduleIndex) => (
                        <span 
                          key={moduleIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${need.color} text-white rounded-full text-sm font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-green-800 font-semibold text-sm leading-relaxed">
                        {need.benefits}
                      </p>
                    </div>
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

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
          
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
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
              <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                🏭 Industry Solutions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tailored ERP solutions designed to meet the unique challenges and requirements of your specific industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => {
              const colors = [
                'from-blue-300 to-cyan-300',
                'from-green-300 to-emerald-300', 
                'from-purple-300 to-indigo-300',
                'from-orange-300 to-red-300',
                'from-pink-300 to-rose-300'
              ];
              const icons = ['🏭', '🛒', '💼', '💻', '🤝'];
              
              return (
                <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.08] border-2 border-gray-200 hover:border-purple-300 shadow-lg hover:shadow-2xl bg-white">
                  {/* Card gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardContent className="relative z-10 p-6 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-125 group-hover:rotate-6 transition-all duration-300`}>
                      <span className="text-4xl">{icons[index]}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                      {industry}
                    </h3>
                  </CardContent>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </Card>
              );
            })}
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
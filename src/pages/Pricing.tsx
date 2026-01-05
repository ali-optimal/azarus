import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups ",
      monthlyPrice: 33,
      annualPrice: 300,
      popular: false,
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Up to 5 users",
        "Basic CRM & Project Management",
        "Email support",
        "5GB storage",
        "Basic reporting",
        "Mobile app access",
        "API access"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses ready to scale",
      monthlyPrice: 59,
      annualPrice: 580,
      popular: true,
      icon: Sparkles,
      color: "from-orange-500 to-pink-500",
      features: [
        "Up to 25 users",
        "All Starter features",
        "Advanced CRM & Marketing",
        "HR & Payroll modules",
        "Priority support",
        "50GB storage",
        "Advanced analytics",
        "Custom workflows",
        "Third-party integrations"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with enterprise needs",
      monthlyPrice: 99,
      annualPrice: 999,
      popular: false,
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      features: [
        "Unlimited users",
        "All Professional features",
        "Complete module suite",
        "Dedicated support manager",
        "Unlimited storage",
        "White-label options",
        "Advanced security",
        "Custom development",
        "On-premise deployment",
        "SLA guarantee"
      ]
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice;
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #7c3aed 50%, #ec4899 75%, #f97316 100%)'
      }}>
        {/* Animated background elements */}
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
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white py-20 lg:py-32">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
                  💰 Transparent Pricing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Choose Your Perfect Plan
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Simple, transparent pricing with no hidden fees. Start free, upgrade as you grow, and scale your business with confidence.
              </p>
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

      {/* Pricing Cards Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-pink-400/20 to-orange-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          
          {/* Floating elements */}
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
                🎯 Perfect Plan for Every Business
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Pricing That Scales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              14-day free trial • No setup fees • Cancel anytime • Money-back guarantee
            </p>
          </div>

          {/* Billing Toggle - Moved above cards */}
          <div className="flex items-center justify-center gap-6 bg-gradient-to-r from-blue-50 to-pink-50 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200 mb-16 max-w-lg mx-auto shadow-lg">
            <span className={`text-xl font-bold transition-all duration-300 ${!isAnnual ? 'text-blue-600 scale-110' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="mx-4 scale-125"
            />
            <span className={`text-xl font-bold transition-all duration-300 ${isAnnual ? 'text-pink-600 scale-110' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 animate-pulse shadow-lg ml-2 text-sm font-bold">
                Save up to 24%
              </Badge>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm z-30">
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="text-center relative z-10 pt-8 pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-3">{plan.name}</CardTitle>
                  <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className={`text-6xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        ${getPrice(plan)}
                      </span>
                      <span className="text-gray-500 text-lg">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Save {getSavings(plan)}% annually!
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full group/btn transition-all duration-300 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
                    size="lg"
                  >
                    <a href={plan.name === 'Enterprise' ? '/contact' : '/book-demo'} className="flex items-center">
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardHeader>
                
                <CardContent className="relative z-10 px-8 pb-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 text-lg mb-4 flex items-center gap-2">
                      <Check className={`h-5 w-5 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`} />
                      Everything included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 group/item">
                          <div className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-15 group-hover:opacity-30 transition-opacity" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-300/25 to-transparent rounded-full" />
          
          {/* Floating elements */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-br from-blue-300 to-pink-300 rounded-full opacity-5"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                📊 Feature Comparison
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compare all features across our plans to find the perfect fit for your business
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-pink-600 text-white">
                      <th className="text-left p-6 font-bold text-lg">Features</th>
                      <th className="text-center p-6 font-bold text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <Zap className="h-5 w-5" />
                          Starter
                        </div>
                      </th>
                      <th className="text-center p-6 font-bold text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          Professional
                        </div>
                      </th>
                      <th className="text-center p-6 font-bold text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <Shield className="h-5 w-5" />
                          Enterprise
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Number of Users", starter: "5 users", professional: "25 users", enterprise: "Unlimited" },
                      { feature: "Storage Space", starter: "5GB", professional: "50GB", enterprise: "Unlimited" },
                      { feature: "CRM System", starter: true, professional: true, enterprise: true },
                      { feature: "Project Management", starter: true, professional: true, enterprise: true },
                      { feature: "Marketing Automation", starter: false, professional: true, enterprise: true },
                      { feature: "HR & Payroll", starter: false, professional: true, enterprise: true },
                      { feature: "Advanced Analytics", starter: false, professional: true, enterprise: true },
                      { feature: "API Access", starter: true, professional: true, enterprise: true },
                      { feature: "Custom Development", starter: false, professional: false, enterprise: true },
                      { feature: "SLA Guarantee", starter: false, professional: false, enterprise: true },
                      { feature: "White-label Options", starter: false, professional: false, enterprise: true },
                      { feature: "On-premise Deployment", starter: false, professional: false, enterprise: true }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition-all duration-300 group">
                        <td className="p-6 font-semibold text-gray-800 group-hover:text-gray-900">{row.feature}</td>
                        <td className="p-6 text-center">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                                <Check className="h-5 w-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-gray-400 font-bold">—</span>
                              </div>
                            )
                          ) : (
                            <span className="font-semibold text-blue-600">{row.starter}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof row.professional === 'boolean' ? (
                            row.professional ? (
                              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                                <Check className="h-5 w-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-gray-400 font-bold">—</span>
                              </div>
                            )
                          ) : (
                            <span className="font-semibold text-orange-600">{row.professional}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                                <Check className="h-5 w-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-gray-400 font-bold">—</span>
                              </div>
                            )
                          ) : (
                            <span className="font-semibold text-purple-600">{row.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/25 to-transparent rounded-full" />
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-blue-200/30 rotate-12 animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-pink-200/40 rounded-full animate-pulse" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block mb-4">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ❓ Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Got Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our pricing and plans
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated. No hassle, no penalties."
              },
              {
                question: "Is there a free trial?",
                answer: "Absolutely! All plans come with a complete 14-day free trial with full access to all features. No credit card required to start exploring."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are secure and encrypted."
              },
              {
                question: "Can I get a custom plan for my organization?",
                answer: "Yes, we offer fully customized enterprise plans with tailored features, integrations, and pricing. Contact our sales team to discuss your specific requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="group overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pl-20">
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors">
                    {faq.answer}
                  </p>
                </CardContent>
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

export default Pricing;
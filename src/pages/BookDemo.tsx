import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, Users, Zap, Video, Clock, Award, Sparkles, ArrowRight, Send, Star, TrendingUp, Shield } from "lucide-react";

const BookDemo = () => {
  const demoFeatures = [
    {
      icon: Calendar,
      title: "20-Minute Personalized Demo",
      description: "A focused session tailored to your specific business needs and industry requirements.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Our ERP specialists will answer your questions and provide implementation guidance.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Live System Walkthrough",
      description: "See real features in action with data relevant to your business processes.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "No long-term contracts required", color: "text-green-600" },
    { icon: Star, text: "30-day free trial available", color: "text-yellow-600" },
    { icon: Shield, text: "24/7 customer support included", color: "text-blue-600" },
    { icon: Award, text: "Implementation support provided", color: "text-purple-600" },
    { icon: TrendingUp, text: "ROI within 6 months", color: "text-orange-600" },
    { icon: Video, text: "Recorded demo for your team", color: "text-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #7c3aed 50%, #ec4899 75%, #f97316 100%)'
        }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(60)].map((_, i) => (
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

          <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 text-white"
              >
                <div className="inline-block">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                    <Video className="h-4 w-4" />
                    Free Personalized Demo
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  See Azarus ERP in Action
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Book a personalized demo and discover how Azarus ERP can transform your business operations. No commitment required.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-green-300" />
                      <span className="text-2xl font-bold">20</span>
                    </div>
                    <p className="text-sm text-white/80">Minutes Session</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-blue-300" />
                      <span className="text-2xl font-bold">1:1</span>
                    </div>
                    <p className="text-sm text-white/80">Expert Guidance</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {[
                    "Tailored to Your Industry",
                    "Live Q&A Session",
                    "No Credit Card Required"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-300" />
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Lottie Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
                <DotLottieReact
                  src="https://lottie.host/embed/f8d9e7c6-4a5b-4c3d-8e2f-d3c4e5f6a7b8/XyZaBcDeFg.json"
                  loop
                  autoplay
                  className="w-full h-auto relative z-10"
                />
              </motion.div>
            </div>
          </div>

          {/* Wavy bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 -mb-px">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,32 C360,10 720,10 1080,32 C1260,43 1350,48 1440,48 L1440,60 L0,60 Z" fill="white" stroke="white"/>
            </svg>
          </div>
        </section>

        {/* Demo Form & Benefits */}
        <section className="py-24 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          </div>

          <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Demo Form - Enhanced Luxury Design */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm bg-white/80">
                  {/* Decorative gradient background */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl -z-10" />
                  
                  <CardHeader className="space-y-2 pb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Schedule Your Demo
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Fill out the form and we'll contact you within 24 hours to schedule your personalized demo session.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Business Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@company.com" 
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                        required 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+1 (555) 123-4567" 
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-semibold">Company Name *</Label>
                        <Input 
                          id="company" 
                          placeholder="Your Company" 
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companySize" className="text-sm font-semibold">Company Size</Label>
                        <Select>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-purple-500">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-1000">201-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry" className="text-sm font-semibold">Industry</Label>
                        <Select>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-purple-500">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">Tell us about your needs</Label>
                      <Textarea 
                        id="message" 
                        placeholder="What challenges are you looking to solve? Which modules are you most interested in?" 
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors resize-none min-h-[100px]"
                      />
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Book My Demo
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits - Enhanced Design */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* What to Expect */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      What to Expect
                    </h2>
                    <p className="text-muted-foreground text-lg">Experience the power of Azarus ERP firsthand</p>
                  </div>

                  {demoFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group relative overflow-hidden border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer">
                        {/* Gradient border on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10`} style={{margin: '-2px', borderRadius: 'inherit'}} />
                        
                        <CardContent className="p-6 bg-white rounded-lg m-[2px] relative">
                          <div className="flex items-start gap-4">
                            <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <feature.icon className="h-7 w-7 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-xl mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                {feature.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Why Choose Azarus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden border-2 border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl" />
                    
                    <CardContent className="p-8 relative">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Why Choose Azarus ERP?
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3 hover:bg-white hover:shadow-md transition-all duration-300"
                          >
                            <benefit.icon className={`h-5 w-5 ${benefit.color} flex-shrink-0`} />
                            <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    <CardContent className="p-6 text-center">
                      <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
                      <h3 className="text-xl font-bold mb-2">Trusted by 1000+ Companies</h3>
                      <p className="text-white/90 text-sm">
                        Join businesses worldwide who have transformed their operations with Azarus ERP
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookDemo;
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, Users, Zap, Video, Clock, Award, Sparkles, ArrowRight, Send, Star, TrendingUp, Shield, BarChart3, PieChart, Activity } from "lucide-react";

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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20 lg:py-32">
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

              {/* Right Content - Scheduling Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative perspective-1000 block"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-3xl animate-pulse" />
                
                {/* Main Calendar Window */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500">
                  {/* Window Header */}
                  <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-white/60 text-sm font-medium">Schedule Meeting</div>
                    <div className="w-6" />
                  </div>

                  {/* Calendar Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-white font-semibold text-lg">January 2026</div>
                      <div className="flex gap-2">
                        <div className="p-1 rounded hover:bg-white/10 cursor-pointer"><ArrowRight className="h-4 w-4 text-white rotate-180" /></div>
                        <div className="p-1 rounded hover:bg-white/10 cursor-pointer"><ArrowRight className="h-4 w-4 text-white" /></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                        <div key={d} className="text-white/40 text-xs font-medium">{d}</div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 31 }).map((_, i) => {
                        const day = i + 1;
                        const isSelected = day === 15;
                        const isToday = day === 5;
                        return (
                          <div 
                            key={i} 
                            className={`
                              aspect-square rounded-lg flex items-center justify-center text-sm relative group cursor-pointer transition-all
                              ${isSelected ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' : 'text-white/80 hover:bg-white/10'}
                              ${isToday ? 'border border-blue-400/50' : ''}
                            `}
                          >
                            {day}
                            {isSelected && (
                              <motion.div 
                                layoutId="selection"
                                className="absolute inset-0 border-2 border-white/50 rounded-lg"
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Floating Time Slot Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-20 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl z-20 w-48"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Available Time</div>
                      <div className="text-sm font-bold text-gray-800">10:00 AM</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-500 rounded-full" />
                  </div>
                </motion.div>

                {/* Floating Confirmation Card */}
                <motion.div 
                  animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-20 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Video className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Demo Session</div>
                      <div className="text-sm font-bold text-gray-800">Confirmed</div>
                    </div>
                    <div className="ml-2 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </motion.div>
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
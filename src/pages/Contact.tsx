import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Send, Globe, Sparkles, Star, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Sales Inquiries",
      description: "Get pricing and product information",
      contact: "info@azaruserp.com",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Technical support and assistance",
      contact: "info@azaruserp.com",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Monday to Friday, 9 AM - 6 PM GMT",
      contact: "+44 1865 60 0679",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const partnerTypes = [
    {
      title: "Implementation Partners",
      description: "Help clients implement and customize Azarus ERP solutions",
      icon: Zap,
      gradient: "from-blue-600 to-cyan-600",
      benefits: ["Revenue sharing", "Training & certification", "Co-marketing"]
    },
    {
      title: "Technology Partners",
      description: "Integrate your solutions with our platform",
      icon: Globe,
      gradient: "from-purple-600 to-pink-600",
      benefits: ["API access", "Technical support", "Joint solutions"]
    },
    {
      title: "Reseller Partners",
      description: "Sell Azarus ERP to your customer base",
      icon: Star,
      gradient: "from-orange-600 to-red-600",
      benefits: ["Competitive margins", "Sales support", "Marketing materials"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient Background */}
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
                  <Sparkles className="h-4 w-4" />
                  We're Here to Help
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Transform your business with Azarus ERP. Our expert team is ready to answer your questions, provide demos, and guide you on your digital transformation journey.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span className="text-white/90">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span className="text-white/90">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span className="text-white/90">Fast Response</span>
                </div>
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
                src="https://lottie.host/embed/7d3e9f79-8c6a-4f1b-9e8e-c4e3d4e1f4c2/FGvL9mMDJP.json"
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

      {/* Main Contact Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Enhanced Luxury Design */}
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
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Send Us a Message
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-semibold">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-semibold">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-semibold">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Company Name" 
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">Phone</Label>
                      <Input 
                        id="phone" 
                        placeholder="+1 (555) 123-4567" 
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-sm font-semibold">How can we help? *</Label>
                    <Select>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-purple-500">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs and how we can help..."
                      rows={5}
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information - Enhanced Design */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Contact Methods
                  </h2>
                  <p className="text-muted-foreground">Choose the best way to reach us</p>
                </div>

                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`group relative overflow-hidden border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br ${method.bgGradient}`}>
                      {/* Gradient border on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10`} style={{margin: '-2px', borderRadius: 'inherit'}} />
                      
                      <CardContent className="p-6 bg-white rounded-lg m-[2px] relative">
                        <div className="flex items-start gap-4">
                          <div className={`p-4 bg-gradient-to-br ${method.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <method.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className={`font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent text-lg`}>
                              {method.contact}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                <div className="grid gap-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-900 shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <Calendar className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
                    Schedule a Demo
                    <ArrowRight className="ml-auto h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    className="w-full bg-white border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 text-gray-900 shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <FileText className="mr-2 h-5 w-5 group-hover:text-purple-600 transition-colors" />
                    Download Brochure
                    <ArrowRight className="ml-auto h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong className="text-gray-900">Mon - Fri:</strong> 9:00 AM - 6:00 PM GMT</p>
                        <p><strong className="text-gray-900">Saturday:</strong> 10:00 AM - 4:00 PM GMT</p>
                        <p><strong className="text-gray-900">Sunday:</strong> Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Program Section - Completely Redesigned */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold text-white flex items-center gap-2 w-fit mx-auto">
                <Sparkles className="h-4 w-4" />
                Partnership Opportunities
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Partner With Us
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join our partner program and help businesses transform with Azarus ERP. Unlock exclusive benefits and grow together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-2 border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.gradient}`} />
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full" />
                  
                  <CardContent className="p-8 relative">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 bg-gradient-to-br ${partner.gradient} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <partner.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {partner.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {partner.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-white/80">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full bg-gradient-to-r ${partner.gradient} hover:shadow-lg hover:shadow-purple-500/50 text-white border-0 transition-all duration-300 group/btn`}
                      size="lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-white/80 mb-6 text-lg">Ready to start your partnership journey?</p>
            <Button 
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 shadow-2xl hover:shadow-white/20 px-8 py-6 text-lg font-semibold group"
            >
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Add missing imports
import { Calendar, FileText } from "lucide-react";

export default Contact;
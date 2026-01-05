import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Users, UserPlus, Calendar, FileText, Award, TrendingUp, Clock, UserCheck, CreditCard } from "lucide-react";

const HR = () => {
  const coreFeatures = [
    {
      category: "Employee Management",
      icon: Users,
      features: [
        {
          icon: Users,
          title: "Employee Profiles Management",
          description: "Comprehensive employee database with detailed profiles, personal information, job history, and organizational hierarchy."
        },
        {
          icon: UserPlus,
          title: "Recruitment & Onboarding",
          description: "Streamline the entire hiring process from job posting to digital onboarding with automated workflows and document collection."
        },
        {
          icon: UserCheck,
          title: "Role-Based Access Control",
          description: "Define user permissions and access levels to ensure sensitive HR data is only available to authorized personnel."
        }
      ]
    },
    {
      category: "Performance & Payroll",
      icon: Award,
      isSpecialLayout: true,
      features: [
        {
          icon: Award,
          title: "Employee Performance Tracking",
          description: "Monitor and evaluate employee performance with customizable metrics, regular reviews, and goal-setting frameworks."
        },
        {
          icon: CreditCard,
          title: "Payroll Management",
          description: "Automated payroll processing with tax calculations, deductions, benefits integration, and direct deposit capabilities."
        },
        {
          icon: TrendingUp,
          title: "Performance Analytics",
          description: "Advanced analytics and reporting on employee performance trends, productivity metrics, and goal achievement."
        }
      ]
    },
    {
      category: "Time & Compliance",
      icon: Calendar,
      features: [
        {
          icon: Clock,
          title: "Time & Attendance Tracking",
          description: "Accurate time tracking with clock-in/out functionality, overtime calculations, and attendance reporting."
        },
        {
          icon: Calendar,
          title: "Leave Management System",
          description: "Automated leave requests, approvals, and balance tracking with customizable leave policies for different employee types."
        },
        {
          icon: FileText,
          title: "Contract & Document Management",
          description: "Secure storage and management of employment contracts, HR documents, and compliance records with version control."
        }
      ]
    }
  ];

  const workflows = [
    { step: 1, title: "Employee Onboarding", description: "Automated onboarding process with document collection and orientation" },
    { step: 2, title: "Performance Management", description: "Regular reviews, goal setting, and performance tracking" },
    { step: 3, title: "Leave & Attendance", description: "Track attendance, manage leave requests and approvals" },
    { step: 4, title: "Learning & Development", description: "Training programs and skill development tracking" },
    { step: 5, title: "Offboarding", description: "Structured exit process with knowledge transfer and final clearance" }
  ];

  const kpis = [
    { metric: "Employee Headcount", value: "245" },
    { metric: "Turnover Rate", value: "8.5%" },
    { metric: "Time to Hire", value: "18 days" },
    { metric: "Employee Satisfaction", value: "4.2/5" }
  ];

  const faqs = [
    {
      question: "Can I customize leave policies for different employee types?",
      answer: "Yes, you can create multiple leave policies with different entitlements, accrual rates, and approval workflows for various employee categories, departments, or locations."
    },
    {
      question: "How does the performance review system work?",
      answer: "Our system supports 360-degree feedback, goal setting, regular check-ins, and annual reviews with customizable evaluation forms and automated reminder workflows."
    },
    {
      question: "Is employee data secure and compliant?",
      answer: "Absolutely. We implement enterprise-grade security with role-based access control, data encryption, and compliance with GDPR, HIPAA, and other data protection regulations."
    },
    {
      question: "Can I generate HR reports and analytics?",
      answer: "Yes, comprehensive reporting includes headcount analysis, turnover reports, performance metrics, attendance summaries, and custom HR dashboards with real-time data."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
                   HR & Payroll Management
                 </h1>
                 <p className="text-xl text-white/90">
                   Streamline HR processes, manage payroll efficiently, and build a thriving workplace culture with comprehensive HR tools.
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
             <div className="relative lg:scale-125">
               <DotLottieReact
                 src="https://lottie.host/7bbf632d-2645-4a4b-90a1-1952816ec5be/f95prCnWJk.lottie"
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

       {/* HR Image Section */}
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
               src="/ChatGPT Image Dec 18, 2025, 10_35_10 PM (1).png" 
               alt="HR Management System" 
               className="mx-auto max-w-7xl w-full h-auto"
             />
           </motion.div>
         </div>
       </section>

      {/* Core Features Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Decorative background elements with more prominent glow */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient orbs - Made larger and more visible */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/40 to-pink-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
          
          {/* Additional side glows */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-purple-400/30 to-transparent rounded-full blur-3xl" />
          
          {/* Geometric shapes and lines */}
          <div className="absolute top-20 left-1/4 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-float" style={{animationDuration: '12s'}} />
          <div className="absolute top-40 right-1/3 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rotate-12 animate-float" style={{animationDelay: '1.5s', animationDuration: '14s'}} />
          <div className="absolute top-60 right-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-blue-400/25 animate-float" style={{animationDelay: '0.5s', animationDuration: '11s'}} />
          
          {/* Diagonal lines */}
          <div className="absolute top-32 left-20 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-45" />
          <div className="absolute bottom-40 right-24 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-45" />
          <div className="absolute top-80 right-40 w-28 h-0.5 bg-gradient-to-r from-transparent via-orange-400/25 to-transparent rotate-12" />
          
          {/* Additional Geometric shapes and lines */}
          <div className="absolute top-20 left-1/4 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-float" style={{animationDuration: '12s'}} />
          <div className="absolute top-40 right-1/3 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rotate-12 animate-float" style={{animationDelay: '1.5s', animationDuration: '14s'}} />
          
          {/* Diagonal lines */}
          <div className="absolute top-32 left-20 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent rotate-45" />
          <div className="absolute bottom-40 right-24 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-45" />
          <div className="absolute top-80 right-40 w-28 h-0.5 bg-gradient-to-r from-transparent via-orange-400/25 to-transparent rotate-12" />
          
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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-[1680px] mx-auto px-0">
          <div className="text-center mb-16 relative">
            {/* Geometric Shapes in Header Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{zIndex: 0}}>
              {/* Circles */}
              <div className="absolute top-0 left-1/4 w-24 h-24 border-3 border-blue-500/30 rounded-full animate-float" style={{animationDuration: '10s'}} />
              <div className="absolute top-10 right-1/3 w-20 h-20 border-3 border-purple-500/30 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '8s'}} />
              
              {/* Squares */}
              <div className="absolute top-5 right-1/4 w-18 h-18 border-2 border-purple-500/30 rotate-45 animate-float" style={{animationDuration: '11s'}} />
              <div className="absolute bottom-5 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rotate-12 animate-float" style={{animationDelay: '2.5s', animationDuration: '9s'}} />
              
              {/* Triangles */}
              <div className="absolute top-8 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-blue-500/30 animate-float" style={{animationDelay: '1s', animationDuration: '10s'}} />
              
              {/* Dots */}
              <div className="absolute top-12 right-1/2 w-3 h-3 bg-purple-600/40 rounded-full animate-pulse" />
              <div className="absolute bottom-8 left-1/2 w-3 h-3 bg-blue-600/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            </div>
            
            <div className="inline-block mb-4 animate-bounce" style={{zIndex: 1, position: 'relative'}}>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 shadow-lg">
                ✨ Core Features
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              HR & Payroll Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive HR solution for modern workforce management and payroll processing
            </p>
          </div>

          {/* Enhanced Dynamic Features Grid */}
          <div className="space-y-32">
            {coreFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative">
                <div className="px-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/20">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        categoryIndex === 1 
                          ? 'bg-gradient-to-br from-orange-500 to-red-600' 
                          : categoryIndex === 2
                          ? 'bg-gradient-to-br from-pink-500 to-rose-600'
                          : 'bg-gradient-to-br from-blue-500 to-purple-600'
                      }`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold bg-clip-text text-transparent ${
                        categoryIndex === 1 
                          ? 'bg-gradient-to-r from-orange-600 to-red-600' 
                          : categoryIndex === 2
                          ? 'bg-gradient-to-r from-pink-600 to-rose-600'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600'
                      }`}>
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Category Layout */}
                  {categoryIndex === 0 && (
                    // Employee Management - Image left, Cards right
                    <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-center">
                      <motion.div 
                        className="flex justify-center overflow-visible"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <img 
                          src="/profiles management .png" 
                          alt="Employee Management"
                          className="w-full h-auto scale-110"
                        />
                      </motion.div>
                      <motion.div 
                        className="grid gap-6"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {category.features.map((feature, index) => (
                          <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-70" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                            
                            <CardHeader className="relative z-10 pb-4">
                              <div className="mb-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl" />
                                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <feature.icon className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {feature.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                              <CardDescription className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                                {feature.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                      </motion.div>
                    </div>
                  )}
                  
                  {categoryIndex === 1 && (
                    // Performance & Payroll - Image left, Cards right
                    <div className="relative">
                      {/* Background decoration for Performance section */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/50 -mx-8 -my-8 rounded-3xl" />
                      <div className="absolute inset-0 -mx-8 -my-8">
                        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-400/15 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-400/15 to-transparent rounded-full blur-3xl" />
                        {/* Geometric shapes */}
                        <div className="absolute top-10 right-1/4 w-16 h-16 border-2 border-orange-400/20 rotate-45" />
                        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full" />
                        <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-orange-400/20" />
                      </div>
                      <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-center relative z-10 py-8">
                      <motion.div 
                        className="flex justify-center overflow-visible"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <img 
                          src="/employees performance.png" 
                          alt="Performance & Payroll"
                          className="w-full h-auto scale-110"
                        />
                      </motion.div>
                      <motion.div 
                        className="grid gap-6"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {category.features.map((feature, index) => (
                          <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/50 to-pink-50/50 opacity-70" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/30 via-red-300/30 to-pink-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                            
                            <CardHeader className="relative z-10 pb-4">
                              <div className="mb-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-2xl blur-xl" />
                                <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <feature.icon className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                                {feature.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                              <CardDescription className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                                {feature.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                      </motion.div>
                    </div>
                    </div>
                  )}
                  
                  {categoryIndex === 2 && (
                    // Time & Compliance - Cards left, Image right
                    <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-center">
                      <motion.div 
                        className="grid gap-6"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        {category.features.map((feature, index) => (
                          <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-rose-50/50 to-pink-50/50 opacity-70" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-pink-300/30 via-rose-300/30 to-pink-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                            
                            <CardHeader className="relative z-10 pb-4">
                              <div className="mb-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-2xl blur-xl" />
                                <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <feature.icon className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-rose-600 transition-all duration-300">
                                {feature.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="relative z-10">
                              <CardDescription className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                                {feature.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                      </motion.div>
                      <motion.div 
                        className="flex justify-center overflow-visible"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <img 
                          src="/contracts management (1).png" 
                          alt="Time & Compliance"
                          className="w-full h-auto scale-110"
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background with gradients and animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-300/15 to-transparent rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 shadow-lg">
                📈 HR Workflow
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Employee Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From onboarding to offboarding - complete employee journey management
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="group relative">
                  {/* Enhanced card background with glow effect */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                  
                  <div className="relative p-8 flex items-center gap-8">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {workflow.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {workflow.title}
                      </h3>
                      <p className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {workflow.description}
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-8 w-1 h-1 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-semibold text-orange-700 shadow-lg">
                📊 Performance Metrics
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              HR Key Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Track essential HR performance indicators and workforce analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                {/* Enhanced gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/50 to-pink-50/50 opacity-70" />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/30 via-red-300/30 to-pink-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                
                <CardContent className="relative z-10 pt-12 pb-8">
                  <div className="mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl opacity-50" />
                    <div className="relative text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {kpi.value}
                    </div>
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                    {kpi.metric}
                  </div>
                </CardContent>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/30 to-purple-50/50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-400/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm font-semibold text-green-700 shadow-lg">
                ❓ FAQ
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get answers to common questions about HR and payroll management
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="group relative">
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-300/30 via-blue-300/30 to-purple-300/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                  
                  <div className="relative p-6">
                    <AccordionTrigger className="text-left text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300 no-underline hover:no-underline [&[data-state=open]]:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </div>
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

export default HR;
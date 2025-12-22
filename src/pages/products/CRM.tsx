import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Play, 
  Users, 
  Target, 
  BarChart3, 
  MessageCircle, 
  Calendar, 
  FileText,
  UserPlus,
  Eye,
  Globe,
  Kanban,
  Upload,
  MousePointer,
  StickyNote,
  Phone,
  Bell,
  Megaphone,
  Mail,
  FileCheck,
  Handshake,
  Trophy,
  UserCheck,
  HelpCircle,
  BookOpen,
  MessageSquare,
  PieChart,
  TrendingUp,
  Activity,
  HeadphonesIcon
} from "lucide-react";

const CRM = () => {
  const coreFeatures = [
    {
      category: "Customer Management",
      icon: Users,
      features: [
        {
          icon: UserPlus,
          title: "Unlimited Customers & Contacts",
          description: "Add multiple contacts under each customer (decision makers, accounting, etc.) with no limits."
        },
        {
          icon: Eye,
          title: "Contact Permissions",
          description: "Assign specific permissions - view invoices only, view projects only, or custom access levels."
        },
        {
          icon: Globe,
          title: "Customer Portal",
          description: "Dedicated portal where clients log in to see invoices, payments, proposals, contracts, project status & support tickets."
        }
      ]
    },
    {
      category: "Communication & Interaction Tracking",
      icon: MessageCircle,
      isSpecialLayout: true,
      features: [
        {
          icon: Activity,
          title: "Activity Logging",
          description: "Keep full history of calls, emails, meetings, proposals, and follow-ups per customer/lead."
        },
        {
          icon: Bell,
          title: "Reminders & Notifications",
          description: "Assign reminders for calls, meetings, payments. Notify via email or in-app notifications."
        },
        {
          icon: Megaphone,
          title: "Announcements",
          description: "Share updates with staff or customers directly inside the portal for better communication."
        },
        {
          icon: Mail,
          title: "Integrated Email",
          description: "Send/receive emails linked to customer or lead records with full conversation history."
        }
      ]
    },
    {
      category: "Leads Management",
      icon: Target,
      features: [
        {
          icon: Kanban,
          title: "Leads Kanban Board",
          description: "Drag & drop leads across stages for visual pipeline management and better conversion tracking."
        },
        {
          icon: Upload,
          title: "Import & Sync with Notes & Attachments",
          description: "Import leads from CSV or email automatically. Sync with external sources for real-time updates. Save important context, meeting notes, and documents for effective follow-up."
        },
        {
          icon: MousePointer,
          title: "Lead Conversion",
          description: "Convert a lead into a customer with one click, keeping all history (notes, emails, attachments)."
        }
      ]
    },
    {
      category: "Sales & Relationship Tools",
      icon: FileCheck,
      isSpecialLayout: true,
      features: [
        {
          icon: FileText,
          title: "Proposals & Quotations",
          description: "Create professional proposals linked to leads/customers that can be accepted electronically."
        },
        {
          icon: Handshake,
          title: "Contracts Management",
          description: "Store contracts, set renewal/expiry dates, attach to customer records with automated alerts."
        },
        {
          icon: Trophy,
          title: "Goals Tracking",
          description: "Define sales targets (revenue, closed deals) and monitor achievement with progress indicators."
        },
        {
          icon: UserCheck,
          title: "Referrals Program",
          description: "Track customer referrals for lead generation and reward programs (if enabled)."
        }
      ]
    },
    {
      category: "Support & Customer Care",
      icon: HeadphonesIcon,
      isSpecialLayout: true,
      features: [
        {
          icon: HelpCircle,
          title: "Tickets System",
          description: "Customers can open support tickets from the portal or via email with automated routing."
        },
        {
          icon: BookOpen,
          title: "Knowledge Base",
          description: "Publish articles for self-service support, reducing ticket volume and improving satisfaction."
        },
        {
          icon: MessageSquare,
          title: "Surveys",
          description: "Gather customer feedback (NPS, satisfaction, product feedback) with automated campaigns."
        }
      ]
    },
    {
      category: "CRM Reporting",
      icon: BarChart3,
      features: [
        {
          icon: PieChart,
          title: "Customer Summaries",
          description: "Overview of each client's financials, interactions, projects, and relationship health."
        },
        {
          icon: TrendingUp,
          title: "Leads Conversion Reports",
          description: "Measure efficiency of lead handling, conversion rates, and pipeline performance."
        },
        {
          icon: Phone,
          title: "Sales Activity Reports",
          description: "Track calls, meetings, follow-ups linked to customers with performance metrics."
        },
        {
          icon: HeadphonesIcon,
          title: "Support Reports",
          description: "Monitor ticket resolution time, customer satisfaction scores, and support team performance."
        }
      ]
    }
  ];

  const workflows = [
    { step: 1, title: "Lead Capture", description: "Automatically capture leads from website, social media, and campaigns" },
    { step: 2, title: "Lead Qualification", description: "Score and qualify leads based on customizable criteria" },
    { step: 3, title: "Opportunity Creation", description: "Convert qualified leads to opportunities with assigned owners" },
    { step: 4, title: "Pipeline Management", description: "Move opportunities through customizable sales stages" },
    { step: 5, title: "Deal Closure", description: "Complete deals and automatically trigger fulfillment processes" }
  ];

  const kpis = [
    { metric: "Lead Conversion Rate", value: "24%" },
    { metric: "Average Deal Size", value: "$12,500" },
    { metric: "Sales Cycle Length", value: "32 days" },
    { metric: "Customer Lifetime Value", value: "$45,000" }
  ];

  const faqs = [
    {
      question: "Can I import my existing customer data?",
      answer: "Yes, Azarus CRM supports data import from popular CRM systems, Excel files, and CSV formats. Our migration team helps ensure smooth data transfer with no information loss."
    },
    {
      question: "How does the lead scoring system work?",
      answer: "Our intelligent lead scoring assigns points based on demographic information, online behavior, email engagement, and custom criteria you define. This helps prioritize high-value prospects."
    },
    {
      question: "Can I customize the sales pipeline stages?",
      answer: "Absolutely. You can create custom pipeline stages, set probability percentages, define required fields, and automate actions for each stage transition."
    },
    {
      question: "Does it integrate with email marketing tools?",
      answer: "Yes, Azarus CRM integrates with major email marketing platforms, social media tools, and communication systems to provide a unified customer view."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
       {/* Hero Section */}
       <section className="section-padding relative overflow-hidden" style={{
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
                   Customer Relationship Management
                 </h1>
                 <p className="text-xl text-white/90">
                   Build stronger customer relationships, accelerate sales, and grow your business with our comprehensive CRM solution.
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
                     <Play className="mr-2 h-4 w-4" />
                     Contact Sales
                   </a>
                 </Button>
               </div>
             </div>

             {/* Right Content - Lottie Animation */}
             <div className="relative lg:scale-125">
               <DotLottieReact
                 src="https://lottie.host/8d481cac-b133-4fa0-9fbd-96d5e6c6f3f7/t5Rt9ZWpSr.lottie"
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
              Core CRM Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive customer relationship management tools designed to grow your business
            </p>
          </div>
          
          <div className="space-y-12">
            {coreFeatures.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-8">
                {/* Customer Management Section - Special Design with Image */}
                {section.category === "Customer Management" ? (
                  <div className="relative group">
                    {/* Enhanced gradient background with multiple layers and glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-[40px] -z-10 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/40 to-transparent rounded-[40px] -z-10" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-300/40 via-purple-300/40 to-pink-300/40 rounded-[40px] -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    
                    {/* Animated border glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-[40px] opacity-20 group-hover:opacity-30 blur-md transition-all duration-700 -z-10 animate-pulse" />
                    
                    {/* Geometric Shapes and Effects */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none" style={{zIndex: 0}}>
                      {/* Circles */}
                      <div className="absolute top-10 right-20 w-32 h-32 border-4 border-blue-500/40 rounded-full animate-float" />
                      <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-purple-500/40 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '8s'}} />
                      
                      {/* Squares and Rectangles */}
                      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-purple-500/40 rotate-45 animate-float" style={{animationDuration: '12s'}} />
                      <div className="absolute bottom-1/4 right-16 w-28 h-28 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rotate-12 animate-float" style={{animationDelay: '3s', animationDuration: '10s'}} />
                      
                      {/* Triangles using border trick */}
                      <div className="absolute top-1/2 left-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-blue-500/35 animate-float" style={{animationDelay: '1.5s', animationDuration: '9s'}} />
                      
                      {/* Lines and Stripes */}
                      <div className="absolute bottom-1/3 left-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-float" style={{animationDelay: '3.5s'}} />
                      
                      {/* Dots pattern */}
                      <div className="absolute top-20 left-1/2 w-3 h-3 bg-purple-600/50 rounded-full animate-pulse" />
                      <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-blue-600/50 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                      
                      {/* Gradient Orbs */}
                      <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-blue-500/25 via-purple-500/25 to-transparent rounded-full blur-2xl" />
                      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-tr from-pink-500/25 via-blue-500/25 to-transparent rounded-full blur-2xl" />
                    </div>
                    
                    <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16 items-center p-8 lg:p-20 backdrop-blur-sm relative" style={{zIndex: 1}}>
                      {/* Floating decorative elements */}
                      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl animate-float" />
                      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
                      
                      {/* Left: Image - Enhanced Display */}
                      <div className="relative">
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl group-hover:blur-[80px] transition-all duration-700 animate-pulse" />
                        <img
                          src="/customers 3d done.png"
                          alt="CRM Customer Management Dashboard"
                          className="w-full h-auto relative z-10 transform group-hover:scale-[1.02] transition-all duration-700 animate-float"
                          loading="eager"
                          style={{animationDuration: '6s'}}
                        />
                      </div>

                      {/* Right: Features */}
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-2xl shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                            <section.icon className="h-9 w-9 text-white" />
                          </div>
                          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-5">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative bg-white backdrop-blur-md rounded-3xl p-6 border-2 border-purple-300/50 shadow-xl shadow-purple-500/10 hover:border-purple-300/70 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                            >
                              {/* Animated gradient on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 group-hover/feature:from-blue-500/10 group-hover/feature:via-purple-500/10 group-hover/feature:to-pink-500/10 transition-all duration-500" />
                              
                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 group-hover/feature:from-purple-400/20 group-hover/feature:to-pink-400/20 rounded-bl-full transition-all duration-500" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover/feature:scale-110 group-hover/feature:shadow-lg transition-all duration-500 shadow-md">
                                  <feature.icon className="h-7 w-7 text-purple-600 group-hover/feature:text-purple-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover/feature:text-purple-600 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : section.category === "Leads Management" ? (
                  /* Leads Management Section - Special Design with Image on Right */
                  <div className="relative group">
                    {/* Enhanced gradient background with multiple layers and glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-pink-50 to-red-50 rounded-[40px] -z-10 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-100/40 to-transparent rounded-[40px] -z-10" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-300/40 via-pink-300/40 to-red-300/40 rounded-[40px] -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    
                    {/* Animated border glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 rounded-[40px] opacity-20 group-hover:opacity-30 blur-md transition-all duration-700 -z-10 animate-pulse" />
                    
                    {/* Geometric Shapes and Effects */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none" style={{zIndex: 0}}>
                      {/* Circles */}
                      <div className="absolute top-16 left-16 w-28 h-28 border-4 border-orange-500/40 rounded-full animate-float" style={{animationDuration: '11s'}} />
                      <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-pink-500/40 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '9s'}} />
                      
                      {/* Hexagons approximation using rotated squares */}
                      <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-orange-500/40 rotate-45 animate-float" style={{animationDuration: '13s'}} />
                      <div className="absolute bottom-1/3 left-24 w-20 h-20 border-2 border-pink-500/40 rotate-12 animate-float" style={{animationDelay: '2s', animationDuration: '11s'}} />
                      
                      {/* Rectangles */}
                      <div className="absolute top-20 right-1/3 w-32 h-16 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rotate-6 animate-float" style={{animationDelay: '1s', animationDuration: '10s'}} />
                      
                      {/* Triangles */}
                      <div className="absolute top-2/3 right-1/4 w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[55px] border-b-orange-500/35 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
                      
                      {/* Lines and Curves */}
                      <div className="absolute bottom-1/2 right-1/4 w-48 h-1 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent animate-float" style={{animationDelay: '2.5s'}} />
                      
                      {/* Dots pattern */}
                      <div className="absolute top-28 right-2/3 w-3 h-3 bg-orange-600/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                      <div className="absolute bottom-40 left-2/3 w-4 h-4 bg-pink-600/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
                      
                      {/* Gradient Orbs */}
                      <div className="absolute top-1/3 left-1/4 w-44 h-44 bg-gradient-to-bl from-orange-500/25 via-pink-500/25 to-transparent rounded-full blur-2xl" />
                      <div className="absolute bottom-1/4 right-1/3 w-52 h-52 bg-gradient-to-tl from-red-500/25 via-orange-500/25 to-transparent rounded-full blur-2xl" />
                    </div>
                    
                    <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-16 items-center p-8 lg:p-20 backdrop-blur-sm relative" style={{zIndex: 1}}>
                      {/* Floating decorative elements */}
                      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-2xl animate-float" />
                      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
                      
                      {/* Additional glow effects in background */}
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-orange-400/20 via-pink-400/20 to-transparent rounded-full blur-3xl" />
                      <div className="absolute -left-8 bottom-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 via-red-400/15 to-transparent rounded-full blur-3xl" />
                      
                      {/* Left: Features */}
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-gradient-to-br from-orange-500 via-pink-500 to-pink-600 rounded-2xl shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                            <section.icon className="h-9 w-9 text-white" />
                          </div>
                          <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-5">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative bg-white backdrop-blur-md rounded-3xl p-6 border-2 border-orange-300/50 shadow-xl shadow-orange-500/10 hover:border-orange-300/70 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                            >
                              {/* Animated gradient on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-red-500/5 group-hover/feature:from-orange-500/10 group-hover/feature:via-pink-500/10 group-hover/feature:to-red-500/10 transition-all duration-500" />
                              
                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-400/10 group-hover/feature:from-orange-400/20 group-hover/feature:to-pink-400/20 rounded-bl-full transition-all duration-500" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl group-hover/feature:scale-110 group-hover/feature:shadow-lg transition-all duration-500 shadow-md">
                                  <feature.icon className="h-7 w-7 text-orange-600 group-hover/feature:text-orange-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover/feature:text-orange-600 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Image - Enhanced Display */}
                      <div className="relative">
                        <img
                          src="/MacBook Air - 1 (6).png"
                          alt="CRM Leads Management Dashboard"
                          className="w-full h-auto rounded-[30px] relative z-10"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                ) : section.isSpecialLayout && section.category === "Communication & Interaction Tracking" ? (
                  /* Communication & Interaction Tracking Section - Footer Style with Image on Left - Full Width */
                  <div className="relative -mx-8 lg:-mx-20">
                    <div className="relative group bg-[#1b1936] rounded-[40px] overflow-hidden">
                      {/* Wavy White Shape at Top (same as CTABand) */}
                      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rounded-t-[40px]">
                        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,0 L0,0 Z" fill="#ffffff"></path>
                        </svg>
                      </div>
                      
                      {/* Animated Lines Above Section (like footer) */}
                      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden pointer-events-none rounded-t-[40px] z-10">
                        <svg className="absolute top-4 left-0 w-full opacity-30" height="80" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0" y1="15" x2="100%" y2="15" stroke="url(#comm-gradient1)" strokeWidth="2">
                            <animate attributeName="x1" from="-100%" to="100%" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="3s" repeatCount="indefinite" />
                          </line>
                          <line x1="0" y1="30" x2="100%" y2="30" stroke="url(#comm-gradient2)" strokeWidth="2">
                            <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="4s" repeatCount="indefinite" />
                          </line>
                          <line x1="0" y1="45" x2="100%" y2="45" stroke="url(#comm-gradient3)" strokeWidth="2">
                            <animate attributeName="x1" from="-100%" to="100%" dur="5s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="5s" repeatCount="indefinite" />
                          </line>
                          <defs>
                            <linearGradient id="comm-gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                              <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="comm-gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                              <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="comm-gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      
                      <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16 items-center px-8 lg:px-20 py-8 lg:py-20 pt-32 relative" style={{zIndex: 1}}>
                      {/* Left: Image */}
                      <div className="relative">
                        <img 
                          src="/ri (1).png" 
                          alt={section.category}
                          className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                        />
                      </div>

                      {/* Right: Features */}
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl shadow-2xl">
                            <section.icon className="h-9 w-9 text-white" />
                          </div>
                          <h3 className="text-4xl font-bold text-white">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-5">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/10 hover:border-orange-300/50 hover:shadow-2xl hover:shadow-orange-500/20 hover:bg-white/15 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                            >
                              {/* Animated gradient on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 group-hover/feature:from-orange-500/10 group-hover/feature:via-pink-500/10 group-hover/feature:to-purple-500/10 transition-all duration-500" />
                              
                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-400/10 group-hover/feature:from-orange-400/20 group-hover/feature:to-pink-400/20 rounded-bl-full transition-all duration-500" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-xl group-hover/feature:scale-110 group-hover/feature:shadow-lg transition-all duration-500 shadow-md">
                                  <feature.icon className="h-7 w-7 text-orange-400 group-hover/feature:text-orange-300" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-white mb-2 group-hover/feature:text-orange-300 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-white/70 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                ) : section.category === "Leads Management" ? (
                  /* Leads Management Section - Special Design with Image on Right */
                  <div className="relative group">
                    {/* Enhanced gradient background with multiple layers and glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-pink-50 to-red-50 rounded-[40px] -z-10 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-100/40 to-transparent rounded-[40px] -z-10" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-300/40 via-pink-300/40 to-red-300/40 rounded-[40px] -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    
                    {/* Animated border glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 rounded-[40px] opacity-20 group-hover:opacity-30 blur-md transition-all duration-700 -z-10 animate-pulse" />
                    
                    {/* Geometric Shapes and Effects */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none" style={{zIndex: 0}}>
                      {/* Circles */}
                      <div className="absolute top-16 left-16 w-28 h-28 border-4 border-orange-500/40 rounded-full animate-float" style={{animationDuration: '11s'}} />
                      <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-pink-500/40 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '9s'}} />
                      
                      {/* Hexagons approximation using rotated squares */}
                      <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-orange-500/40 rotate-45 animate-float" style={{animationDuration: '13s'}} />
                      <div className="absolute bottom-1/3 left-24 w-20 h-20 border-2 border-pink-500/40 rotate-12 animate-float" style={{animationDelay: '2s', animationDuration: '11s'}} />
                      
                      {/* Rectangles */}
                      <div className="absolute top-20 right-1/3 w-32 h-16 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rotate-6 animate-float" style={{animationDelay: '1s', animationDuration: '10s'}} />
                      
                      {/* Triangles */}
                      <div className="absolute top-2/3 right-1/4 w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[55px] border-b-orange-500/35 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
                      
                      {/* Lines and Curves */}
                      <div className="absolute bottom-1/2 right-1/4 w-48 h-1 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent animate-float" style={{animationDelay: '2.5s'}} />
                      
                      {/* Dots pattern */}
                      <div className="absolute top-28 right-2/3 w-3 h-3 bg-orange-600/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                      <div className="absolute bottom-40 left-2/3 w-4 h-4 bg-pink-600/50 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
                      
                      {/* Gradient Orbs */}
                      <div className="absolute top-1/3 left-1/4 w-44 h-44 bg-gradient-to-bl from-orange-500/25 via-pink-500/25 to-transparent rounded-full blur-2xl" />
                      <div className="absolute bottom-1/4 right-1/3 w-52 h-52 bg-gradient-to-tl from-red-500/25 via-orange-500/25 to-transparent rounded-full blur-2xl" />
                    </div>
                    
                    <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-16 items-center p-8 lg:p-20 backdrop-blur-sm relative" style={{zIndex: 1}}>
                      {/* Floating decorative elements */}
                      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-2xl animate-float" />
                      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
                      
                      {/* Additional glow effects in background */}
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-orange-400/20 via-pink-400/20 to-transparent rounded-full blur-3xl" />
                      <div className="absolute -left-8 bottom-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/15 via-red-400/15 to-transparent rounded-full blur-3xl" />
                      
                      {/* Left: Features */}
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-gradient-to-br from-orange-500 via-pink-500 to-pink-600 rounded-2xl shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110">
                            <section.icon className="h-9 w-9 text-white" />
                          </div>
                          <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-5">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative bg-white backdrop-blur-md rounded-3xl p-6 border-2 border-orange-300/50 shadow-xl shadow-orange-500/10 hover:border-orange-300/70 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                            >
                              {/* Animated gradient on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-red-500/5 group-hover/feature:from-orange-500/10 group-hover/feature:via-pink-500/10 group-hover/feature:to-red-500/10 transition-all duration-500" />
                              
                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-pink-400/10 group-hover/feature:from-orange-400/20 group-hover/feature:to-pink-400/20 rounded-bl-full transition-all duration-500" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl group-hover/feature:scale-110 group-hover/feature:shadow-lg transition-all duration-500 shadow-md">
                                  <feature.icon className="h-7 w-7 text-orange-600 group-hover/feature:text-orange-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover/feature:text-orange-600 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Image - Enhanced Display */}
                      <div className="relative">
                        <img
                          src="/MacBook Air - 1 (6).png"
                          alt="CRM Leads Management Dashboard"
                          className="w-full h-auto rounded-[30px] relative z-10"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                ) : section.isSpecialLayout && section.category === "Support & Customer Care" ? (
                  /* Support & Customer Care Section - Dark Style with Cards on Left - Full Width */
                  <div className="relative -mx-8 lg:-mx-20">
                    <div className="relative group bg-[#1b1936] rounded-[40px] overflow-hidden">
                      {/* Wavy White Shape at Top (same as CTABand) */}
                      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rounded-t-[40px]">
                        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,60 L1200,0 L0,0 Z" fill="#ffffff"></path>
                        </svg>
                      </div>
                      
                      {/* Animated Lines Above Section (like footer) */}
                      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden pointer-events-none rounded-t-[40px] z-10">
                        <svg className="absolute top-4 left-0 w-full opacity-30" height="80" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0" y1="15" x2="100%" y2="15" stroke="url(#support-gradient1)" strokeWidth="2">
                            <animate attributeName="x1" from="-100%" to="100%" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="3s" repeatCount="indefinite" />
                          </line>
                          <line x1="0" y1="30" x2="100%" y2="30" stroke="url(#support-gradient2)" strokeWidth="2">
                            <animate attributeName="x1" from="-100%" to="100%" dur="4s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="4s" repeatCount="indefinite" />
                          </line>
                          <line x1="0" y1="45" x2="100%" y2="45" stroke="url(#support-gradient3)" strokeWidth="2">
                            <animate attributeName="x1" from="-100%" to="100%" dur="5s" repeatCount="indefinite" />
                            <animate attributeName="x2" from="0%" to="200%" dur="5s" repeatCount="indefinite" />
                          </line>
                          <defs>
                            <linearGradient id="support-gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                              <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="support-gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="support-gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      
                      <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16 items-center px-8 lg:px-20 py-8 lg:py-20 pt-32 relative" style={{zIndex: 1}}>
                      {/* Left: Image */}
                      <div className="relative">
                        <img 
                          src="/support section image.png" 
                          alt={section.category}
                          className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                        />
                      </div>

                      {/* Right: Cards */}
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-2xl shadow-2xl">
                            <section.icon className="h-9 w-9 text-white" />
                          </div>
                          <h3 className="text-4xl font-bold text-white">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-5">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/10 hover:border-green-300/50 hover:shadow-2xl hover:shadow-green-500/20 hover:bg-white/15 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                            >
                              {/* Animated gradient on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 group-hover/feature:from-green-500/10 group-hover/feature:via-blue-500/10 group-hover/feature:to-purple-500/10 transition-all duration-500" />
                              
                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 group-hover/feature:from-green-400/20 group-hover/feature:to-blue-400/20 rounded-bl-full transition-all duration-500" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl group-hover/feature:scale-110 group-hover/feature:shadow-lg transition-all duration-500 shadow-md">
                                  <feature.icon className="h-7 w-7 text-green-400 group-hover/feature:text-green-300" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-white mb-2 group-hover/feature:text-green-300 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-white/70 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                ) : section.isSpecialLayout && section.category === "Sales & Relationship Tools" ? (
                  /* Sales & Relationship Tools Section - Cards Left, Image Right */
                  <div className="relative group">
                    {/* Enhanced gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-[40px] -z-10 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-100/40 to-transparent rounded-[40px] -z-10" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-300/40 via-blue-300/40 to-purple-300/40 rounded-[40px] -z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    
                    {/* Geometric Shapes and Effects */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none" style={{zIndex: 0}}>
                      {/* Circles */}
                      <div className="absolute top-16 left-16 w-28 h-28 border-4 border-green-500/40 rounded-full animate-float" style={{animationDuration: '11s'}} />
                      <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-blue-500/40 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '9s'}} />
                      
                      {/* Squares */}
                      <div className="absolute top-1/3 right-32 w-20 h-20 border-4 border-purple-500/40 rotate-45 animate-float" style={{animationDelay: '0.5s', animationDuration: '13s'}} />
                      <div className="absolute bottom-1/3 left-24 w-24 h-24 border-4 border-green-500/40 rotate-12 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
                      
                      {/* Lines */}
                      <div className="absolute top-24 right-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-float" style={{animationDelay: '1s', animationDuration: '14s'}} />
                      <div className="absolute bottom-32 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent animate-float" style={{animationDelay: '2.5s', animationDuration: '12s'}} />
                      
                      {/* Dots */}
                      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500/50 rounded-full animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-500/50 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                      
                      {/* Gradient Orbs */}
                      <div className="absolute top-20 right-40 w-64 h-64 bg-gradient-to-br from-green-400/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
                      <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-tr from-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}} />
                      <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}} />
                    </div>
                    
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center p-8 lg:p-20 relative" style={{zIndex: 1}}>
                      {/* Left: Cards */}
                      <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-4 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-2xl shadow-2xl">
                            <section.icon className="h-9 w-9 text-white" />
                          </div>
                          <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-5">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group/feature relative bg-white/70 backdrop-blur-md rounded-3xl p-6 border-2 border-gray-200 hover:border-green-300/50 hover:shadow-2xl hover:shadow-green-500/20 hover:bg-white/90 transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                            >
                              {/* Animated gradient on hover */}
                              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 group-hover/feature:from-green-500/10 group-hover/feature:via-blue-500/10 group-hover/feature:to-purple-500/10 transition-all duration-500" />
                              
                              {/* Corner accent */}
                              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 group-hover/feature:from-green-400/20 group-hover/feature:to-blue-400/20 rounded-bl-full transition-all duration-500" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl group-hover/feature:scale-110 group-hover/feature:shadow-lg transition-all duration-500 shadow-md">
                                  <feature.icon className="h-7 w-7 text-green-600 group-hover/feature:text-green-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover/feature:text-green-600 transition-colors">
                                    {feature.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Image */}
                      <div className="relative">
                        <img
                          src="/ChatGPT Image Dec 17, 2025, 04_19_07 AM.png"
                          alt="Sales & Relationship Tools"
                          className="w-full h-auto"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Other sections - Enhanced Card Design */
                  <>
                    {/* Geometric Shapes Background for CRM Reporting */}
                    {section.category === "CRM Reporting" && (
                      <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none" style={{zIndex: 0}}>
                        {/* Circles */}
                        <div className="absolute top-16 left-16 w-28 h-28 border-4 border-orange-500/30 rounded-full animate-float" style={{animationDuration: '11s'}} />
                        <div className="absolute bottom-24 right-24 w-32 h-32 border-4 border-pink-500/30 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '9s'}} />
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-red-500/30 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '12s'}} />
                        
                        {/* Squares */}
                        <div className="absolute top-1/3 right-32 w-20 h-20 border-4 border-orange-500/30 rotate-45 animate-float" style={{animationDelay: '0.5s', animationDuration: '13s'}} />
                        <div className="absolute bottom-1/3 left-24 w-24 h-24 border-4 border-pink-500/30 rotate-12 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
                        
                        {/* Lines */}
                        <div className="absolute top-24 right-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-float" style={{animationDelay: '1s', animationDuration: '14s'}} />
                        <div className="absolute bottom-32 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-float" style={{animationDelay: '2.5s', animationDuration: '12s'}} />
                        
                        {/* Dots */}
                        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-orange-500/40 rounded-full animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-pink-500/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-red-500/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                        
                        {/* Gradient Orbs */}
                        <div className="absolute top-20 right-40 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
                        <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}} />
                      </div>
                    )}
                    
                    <div className="text-center mb-12 relative" style={{zIndex: 1}}>
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl mr-3 shadow-lg">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                          {section.category}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.features.map((feature, featureIndex) => (
                        <Card 
                          key={featureIndex} 
                          className="group relative bg-white/70 backdrop-blur hover:bg-white hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-pink-600/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                          <CardHeader className="pb-4 relative z-10">
                            <div className="p-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                              <feature.icon className="h-6 w-6 text-orange-600" />
                            </div>
                            <CardTitle className="text-lg leading-tight group-hover:text-orange-600 transition-colors">
                              {feature.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="relative z-10">
                            <CardDescription className="text-sm leading-relaxed">
                              {feature.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {/* CRM Reports Image - Centered and Large */}
                    {section.category === "CRM Reporting" && (
                      <div className="flex justify-center mt-16">
                        <img 
                          src="/crm reports.png" 
                          alt="CRM Reporting Dashboard"
                          className="w-full max-w-5xl h-auto"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section - Professional 3D Design */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-200/30 to-pink-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full text-sm font-semibold shadow-lg">
                🚀 Streamlined Process
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Sales Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform leads into loyal customers with our optimized 5-step process
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6 relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-pink-300 to-rose-300 z-0" style={{top: '80px'}} />
              
              {workflows.map((workflow, index) => (
                <div key={index} className="relative z-10">
                  {/* 3D Card */}
                  <div className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 hover:-translate-y-2 transform perspective-1000">
                    {/* 3D Number Badge */}
                    <div className="relative mx-auto w-20 h-20 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                        <span className="text-3xl font-bold text-white">{workflow.step}</span>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                        {workflow.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {workflow.description}
                      </p>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-pink-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                  
                  {/* Arrow connector */}
                  {index < workflows.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-20 z-20 text-orange-400 text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section - Enhanced 3D Design with Blue Color Scheme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg">
                📊 Performance Metrics
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Key Performance Indicators
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track what matters most for your sales success with real-time insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {kpis.map((kpi, index) => (
              <div key={index} className="group relative perspective-1000">
                {/* Enhanced 3D Card with dramatic depth */}
                <div className="relative preserve-3d transition-all duration-700 hover:rotate-y-5">
                  {/* Shadow layers for 3D effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform translate-y-4 translate-x-2 blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl transform translate-y-2 translate-x-1 blur-sm opacity-10 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Main card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-4 hover:scale-105 transform">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top accent bar with gradient */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-3xl" />
                    
                    {/* Floating icon badge */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 blur-sm opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500">
                          <span className="text-2xl">📈</span>
                        </div>
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                      </div>
                    </div>
                    
                    {/* Content with enhanced styling */}
                    <div className="relative text-center pt-10">
                      {/* Large value with 3D text effect */}
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent blur-sm opacity-50">
                          <div className="text-6xl font-black">{kpi.value}</div>
                        </div>
                        <div className="relative text-6xl font-black bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                          {kpi.value}
                        </div>
                      </div>
                      
                      {/* Label with refined typography */}
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider leading-relaxed px-4">
                        {kpi.metric}
                      </div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-purple-100/60 to-indigo-100/60 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Bottom shadow glow */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-500/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Side accent lines */}
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-gray-600 mb-6 text-lg">Want to see how these metrics improve your business?</p>
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg rounded-2xl"
            >
              <a href="/book-demo">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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

export default CRM;
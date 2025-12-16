import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
          title: "Import & Sync",
          description: "Import leads from CSV or email automatically. Sync with external sources for real-time updates."
        },
        {
          icon: MousePointer,
          title: "Lead Conversion",
          description: "Convert a lead into a customer with one click, keeping all history (notes, emails, attachments)."
        },
        {
          icon: StickyNote,
          title: "Lead Notes & Attachments",
          description: "Save important context, meeting notes, and documents for effective follow-up."
        }
      ]
    },
    {
      category: "Communication & Interaction Tracking",
      icon: MessageCircle,
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
      category: "Sales & Relationship Tools",
      icon: FileCheck,
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
      <section className="py-20">
        <div className="max-w-[1680px] mx-auto px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core CRM Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive customer relationship management tools designed to grow your business
            </p>
          </div>
          
          <div className="space-y-24">
            {coreFeatures.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-8">
                {/* Customer Management Section - Special Design with Image */}
                {section.category === "Customer Management" ? (
                  <div className="relative">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl -z-10" />
                    
                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center p-6 lg:p-12">
                      {/* Left: Image with 3D Effect - Larger */}
                      <div className="relative group" style={{ perspective: '2000px' }}>
                        <div 
                          className="relative rounded-2xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] transform transition-all duration-700 group-hover:shadow-[0_45px_80px_-15px_rgba(0,0,0,0.6)]"
                          style={{
                            transform: 'perspective(2000px) rotateY(8deg) rotateX(3deg) translateZ(40px)',
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                          }}
                          onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                            const rotateX = (y - centerY) / 20;
                            const rotateY = (centerX - x) / 20;
                            e.currentTarget.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(40px)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(2000px) rotateY(8deg) rotateX(3deg) translateZ(40px)';
                          }}
                        >
                          <img
                            src="/CRM%20customers%20page%20-%20Copy.png"
                            alt="CRM Customer Management Dashboard"
                            className="w-full h-auto"
                            loading="eager"
                            style={{
                              backfaceVisibility: 'hidden',
                              WebkitBackfaceVisibility: 'hidden',
                              transform: 'translateZ(0)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Right: Features */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                            <section.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {section.category}
                          </h3>
                        </div>
                        
                        <div className="grid gap-4">
                          {section.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="group relative bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
                            >
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                  <feature.icon className="h-6 w-6 text-purple-600" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
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
                ) : (
                  /* Other sections - Enhanced Card Design */
                  <>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl mr-3">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{section.category}</h3>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.features.map((feature, featureIndex) => (
                        <Card 
                          key={featureIndex} 
                          className="group relative bg-white hover:shadow-2xl transition-all duration-300 h-full border-2 border-gray-100 hover:border-orange-200 overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-pink-600/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                          <CardHeader className="pb-4 relative z-10">
                            <div className="p-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
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
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sales Workflow</h2>
            <p className="text-xl text-muted-foreground">
              Streamlined process from lead to customer
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {workflow.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{workflow.title}</h3>
                    <p className="text-muted-foreground">{workflow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Performance Indicators</h2>
            <p className="text-xl text-muted-foreground">
              Track what matters most for your sales success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">{kpi.value}</div>
                  <div className="text-muted-foreground">{kpi.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
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
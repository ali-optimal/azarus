import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Users, Target, BarChart3, MessageCircle, Calendar, FileText } from "lucide-react";

const CRM = () => {
  const features = [
    {
      icon: Users,
      title: "Contact Management",
      description: "Centralize all customer information, interaction history, and communication preferences in one unified system."
    },
    {
      icon: Target,
      title: "Lead Tracking",
      description: "Track leads from first contact to conversion with automated scoring and nurturing workflows."
    },
    {
      icon: BarChart3,
      title: "Sales Pipeline",
      description: "Visual pipeline management with customizable stages, forecasting, and performance analytics."
    },
    {
      icon: MessageCircle,
      title: "Communication Hub",
      description: "Integrated email, calls, and messaging with automated follow-up reminders and templates."
    },
    {
      icon: Calendar,
      title: "Activity Management",
      description: "Schedule meetings, calls, and tasks with automated reminders and calendar synchronization."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Store and organize contracts, proposals, and customer documents with version control."
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
       <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
         
         <div className="container-wide relative z-10">
           <div className="max-w-4xl mx-auto text-center space-y-8">
             <div className="space-y-4">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                 Customer Relationship Management
               </h1>
               <p className="text-xl text-white/90 max-w-2xl mx-auto">
                 Build stronger customer relationships, accelerate sales, and grow your business with our comprehensive CRM solution.
               </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                 <a href="/book-demo" className="flex items-center">
                   Book a Demo
                   <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                 </a>
               </Button>
               <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                 <a href="/contact" className="flex items-center">
                   <Play className="mr-2 h-4 w-4" />
                   Contact Sales
                 </a>
               </Button>
             </div>
           </div>
         </div>
       </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful CRM Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage customer relationships and drive sales growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
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
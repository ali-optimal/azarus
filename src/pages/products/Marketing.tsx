import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Target, BarChart3, Users, Zap, Globe } from "lucide-react";

const Marketing = () => {
  const features = [
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create, send, and track email campaigns with advanced segmentation and automation workflows."
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "Plan, execute, and optimize multi-channel marketing campaigns across all touchpoints."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Deep insights into campaign performance, ROI, and customer engagement metrics."
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Capture and nurture leads with forms, landing pages, and automated follow-up sequences."
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Automate repetitive tasks and create personalized customer journeys at scale."
    },
    {
      icon: Globe,
      title: "Social Media Integration",
      description: "Manage social media campaigns and track engagement across all platforms."
    }
  ];

  const workflows = [
    { step: 1, title: "Campaign Planning", description: "Define goals, target audience, and campaign strategy" },
    { step: 2, title: "Content Creation", description: "Design emails, landing pages, and marketing materials" },
    { step: 3, title: "Campaign Launch", description: "Deploy campaigns across multiple channels simultaneously" },
    { step: 4, title: "Performance Tracking", description: "Monitor real-time metrics and engagement data" },
    { step: 5, title: "Optimization", description: "Analyze results and optimize for better performance" }
  ];

  const kpis = [
    { metric: "Email Open Rate", value: "28.5%" },
    { metric: "Click-Through Rate", value: "4.2%" },
    { metric: "Campaign ROI", value: "320%" },
    { metric: "Lead Generation", value: "+45%" }
  ];

  const faqs = [
    {
      question: "Can I create automated email sequences?",
      answer: "Yes, our marketing automation allows you to create sophisticated drip campaigns, welcome series, and behavioral triggers that respond to customer actions automatically."
    },
    {
      question: "How does lead scoring work in marketing campaigns?",
      answer: "Our system assigns scores based on email engagement, website behavior, form submissions, and custom criteria. This helps prioritize the most qualified leads for sales follow-up."
    },
    {
      question: "Can I integrate with social media platforms?",
      answer: "Absolutely. We integrate with major social platforms for campaign management, lead generation, and performance tracking across all your marketing channels."
    },
    {
      question: "What analytics and reporting features are available?",
      answer: "Comprehensive reporting includes campaign performance, ROI analysis, customer journey tracking, A/B test results, and detailed engagement metrics with customizable dashboards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Marketing Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Drive growth with intelligent marketing automation, personalized campaigns, and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Marketing Automation Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, execute, and optimize marketing campaigns
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
            <h2 className="text-4xl font-bold mb-4">Campaign Workflow</h2>
            <p className="text-xl text-muted-foreground">
              From planning to optimization - streamlined marketing process
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
            <h2 className="text-4xl font-bold mb-4">Campaign Performance Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Track and measure your marketing success
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

export default Marketing;
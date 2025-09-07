import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, UserPlus, Calendar, FileText, Award, TrendingUp } from "lucide-react";

const HR = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Centralized employee database with profiles, documents, and comprehensive personnel information."
    },
    {
      icon: UserPlus,
      title: "Recruitment & Onboarding",
      description: "Streamline hiring process from job posting to onboarding with applicant tracking and workflows."
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Automated leave requests, approvals, and balance tracking with customizable leave policies."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure storage of employee documents, contracts, and HR-related files with version control."
    },
    {
      icon: Award,
      title: "Performance Reviews",
      description: "Structured performance evaluation process with goals, feedback, and development planning."
    },
    {
      icon: TrendingUp,
      title: "HR Analytics",
      description: "Comprehensive reporting on headcount, turnover, performance, and other key HR metrics."
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Human Resources Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Streamline HR processes, engage employees, and build a thriving workplace culture with comprehensive HR tools.
            </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button asChild size="lg" className="text-lg px-8">
                 <a href="/book-demo">Book a Demo</a>
               </Button>
               <Button asChild variant="outline" size="lg" className="text-lg px-8">
                 <a href="/contact">Contact Sales</a>
               </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">HR Management Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete HR solution for modern workforce management
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
            <h2 className="text-4xl font-bold mb-4">Employee Lifecycle</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end employee journey management
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
            <h2 className="text-4xl font-bold mb-4">HR Key Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Track essential HR performance indicators
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

export default HR;
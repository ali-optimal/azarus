import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, FolderOpen, Users, Clock, BarChart3, CheckSquare, Calendar } from "lucide-react";

const Projects = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Project Planning",
      description: "Create detailed project plans with milestones, dependencies, and resource allocation."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign tasks, track progress, and facilitate seamless team communication and collaboration."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track time spent on tasks and projects with automated timesheets and billing integration."
    },
    {
      icon: BarChart3,
      title: "Progress Monitoring",
      description: "Real-time project dashboards with progress tracking, budget monitoring, and performance metrics."
    },
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Create, assign, and manage tasks with priorities, deadlines, and custom workflows."
    },
    {
      icon: Calendar,
      title: "Resource Scheduling",
      description: "Optimize resource allocation and scheduling with visual calendars and workload management."
    }
  ];

  const workflows = [
    { step: 1, title: "Project Initiation", description: "Define project scope, objectives, and requirements" },
    { step: 2, title: "Planning & Scheduling", description: "Create detailed project plans with timelines and resources" },
    { step: 3, title: "Task Assignment", description: "Assign tasks to team members with clear responsibilities" },
    { step: 4, title: "Execution & Tracking", description: "Monitor progress and manage project execution" },
    { step: 5, title: "Completion & Review", description: "Close projects and conduct performance reviews" }
  ];

  const kpis = [
    { metric: "On-Time Delivery", value: "92%" },
    { metric: "Budget Adherence", value: "95%" },
    { metric: "Team Productivity", value: "+35%" },
    { metric: "Project Success Rate", value: "89%" }
  ];

  const faqs = [
    {
      question: "Can I track project budgets and costs?",
      answer: "Yes, our project management module includes comprehensive budget tracking, cost monitoring, and financial reporting with real-time budget vs. actual comparisons."
    },
    {
      question: "How does time tracking work for team members?",
      answer: "Team members can log time directly on tasks with start/stop timers, manual entries, or mobile apps. Time data automatically feeds into timesheets and billing systems."
    },
    {
      question: "Can I create custom project templates?",
      answer: "Absolutely. Create reusable project templates with predefined tasks, milestones, and workflows to standardize project delivery across your organization."
    },
    {
      question: "Does it integrate with other business systems?",
      answer: "Yes, our project management integrates seamlessly with CRM, HR, Accounting, and other Azarus modules for unified business operations."
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
                 Project Management
               </h1>
               <p className="text-xl text-white/90 max-w-2xl mx-auto">
                 Plan, execute, and deliver projects on time and within budget with comprehensive project management tools.
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
            <h2 className="text-4xl font-bold mb-4">Project Management Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage projects from inception to completion
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
            <h2 className="text-4xl font-bold mb-4">Project Lifecycle</h2>
            <p className="text-xl text-muted-foreground">
              Streamlined process from project initiation to completion
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
            <h2 className="text-4xl font-bold mb-4">Project Performance Metrics</h2>
            <p className="text-xl text-muted-foreground">
              Track what matters most for project success
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

export default Projects;
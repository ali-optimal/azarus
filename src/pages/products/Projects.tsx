import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
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
                   Project Management
                 </h1>
                 <p className="text-xl text-white/90">
                   Plan, execute, and deliver projects on time and within budget with comprehensive project management tools.
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
                 src="https://lottie.host/d267f3ea-b319-407c-b55e-48c6ac67f989/XKOUwrmWdo.lottie"
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

       {/* Projects Image Section */}
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
               src="/projects.png" 
               alt="Project Management" 
               className="mx-auto max-w-7xl w-full h-auto"
             />
           </motion.div>
         </div>
       </section>

      {/* Features and Gantt Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/40 to-pink-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          
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
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-[1800px] mx-auto px-2">
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-blue-700 shadow-lg">
                ✨ Core Features
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Project Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage projects from inception to completion
            </p>
          </div>
          
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
            {/* Left - Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group relative bg-white/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                  {/* Enhanced gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-100/30 to-transparent" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl" />
                      <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-7 w-7 text-white" />
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
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Right - Gantt Chart Image */}
            <div className="relative lg:scale-110">
              <img 
                src="/gantt.png" 
                alt="Gantt Chart Project Management" 
                className="w-full h-auto max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background with gradients and animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-300/15 to-transparent rounded-full" />
        </div>
        
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-semibold text-purple-700 shadow-lg">
                🔄 Project Lifecycle
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Project Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Streamlined process from project initiation to completion
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="group relative">
                  {/* Enhanced card background with glow effect */}
                  <div className="absolute inset-0 bg-white/80 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-pink-300/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  <div className="relative p-8 flex items-center gap-8">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {workflow.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {workflow.title}
                      </h3>
                      <p className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {workflow.description}
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-sm font-semibold text-orange-700 shadow-lg">
                📊 Performance Metrics
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Project Performance Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Track what matters most for project success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <Card key={index} className="group relative text-center bg-white/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                {/* Enhanced gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-pink-50/50 to-purple-50/50 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-100/30 to-transparent" />
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300/30 via-pink-300/30 to-purple-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <CardContent className="pt-12 pb-8 relative z-10">
                  <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {kpi.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {kpi.metric}
                  </div>
                </CardContent>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Enhanced background with gradients and animations */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-transparent rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-pink-300/15 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full text-sm font-semibold text-purple-700 shadow-lg">
                ❓ FAQ
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-white/80 rounded-3xl shadow-lg" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-300/30 via-blue-300/30 to-pink-300/30 rounded-3xl opacity-50 -z-10" />
              
              <div className="relative p-8">
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200/50 last:border-b-0">
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default Projects;
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Calculator, Receipt, BarChart3, Wallet, CreditCard, FileText, TrendingUp, PieChart, DollarSign } from "lucide-react";

/**
 * ReportSpinner Component
 * 
 * A scroll-driven report carousel that flips through 12 accounting reports.
 * 
 * How it works:
 * 1. Section height = 12 × 100vh (one viewport per report)
 * 2. Report card is sticky and stays centered
 * 3. Scroll progress determines which report to show
 * 4. 3D flip animation (rotateY) on desktop, fade+slide on mobile
 * 5. After last report, normal scrolling resumes
 */
const ReportSpinner = ({ reports }: { reports: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate current report index (0-11)
  const reportIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reports.length - 0.01] // Subtract 0.01 to prevent going to index 12
  );

  return (
    <div 
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${reports.length * 100}vh` }}
    >
      {/* Sticky container that stays centered */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Progress Indicator */}
        <motion.div 
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-green-200">
            <motion.p 
              className="text-sm font-semibold text-gray-700 tabular-nums"
            >
              {/* Display current report number */}
              <motion.span
                className="text-green-600 text-lg"
              >
                {useTransform(reportIndex, (val) => String(Math.floor(val) + 1).padStart(2, '0'))}
              </motion.span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-500">{String(reports.length).padStart(2, '0')}</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Report Cards Stack */}
        <div className="relative w-full max-w-5xl mx-auto px-4">
          <div 
            className="relative w-full aspect-[16/10]"
            style={{ perspective: '1200px' }}
          >
            {reports.map((report, index) => {
              // Calculate animation values for each report
              const isActive = useTransform(
                reportIndex,
                (val) => Math.floor(val) === index
              );
              
              const opacity = useTransform(
                reportIndex,
                [index - 0.5, index, index + 0.5],
                [0, 1, 0]
              );
              
              const rotateY = useTransform(
                reportIndex,
                [index - 1, index - 0.5, index],
                [90, 45, 0]
              );
              
              const scale = useTransform(
                reportIndex,
                [index - 0.5, index, index + 0.5],
                [0.95, 1, 0.95]
              );

              const y = useTransform(
                reportIndex,
                [index - 0.5, index, index + 0.5],
                [50, 0, -50]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity,
                    rotateY, // 3D flip on desktop
                    scale,
                    y, // Slide on mobile
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={report}
                      alt={`Accounting Report ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Progress Indicator */}
          <div className="md:hidden mt-8 flex justify-center">
            <motion.div 
              className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-green-200"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
              }}
            >
              <p className="text-sm font-semibold text-gray-700 tabular-nums">
                <motion.span className="text-green-600 text-lg">
                  {useTransform(reportIndex, (val) => String(Math.floor(val) + 1).padStart(2, '0'))}
                </motion.span>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-500">{String(reports.length).padStart(2, '0')}</span>
              </p>
            </motion.div>
          </div>

          {/* Section Title Overlay - appears on first report */}
          <motion.div
            className="absolute -top-24 left-1/2 -translate-x-1/2 text-center w-full"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0])
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Financial Reports Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Scroll to explore our comprehensive reporting suite
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Finance = () => {
  const features = [
    {
      icon: Calculator,
      title: "General Ledger Management",
      description: "Complete chart of accounts with automated journal entries, real-time balance tracking, and comprehensive audit trails."
    },
    {
      icon: Receipt,
      title: "Accounts Payable & Receivable",
      description: "Streamlined invoice processing, payment tracking, automated aging reports, and vendor management."
    },
    {
      icon: BarChart3,
      title: "Advanced Financial Reporting",
      description: "Comprehensive financial statements, P&L reports, balance sheets, and customizable dashboards with real-time analytics."
    },
    {
      icon: TrendingUp,
      title: "Budget & Forecast Management",
      description: "Advanced budgeting tools with variance analysis, forecasting capabilities, and performance tracking."
    },
    {
      icon: CreditCard,
      title: "Multi-Currency Support",
      description: "Handle multiple currencies with automatic exchange rate updates, conversions, and international transaction management."
    },
    {
      icon: FileText,
      title: "Tax Management & Compliance",
      description: "Automated tax calculations, compliance tracking, regulatory reporting, and audit trail maintenance."
    },
    {
      icon: Wallet,
      title: "Cash Flow Management",
      description: "Real-time cash flow tracking, liquidity management, and automated cash position reporting."
    },
    {
      icon: PieChart,
      title: "Financial Analytics",
      description: "In-depth financial analysis, KPI tracking, trend analysis, and predictive financial modeling."
    }
  ];

  // Report spinner images
  const reportImages = [
    "/accounting reports/accounting report - account history.png",
    "/accounting reports/accounting report - profit loss.png",
    "/accounting reports/accounting report - trial balance.png",
    "/accounting reports/accounting reports - accounts payable.png",
    "/accounting reports/accounting reports - balance sheet.png",
    "/accounting reports/accounting reports - expense report.png",
    "/accounting reports/accounting reports - general ledger.png",
    "/accounting reports/accounting reports - journal.png",
    "/accounting reports/accounting reports - receivable agin.png",
    "/accounting reports/accounting reports - statement of cash  flows.png",
    "/accounting reports/Accounting reports - Statement of cash flows.png",
    "/accounting reports/accounting reports - tax summary.png"
  ];

  const workflows = [
    {
      title: "Invoice Processing",
      description: "Generate and send invoices with automated payment tracking"
    },
    {
      title: "Payment Recording",
      description: "Record payments and match transactions with bank reconciliation"
    },
    {
      title: "Financial Reporting",
      description: "Generate comprehensive financial statements and analysis reports"
    },
    {
      title: "Period Closing",
      description: "Close accounting periods with automated adjusting entries"
    },
    {
      title: "Audit Trail",
      description: "Maintain complete audit trails for compliance and verification"
    }
  ];

  const kpis = [
    { title: "Cash Flow", value: "+23%", description: "Improved cash flow management" },
    { title: "Processing Time", value: "67%", description: "Faster invoice processing" },
    { title: "Reporting Accuracy", value: "99.8%", description: "Financial data accuracy" },
    { title: "Period Close", value: "3 Days", description: "Average closing time" }
  ];

  const faqs = [
    {
      question: "How does multi-currency handling work?",
      answer: "Our system automatically updates exchange rates and handles currency conversions for international transactions. You can set up multiple base currencies and generate reports in any currency."
    },
    {
      question: "Can I automate bank reconciliation?",
      answer: "Yes, our bank reconciliation feature automatically matches transactions from your bank feeds with recorded entries, highlighting discrepancies for easy resolution."
    },
    {
      question: "What financial reports are available?",
      answer: "We provide comprehensive financial reporting including P&L statements, balance sheets, cash flow statements, trial balances, and custom reports with drill-down capabilities."
    },
    {
      question: "How does the system integrate with banking?",
      answer: "Our finance module integrates with over 12,000 banks worldwide through secure API connections, enabling automatic transaction import and real-time balance updates."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
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
                    Finance & Accounting
                  </h1>
                  <p className="text-xl text-white/90">
                    Complete financial management with automated accounting, real-time reporting, and compliance tools.
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
              <div className="relative lg:scale-110 lg:-translate-y-8">
                <DotLottieReact
                  src="https://lottie.host/aa951288-45b8-4e8f-92ad-acff1f9750bd/oatj3jbVU5.lottie"
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

        {/* Finance Image Section */}
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
                src="/accounting dashboard final.png" 
                alt="Finance & Accounting Dashboard" 
                className="mx-auto max-w-7xl w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Enhanced Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-green-400/40 to-teal-400/40 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-400/40 to-purple-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
            
            {/* Geometric shapes and lines */}
            <div className="absolute top-20 left-1/4 w-20 h-20 border-2 border-green-400/20 rounded-full animate-float" style={{animationDuration: '12s'}} />
            <div className="absolute top-40 right-1/3 w-16 h-16 border-2 border-teal-400/30 rotate-45 animate-float" style={{animationDelay: '2s', animationDuration: '10s'}} />
            <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rotate-12 animate-float" style={{animationDelay: '1.5s', animationDuration: '14s'}} />
            
            {/* Diagonal lines */}
            <div className="absolute top-32 left-20 w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400/30 to-transparent rotate-45" />
            <div className="absolute bottom-40 right-24 w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent -rotate-45" />
            <div className="absolute top-80 right-40 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent rotate-12" />
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-20 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              />
            ))}
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="container-wide">
            <div className="text-center mb-16 relative">
              {/* Geometric Shapes in Header Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{zIndex: 0}}>
                {/* Circles */}
                <div className="absolute top-0 left-1/4 w-24 h-24 border-3 border-green-500/30 rounded-full animate-float" style={{animationDuration: '10s'}} />
                <div className="absolute top-10 right-1/3 w-20 h-20 border-3 border-teal-500/30 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '8s'}} />
                
                {/* Squares */}
                <div className="absolute top-5 right-1/4 w-18 h-18 border-2 border-cyan-500/30 rotate-45 animate-float" style={{animationDuration: '11s'}} />
                <div className="absolute bottom-5 right-1/3 w-20 h-20 bg-gradient-to-br from-green-500/15 to-teal-500/15 rotate-12 animate-float" style={{animationDelay: '2.5s', animationDuration: '9s'}} />
                
                {/* Triangles */}
                <div className="absolute top-8 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-green-500/30 animate-float" style={{animationDelay: '1s', animationDuration: '10s'}} />
                
                {/* Dots */}
                <div className="absolute top-12 right-1/2 w-3 h-3 bg-teal-600/40 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-1/2 w-3 h-3 bg-green-600/40 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              </div>
              
              <div className="inline-block mb-4 animate-bounce" style={{zIndex: 1, position: 'relative'}}>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full text-sm font-semibold text-green-700 shadow-lg">
                  ✨ Core Features
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Comprehensive Financial Management
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Streamline your financial operations with integrated accounting, reporting, and compliance tools.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden">
                    {/* Enhanced gradient background with multiple layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-teal-50/50 to-cyan-50/50 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-100/30 to-transparent" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-300/30 via-teal-300/30 to-cyan-300/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-2xl blur-xl" />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Spinner Section */}
        <ReportSpinner reports={reportImages} />

        {/* Workflow Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Financial Process Workflow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Streamlined financial processes from invoice to reporting
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {workflows.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KPIs Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Financial Performance Metrics</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Track key financial indicators and improve business performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {kpis.map((kpi, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">{kpi.value}</CardTitle>
                    <CardDescription className="text-lg font-semibold">{kpi.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{kpi.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our finance module
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
};

export default Finance;
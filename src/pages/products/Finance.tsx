import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Play, Calculator, Receipt, BarChart3, Wallet, CreditCard, FileText } from "lucide-react";

const Finance = () => {
  const features = [
    {
      icon: Calculator,
      title: "General Ledger",
      description: "Complete chart of accounts with automated journal entries and real-time balance tracking."
    },
    {
      icon: Receipt,
      title: "Accounts Payable/Receivable",
      description: "Streamlined invoice processing, payment tracking, and automated aging reports."
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Comprehensive financial statements, P&L reports, and customizable dashboards."
    },
    {
      icon: Wallet,
      title: "Budget Management",
      description: "Advanced budgeting tools with variance analysis and forecasting capabilities."
    },
    {
      icon: CreditCard,
      title: "Multi-Currency Support",
      description: "Handle multiple currencies with automatic exchange rate updates and conversions."
    },
    {
      icon: FileText,
      title: "Tax Management",
      description: "Automated tax calculations, compliance tracking, and regulatory reporting."
    }
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
        <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Finance & Accounting
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Complete financial management with automated accounting, real-time reporting, and compliance tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                  <Play className="mr-2 h-4 w-4" />
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Financial Management</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Streamline your financial operations with integrated accounting, reporting, and compliance tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
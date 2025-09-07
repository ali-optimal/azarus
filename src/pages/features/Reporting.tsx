import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, BarChart3, PieChart, TrendingUp, Calendar, FileText, Target } from "lucide-react";

const Reporting = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with live data updates and customizable widgets for instant insights."
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "Rich charts, graphs, and visualizations that make complex data easy to understand."
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Advanced analytics to identify patterns, trends, and forecasting opportunities."
    },
    {
      icon: Calendar,
      title: "Scheduled Reports",
      description: "Automated report generation and delivery on your preferred schedule."
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description: "Build custom reports with drag-and-drop functionality and advanced filtering."
    },
    {
      icon: Target,
      title: "KPI Tracking",
      description: "Monitor key performance indicators with alerts and goal tracking."
    }
  ];

  const benefits = [
    "Real-time data visualization across all business modules",
    "Customizable dashboards for different user roles",
    "Advanced filtering and drill-down capabilities",
    "Export to PDF, Excel, and other formats",
    "Mobile-responsive reports for on-the-go access",
    "Automated report scheduling and distribution"
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
                Real-time Reporting & Analytics
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Transform your data into actionable insights with powerful reporting tools and real-time analytics dashboards.
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
                  View Examples
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Reporting Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced reporting and analytics tools to help you make data-driven decisions
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

      {/* Benefits Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Key Benefits</h2>
              <p className="text-xl text-muted-foreground">
                Our reporting system provides comprehensive insights across all your business operations.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8">
              <div className="text-center space-y-4">
                <BarChart3 className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">95% Faster</h3>
                <p className="text-muted-foreground">Report generation compared to manual processes</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default Reporting;
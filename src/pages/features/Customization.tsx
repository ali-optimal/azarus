import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Settings, Palette, Code, Layout, Workflow, Zap } from "lucide-react";

const Customization = () => {
  const features = [
    {
      icon: Settings,
      title: "Flexible Configuration",
      description: "Configure workflows, fields, and processes to match your unique business requirements."
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Apply your brand colors, logos, and styling throughout the entire system."
    },
    {
      icon: Code,
      title: "Custom Fields",
      description: "Add custom fields and data types to capture information specific to your business."
    },
    {
      icon: Layout,
      title: "Dashboard Layouts",
      description: "Create personalized dashboards with drag-and-drop widgets and custom layouts."
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Design custom workflows and automation rules to streamline your processes."
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Connect with third-party systems through our robust API and integration framework."
    }
  ];

  const customizationOptions = [
    "Custom user roles and permissions",
    "Personalized dashboard layouts",
    "Custom form builders and fields",
    "Automated workflow configuration",
    "Brand customization and theming",
    "Custom report templates"
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
                Complete Customization
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Tailor Azarus ERP to fit your exact business needs with unlimited customization options and flexible configuration.
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
                  See Examples
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
            <h2 className="text-3xl md:text-4xl font-bold">Customization Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to customize every aspect of your ERP system
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

      {/* Customization Options Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">What You Can Customize</h2>
              <p className="text-xl text-muted-foreground">
                Our platform offers unprecedented flexibility to adapt to your business processes.
              </p>
              <ul className="space-y-4">
                {customizationOptions.map((option, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8">
              <div className="text-center space-y-4">
                <Settings className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">Unlimited</h3>
                <p className="text-muted-foreground">Customization possibilities to match your business</p>
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

export default Customization;
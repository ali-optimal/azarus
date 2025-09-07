import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Link, Code, Database, Cloud, Webhook, Puzzle } from "lucide-react";

const Integration = () => {
  const features = [
    {
      icon: Link,
      title: "API-First Architecture",
      description: "Comprehensive REST APIs for seamless integration with any third-party system or service."
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Complete SDK, documentation, and developer tools for custom integrations."
    },
    {
      icon: Database,
      title: "Data Synchronization",
      description: "Real-time data sync with external databases and systems."
    },
    {
      icon: Cloud,
      title: "Cloud Connectors",
      description: "Pre-built connectors for popular cloud services and platforms."
    },
    {
      icon: Webhook,
      title: "Webhooks & Events",
      description: "Real-time notifications and triggers for automated workflows."
    },
    {
      icon: Puzzle,
      title: "Marketplace Apps",
      description: "Access to hundreds of pre-built integrations and third-party apps."
    }
  ];

  const integrationTypes = [
    {
      category: "Accounting & Finance",
      systems: ["QuickBooks", "Xero", "SAP", "Oracle Financials", "NetSuite"]
    },
    {
      category: "E-commerce",
      systems: ["Shopify", "WooCommerce", "Magento", "Amazon", "eBay"]
    },
    {
      category: "Communication",
      systems: ["Slack", "Microsoft Teams", "Zoom", "Google Workspace", "Office 365"]
    },
    {
      category: "Marketing",
      systems: ["HubSpot", "Salesforce", "Mailchimp", "Google Analytics", "Facebook Ads"]
    }
  ];

  const benefits = [
    "Connect with 500+ popular business applications",
    "Real-time data synchronization",
    "No-code integration builder",
    "Custom API development support",
    "Secure data encryption in transit",
    "24/7 integration monitoring"
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
                Seamless Integration
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Connect Azarus ERP with your existing tools and systems through powerful APIs and pre-built integrations.
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
                <a href="/resources/documentation" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  API Docs
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
            <h2 className="text-3xl md:text-4xl font-bold">Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and features for connecting with your business ecosystem
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

      {/* Integration Types Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Popular Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {type.systems.map((system, systemIndex) => (
                      <span 
                        key={systemIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Integration Benefits</h2>
              <p className="text-xl text-muted-foreground">
                Streamline your operations with seamless system connectivity.
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
                <Link className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-muted-foreground">Pre-built integrations available</p>
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

export default Integration;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Link, Code, Database, Cloud, Webhook, Puzzle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
      <section className="section-padding pt-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 25%, #14b8a6 50%, #06b6d4 75%, #0ea5e9 100%)'
      }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 left-20 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">500+ Integrations</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-cyan-100">
                Seamless Integration
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Connect Azarus ERP with your existing tools and systems through powerful APIs and pre-built integrations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="xl" className="bg-white text-emerald-600 hover:bg-white/90 shadow-xl shadow-emerald-500/50 group">
                <a href="/book-demo" className="flex items-center">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12"
            >
              {[
                { value: "500+", label: "Integrations" },
                { value: "REST", label: "API Available" },
                { value: "Real-time", label: "Sync" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-background to-emerald-50/30 dark:to-emerald-950/10">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-4">
              <Puzzle className="w-4 h-4" />
              <span className="text-sm font-semibold">Connect Everything</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
              Integration Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools and features for connecting with your business ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 group bg-gradient-to-br from-white to-emerald-50/50 dark:from-gray-950 dark:to-emerald-950/20">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/50">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
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
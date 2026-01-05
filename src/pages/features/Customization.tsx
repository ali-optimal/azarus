import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Settings, Palette, Code, Layout, Workflow, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
      <section className="section-padding pt-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 25%, #6366f1 50%, #3b82f6 75%, #06b6d4 100%)'
      }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 11,
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
              <span className="text-sm font-medium">Fully Customizable</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-purple-100">
                Complete Customization
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Tailor Azarus ERP to fit your exact business needs with unlimited customization options and flexible configuration.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="xl" className="bg-white text-pink-600 hover:bg-white/90 shadow-xl shadow-pink-500/50 group">
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
                { value: "500+", label: "Custom Fields" },
                { value: "Unlimited", label: "Workflows" },
                { value: "Full", label: "Brand Control" }
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
      <section className="section-padding bg-gradient-to-b from-background to-pink-50/30 dark:to-pink-950/10">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 mb-4">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-semibold">Flexible Configuration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Customization Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools to customize every aspect of your ERP system
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
                <Card className="h-full border-2 hover:border-pink-300 dark:hover:border-pink-700 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 group bg-gradient-to-br from-white to-pink-50/50 dark:from-gray-950 dark:to-pink-950/20">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/50">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, TrendingUp, Users, Server, Globe, Zap, Database, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Scalability = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Horizontal Scaling",
      description: "Seamlessly scale your system as your business grows without performance degradation."
    },
    {
      icon: Users,
      title: "Unlimited Users",
      description: "Add unlimited users and departments without compromising system performance."
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Built on modern cloud architecture that automatically scales with your needs."
    },
    {
      icon: Globe,
      title: "Multi-Location Support",
      description: "Manage multiple offices, warehouses, and locations from a single platform."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and efficiency, even with millions of records and transactions."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Advanced data partitioning and optimization for large-scale operations."
    }
  ];

  const scalingCapabilities = [
    "Handle millions of transactions per day",
    "Support thousands of concurrent users",
    "Auto-scaling cloud infrastructure",
    "Global content delivery network",
    "Load balancing and redundancy",
    "99.9% uptime guarantee"
  ];

  const growthStages = [
    { stage: "Startup", users: "1-50", description: "Perfect for small teams getting started" },
    { stage: "Growth", users: "50-500", description: "Scale with your expanding business" },
    { stage: "Enterprise", users: "500+", description: "Support large organizations with complex needs" },
    { stage: "Global", users: "Unlimited", description: "Worldwide operations with multi-location support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0891b2 0%, #0284c7 25%, #3b82f6 50%, #6366f1 75%, #8b5cf6 100%)'
      }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
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
              <span className="text-sm font-medium">99.9% Uptime</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-100">
                Infinite Scalability
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Built to grow with your business - from startup to enterprise scale with no limits on users or data.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="xl" className="bg-white text-cyan-600 hover:bg-white/90 shadow-xl shadow-cyan-500/50 group">
                <a href="/book-demo" className="flex items-center">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 group">
                <a href="/pricing" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  View Pricing
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
                { value: "Unlimited", label: "Users" },
                { value: "Cloud", label: "Infrastructure" },
                { value: "Auto", label: "Scaling" }
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
      <section className="section-padding bg-gradient-to-b from-background to-cyan-50/30 dark:to-cyan-950/10">
        <div className="container-wide">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 mb-4">
              <Server className="w-4 h-4" />
              <span className="text-sm font-semibold">Enterprise Ready</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
              Scalability Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced architecture designed for unlimited growth and performance
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
                <Card className="h-full border-2 hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group bg-gradient-to-br from-white to-cyan-50/50 dark:from-gray-950 dark:to-cyan-950/20">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
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

      {/* Growth Stages Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Scale at Every Stage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From small teams to global enterprises - we grow with you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthStages.map((stage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{stage.stage}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{stage.users} users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Performance at Scale</h2>
              <p className="text-xl text-muted-foreground">
                Our platform delivers consistent performance regardless of your business size.
              </p>
              <ul className="space-y-4">
                {scalingCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8">
              <div className="text-center space-y-4">
                <TrendingUp className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold">99.9%</h3>
                <p className="text-muted-foreground">Uptime guarantee with auto-scaling infrastructure</p>
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

export default Scalability;
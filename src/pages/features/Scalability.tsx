import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, TrendingUp, Users, Server, Globe, Zap, Database } from "lucide-react";

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
      <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Infinite Scalability
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Built to grow with your business - from startup to enterprise scale with no limits on users or data.
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
                <a href="/pricing" className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  View Pricing
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
            <h2 className="text-3xl md:text-4xl font-bold">Scalability Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced architecture designed for unlimited growth and performance
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
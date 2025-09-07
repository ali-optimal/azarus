import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Shield, Lock, Eye, UserCheck, Database, FileText } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your sensitive business data."
    },
    {
      icon: Lock,
      title: "Two-Factor Authentication",
      description: "Multi-factor authentication ensures only authorized users can access your system."
    },
    {
      icon: Eye,
      title: "Audit Trails",
      description: "Complete activity logs and audit trails for compliance and security monitoring."
    },
    {
      icon: UserCheck,
      title: "Role-Based Access",
      description: "Granular permission controls to ensure users only access what they need."
    },
    {
      icon: Database,
      title: "Data Backup & Recovery",
      description: "Automated backups with point-in-time recovery to protect against data loss."
    },
    {
      icon: FileText,
      title: "Compliance Ready",
      description: "Built-in compliance features for GDPR, SOX, HIPAA, and other regulations."
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
                  Security & Compliance
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Enterprise-grade security and compliance features to protect your business and meet regulatory requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                  <Play className="mr-2 h-4 w-4" />
                  Security Overview
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Enterprise-Grade Security</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive security measures to protect your data and ensure compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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

        <CTABand />
      </main>

      <Footer />
    </div>
  );
};

export default Security;
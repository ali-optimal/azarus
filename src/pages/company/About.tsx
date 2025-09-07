import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime SLA" }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the center of everything we do, ensuring their success is our priority."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge technology and forward-thinking solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality products and services that exceed expectations."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Empowering businesses worldwide to achieve their goals through intelligent business solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in enterprise software with a vision to democratize business intelligence.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former tech lead at major cloud providers, expert in scalable system architecture.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product strategy expert with deep understanding of customer needs and market trends.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Engineering leader passionate about building robust, secure, and scalable solutions.",
      image: "/api/placeholder/150/150"
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
                  About Azarus
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  We're on a mission to empower businesses of all sizes with intelligent, integrated ERP solutions that drive growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Founded in 2009, Azarus began with a simple belief: that every business deserves access to powerful, 
                  enterprise-grade tools that can help them compete and grow. What started as a small team of passionate 
                  developers has grown into a global company serving hundreds of businesses across 50+ countries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to innovate and push the boundaries of what's possible in business management software, 
                  always with our customers' success as our north star. Our integrated ERP platform has helped businesses 
                  streamline operations, increase efficiency, and achieve remarkable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced leaders driving Azarus's vision and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
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

export default About;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Shield, Globe } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous PTO policy."
    },
    {
      icon: Zap,
      title: "Growth & Development",
      description: "Learning stipends, conference attendance, and career advancement opportunities."
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity options, and performance bonuses."
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with talented, passionate people who care about making a difference."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Shape products used by thousands of businesses worldwide."
    }
  ];

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our frontend team to build intuitive, responsive interfaces for our ERP platform using React, TypeScript, and modern web technologies.",
      requirements: [
        "5+ years of React/TypeScript experience",
        "Experience with modern CSS and design systems",
        "Strong understanding of web performance optimization",
        "Experience with testing frameworks"
      ]
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "4+ years",
      description: "Build scalable backend services and APIs that power our ERP platform, working with microservices, databases, and cloud infrastructure.",
      requirements: [
        "4+ years of backend development experience",
        "Strong knowledge of Node.js, Python, or similar",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Cloud platform experience (AWS, GCP, Azure)"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive product strategy and roadmap for our ERP modules, working closely with engineering, design, and customer success teams.",
      requirements: [
        "3+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and communication skills",
        "Understanding of ERP or business software"
      ]
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive user experiences for complex business workflows, creating wireframes, prototypes, and design systems.",
      requirements: [
        "3+ years of UX design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Experience with design systems",
        "Understanding of user research methods"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago / Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our customers achieve success with our ERP platform, providing guidance, training, and ongoing support.",
      requirements: [
        "2+ years of customer success experience",
        "Strong communication and problem-solving skills",
        "Experience with B2B SaaS products",
        "Ability to understand technical concepts"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage our cloud infrastructure, CI/CD pipelines, and ensure the reliability and scalability of our platform.",
      requirements: [
        "4+ years of DevOps experience",
        "Strong knowledge of Docker, Kubernetes",
        "Experience with CI/CD tools (Jenkins, GitLab CI)",
        "Cloud platform expertise (AWS, GCP, Azure)"
      ]
    }
  ];

  const values = [
    {
      title: "Customer First",
      description: "Everything we do is focused on delivering value to our customers."
    },
    {
      title: "Continuous Learning",
      description: "We embrace curiosity and invest in personal and professional growth."
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse perspectives working together."
    },
    {
      title: "Innovation",
      description: "We're not afraid to challenge the status quo and try new approaches."
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
                  Join Our Team
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Help us build the future of business management software. Join a team of passionate innovators making a real impact.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white">
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Why Work at Azarus?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're building more than just software—we're creating a place where talented people can do their best work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <benefit.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide how we work, make decisions, and treat each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity and help us build the future of business software.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <Badge variant="secondary">{position.department}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{position.type}</span>
                          </div>
                          <Badge variant="outline">{position.experience}</Badge>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {position.description}
                        </CardDescription>
                      </div>
                      <Button className="md:mt-2">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our Hiring Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We've designed our process to be thorough yet respectful of your time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Application Review</h3>
                  <p className="text-sm text-muted-foreground">We review your application and resume within 1-2 business days.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Initial Interview</h3>
                  <p className="text-sm text-muted-foreground">30-minute call to discuss your background and the role.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Technical/Skills Assessment</h3>
                  <p className="text-sm text-muted-foreground">Role-specific assessment to evaluate your technical or functional skills.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Final Interview</h3>
                  <p className="text-sm text-muted-foreground">Meet with team members and discuss culture fit and next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
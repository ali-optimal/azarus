import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Star, Bug, Zap, Shield, Plus, Search } from "lucide-react";

const ReleaseNotes = () => {
  const releases = [
    {
      version: "3.8.0",
      date: "March 15, 2024",
      type: "Major Release",
      highlights: [
        "New AI-powered analytics dashboard",
        "Enhanced mobile experience",
        "Advanced workflow automation"
      ],
      features: [
        {
          icon: Star,
          title: "AI Analytics Dashboard",
          description: "Intelligent insights and predictive analytics powered by machine learning algorithms."
        },
        {
          icon: Zap,
          title: "Mobile App Redesign",
          description: "Completely redesigned mobile interface with improved performance and usability."
        },
        {
          icon: Plus,
          title: "Workflow Automation 2.0",
          description: "Enhanced automation engine with visual workflow builder and conditional logic."
        }
      ],
      improvements: [
        "40% faster page load times across all modules",
        "Improved search functionality with instant results",
        "Enhanced data export capabilities",
        "Better integration with third-party applications"
      ],
      bugFixes: [
        "Fixed invoice calculation errors in multi-currency transactions",
        "Resolved dashboard widget refresh issues",
        "Fixed user permission sync delays",
        "Corrected timezone handling in scheduled reports"
      ]
    },
    {
      version: "3.7.2",
      date: "February 28, 2024",
      type: "Security Update",
      highlights: [
        "Critical security patches",
        "Enhanced data encryption",
        "Improved audit logging"
      ],
      features: [
        {
          icon: Shield,
          title: "Enhanced Security",
          description: "Upgraded encryption protocols and enhanced security monitoring capabilities."
        }
      ],
      improvements: [
        "Strengthened password requirements",
        "Enhanced session management",
        "Improved audit trail logging"
      ],
      bugFixes: [
        "Fixed potential XSS vulnerability in custom fields",
        "Resolved authentication token refresh issues",
        "Fixed data export security validation"
      ]
    },
    {
      version: "3.7.1",
      date: "February 10, 2024",
      type: "Bug Fix Release",
      highlights: [
        "Performance optimizations",
        "UI/UX improvements",
        "Bug fixes and stability"
      ],
      features: [],
      improvements: [
        "Optimized database queries for better performance",
        "Improved error handling and user feedback",
        "Enhanced report generation speed"
      ],
      bugFixes: [
        "Fixed memory leak in dashboard widgets",
        "Resolved calendar sync issues",
        "Fixed data validation errors in custom forms",
        "Corrected email notification delivery delays"
      ]
    },
    {
      version: "3.7.0",
      date: "January 25, 2024",
      type: "Major Release",
      highlights: [
        "New project management module",
        "Advanced reporting engine",
        "API improvements"
      ],
      features: [
        {
          icon: Plus,
          title: "Project Management Module",
          description: "Complete project tracking with Gantt charts, resource allocation, and milestone tracking."
        },
        {
          icon: Star,
          title: "Advanced Reporting Engine",
          description: "New drag-and-drop report builder with real-time collaboration features."
        },
        {
          icon: Zap,
          title: "API v3.0",
          description: "Redesigned REST API with improved performance and additional endpoints."
        }
      ],
      improvements: [
        "50% improvement in report generation speed",
        "Enhanced user interface consistency",
        "Better mobile responsiveness",
        "Improved data synchronization"
      ],
      bugFixes: [
        "Fixed calendar view rendering issues",
        "Resolved file upload size limitations",
        "Fixed notification delivery inconsistencies",
        "Corrected time zone calculations in reports"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Major Release":
        return "default";
      case "Security Update":
        return "destructive";
      case "Bug Fix Release":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Major Release":
        return Star;
      case "Security Update":
        return Shield;
      case "Bug Fix Release":
        return Bug;
      default:
        return Zap;
    }
  };

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
                  Release Notes
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Stay up to date with the latest features, improvements, and fixes in Azarus ERP.
                </p>
              </div>

              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                  <Input 
                    placeholder="Search releases..." 
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Version Banner */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Badge variant="default">Current Version</Badge>
                  <span className="text-2xl font-bold">v{releases[0].version}</span>
                </div>
                <p className="text-muted-foreground">
                  Released on {releases[0].date} • {releases[0].highlights.join(" • ")}
                </p>
                <Button className="mt-4">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Release Timeline */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Release History</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Detailed changelog for all releases with new features, improvements, and bug fixes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {releases.map((release, index) => {
                const TypeIcon = getTypeIcon(release.type);
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <TypeIcon className="h-6 w-6 text-primary" />
                          <div>
                            <CardTitle className="text-2xl">Version {release.version}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{release.date}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant={getTypeColor(release.type)}>
                          {release.type}
                        </Badge>
                      </div>
                      
                      <CardDescription className="text-base">
                        {release.highlights.join(" • ")}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* New Features */}
                      {release.features.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Star className="h-5 w-5 text-primary" />
                            New Features
                          </h4>
                          <div className="space-y-4">
                            {release.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                <feature.icon className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-semibold">{feature.title}</h5>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Improvements */}
                      {release.improvements.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            Improvements
                          </h4>
                          <ul className="space-y-2">
                            {release.improvements.map((improvement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                                {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bug Fixes */}
                      {release.bugFixes.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Bug className="h-5 w-5 text-primary" />
                            Bug Fixes
                          </h4>
                          <ul className="space-y-2">
                            {release.bugFixes.map((fix, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                                {fix}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load Older Releases
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Stay Informed</h2>
                <p className="text-xl text-muted-foreground">
                  Get notified about new releases and important updates.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                We only send release notifications. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReleaseNotes;
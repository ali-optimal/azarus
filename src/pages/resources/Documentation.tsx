import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Video, Download, ExternalLink, ArrowRight } from "lucide-react";

const Documentation = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Everything you need to begin with Azarus ERP",
      icon: BookOpen,
      articles: [
        { title: "Quick Start Guide", type: "Guide", readTime: "5 min" },
        { title: "System Requirements", type: "Reference", readTime: "2 min" },
        { title: "First Login & Setup", type: "Tutorial", readTime: "8 min" },
        { title: "Dashboard Overview", type: "Guide", readTime: "6 min" }
      ]
    },
    {
      title: "User Guides",
      description: "Detailed guides for each module and feature",
      icon: BookOpen,
      articles: [
        { title: "CRM Module Guide", type: "Guide", readTime: "15 min" },
        { title: "Financial Management", type: "Guide", readTime: "20 min" },
        { title: "Inventory & Stock Control", type: "Guide", readTime: "18 min" },
        { title: "HR & Payroll", type: "Guide", readTime: "12 min" }
      ]
    },
    {
      title: "API Documentation",
      description: "Complete API reference and integration guides",
      icon: BookOpen,
      articles: [
        { title: "REST API Overview", type: "Reference", readTime: "10 min" },
        { title: "Authentication Guide", type: "Tutorial", readTime: "7 min" },
        { title: "Webhooks Integration", type: "Guide", readTime: "12 min" },
        { title: "Rate Limits & Best Practices", type: "Reference", readTime: "5 min" }
      ]
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and training materials",
      icon: Video,
      articles: [
        { title: "Platform Introduction", type: "Video", readTime: "12 min" },
        { title: "Setting Up Your First Project", type: "Video", readTime: "15 min" },
        { title: "Advanced Reporting Features", type: "Video", readTime: "18 min" },
        { title: "Custom Workflow Creation", type: "Video", readTime: "22 min" }
      ]
    }
  ];

  const quickLinks = [
    { title: "System Status", url: "#", external: true },
    { title: "Release Notes", url: "#", external: false },
    { title: "API Reference", url: "#", external: true },
    { title: "Support Portal", url: "#", external: true },
    { title: "Community Forum", url: "#", external: true },
    { title: "Training Resources", url: "#", external: false }
  ];

  const popularArticles = [
    { title: "How to Set Up Your First Dashboard", category: "Getting Started", views: "12.5k" },
    { title: "Integrating with Third-Party Applications", category: "API", views: "8.2k" },
    { title: "Advanced Financial Reporting", category: "Finance", views: "7.8k" },
    { title: "User Permissions and Access Control", category: "Security", views: "6.9k" },
    { title: "Backup and Data Recovery", category: "Administration", views: "5.4k" }
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
                  Documentation
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Complete guides, tutorials, and reference materials to help you get the most out of Azarus ERP.
                </p>
              </div>

              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                  <Input 
                    placeholder="Search documentation..." 
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <Button key={index} variant="outline" className="group">
                  {link.title}
                  {link.external ? (
                    <ExternalLink className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Browse Documentation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find guides, tutorials, and reference materials organized by category.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <category.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {category.articles.map((article, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              {article.type === "Video" ? (
                                <Video className="h-4 w-4 text-primary" />
                              ) : article.type === "Tutorial" ? (
                                <BookOpen className="h-4 w-4 text-primary" />
                              ) : (
                                <BookOpen className="h-4 w-4 text-primary" />
                              )}
                              <span className="font-medium group-hover:text-primary transition-colors">
                                {article.title}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {article.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4 group">
                      View All {category.title}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Popular Articles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Most viewed and helpful articles from our community.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background border rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-muted-foreground">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {article.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Resources */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Download Resources</h2>
                <p className="text-xl text-muted-foreground">
                  Get offline access to our most important guides and references.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Complete User Manual (PDF)
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  API Reference (PDF)
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
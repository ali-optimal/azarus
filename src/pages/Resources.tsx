import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABand from "@/components/CTABand";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, FileText, Video, Download, Code, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const Resources = () => {
  const { t } = useTranslation();
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive guides and tutorials",
      items: [
        { name: "Getting Started Guide", href: "/resources/documentation", type: "Guide" },
        { name: "Best Practices", href: "/resources/documentation", type: "Guide" },
        { name: "User Manual", href: "/resources/documentation", type: "Manual" },
        { name: "Admin Guide", href: "/resources/documentation", type: "Guide" }
      ]
    },
    {
      icon: FileText,
      title: "Case Studies & Reports",
      description: "Real-world success stories and insights",
      items: [
        { name: "Manufacturing Success Story", href: "/resources/case-studies", type: "Case Study" },
        { name: "Healthcare Implementation", href: "/resources/case-studies", type: "Case Study" },
        { name: "ROI Analysis Report", href: "/resources/white-papers", type: "White Paper" },
        { name: "Industry Trends", href: "/resources/white-papers", type: "White Paper" }
      ]
    },
    {
      icon: Video,
      title: "Learning Resources",
      description: "Videos, webinars, and training materials",
      items: [
        { name: "Product Demo Videos", href: "/book-demo", type: "Video" },
        { name: "Training Webinars", href: "/book-demo", type: "Webinar" },
        { name: "Feature Tutorials", href: "/resources/documentation", type: "Tutorial" },
        { name: "Implementation Guide", href: "/resources/documentation", type: "Guide" }
      ]
    },
    {
      icon: Code,
      title: "Developer Resources",
      description: "APIs, SDKs, and technical documentation",
      items: [
        { name: "API Documentation", href: "/resources/documentation", type: "API Docs" },
        { name: "SDK Downloads", href: "/resources/documentation", type: "SDK" },
        { name: "Integration Examples", href: "/resources/documentation", type: "Examples" },
        { name: "Developer Forum", href: "/resources/documentation", type: "Forum" }
      ]
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Brochures, templates, and tools",
      items: [
        { name: "Product Brochure", href: "/contact", type: "PDF" },
        { name: "Feature Comparison", href: "/contact", type: "PDF" },
        { name: "Implementation Checklist", href: "/contact", type: "Template" },
        { name: "ROI Calculator", href: "/contact", type: "Tool" }
      ]
    },
    {
      icon: MessageSquare,
      title: "Support & Community",
      description: "Get help and connect with other users",
      items: [
        { name: "Help Center", href: "/contact", type: "Support" },
        { name: "Community Forum", href: "/contact", type: "Forum" },
        { name: "Submit a Ticket", href: "/contact", type: "Support" },
        { name: "Contact Support", href: "/contact", type: "Contact" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Complete Implementation Guide",
      description: "Step-by-step guide to successfully implement Azarus ERP in your organization.",
      type: "Guide",
      href: "/resources/documentation"
    },
    {
      title: "Manufacturing ROI Case Study",
      description: "How a manufacturing company achieved 300% ROI with Azarus ERP implementation.",
      type: "Case Study",
      href: "/resources/case-studies"
    },
    {
      title: "API Integration Whitepaper",
      description: "Technical deep-dive into integrating Azarus ERP with your existing systems.",
      type: "White Paper",
      href: "/resources/white-papers"
    }
  ];

  const quickLinks = [
    { name: "Blog", href: "/resources/blog", description: "Latest news and insights" },
    { name: "Release Notes", href: "/resources/release-notes", description: "Latest updates and features" },
    { name: "Documentation", href: "/resources/documentation", description: "Complete product documentation" },
    { name: "Case Studies", href: "/resources/case-studies", description: "Customer success stories" },
    { name: "White Papers", href: "/resources/white-papers", description: "Industry insights and research" }
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
                {t("resources.title")}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {t("resources.subtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90 border-white group">
                <a href="/resources/documentation" className="flex items-center">
                  Browse Documentation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="ghost" size="xl" className="text-white border-white/20 hover:bg-white/10 group">
                <a href="/contact" className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Quick Access</h2>
            <p className="text-xl text-muted-foreground">Jump to the most popular resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center p-4">
                <CardContent className="pt-0">
                  <a href={link.href} className="block space-y-2">
                    <h3 className="font-semibold text-lg">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Resources</h2>
            <p className="text-xl text-muted-foreground">Most popular and recently updated content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                      {resource.type}
                    </span>
                  </div>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={resource.href}>Read More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">All Resources</h2>
            <p className="text-xl text-muted-foreground">Comprehensive collection of resources organized by category</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <category.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href={item.href}
                          className="flex justify-between items-center hover:text-primary transition-colors"
                        >
                          <span className="text-sm">{item.name}</span>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {item.type}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
};

export default Resources;
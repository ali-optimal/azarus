import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, FileText, Calendar, User, BookOpen } from "lucide-react";

const WhitePapers = () => {
  const whitePapers = [
    {
      title: "The Complete Guide to ERP Digital Transformation",
      description: "A comprehensive 45-page guide covering every aspect of ERP implementation, from planning to go-live and beyond.",
      category: "Digital Transformation",
      pages: "45 pages",
      publishDate: "March 2024",
      author: "Azarus Research Team",
      topics: ["Implementation Strategy", "Change Management", "ROI Calculation", "Best Practices"],
      downloadUrl: "#"
    },
    {
      title: "Manufacturing ERP: Industry-Specific Requirements",
      description: "Deep dive into manufacturing-specific ERP requirements, including production planning, quality control, and supply chain optimization.",
      category: "Manufacturing",
      pages: "32 pages",
      publishDate: "February 2024",
      author: "Sarah Johnson, Manufacturing Expert",
      topics: ["Production Planning", "Quality Management", "Inventory Optimization", "Compliance"],
      downloadUrl: "#"
    },
    {
      title: "Cloud vs On-Premise ERP: Making the Right Choice",
      description: "Detailed comparison of deployment options with cost analysis, security considerations, and scalability factors.",
      category: "Technology",
      pages: "28 pages",
      publishDate: "January 2024",
      author: "Michael Chen, CTO",
      topics: ["Cost Analysis", "Security", "Scalability", "Performance"],
      downloadUrl: "#"
    },
    {
      title: "AI and Machine Learning in Modern ERP Systems",
      description: "Explore how artificial intelligence is revolutionizing business processes and decision-making in ERP platforms.",
      category: "Innovation",
      pages: "38 pages",
      publishDate: "December 2023",
      author: "Dr. Emily Rodriguez",
      topics: ["Predictive Analytics", "Process Automation", "Smart Insights", "Future Trends"],
      downloadUrl: "#"
    },
    {
      title: "ERP Security: Protecting Your Business Data",
      description: "Comprehensive guide to ERP security, covering data protection, access controls, compliance, and threat mitigation.",
      category: "Security",
      pages: "42 pages",
      publishDate: "November 2023",
      author: "David Kim, Security Architect",
      topics: ["Data Protection", "Access Control", "Compliance", "Risk Management"],
      downloadUrl: "#"
    },
    {
      title: "Small Business ERP: Scaling Without Complexity",
      description: "How small and medium businesses can leverage enterprise-grade ERP without the enterprise complexity and cost.",
      category: "Small Business",
      pages: "25 pages",
      publishDate: "October 2023",
      author: "Lisa Thompson, SMB Specialist",
      topics: ["Cost Management", "Scalability", "Implementation", "ROI"],
      downloadUrl: "#"
    }
  ];

  const categories = ["All", "Digital Transformation", "Manufacturing", "Technology", "Innovation", "Security", "Small Business"];

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
                  White Papers & Research
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  In-depth research, analysis, and insights to help you make informed ERP decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {whitePapers.map((paper, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{paper.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{paper.pages}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{paper.publishDate}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{paper.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{paper.author}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2">Download this white paper</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Enter your details to access this comprehensive resource.
                        </p>
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <Label htmlFor={`name-${index}`} className="text-xs">Name</Label>
                              <Input id={`name-${index}`} placeholder="Your name" />
                            </div>
                            <div>
                              <Label htmlFor={`email-${index}`} className="text-xs">Email</Label>
                              <Input id={`email-${index}`} type="email" placeholder="your@email.com" />
                            </div>
                          </div>
                          <Button className="w-full" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="text-xl text-muted-foreground">
                  Get notified when we publish new research and white papers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhitePapers;
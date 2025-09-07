import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Ways ERP Can Transform Your Manufacturing Operations",
      excerpt: "Discover how modern ERP systems can streamline production, reduce costs, and improve quality control in manufacturing environments.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Manufacturing",
      image: "/api/placeholder/400/240",
      readTime: "5 min read"
    },
    {
      title: "The Future of Business Intelligence: AI-Powered Analytics",
      excerpt: "Explore how artificial intelligence is revolutionizing business analytics and decision-making processes in modern enterprises.",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Analytics",
      image: "/api/placeholder/400/240",
      readTime: "7 min read"
    },
    {
      title: "Choosing the Right ERP: A Complete Buyer's Guide",
      excerpt: "A comprehensive guide to selecting the perfect ERP solution for your business needs, including key features to consider.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Guide",
      image: "/api/placeholder/400/240",
      readTime: "12 min read"
    },
    {
      title: "Cloud vs On-Premise ERP: Making the Right Choice",
      excerpt: "Compare the benefits and drawbacks of cloud-based and on-premise ERP solutions to make an informed decision.",
      author: "David Kim",
      date: "March 8, 2024",
      category: "Technology",
      image: "/api/placeholder/400/240",
      readTime: "6 min read"
    },
    {
      title: "Digital Transformation Success Stories: Real Client Results",
      excerpt: "Learn from real businesses that have successfully transformed their operations with ERP implementation.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Case Study",
      image: "/api/placeholder/400/240",
      readTime: "8 min read"
    },
    {
      title: "Security Best Practices for ERP Systems",
      excerpt: "Essential security measures every business should implement to protect their ERP system and sensitive data.",
      author: "Robert Martinez",
      date: "March 3, 2024",
      category: "Security",
      image: "/api/placeholder/400/240",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Manufacturing", "Analytics", "Security", "Guide", "Technology", "Case Study"];

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
                  Blog & Resources
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Stay informed with the latest insights, best practices, and trends in ERP and business management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="section-padding bg-muted/50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
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
        </section>

        {/* Blog Posts */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in hover-scale cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="aspect-video bg-muted rounded-t-lg mb-4"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
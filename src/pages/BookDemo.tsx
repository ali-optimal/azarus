import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, Users, Zap } from "lucide-react";

const BookDemo = () => {
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
                  See Azarus ERP in Action
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Book a personalized demo and discover how Azarus ERP can transform your business operations in just 20 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Form & Benefits */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo Form */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Enter your company name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="financial">Financial Services</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea 
                      id="message" 
                      placeholder="What challenges are you looking to solve? Which modules are you most interested in?" 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Book My Demo
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">20-Minute Personalized Demo</h3>
                        <p className="text-muted-foreground">
                          A focused session tailored to your specific business needs and industry requirements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Users className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
                        <p className="text-muted-foreground">
                          Our ERP specialists will answer your questions and provide implementation guidance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Zap className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Live System Walkthrough</h3>
                        <p className="text-muted-foreground">
                          See real features in action with data relevant to your business processes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Azarus ERP?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>No long-term contracts required</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>30-day free trial available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>24/7 customer support included</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Implementation support provided</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookDemo;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 290,
      popular: false,
      features: [
        "Up to 5 users",
        "Basic CRM & Project Management",
        "Email support",
        "5GB storage",
        "Basic reporting",
        "Mobile app access",
        "API access"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 790,
      popular: true,
      features: [
        "Up to 25 users",
        "All Starter features",
        "Advanced CRM & Marketing",
        "HR & Payroll modules",
        "Priority support",
        "50GB storage",
        "Advanced analytics",
        "Custom workflows",
        "Third-party integrations"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 149,
      annualPrice: 1490,
      popular: false,
      features: [
        "Unlimited users",
        "All Professional features",
        "Complete module suite",
        "Dedicated support manager",
        "Unlimited storage",
        "White-label options",
        "Advanced security",
        "Custom development",
        "On-premise deployment",
        "SLA guarantee"
      ]
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice;
    return Math.round(((monthlyCost - annualCost) / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business. Start free, upgrade as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${!isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="mx-2"
              />
              <span className={`text-lg ${isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  Save up to 17%
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-8' : ''}`}>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">${getPrice(plan)}</span>
                      <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Save {getSavings(plan)}% annually
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    className={plan.popular ? 'w-full' : 'w-full'} 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Compare All Features
              </Button>
              <Button variant="ghost" size="lg">
                Have questions? Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Feature Comparison</h2>
            <p className="text-xl text-muted-foreground">
              See what's included in each plan
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">Starter</th>
                      <th className="text-center p-4 font-semibold">Professional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Users", starter: "5", professional: "25", enterprise: "Unlimited" },
                      { feature: "Storage", starter: "5GB", professional: "50GB", enterprise: "Unlimited" },
                      { feature: "CRM", starter: "✓", professional: "✓", enterprise: "✓" },
                      { feature: "Project Management", starter: "✓", professional: "✓", enterprise: "✓" },
                      { feature: "Marketing Automation", starter: "—", professional: "✓", enterprise: "✓" },
                      { feature: "HR & Payroll", starter: "—", professional: "✓", enterprise: "✓" },
                      { feature: "Advanced Analytics", starter: "—", professional: "✓", enterprise: "✓" },
                      { feature: "API Access", starter: "✓", professional: "✓", enterprise: "✓" },
                      { feature: "Custom Development", starter: "—", professional: "—", enterprise: "✓" },
                      { feature: "SLA Guarantee", starter: "—", professional: "—", enterprise: "✓" },
                      { feature: "White-label Options", starter: "—", professional: "—", enterprise: "✓" },
                      { feature: "On-premise Deployment", starter: "—", professional: "—", enterprise: "✓" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          <span className={row.starter === "✓" ? "text-green-600" : row.starter === "—" ? "text-muted-foreground" : ""}>
                            {row.starter}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={row.professional === "✓" ? "text-green-600" : row.professional === "—" ? "text-muted-foreground" : ""}>
                            {row.professional}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={row.enterprise === "✓" ? "text-green-600" : row.enterprise === "—" ? "text-muted-foreground" : ""}>
                            {row.enterprise}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-12 md:px-16 lg:px-20 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing FAQ</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Can I get a custom plan for my organization?",
                answer: "Yes, we offer custom enterprise plans with tailored features and pricing. Contact our sales team to discuss your needs."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
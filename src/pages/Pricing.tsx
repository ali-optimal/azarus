import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: t("pricing.plans.starter.name"),
      description: t("pricing.plans.starter.description"),
      monthlyPrice: 29,
      annualPrice: 290,
      popular: false,
      features: t("pricing.plans.starter.features", { returnObjects: true }) as string[]
    },
    {
      name: t("pricing.plans.professional.name"),
      description: t("pricing.plans.professional.description"),
      monthlyPrice: 79,
      annualPrice: 790,
      popular: true,
      features: t("pricing.plans.professional.features", { returnObjects: true }) as string[]
    },
    {
      name: t("pricing.plans.enterprise.name"),
      description: t("pricing.plans.enterprise.description"),
      monthlyPrice: 149,
      annualPrice: 1490,
      popular: false,
      features: t("pricing.plans.enterprise.features", { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t("pricing.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${!isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                {t("pricing.monthly")}
              </span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="mx-2" />
              <span className={`text-lg ${isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                {t("pricing.annual")}
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  {t("pricing.saveUpTo")}
                </Badge>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-glow' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {t("pricing.mostPopular")}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-8' : ''}`}>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                      <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} size="lg">
                    {plan.name === t("pricing.plans.enterprise.name") ? t("pricing.contactSales") : t("pricing.startFreeTrial")}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
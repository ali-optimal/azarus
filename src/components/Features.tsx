import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Target, 
  Headphones, 
  Settings,
  BarChart3,
  Clock,
  FileText,
  ShieldCheck
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t("features_section.realTimeAnalytics.title"),
      description: t("features_section.realTimeAnalytics.description"),
      items: ["Task Management", "Invoice Generation", "Time Tracking", "Project Planning"]
    },
    {
      icon: Target,
      title: t("features_section.seamlessIntegration.title"),
      description: t("features_section.seamlessIntegration.description"),
      items: ["Sales Pipeline", "Contract Management", "Goal Tracking", "Lead Scoring"]
    },
    {
      icon: Headphones,
      title: t("features_section.enterpriseSecurity.title"),
      description: t("features_section.enterpriseSecurity.description"),
      items: ["Ticket System", "Automated Reminders", "Announcements", "Live Chat"]
    },
    {
      icon: Settings,
      title: t("features_section.aiPowered.title"),
      description: t("features_section.aiPowered.description"),
      items: ["Expense Management", "Survey Tools", "Payment Integration", "Staff Resources"]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient-blue">{t("features_section.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("features_section.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-hero-gradient p-3 text-white group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <div className="grid grid-cols-2 gap-2">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border">
            <div className="text-left">
              <h3 className="font-semibold mb-1">Ready to get started?</h3>
              <p className="text-sm text-muted-foreground">Experience Azarus ERP in action</p>
            </div>
            <Button asChild variant="hero" size="lg">
              <a href="/book-demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
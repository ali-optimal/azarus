import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Blocks, 
  Zap, 
  Globe, 
  Shield,
  CheckCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ValueProps = () => {
  const { t } = useTranslation();
  
  const valueProps = [
    {
      icon: Blocks,
      title: t("valueProps.modularScalable.title"),
      description: t("valueProps.modularScalable.description"),
      benefits: t("valueProps.modularScalable.benefits", { returnObjects: true }) as string[],
      gradient: "from-brand-blue to-brand-navy"
    },
    {
      icon: Zap,
      title: t("valueProps.fastDeployment.title"),
      description: t("valueProps.fastDeployment.description"),
      benefits: t("valueProps.fastDeployment.benefits", { returnObjects: true }) as string[],
      gradient: "from-brand-orange to-brand-magenta"
    },
    {
      icon: Globe,
      title: t("valueProps.bilingualSupport.title"),
      description: t("valueProps.bilingualSupport.description"),
      benefits: t("valueProps.bilingualSupport.benefits", { returnObjects: true }) as string[],
      gradient: "from-brand-magenta to-brand-blue"
    },
    {
      icon: Shield,
      title: t("valueProps.secureCompliant.title"),
      description: t("valueProps.secureCompliant.description"),
      benefits: t("valueProps.secureCompliant.benefits", { returnObjects: true }) as string[],
      gradient: "from-brand-navy to-brand-orange"
    }
  ];

  const steps = t("valueProps.howItWorks.steps", { returnObjects: true }) as Array<{title: string, description: string}>;

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("valueProps.title")} <span className="text-gradient"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("valueProps.subtitle")}
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-background/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="space-y-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {prop.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <CardDescription className="text-sm leading-relaxed">
                  {prop.description}
                </CardDescription>
                
                <div className="space-y-2">
                  {prop.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Steps Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t("valueProps.howItWorks.title")} <span className="text-gradient"></span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
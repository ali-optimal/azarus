import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Blocks, 
  Zap, 
  Globe, 
  Shield,
  CheckCircle
} from "lucide-react";

const ValueProps = () => {
  const valueProps = [
    {
      icon: Blocks,
      title: "Modular & Scalable",
      description: "Choose only the modules you need and scale seamlessly as your business grows.",
      benefits: [
        "Pay for what you use",
        "Easy module activation",
        "Seamless scaling",
        "Future-proof architecture"
      ],
      gradient: "from-brand-blue to-brand-navy"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Get up and running in days, not months, with our streamlined implementation process.",
      benefits: [
        "Quick setup process",
        "Pre-configured templates",
        "Expert onboarding",
        "Minimal downtime"
      ],
      gradient: "from-brand-orange to-brand-magenta"
    },
    {
      icon: Globe,
      title: "Arabic/English Support",
      description: "Native bilingual support with RTL layout for Arabic and comprehensive localization.",
      benefits: [
        "RTL interface design",
        "Bilingual data entry",
        "Cultural adaptations",
        "Local compliance"
      ],
      gradient: "from-brand-magenta to-brand-blue"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with compliance standards for data protection and privacy.",
      benefits: [
        "Data encryption",
        "Access controls",
        "Audit trails",
        "Compliance ready"
      ],
      gradient: "from-brand-navy to-brand-orange"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-gradient">Azarus ERP?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern technology and designed for businesses that demand flexibility, 
            security, and rapid deployment.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300">
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
            How It <span className="text-gradient">Works</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Configure Modules</h4>
              <p className="text-muted-foreground">Select and customize the modules that match your business needs and workflow requirements.</p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-card-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Migrate Data</h4>
              <p className="text-muted-foreground">Seamlessly import your existing data with our guided migration tools and expert support.</p>
            </div>
            
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Go Live & Support</h4>
              <p className="text-muted-foreground">Launch your ERP system with confidence, backed by comprehensive training and ongoing support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
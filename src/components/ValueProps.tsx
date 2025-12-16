import { Card, CardContent } from "@/components/ui/card";
import { 
  Blocks, 
  Zap, 
  Globe, 
  Shield,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      bgGradient: "from-blue-500/10 via-indigo-500/10 to-purple-600/10",
      iconBg: "from-blue-500 to-indigo-600",
      number: "01"
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
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgGradient: "from-orange-500/10 via-red-500/10 to-pink-600/10",
      iconBg: "from-orange-500 to-red-600",
      number: "02"
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
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      bgGradient: "from-purple-500/10 via-pink-500/10 to-rose-600/10",
      iconBg: "from-purple-500 to-pink-600",
      number: "03"
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
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-600/10",
      iconBg: "from-emerald-500 to-teal-600",
      number: "04"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-slate-50/30 to-background relative overflow-hidden">
      {/* Strong backdrop blur overlay to hide hero section */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/95 z-0" />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] z-0" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-full blur-3xl z-0" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Azarus ERP?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with modern technology and designed for businesses that demand flexibility, 
            security, and rapid deployment.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border border-slate-200 bg-white hover:border-transparent hover:shadow-2xl hover:shadow-slate-500/10 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-xl -z-10`}>
                <div className="absolute inset-[1px] bg-white rounded-xl" />
              </div>
              
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Number Badge */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <span className={`text-6xl font-bold bg-gradient-to-br ${prop.gradient} bg-clip-text text-transparent`}>
                  {prop.number}
                </span>
              </div>
              
              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Icon */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${prop.iconBg} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.iconBg} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <prop.icon className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="space-y-3 pt-2">
                  {prop.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex} 
                      className="flex items-start gap-3 group/item"
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${prop.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                           style={{ transitionDelay: `${benefitIndex * 50}ms` }}>
                        <ArrowRight className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 group-hover/item:text-slate-900 transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <button className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${prop.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:gap-3`}>
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Steps Section */}
        <div className="mt-32">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Simple Process</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              How It{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Works
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps and transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            
            <div className="relative group">
              <div className="relative mb-8">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse" />
                
                {/* Number Circle */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                  <span className="relative z-10">1</span>
                  <div className="absolute inset-0 rounded-full border-4 border-white/20" />
                </div>
              </div>
              
              <div className="text-center space-y-4 px-4">
                <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                  Configure Modules
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Select and customize the modules that match your business needs and workflow requirements.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">Flexible</Badge>
                  <Badge variant="secondary" className="text-xs">Customizable</Badge>
                  <Badge variant="secondary" className="text-xs">Quick</Badge>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative mb-8">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse" />
                
                {/* Number Circle */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                  <span className="relative z-10">2</span>
                  <div className="absolute inset-0 rounded-full border-4 border-white/20" />
                </div>
              </div>
              
              <div className="text-center space-y-4 px-4">
                <h4 className="text-xl font-bold group-hover:text-orange-600 transition-colors">
                  Migrate Data
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Seamlessly import your existing data with our guided migration tools and expert support.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">Secure</Badge>
                  <Badge variant="secondary" className="text-xs">Automated</Badge>
                  <Badge variant="secondary" className="text-xs">Reliable</Badge>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative mb-8">
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse" />
                
                {/* Number Circle */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                  <span className="relative z-10">3</span>
                  <div className="absolute inset-0 rounded-full border-4 border-white/20" />
                </div>
              </div>
              
              <div className="text-center space-y-4 px-4">
                <h4 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
                  Go Live & Support
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Launch your ERP system with confidence, backed by comprehensive training and ongoing support.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">24/7 Support</Badge>
                  <Badge variant="secondary" className="text-xs">Training</Badge>
                  <Badge variant="secondary" className="text-xs">Scalable</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
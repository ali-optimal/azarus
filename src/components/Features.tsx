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
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Strong backdrop blur overlay to hide hero section */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/95 z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header with Animation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
                Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("features_section.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              {t("features_section.subtitle")}
            </p>
          </div>
          
          {/* Lottie Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <DotLottieReact
                src="https://lottie.host/84692f4d-1bbb-41ee-b1d8-9d3ee375f849/lkxR496x2G.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>

        {/* Features Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group perspective-1000"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 3D Card with depth layers */}
              <div className="relative transform-gpu transition-all duration-500 hover:scale-[1.02]" style={{ transformStyle: 'preserve-3d' }}>
                {/* Shadow layers for 3D depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl blur-xl transform translate-y-6 group-hover:translate-y-8 transition-transform duration-500 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-pink-400/15 rounded-3xl blur-lg transform translate-y-4 group-hover:translate-y-6 transition-transform duration-500 opacity-50" />
                
                {/* Main card with 3D effect */}
                <Card className="relative bg-white border-0 rounded-3xl transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden group-hover:-translate-y-2" style={{ transform: 'translateZ(0)' }}>
                  {/* Gradient accent line on top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
                  
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <CardHeader className="space-y-6 p-8 pb-6">
                    <div className="flex items-start gap-6">
                      {/* 3D Icon container */}
                      <div className="relative flex-shrink-0">
                        {/* Icon shadow layers */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl blur-md opacity-50 transform translate-y-2" />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl blur-sm opacity-40 transform translate-y-1" />
                        
                        {/* Icon */}
                        <div className="relative rounded-2xl bg-gradient-to-br from-orange-500 to-pink-600 p-5 text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" style={{ transform: 'translateZ(20px)' }}>
                          <feature.icon className="h-8 w-8" />
                        </div>
                      </div>
                      
                      <div className="flex-1 pt-1">
                        <CardTitle className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed text-gray-600">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8">
                    {/* Feature items with 3D effect */}
                    <div className="grid grid-cols-2 gap-4">
                      {feature.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="flex items-center gap-3 text-sm p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-orange-50 hover:to-pink-50 transition-all duration-300 hover:shadow-md hover:scale-105 group/item border border-gray-100"
                          style={{ transform: 'translateZ(10px)' }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full group-hover/item:scale-150 group-hover/item:shadow-lg transition-all duration-300" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced 3D CTA Section */}
        <div className="mt-24 text-center">
          <div className="relative inline-flex perspective-1000">
            {/* Multiple shadow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-20 transform translate-y-6 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-3xl blur-xl opacity-25 transform translate-y-4" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6 bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-all duration-500" style={{ transformStyle: 'preserve-3d' }}>
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-t-3xl" />
              
              <div className="text-left flex-1" style={{ transform: 'translateZ(10px)' }}>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 text-lg">Experience Azarus ERP in action</p>
              </div>
              <Button asChild variant="gradient" size="xl" className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300" style={{ transform: 'translateZ(20px)' }}>
                <a href="/book-demo" className="flex items-center gap-2">
                  Book a Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
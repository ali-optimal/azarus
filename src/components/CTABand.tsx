import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CTABand = () => {
  return (
    <section className="section-padding bg-hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="container-wide relative z-10">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              See Azarus in action in 20 minutes
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience firsthand how Azarus ERP can transform your business operations. 
              Book a personalized demo with our experts.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Businesses Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Expert Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="outline" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 border-white group"
            >
              <a href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white border-white/20 hover:bg-white/10 group"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-sm text-white/70 mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-white/60 font-semibold">TechCorp</div>
              <div className="text-white/60 font-semibold">InnovateCo</div>
              <div className="text-white/60 font-semibold">GlobalSoft</div>
              <div className="text-white/60 font-semibold">DataFlow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
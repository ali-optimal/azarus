import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 section-padding">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Empower Your Growth.</span>
                <br />
                <span className="text-foreground">Unleash Potential.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Harness the power of comprehensive automation, customizable modules, and real-time insights. 
                Azarus ERP—tailored to your business needs, facilitating faster implementation.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Modular & Scalable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Arabic/English</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Fast Deployment</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="xl" className="group">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-background via-background/90 to-background/80 p-6 shadow-2xl border">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-muted-foreground">Azarus ERP Dashboard</div>
              </div>
              
              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-hero-gradient rounded-lg p-3 text-white">
                    <div className="text-xs font-medium">Revenue</div>
                    <div className="text-lg font-bold">$127K</div>
                    <div className="text-xs opacity-80">+12%</div>
                  </div>
                  <div className="bg-card-gradient rounded-lg p-3 text-white">
                    <div className="text-xs font-medium">Customers</div>
                    <div className="text-lg font-bold">2,847</div>
                    <div className="text-xs opacity-80">+8%</div>
                  </div>
                  <div className="bg-accent-gradient rounded-lg p-3 text-white">
                    <div className="text-xs font-medium">Orders</div>
                    <div className="text-lg font-bold">1,259</div>
                    <div className="text-xs opacity-80">+15%</div>
                  </div>
                </div>
                
                {/* Mock Chart Area */}
                <div className="bg-muted/50 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Real-time Analytics Dashboard</div>
                </div>

                {/* Module Icons */}
                <div className="grid grid-cols-4 gap-2">
                  {['CRM', 'HR', 'Stock', 'Finance'].map((module) => (
                    <div key={module} className="bg-background border rounded-lg p-2 text-center">
                      <div className="text-xs font-medium">{module}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-hero-gradient text-white rounded-xl p-3 shadow-lg animate-pulse">
              <div className="text-xs font-medium">Live Updates</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background border rounded-xl p-3 shadow-lg">
              <div className="text-xs text-muted-foreground">Secure & Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
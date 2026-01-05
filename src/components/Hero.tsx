import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden bg-transparent section-padding pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Geometric Shapes and Lines - Only in Hero Section */}
      <div className="hidden lg:block lg:fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated circles */}
        <div className="absolute top-96 left-[10%] w-32 h-32 border-2 border-orange-500/40 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 right-[15%] w-24 h-24 border-2 border-pink-500/40 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-[20%] w-40 h-40 border-2 border-purple-500/35 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Geometric triangles */}
        <div className="absolute top-1/4 right-[8%] w-16 h-16 border-2 border-orange-400/50 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/3 left-[12%] w-12 h-12 border-2 border-pink-400/50 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
        
        {/* Hexagon shapes */}
        <div className="absolute top-1/2 right-[25%] opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" className="animate-pulse" style={{ animationDuration: '3s' }}>
            <polygon points="30,5 55,17.5 55,42.5 30,55 5,42.5 5,17.5" fill="none" stroke="#f97316" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-[40%] opacity-30">
          <svg width="40" height="40" viewBox="0 0 60 60" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <polygon points="30,5 55,17.5 55,42.5 30,55 5,42.5 5,17.5" fill="none" stroke="#db2777" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* Dots pattern */}
        <div className="absolute top-[15%] left-[5%] grid grid-cols-3 gap-3 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }} />
          ))}
        </div>
        <div className="absolute bottom-[20%] right-[5%] grid grid-cols-3 gap-3 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }} />
          ))}
        </div>
        
        {/* Plus symbols */}
        <div className="absolute top-[30%] left-[25%] text-2xl font-thin text-orange-400/50 animate-pulse" style={{ animationDuration: '2s' }}>+</div>
        <div className="absolute bottom-[35%] right-[18%] text-2xl font-thin text-pink-400/50 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>+</div>
      </div>
      
      <div className="container-wide relative">
        {/* Invisible placeholder duplicates hero layout to preserve margins/padding - Only for desktop */}
        <div aria-hidden="true" className="invisible hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-12 items-center section-padding">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">{t("hero.title")}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  {t("hero.subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-12 w-48 rounded-lg bg-gray-200"></div>
                <div className="h-12 w-48 rounded-lg bg-gray-200"></div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-2xl rounded-2xl h-[420px] bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* fixed hero: stays visible while next content scrolls above (next section needs higher z) */}
        <div className="relative lg:fixed inset-x-0 top-0 z-10 bg-transparent">
          <div className="container-wide section-padding">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-gradient">{t("hero.title")}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    {t("hero.subtitle")}
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
                  <Button asChild variant="gradient" size="xl" className="group">
                    <a href="/book-demo">
                      {t("hero.getStarted")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" className="group">
                    <Play className="mr-2 h-4 w-4" />
                    {t("hero.watchDemo")}
                  </Button>
                </div>
              </div>

              {/* Phone Mockups */}
              <div className="flex justify-center items-center relative">
                <img
                  src={encodeURI("/ChatGPT Image Dec 15, 2025, 11_10_33 PM (1).png")}
                  alt="Phone mockups"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  className="w-full max-w-md lg:max-w-2xl rounded-2xl hero-image"
                  style={{ position: 'relative', zIndex: 1 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
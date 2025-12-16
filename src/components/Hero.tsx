import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 section-padding">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container-wide relative">
        {/* Invisible placeholder duplicates hero layout to preserve margins/padding */}
        <div aria-hidden="true" className="invisible">
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
        <div className="fixed inset-x-0 top-0 z-10 bg-gradient-to-b from-background to-background">
          <div className="container-wide section-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
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
              <div className="flex justify-center">
                <img
                  src={encodeURI("/ChatGPT Image Dec 15, 2025, 11_10_33 PM (1).png")}
                  alt="Phone mockups"
                  className="w-full max-w-2xl rounded-2xl"
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
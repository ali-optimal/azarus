import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import ModulesGrid from "@/components/ModulesGrid";
import ValueProps from "@/components/ValueProps";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ModulesGrid />
        <ValueProps />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

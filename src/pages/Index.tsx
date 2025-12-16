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

        {/* Overlapping centered dashboard section */}
        <section className="relative z-50 -mt-28">
          <div className="py-28 bg-white bg-diagonal-top-transparent overflow-hidden">
            <div className="container-wide flex justify-center relative z-10">
              <img
                src={encodeURI("/Dashboard edited final.png")}
                alt="Dashboard"
                className="w-full max-w-6xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Ensure following content stacks above the hero */}
        <div className="relative z-50">
          <Features />
          <ModulesGrid />
          <ValueProps />
          <CTABand />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

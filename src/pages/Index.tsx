import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import ModulesGrid from "@/components/ModulesGrid";
import ValueProps from "@/components/ValueProps";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        {/* Overlapping centered dashboard section with stunning design */}
        <section className="relative z-50 -mt-28" id="dashboard-section">
          <div className="relative py-32 overflow-hidden" id="dashboard-container">
            {/* SVG curve mask for smooth transition */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <defs>
                <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0,0.15 Q 0.3,0.04 0.5,0.02 Q 0.7,0 1,0.08 L 1,1 L 0,1 Z" />
                </clipPath>
              </defs>
            </svg>
            
            {/* Gradient background with smooth curve at top */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-600 to-pink-700 orbs-container"
                 style={{ clipPath: 'url(#curveClip)' }}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>
            
            {/* Animated gradient orbs for depth */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl animate-pulse orb-1" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse orb-2" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse orb-3" style={{ animationDelay: '2s' }} />
            
            {/* Dashboard image with 3D scroll effect */}
            <div className="container-wide flex justify-center relative z-10">
              <div className="relative group">
                {/* Image without borders or cards */}
                <img
                  src={encodeURI("/Dashboard edited final.png")}
                  alt="Dashboard"
                  className="w-full max-w-5xl rounded-xl relative z-10 dashboard-image"
                  id="dashboard-img"
                />
                
                {/* Floating particles effect */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/60 rounded-full blur-sm animate-bounce particle-1" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400/60 rounded-full blur-sm animate-bounce particle-2" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-pink-400/60 rounded-full blur-sm animate-bounce particle-3" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            {/* Bottom diagonal fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        </section>

        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            const dashboardImg = document.getElementById('dashboard-img');
            const dashboardSection = document.getElementById('dashboard-section');
            const dashboardContainer = document.getElementById('dashboard-container');
            const orbsContainer = document.querySelector('.orbs-container');
            const orbs = document.querySelectorAll('.orb-1, .orb-2, .orb-3');
            const particles = document.querySelectorAll('.particle-1, .particle-2, .particle-3');
            
            if (!dashboardImg || !dashboardSection) return;
            
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                const scrollProgress = 1 - entry.intersectionRatio;
                const offsetY = window.scrollY;
                
                if (scrollProgress > 0) {
                  // 3D transform when exiting viewport
                  const rotateX = scrollProgress * 30;
                  const rotateY = scrollProgress * -10;
                  const scale = 1 - (scrollProgress * 0.2);
                  const translateY = scrollProgress * 100;
                  const opacity = 1 - (scrollProgress * 0.5);
                  
                  dashboardImg.style.transform = \`perspective(1200px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale(\${scale}) translateY(\${translateY}px)\`;
                  dashboardImg.style.opacity = opacity;
                  dashboardImg.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out';
                } else {
                  // Subtle scroll animations when in view
                  const subtleY = Math.sin(offsetY * 0.005) * 20;
                  const subtleRotate = Math.sin(offsetY * 0.003) * 2;
                  
                  dashboardImg.style.transform = \`perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px) translateZ(\${subtleY}px) rotateZ(\${subtleRotate}deg)\`;
                  dashboardImg.style.opacity = '1';
                  dashboardImg.style.transition = 'none';
                }
                
                // Parallax animation for orbs
                orbs.forEach((orb, index) => {
                  const parallaxAmount = (1 - scrollProgress) * (index + 1) * 30;
                  orb.style.transform = \`translateY(\${parallaxAmount}px)\`;
                });
                
                // Float animation for particles
                particles.forEach((particle, index) => {
                  const float = Math.sin(offsetY * 0.01 + index) * 15;
                  particle.style.transform = \`translateY(\${float}px) translateX(\${Math.cos(offsetY * 0.01 + index) * 10}px)\`;
                });
                
                // Background parallax
                const bgShift = scrollProgress * -50;
                orbsContainer.style.transform = \`translateY(\${bgShift}px)\`;
              });
            }, {
              threshold: Array.from({ length: 101 }, (_, i) => i / 100),
              rootMargin: '-50px'
            });
            
            observer.observe(dashboardSection);
          })();
        `}} />

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

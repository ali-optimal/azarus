import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadComplete: () => void;
}

const Loader = ({ onLoadComplete }: LoaderProps) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // All images that need to be preloaded
    const imagesToPreload = [
      // Logo
      '/lovable-uploads/output-onlinepngtools.png',
      
      // Dashboard images
      "/Dashboard edited final.png",
      
      // Module/Tab images
      "/CRM customers page.png",
      "/accounting dashboard final.png",
      "/HR Dashboard final.png",
      "/Payroll main page final.png",
      "/ChatGPT Image Dec 16, 2025, 04_06_53 AM.png",
      "/assets main page (1).png",
      "/stock main page.png",
      "/campaign main image.png",
      "/frm builder (1).png",
      
      // Hero image
      "/ChatGPT Image Dec 15, 2025, 11_10_33 PM (1).png",
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    // Preload images
    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          resolve(url);
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${url}`);
          loadedCount++;
          resolve(url); // Resolve anyway to not block the loader
        };
        img.src = encodeURI(url);
      });
    };

    // Load all images
    Promise.all(imagesToPreload.map(loadImage)).then(() => {
      setImagesLoaded(true);
      // Add a delay before completing
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onLoadComplete();
        }, 800);
      }, 2500);
    });

    // Minimum loading time of 8 seconds for smooth experience
    const minLoadTime = setTimeout(() => {
      if (imagesLoaded) {
        setFadeOut(true);
        setTimeout(() => {
          onLoadComplete();
        }, 800);
      }
    }, 8000);

    return () => clearTimeout(minLoadTime);
  }, [imagesLoaded, onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#f4971b] via-[#a21464] to-[#14568a] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Logo container with 3D effect */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="loader-container">
          <div className="logo-3d">
            <img
              src="/lovable-uploads/output-onlinepngtools.png"
              alt="Azarus Logo"
              className="logo-image"
            />
          </div>
        </div>
      </div>

      {/* CSS for 3D animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-50px) translateX(30px) scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes rotate3d {
          0% {
            transform: perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1);
          }
          25% {
            transform: perspective(1200px) rotateY(180deg) rotateX(10deg) scale(1.05);
          }
          50% {
            transform: perspective(1200px) rotateY(360deg) rotateX(0deg) scale(1);
          }
          75% {
            transform: perspective(1200px) rotateY(540deg) rotateX(-10deg) scale(1.05);
          }
          100% {
            transform: perspective(1200px) rotateY(720deg) rotateX(0deg) scale(1);
          }
        }

        @keyframes pulse3d {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        @keyframes ringRotate {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.3;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .loader-container {
          position: relative;
          width: 360px;
          height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-3d {
          width: 320px;
          height: 320px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 10s ease-in-out infinite,
                     pulse3d 2.5s ease-in-out infinite;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
        }

        /* Shimmer sweep effect */
        .logo-3d::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 45%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 55%,
            transparent 100%
          );
          animation: shimmerSweep 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;

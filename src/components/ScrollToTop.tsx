import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl group animate-in fade-in slide-in-from-bottom-4"
      style={{
        background: "linear-gradient(135deg, #f4971b 0%, #a21464 50%, #14568a 100%)",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-y-[-4px]" />
    </button>
  );
};

export default ScrollToTop;

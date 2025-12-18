import { useEffect, useState } from "react";

/**
 * Hook to preload images for better performance
 * Preloads all critical images when the app loads
 */
export const useImagePreload = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imagesToPreload = [
      // Dashboard images
      "/Dashboard edited final.png",
      
      // Module/Tab images
      "/CRM customers page.png",
      "/customers 3d done.png",
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
      
      // Logo
      "/lovable-uploads/bfa528b8-7900-4256-88f1-1888db75bb90.png"
    ];

    let loadedCount = 0;

    const preloadImages = imagesToPreload.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = encodeURI(src);
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / imagesToPreload.length) * 100));
          resolve(src);
        };
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          loadedCount++;
          setProgress(Math.round((loadedCount / imagesToPreload.length) * 100));
          resolve(src); // Resolve anyway to continue
        };
      });
    });

    Promise.all(preloadImages)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error("Error preloading images:", err);
        setImagesLoaded(true); // Continue anyway
      });
  }, []);

  return { imagesLoaded, progress };
};

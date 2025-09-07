import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Product Pages
import CRM from "./pages/products/CRM";
import Marketing from "./pages/products/Marketing";
import Projects from "./pages/products/Projects";
import HR from "./pages/products/HR";
import Finance from "./pages/products/Finance";
import Assets from "./pages/products/Assets";
import Stock from "./pages/products/Stock";
import Custom from "./pages/products/Custom";

// Business Pages
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import BookDemo from "./pages/BookDemo";

// Feature Pages
import Analytics from "./pages/features/Analytics";
import Security from "./pages/features/Security";
import Reporting from "./pages/features/Reporting";
import Customization from "./pages/features/Customization";
import Scalability from "./pages/features/Scalability";
import Integration from "./pages/features/Integration";

// Solution Pages
import ByIndustry from "./pages/solutions/ByIndustry";
import ByNeed from "./pages/solutions/ByNeed";
import BySector from "./pages/solutions/BySector";

// Resource Pages
import Resources from "./pages/Resources";
import Blog from "./pages/resources/Blog";
import CaseStudies from "./pages/resources/CaseStudies";
import WhitePapers from "./pages/resources/WhitePapers";
import Documentation from "./pages/resources/Documentation";
import ReleaseNotes from "./pages/resources/ReleaseNotes";

// Company Pages
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";

const queryClient = new QueryClient();

const AppContent = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction and lang based on current language
    const isArabic = i18n.language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Product Module Pages */}
        <Route path="/products/crm" element={<CRM />} />
        <Route path="/products/marketing" element={<Marketing />} />
        <Route path="/products/projects" element={<Projects />} />
        <Route path="/products/hr" element={<HR />} />
        <Route path="/products/finance" element={<Finance />} />
        <Route path="/products/assets" element={<Assets />} />
        <Route path="/products/stock" element={<Stock />} />
        <Route path="/products/custom" element={<Custom />} />
        
        {/* Business Pages */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-demo" element={<BookDemo />} />
        
        {/* Feature Pages */}
        <Route path="/features/analytics" element={<Analytics />} />
        <Route path="/features/security" element={<Security />} />
        <Route path="/features/reporting" element={<Reporting />} />
        <Route path="/features/customization" element={<Customization />} />
        <Route path="/features/scalability" element={<Scalability />} />
        <Route path="/features/integration" element={<Integration />} />
        
        {/* Solution Pages */}
        <Route path="/solutions/by-industry" element={<ByIndustry />} />
        <Route path="/solutions/by-need" element={<ByNeed />} />
        <Route path="/solutions/by-sector" element={<BySector />} />
        
        {/* Resource Pages */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/white-papers" element={<WhitePapers />} />
        <Route path="/resources/documentation" element={<Documentation />} />
        <Route path="/resources/release-notes" element={<ReleaseNotes />} />
        
        {/* Company Pages */}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Careers />} />
        
        {/* Legal Pages */}
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

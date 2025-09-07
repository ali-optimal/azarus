import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Solution Pages
import ByIndustry from "./pages/solutions/ByIndustry";

// Resource Pages
import Blog from "./pages/resources/Blog";

// Company Pages
import About from "./pages/company/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
          
          {/* Solution Pages */}
          <Route path="/solutions/by-industry" element={<ByIndustry />} />
          
          {/* Resource Pages */}
          <Route path="/resources/blog" element={<Blog />} />
          
          {/* Company Pages */}
          <Route path="/company/about" element={<About />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

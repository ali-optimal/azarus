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

// Business Pages
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

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
          
          {/* Business Pages */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

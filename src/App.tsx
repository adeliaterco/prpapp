import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Module1Dashboard from "./pages/Module1Dashboard";
import Module2Dashboard from "./pages/Module2Dashboard";
import Module3Dashboard from "./pages/Module3Dashboard";
import Lesson from "./pages/Lesson";
import Module2Lesson from "./pages/Module2Lesson";
import Module3Lesson from "./pages/Module3Lesson";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modulo1" element={<Module1Dashboard />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/modulo2" element={<Module2Dashboard />} />
          <Route path="/modulo2/lesson/:id" element={<Module2Lesson />} />
          <Route path="/modulo3" element={<Module3Dashboard />} />
          <Route path="/modulo3/lesson/:id" element={<Module3Lesson />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Rector from "./pages/Rector";
import Campus from "./pages/Campus";
import CampusTuxtla from "./pages/CampusTuxtla";
import CampusVillaflores from "./pages/CampusVillaflores";
import Estudiantes from "./pages/Estudiantes";
import EstudiantesSubPage from "./pages/EstudiantesSubPage";
import Contacto from "./pages/Contacto";
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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/rector" element={<Rector />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/campus/tuxtla" element={<CampusTuxtla />} />
          <Route path="/campus/villaflores" element={<CampusVillaflores />} />
          <Route path="/estudiantes" element={<Estudiantes />} />
          <Route path="/estudiantes/*" element={<EstudiantesSubPage />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-graduation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Graduación CUM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Admisiones 2025 abiertas
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Educando a la juventud
                <span className="block">
                  con{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    excelencia
                  </span>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Programas en salud y educación con convenios clínicos, modalidad presencial y titulación flexible.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              >
                Ver oferta educativa
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Habla con un asesor
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:justify-self-end animate-slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 max-w-md">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">33+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">70+</div>
                <div className="text-sm text-muted-foreground">Generaciones egresadas</div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">30+</div>
                <div className="text-sm text-muted-foreground">Convenios en salud</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-elegant max-w-sm animate-float">
            <h3 className="font-semibold text-foreground mb-2">Convenios de prácticas</h3>
            <p className="text-sm text-muted-foreground">
              Ciclos clínicos y servicio social en instituciones de salud
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
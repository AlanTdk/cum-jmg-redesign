import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-graduation.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import ParticleEffect from "@/components/ParticleEffect";

const HeroSection = () => {
  const { count: yearsCount, ref: yearsRef } = useCountUp({ end: 33 });
  const { count: graduatesCount, ref: graduatesRef } = useCountUp({ end: 70 });
  const { count: partnershipsCount, ref: partnershipsRef } = useCountUp({ end: 30 });
  const { count: teachersCount, ref: teachersRef } = useCountUp({ end: 50 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleEffect />
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium magnetic-btn">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Admisiones 2025 abiertas
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-reveal">
                Educando a la juventud
                <span className="block">
                  con{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    excelencia
                  </span>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Programas en salud y educación con convenios clínicos, modalidad presencial y titulación flexible.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group magnetic-btn pulse-on-hover"
              >
                Ver oferta educativa
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-primary/20 hover:border-primary hover:bg-primary/5 magnetic-btn glass interactive-border"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Habla con un asesor
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:justify-self-end animate-slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 max-w-md">
              <div ref={yearsRef} className="glass rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group hover-glow magnetic-btn pulse-on-hover">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform tabular-nums">
                  {yearsCount}+
                </div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div ref={graduatesRef} className="glass rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group hover-glow magnetic-btn pulse-on-hover">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform tabular-nums">
                  {graduatesCount}+
                </div>
                <div className="text-sm text-muted-foreground">Generaciones egresadas</div>
              </div>
              <div ref={partnershipsRef} className="glass rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group hover-glow magnetic-btn pulse-on-hover">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform tabular-nums">
                  {partnershipsCount}+
                </div>
                <div className="text-sm text-muted-foreground">Convenios en salud</div>
              </div>
              <div ref={teachersRef} className="glass rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 group hover-glow magnetic-btn pulse-on-hover">
                <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform tabular-nums">
                  {teachersCount}+
                </div>
                <div className="text-sm text-muted-foreground">Docentes capacitados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-16 lg:mt-24">
          <div className="glass rounded-2xl p-6 shadow-elegant max-w-sm animate-float hover-glow cursor-pointer group magnetic-btn">
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Convenios de prácticas</h3>
            <p className="text-sm text-muted-foreground">
              Ciclos clínicos y servicio social en instituciones de salud reconocidas
            </p>
            <div className="mt-3 w-8 h-1 bg-gradient-primary rounded-full group-hover:w-12 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center hover:border-primary/60 transition-colors duration-300 cursor-pointer">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
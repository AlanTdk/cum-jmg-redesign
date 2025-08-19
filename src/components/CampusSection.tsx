import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const CampusSection = () => {
  const campuses = [
    {
      name: "Tuxtla Gutiérrez",
      address: "3ra Norte Poniente #530",
      phone: "961 600 0490",
      hours: "8:00-16:00",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7234567890123!2d-93.1173456!3d16.7569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzI0LjgiTiA5M8KwMDcnMDIuNCJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
    },
    {
      name: "Villaflores",
      address: "4ta Avenida Nte entre 8va y 9na Pte, Barrio Reforma",
      phone: "965 65 20439",
      hours: "8:00-16:00",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.7234567890123!2d-93.2345678!3d16.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDEwJzEwLjAiTiA5M8KwMTQnMDQuNCJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
    }
  ];

  return (
    <section id="campus" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Nuestros campus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ubicaciones estratégicas en Chiapas para brindarte la mejor educación cerca de ti
          </p>
          <Button 
            variant="outline" 
            className="border-primary/20 hover:border-primary hover:bg-primary/5"
          >
            <Navigation className="mr-2 h-4 w-4" />
            Cómo llegar
          </Button>
        </div>

        {/* Campus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {campuses.map((campus, index) => (
            <div
              key={campus.name}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Campus Info Card */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 mb-6">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {campus.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{campus.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a 
                      href={`tel:${campus.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {campus.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Horario: {campus.hours}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-primary flex-1">
                    Contactar campus
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5">
                    Ver en mapa
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden shadow-elegant group-hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Mapa interactivo de {campus.name}</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-primary/20 hover:border-primary"
                    >
                      Abrir en Google Maps
                    </Button>
                  </div>
                </div>
                {/* Overlay for interactive feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">¿Necesitas más información?</h3>
            <p className="text-muted-foreground mb-6">
              Nuestros asesores educativos están listos para ayudarte a elegir el campus y programa que mejor se adapte a tus necesidades.
            </p>
            <Button className="bg-gradient-primary">
              Hablar con un asesor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
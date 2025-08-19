import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, MapPin, Users } from "lucide-react";
import nursingImage from "@/assets/nursing-students.jpg";
import radiologyImage from "@/assets/radiology-students.jpg";
import surgicalImage from "@/assets/surgical-nursing.jpg";

const EducationalOffer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Función para normalizar texto (sin acentos, minúsculas)
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, "");
  };

  const programs = [
    {
      id: 1,
      title: "Enfermería",
      type: "Licenciatura",
      image: nursingImage,
      features: ["Plan actualizado", "Laboratorios 2025", "Prácticas clínicas"],
      duration: "8 semestres",
      modality: "Presencial",
      students: "150+ alumnos"
    },
    {
      id: 2,
      title: "Radiología e Imagen",
      type: "Carrera Técnica",
      image: radiologyImage,
      features: ["Alta empleabilidad", "Laboratorios", "Convenios"],
      duration: "6 semestres",
      modality: "Presencial",
      students: "80+ alumnos"
    },
    {
      id: 3,
      title: "Enfermería Quirúrgica",
      type: "Posgrado",
      image: surgicalImage,
      features: ["Especialistas docentes", "Horarios flexibles", "Titulación"],
      duration: "4 semestres",
      modality: "Semipresencial",
      students: "45+ alumnos"
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const normalizedSearch = normalizeText(searchTerm);
    const normalizedTitle = normalizeText(program.title);
    const normalizedType = normalizeText(program.type);
    const normalizedFeatures = program.features.map(feature => normalizeText(feature)).join(" ");
    
    return normalizedTitle.includes(normalizedSearch) ||
           normalizedType.includes(normalizedSearch) ||
           normalizedFeatures.includes(normalizedSearch);
  });

  return (
    <section id="oferta" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Inscripciones abiertas 2025
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Oferta educativa
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubre nuestros programas académicos diseñados para formar profesionales de excelencia en el área de la salud
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar programa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-full border-border/50 focus:border-primary transition-all duration-300"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-elegant hover:shadow-glow transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {program.type}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Details */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-primary" />
                    {program.modality}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    {program.students}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-gradient-primary group-hover:shadow-glow transition-all duration-300 magnetic-btn"
                >
                  Más información
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No se encontraron programas que coincidan con tu búsqueda.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/20 hover:border-primary hover:bg-primary/5"
          >
            Ver todos los programas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationalOffer;
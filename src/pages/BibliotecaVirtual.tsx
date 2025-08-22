import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Globe, FileText } from "lucide-react";

const BibliotecaVirtual = () => {
  const resources = [
    {
      title: "E-Libro",
      subtitle: "Exclusivo alumnos CUM",
      description: [
        "Como alumno del CUM, puedes acceder a títulos exclusivos de manera gratuita",
        "Complementa tus conocimientos",
        "Pregunta por correo y contraseña en el área de biblioteca"
      ],
      link: "https://elibro.net/es/lc/universidadcum/inicio/",
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      isExclusive: true
    },
    {
      title: "Mawil",
      subtitle: "Biblioteca virtual abierta",
      description: [
        "Publicaciones impresas y digitales",
        "Encuentra cientos de títulos de manera gratuita y pagada",
        "Sube tus publicaciones",
        "Para todo el público"
      ],
      link: "https://mawil.us/",
      icon: <Globe className="w-12 h-12 text-primary" />,
      isExclusive: false
    },
    {
      title: "Portal Regional de la BVS",
      subtitle: "Biblioteca virtual abierta",
      description: [
        "Biblioteca virtual en salud",
        "Encuentra cientos de títulos de manera gratuita y pagada",
        "Para todo el público",
        "Encuentra tesis, artículos, etc."
      ],
      link: "https://bvsalud.org/es/",
      icon: <Users className="w-12 h-12 text-primary" />,
      isExclusive: false
    },
    {
      title: "Revista de Especialidades Médico-Quirúrgicas",
      subtitle: "Órgano oficial de difusión científica del ISSSTE",
      description: [
        "Artículos nuevos cada cuatrimestre",
        "Actualiza tus conocimientos",
        "Publica tus artículos"
      ],
      link: "https://www.remq-issste.com/#",
      icon: <FileText className="w-12 h-12 text-primary" />,
      isExclusive: false
    },
    {
      title: "Revista Colombiana de Cirugía",
      subtitle: "Publicaciones Científicas",
      description: [
        "Nueva edición cada dos meses",
        "Órgano oficial de difusión de la Asociación Colombiana de Cirugía",
        "Artículos científicos de alta calidad"
      ],
      link: "https://www.revistacirugia.org/",
      icon: <FileText className="w-12 h-12 text-primary" />,
      isExclusive: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Biblioteca Virtual
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Complementa tu educación con cientos de títulos digitales y revistas de salud
              </p>
              <p className="text-lg mt-4 opacity-90">
                Además, publica artículos científicos de tu autoría
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Recursos Digitales
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accede a una amplia colección de recursos académicos y científicos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`h-full border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-background/50 backdrop-blur-sm ${
                    resource.isExclusive ? 'ring-2 ring-primary/20' : ''
                  }`}>
                    <CardHeader className="text-center pb-4">
                      <div className="mb-4 flex justify-center">
                        {resource.icon}
                      </div>
                      {resource.isExclusive && (
                        <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2">
                          Exclusivo CUM
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold text-foreground">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {resource.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-2 mb-6 text-left">
                        {resource.description.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        onClick={() => window.open(resource.link, '_blank')}
                      >
                        {resource.isExclusive ? 'Acceder' : 'Visitar'}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Acceso a Recursos Exclusivos
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-justify">
                Como parte de la comunidad CUM, tienes acceso a recursos bibliográficos especializados en el área de la salud. 
                Nuestra biblioteca virtual está diseñada para complementar tu formación académica y profesional con contenido 
                actualizado y de alta calidad científica. Para acceder a los recursos exclusivos, contacta al área de biblioteca 
                para obtener tus credenciales de acceso.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Solicitar Acceso
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BibliotecaVirtual;
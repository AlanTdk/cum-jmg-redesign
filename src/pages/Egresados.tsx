import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, GraduationCap, Briefcase } from "lucide-react";

const Egresados = () => {
  const services = [
    {
      title: "Encuesta de Seguimiento",
      description: "El cuestionario de Seguimiento a Egresados tiene la finalidad de identificar y analizar las características socio-económicas y laborales para el desarrollo profesional y personal de los egresados del Centro Universitario Mesoamericano Joaquín Miguel Gutiérrez y así crear una vinculación permanente entre el egresado y la institución.",
      link: "/encuesta-de-egresados",
      icon: <Users className="w-12 h-12 text-primary" />,
      buttonText: "Contestar la encuesta"
    },
    {
      title: "Opciones de Titulación",
      description: "En el CUM, ofrecemos a nuestros estudiantes distintas opciones de titulación. Conoce todas las modalidades disponibles para obtener tu título profesional.",
      link: "/opciones-de-titulacion",
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      buttonText: "Ver opciones"
    },
    {
      title: "Bolsa de Trabajo",
      description: "Comprometidos con el desarrollo laboral de nuestros egresados, hemos creado nuestra bolsa de trabajo, para que grandes empresas en busca de gran talento, te encuentren.",
      link: "/bolsa-de-trabajo",
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      buttonText: "Ver ofertas"
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
                Egresados CUM
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Mantente conectado con tu institución y aprovecha los servicios exclusivos para egresados
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Servicios para Egresados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubre todos los servicios y recursos disponibles para nuestros egresados
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-background/50 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className="mb-4 flex justify-center">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-justify">
                        {service.description}
                      </CardDescription>
                      <Button 
                        className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        onClick={() => window.open(service.link, '_blank')}
                      >
                        {service.buttonText}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                ¿Necesitas más información?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nuestro equipo está aquí para apoyarte en tu desarrollo profesional
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Contactar
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Egresados;
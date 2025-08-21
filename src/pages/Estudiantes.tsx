import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, BookOpen, ClipboardCheck, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";

const Estudiantes = () => {
  const studentServices = [
    {
      title: "REINSCRIPCIONES",
      description: "Realiza tu reinscripción en el tiempo establecido por control escolar",
      icon: GraduationCap,
      buttonText: "Reinscribirme",
      href: "/estudiantes/reinscripciones",
      color: "primary"
    },
    {
      title: "FORMATO DE SOLICITUD DE BECA",
      description: "Solicita la renovación de tu beca en línea ¡fácil y rápido!",
      icon: FileText,
      buttonText: "Solicitar",
      href: "/estudiantes/becas",
      color: "accent"
    },
    {
      title: "REGLAMENTOS INSTITUCIONALES",
      description: "Consulta todos los reglamentos y normativas de la institución",
      icon: BookOpen,
      buttonText: "Consultar",
      href: "/estudiantes/reglamentos",
      color: "primary"
    },
    {
      title: "EVALUACIÓN DOCENTE",
      description: "Ayúdanos a mejorar la calidad del docente realizando esta evaluación cada fin de semestre",
      icon: ClipboardCheck,
      buttonText: "Responder",
      href: "/estudiantes/evaluacion",
      color: "accent"
    },
    {
      title: "EVALUACIÓN ADMINISTRATIVA",
      description: "Evalúa los servicios administrativos de la institución",
      icon: Users,
      buttonText: "Evaluar",
      href: "/estudiantes/evaluacion-admin",
      color: "primary"
    },
    {
      title: "RADIOLOGÍA E IMAGEN",
      description: "Información sobre el programa de Radiología e Imagen Febrero - Julio 2025",
      icon: Award,
      buttonText: "Ver información",
      href: "/estudiantes/radiologia",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/20 blur-xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Estudiantes
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explora las secciones que tenemos para agilizar tus procesos a realizar como estudiante
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass hover-glow magnetic-btn h-full group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                        service.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-to-r from-accent to-primary'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <Button 
                        className={`w-full ${
                          service.color === 'primary' 
                            ? 'bg-gradient-primary hover:shadow-glow' 
                            : 'bg-gradient-to-r from-accent to-primary hover:shadow-glow'
                        } transition-all duration-300 magnetic-btn`}
                        onClick={() => window.location.href = service.href}
                      >
                        {service.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">
                ¿Necesitas ayuda adicional?
              </h2>
              <p className="text-muted-foreground mb-6">
                Si tienes dudas sobre algún proceso o necesitas asistencia personalizada, 
                no dudes en contactar con nuestro equipo de control escolar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 magnetic-btn">
                  Contactar Control Escolar
                </Button>
                <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5 magnetic-btn">
                  Ver Horarios de Atención
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Estudiantes;
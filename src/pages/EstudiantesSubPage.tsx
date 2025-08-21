import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, CreditCard, BookOpen, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EstudiantesSubPage = () => {
  const { "*": subpage } = useParams();

  const getPageContent = () => {
    switch (subpage) {
      case "reinscripciones":
        return {
          title: "Reinscripciones",
          icon: FileText,
          description: "Proceso de reinscripción para el siguiente semestre",
          content: (
            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Requisitos para Reinscripción</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Estar al corriente en pagos</li>
                    <li>• Haber aprobado el semestre anterior</li>
                    <li>• Presentar documentación requerida</li>
                    <li>• Completar el formulario en línea</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Fechas Importantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Consulta las fechas específicas con control escolar o en el portal estudiantil.
                  </p>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      case "becas":
        return {
          title: "Solicitud de Beca",
          icon: CreditCard,
          description: "Solicita tu beca académica o de excelencia",
          content: (
            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Tipos de Becas Disponibles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Beca Académica</h4>
                      <p className="text-sm text-muted-foreground">Para estudiantes con promedio sobresaliente</p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-lg">
                      <h4 className="font-semibold text-accent mb-2">Beca Socioeconómica</h4>
                      <p className="text-sm text-muted-foreground">Apoyo para estudiantes con necesidades económicas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      case "reglamentos":
        return {
          title: "Reglamentos Institucionales",
          icon: BookOpen,
          description: "Consulta todos los reglamentos y normativas",
          content: (
            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Documentos Disponibles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span>Reglamento General</span>
                      <Button size="sm" variant="outline">Descargar</Button>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span>Reglamento Académico</span>
                      <Button size="sm" variant="outline">Descargar</Button>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span>Código de Conducta</span>
                      <Button size="sm" variant="outline">Descargar</Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      case "evaluacion":
        return {
          title: "Evaluación Docente",
          icon: ClipboardCheck,
          description: "Evalúa a tus profesores al final del semestre",
          content: (
            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Proceso de Evaluación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    La evaluación docente es un proceso importante que nos ayuda a mantener 
                    la calidad educativa. Tu opinión es valiosa para nosotros.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-primary">
                      Iniciar Evaluación
                    </Button>
                    <Button variant="outline">
                      Ver Instrucciones
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        };
      
      default:
        return {
          title: "Página no encontrada",
          icon: FileText,
          description: "La página que buscas no existe",
          content: (
            <Card className="glass">
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground mb-6">
                  Esta sección está en desarrollo o no existe.
                </p>
                <Link to="/estudiantes">
                  <Button>Volver a Estudiantes</Button>
                </Link>
              </CardContent>
            </Card>
          )
        };
    }
  };

  const pageContent = getPageContent();
  const IconComponent = pageContent.icon;

  return (
    <div className="min-h-screen">
      <SmoothScroll />
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link 
                to="/estudiantes" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Estudiantes
              </Link>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  {pageContent.title}
                </h1>
                <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-muted-foreground">
                  {pageContent.description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {pageContent.content}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EstudiantesSubPage;
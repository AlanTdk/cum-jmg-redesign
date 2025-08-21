import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation, Mail, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";
import { motion } from "framer-motion";

const CampusTuxtla = () => {
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
                Campus Tuxtla Gutiérrez
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nuestro campus principal en el corazón de Chiapas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Campus Info */}
        <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold gradient-text mb-6">
                  Información del Campus
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 glass rounded-lg hover-glow">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Dirección</h4>
                      <p className="text-muted-foreground">3ra Norte Poniente #530, Tuxtla Gutiérrez, Chiapas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 glass rounded-lg hover-glow">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Teléfono</h4>
                      <p className="text-muted-foreground">961 600 0490</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 glass rounded-lg hover-glow">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Horarios</h4>
                      <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 glass rounded-lg hover-glow">
                    <Mail className="w-6 h-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@cum-jmg.edu.mx</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="glass hover-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-6 h-6 text-primary" />
                      <span>Servicios del Campus</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Biblioteca especializada</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Laboratorios de práctica</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Aulas equipadas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Centro de cómputo</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Cafetería</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Estacionamiento</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 magnetic-btn">
                  <Navigation className="mr-2 w-4 h-4" />
                  Ver en Google Maps
                </Button>
                <Button variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5 magnetic-btn">
                  Agendar Visita
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

export default CampusTuxtla;
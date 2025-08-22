import { motion } from "framer-motion";
import { Quote, MapPin, Globe, Users2 } from "lucide-react";

const RectorMessageSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                                radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Mensaje del Rector
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Rector info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center mb-8"
            >
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                <span className="text-2xl font-bold text-white">JB</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  Lic. José Javier Bautista Brindis
                </h3>
                <p className="text-muted-foreground font-medium">Rector</p>
              </div>
            </motion.div>

            {/* Message content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p className="text-lg text-justify">
                <strong className="text-primary">Estimados estudiantes de nuevo ingreso...</strong>
              </p>
              
              <p className="text-justify">
                Le doy la más cordial bienvenida, a nuestra gran institución: el Centro 
                Universitario Mesoamericano Joaquín Miguel Gutiérrez.
              </p>

              <p className="text-justify">
                A 33 años de haber iniciado este proyecto educativo, con más de 70 generaciones 
                de jóvenes que han pasado por nuestras aulas y cumpliendo con nuestro espíritu 
                de transformación permanente, con orgullo y una gran satisfacción, presento a 
                todos ustedes la página web de nuestra institución educativa.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-primary bg-primary/5 p-4 rounded-r-lg text-justify">
                "Los tiempos que vivimos, nos exigen con una visión de largo alcance y profundo 
                análisis, esforzarnos en la sólida integración de nuestra comunidad educativa"
              </blockquote>

              <p className="text-justify">
                Hoy, les ofrecemos una amplia oferta educativa, que les asegura las herramientas 
                necesarias, para enfrentar un mundo globalizado de competencia, que conquistarán 
                recibiendo una preparación de excelencia.
              </p>

              <p className="text-justify">
                Con sólidas posibilidades de éxito, en un mercado de trabajo exigente y de 
                especialidad, se sentirán orgullosos de pertenecer a nuestra institución. Como 
                lo están, los egresados de nuestra universidad, que hoy trabajan en 
                <strong className="text-primary"> Canadá y Alemania</strong>.
              </p>

              <p className="text-center text-lg font-medium text-primary">
                A partir de este momento, los invito a formar parte de nuestra comunidad estudiantil.
              </p>
            </motion.div>
          </motion.div>

          {/* Statistics row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass p-6 rounded-xl text-center hover-glow magnetic-btn">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground">Chiapas, México</h4>
              <p className="text-sm text-muted-foreground">Nuestra ubicación</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover-glow magnetic-btn">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground">Alcance Global</h4>
              <p className="text-sm text-muted-foreground">Egresados en el mundo</p>
            </div>
            <div className="glass p-6 rounded-xl text-center hover-glow magnetic-btn">
              <Users2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground">Comunidad Unida</h4>
              <p className="text-sm text-muted-foreground">Estudiantes y profesores</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RectorMessageSection;
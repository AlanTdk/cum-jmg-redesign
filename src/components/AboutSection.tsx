import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-2xl"></div>
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
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Centro Universitario Mesoamericano <br />
            <span className="text-primary">Joaquín Miguel Gutiérrez</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold text-primary mb-4">¿Quiénes somos?</h4>
            <p className="text-muted-foreground leading-relaxed">
              Somos una institución que fomenta los valores a cada uno de los alumnos. 
              Fomentamos los valores y la Disciplina hacia nuestros estudiantes y así poder 
              proporcionar el entusiasmo para con ellos. La educación es fundamental para la 
              felicidad social; es el principio en el que descansan la libertad y el 
              engrandecimiento de los pueblos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El compromiso con la Sociedad y con la propia institución conduce al CUM a 
              mantener activos una serie de mecanismos que garantizan la calidad de servicios, 
              centros y profesores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass p-6 rounded-xl hover-glow magnetic-btn text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground">Excelencia</h5>
              <p className="text-sm text-muted-foreground">Académica</p>
            </div>
            <div className="glass p-6 rounded-xl hover-glow magnetic-btn text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h5 className="font-semibold text-foreground">Comunidad</h5>
              <p className="text-sm text-muted-foreground">Educativa</p>
            </div>
            <div className="glass p-6 rounded-xl hover-glow magnetic-btn text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground">Calidad</h5>
              <p className="text-sm text-muted-foreground">Profesional</p>
            </div>
            <div className="glass p-6 rounded-xl hover-glow magnetic-btn text-center">
              <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
              <h5 className="font-semibold text-foreground">Valores</h5>
              <p className="text-sm text-muted-foreground">Humanos</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            El Centro Universitario Mesoamericano es una universidad competitiva, una institución 
            dinámica, emprendedora y conectada con su entorno. Las políticas de gestión de la 
            calidad en todos los ámbitos de la universidad, el desarrollo del plan estratégico y 
            la formalización de su política de imagen y comunicación corporativas avalan la 
            Institución como una entidad que apuesta por la calidad y por la gestión transparente 
            y participativa, con un fuerte compromiso social con su entorno.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
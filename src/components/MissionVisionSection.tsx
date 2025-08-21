import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const MissionVisionSection = () => {
  const values = [
    "Excelencia", "Honestidad", "Disciplina", "Tenacidad", "Compromiso",
    "Creatividad", "Respeto", "Profesionalismo", "Ética", "Amabilidad",
    "Tolerancia", "Lealtad", "Educación de calidad", "Puntualidad"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-accent/10 relative overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
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
            Nuestra Filosofía
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl hover-glow group"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Misión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              El Centro Universitario Mesoamericano es una Institución Educativa que ofrece 
              el desarrollo de habilidades, actitudes, valores y conocimientos a todos aquellos 
              que quieren contribuir al desarrollo sustentable de nuestro Estado y País, 
              fomentándoles metodologías acordes al dinamo global siempre impulsando una 
              conciencia ambiental.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl hover-glow group"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-accent">Visión</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser la mejor opción educativa para la formación de profesionistas calificados 
              y educados en valores, que se integren a los sectores productivos y sociales 
              con las herramientas para enfrentar los procesos de globalización.
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Nuestros Valores</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: Math.random() * 6 - 3
                }}
                className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
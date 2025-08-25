import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Oferta educativa", href: "#oferta" },
    { name: "Admisiones", href: "#admisiones" },
    { name: "Campus", href: "#campus" },
    { name: "Convocatorias", href: "#convocatorias" },
    { name: "Contacto", href: "#contacto" }
  ];

  const programs = [
    { name: "Licenciatura en Enfermería", href: "#enfermeria" },
    { name: "Radiología e Imagen", href: "#radiologia" },
    { name: "Enfermería Quirúrgica", href: "#quirurgica" },
    { name: "Especialidades médicas", href: "#especialidades" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.footer 
      className="bg-foreground text-background relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Brand Section */}
            <motion.div 
              className="xl:col-span-1 text-center md:text-left px-4 sm:px-0"
              variants={itemVariants}
            >
              <motion.div 
                className="flex flex-col items-center md:items-start space-y-3 sm:space-y-4 mb-4 sm:mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white p-2 shadow-glow hover:shadow-xl transition-all duration-500"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    rotate: { duration: 0.8 },
                    scale: { duration: 0.3 },
                    boxShadow: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="/lovable-uploads/68ac3975-d475-4e26-8895-89f74c1b5cba.png" 
                    alt="Centro Universitario Mesoamericano Logo" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-background leading-tight">
                    Centro Universitario Mesoamericano
                  </h3>
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-background/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-4 md:px-0"
                variants={itemVariants}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                33 años formando profesionales de excelencia en el área de la salud con programas actualizados y convenios clínicos.
              </motion.p>
              <motion.div 
                className="flex justify-center md:justify-start space-x-3"
                variants={itemVariants}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" }
                ].map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-background/70 hover:text-background hover:bg-background/10 transition-all duration-300 hover:shadow-glow"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="text-center md:text-left px-4 sm:px-0"
              variants={itemVariants}
            >
              <motion.h4 
                className="font-semibold text-background mb-4 sm:mb-6 text-base sm:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Enlaces rápidos
              </motion.h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-all duration-300 block text-sm sm:text-base group"
                      whileHover={{ 
                        x: 8,
                        color: "#ffffff",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      <span className="group-hover:border-b group-hover:border-background/30 transition-all duration-300">
                        {link.name}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div 
              className="text-center md:text-left px-4 sm:px-0"
              variants={itemVariants}
            >
              <motion.h4 
                className="font-semibold text-background mb-4 sm:mb-6 text-base sm:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Programas
              </motion.h4>
              <ul className="space-y-2 sm:space-y-3">
                {programs.map((program, index) => (
                  <motion.li 
                    key={program.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.a 
                      href={program.href}
                      className="text-background/70 hover:text-background transition-all duration-300 block text-sm sm:text-base group"
                      whileHover={{ 
                        x: 8,
                        color: "#ffffff",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      <span className="group-hover:border-b group-hover:border-background/30 transition-all duration-300">
                        {program.name}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div 
              className="text-center md:text-left px-4 sm:px-0"
              variants={itemVariants}
            >
              <motion.h4 
                className="font-semibold text-background mb-4 sm:mb-6 text-base sm:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Contacto
              </motion.h4>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  { 
                    icon: MapPin, 
                    content: (
                      <div className="text-background/70 text-sm">
                        <p>Tuxtla Gutiérrez: 3ra Norte Poniente #530</p>
                        <p>Villaflores: 4ta Avenida Nte</p>
                      </div>
                    )
                  },
                  { 
                    icon: Phone, 
                    content: <span className="text-background/70 text-sm">961 600 0490</span>
                  },
                  { 
                    icon: Mail, 
                    content: <span className="text-background/70 text-sm">info@cum-jmg.edu.mx</span>
                  }
                ].map(({ icon: Icon, content }, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start justify-center md:justify-start space-x-2 sm:space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {content}
                  </motion.div>
                ))}
              </div>

              {/* Newsletter */}
              <motion.div 
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.h5 
                  className="font-medium text-background mb-3 sm:mb-4 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Boletín informativo
                </motion.h5>
                <motion.div 
                  className="flex flex-col gap-2 sm:gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input 
                      type="email" 
                      placeholder="Tu email"
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/50 w-full text-sm sm:text-base h-10 sm:h-11"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-primary hover:shadow-glow w-full transition-all duration-300 text-sm sm:text-base h-10 sm:h-11">
                      Suscribir
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-background/20 py-6 sm:py-8"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0 px-4 sm:px-0">
            <motion.div 
              className="text-background/70 text-xs sm:text-sm text-center lg:text-left px-4 lg:px-0"
              whileHover={{ 
                scale: 1.02,
                color: "#ffffff"
              }}
              transition={{ duration: 0.2 }}
            >
              © {currentYear} Centro Universitario Mesoamericano. Todos los derechos reservados.
            </motion.div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-center">
              {["Política de privacidad", "Términos de uso", "Aviso legal"].map((text, index) => (
                <motion.a 
                  key={text}
                  href="#" 
                  className="text-background/70 hover:text-background transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <span className="group-hover:border-b group-hover:border-background/30 transition-all duration-300">
                    {text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
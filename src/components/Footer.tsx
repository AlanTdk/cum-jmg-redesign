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
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1 text-center sm:text-left"
              variants={itemVariants}
            >
              <motion.div 
                className="flex flex-col items-center sm:items-start space-y-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-primary p-3 shadow-glow hover:shadow-xl transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src="/lovable-uploads/68ac3975-d475-4e26-8895-89f74c1b5cba.png" 
                    alt="CUM Logo" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl text-background leading-tight">
                    Centro Universitario Mesoamericano
                  </h3>
                </div>
              </motion.div>
              <motion.p 
                className="text-background/70 mb-8 leading-relaxed text-sm sm:text-base"
                variants={itemVariants}
              >
                33 años formando profesionales de excelencia en el área de la salud con programas actualizados y convenios clínicos.
              </motion.p>
              <motion.div 
                className="flex justify-center sm:justify-start space-x-3"
                variants={itemVariants}
              >
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" }
                ].map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
              className="text-center sm:text-left"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-background mb-6 text-lg">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-300 block hover:translate-x-2 hover:shadow-glow text-sm sm:text-base"
                      whileHover={{ x: 8 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div 
              className="text-center sm:text-left"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-background mb-6 text-lg">Programas</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <motion.li 
                    key={program.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a 
                      href={program.href}
                      className="text-background/70 hover:text-background transition-colors duration-300 block hover:translate-x-2 text-sm sm:text-base"
                      whileHover={{ x: 8 }}
                    >
                      {program.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div 
              className="text-center sm:text-left"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-background mb-6 text-lg">Contacto</h4>
              <div className="space-y-4 mb-8">
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
                    className="flex items-start justify-center sm:justify-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {content}
                  </motion.div>
                ))}
              </div>

              {/* Newsletter */}
              <motion.div variants={itemVariants}>
                <h5 className="font-medium text-background mb-4 text-base">Boletín informativo</h5>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <Input 
                    type="email" 
                    placeholder="Tu email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-primary hover:shadow-glow w-full sm:w-auto transition-all duration-300">
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
          className="border-t border-background/20 py-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div 
              className="text-background/70 text-sm text-center md:text-left"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} Centro Universitario Mesoamericano. Todos los derechos reservados.
            </motion.div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center">
              {["Política de privacidad", "Términos de uso", "Aviso legal"].map((text, index) => (
                <motion.a 
                  key={text}
                  href="#" 
                  className="text-background/70 hover:text-background transition-colors duration-300 hover:shadow-glow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {text}
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
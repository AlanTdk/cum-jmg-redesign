import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

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

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <span className="text-primary-foreground font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-background">Centro Universitario</h3>
                  <p className="text-background/70 text-sm">Mesoamericano</p>
                </div>
              </div>
              <p className="text-background/70 mb-6 leading-relaxed">
                33 años formando profesionales de excelencia en el área de la salud con programas actualizados y convenios clínicos.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-background mb-6">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors duration-300 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold text-background mb-6">Programas</h4>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a 
                      href={program.href}
                      className="text-background/70 hover:text-background transition-colors duration-300 block"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="font-semibold text-background mb-6">Contacto</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-background/70 text-sm">
                    <p>Tuxtla Gutiérrez: 3ra Norte Poniente #530</p>
                    <p>Villaflores: 4ta Avenida Nte</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-background/70 text-sm">961 600 0490</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-background/70 text-sm">info@cum-jmg.edu.mx</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h5 className="font-medium text-background mb-3">Boletín informativo</h5>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Tu email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  />
                  <Button className="bg-gradient-primary hover:shadow-glow">
                    Suscribir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm text-center md:text-left">
              © {currentYear} Centro Universitario Mesoamericano. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Términos de uso
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
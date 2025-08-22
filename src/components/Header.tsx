import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { 
      name: "Inicio", 
      href: "/",
      dropdown: null
    },
    { 
      name: "Nosotros", 
      href: "/nosotros",
      dropdown: [
        { name: "Nosotros", href: "/nosotros" },
        { name: "Bienvenida del Rector", href: "/rector" }
      ]
    },
    { 
      name: "Campus", 
      href: "/campus",
      dropdown: [
        { name: "Tuxtla Gutiérrez", href: "/campus/tuxtla" },
        { name: "Villaflores", href: "/campus/villaflores" }
      ]
    },
    { 
      name: "Estudiantes", 
      href: "/estudiantes",
      dropdown: [
        { name: "Reinscripciones", href: "/estudiantes/reinscripciones" },
        { name: "Solicitud de Beca", href: "/estudiantes/becas" },
        { name: "Reglamentos", href: "/estudiantes/reglamentos" },
        { name: "Evaluación Docente", href: "/estudiantes/evaluacion" }
      ]
    },
    { 
      name: "Egresados", 
      href: "/egresados",
      dropdown: null
    },
    { 
      name: "Biblioteca Virtual", 
      href: "/biblioteca-virtual",
      dropdown: null
    },
    { 
      name: "Contacto", 
      href: "/contacto",
      dropdown: null
    },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">CUM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                Centro Universitario Mesoamericano
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="relative">
                    <motion.button
                      whileHover={{ y: -1 }}
                      className={`flex items-center space-x-1 px-4 py-3 rounded-md text-foreground hover:text-primary transition-colors duration-300 ${
                        isActiveRoute(item.href) ? 'text-primary font-medium' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </motion.button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-xl shadow-elegant z-50 py-2 backdrop-blur-md"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.div whileHover={{ y: -1 }}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-md text-foreground hover:text-primary transition-colors duration-300 relative ${
                        isActiveRoute(item.href) ? 'text-primary font-medium' : ''
                      }`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Media & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 mr-4">
              <motion.a 
                href="https://www.facebook.com/CUMTuxtla" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <Facebook size={16} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/cumtuxtla/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Instagram size={16} />
              </motion.a>
            </div>
            <Button variant="ghost" className="text-foreground hover:text-primary bg-transparent hover:bg-primary/5">
              Información
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 magnetic-btn">
              Inscríbete
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in shadow-elegant">
            <nav className="flex flex-col px-4 py-6">
              {navItems.map((item) => (
                <div key={item.name} className="mb-2">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-3 py-3 text-foreground hover:text-primary transition-colors duration-300"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-3 text-foreground hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start bg-transparent hover:bg-primary/5">
                  Información
                </Button>
                <Button className="bg-gradient-primary">
                  Inscríbete
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Overlay for closing dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;
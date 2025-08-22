import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, User, AtSign, Phone as PhoneIcon, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const formTips = {
    name: "Escribe tu nombre completo como aparece en tus documentos oficiales",
    email: "Asegúrate de usar un email válido para recibir información importante",
    phone: "Incluye tu código de área para un mejor contacto",
    program: "Especifica el programa académico que te interesa",
    message: "Comparte cualquier pregunta específica o información adicional"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "¡Mensaje enviado exitosamente!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["961 600 0490", "965 65 20439"],
      action: "Llamar ahora"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cum-jmg.edu.mx", "admisiones@cum-jmg.edu.mx"],
      action: "Enviar email"
    },
    {
      icon: MapPin,
      title: "Ubicaciones",
      details: ["Tuxtla Gutiérrez", "Villaflores"],
      action: "Ver ubicación"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 16:00", "Sáb: 8:00 - 12:00"],
      action: "Agendar cita"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hero rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Estamos aquí para ayudarte
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros programas? Nuestro equipo está listo para ayudarte a dar el siguiente paso en tu carrera profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card 
                key={item.title}
                className="group border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="space-y-1 mb-3">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary-dark p-0 h-auto font-medium"
                      >
                        {item.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Action */}
            <Card className="bg-gradient-primary border-0 text-primary-foreground shadow-glow">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">¿Necesitas una asesoría personalizada?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Agenda una cita con uno de nuestros asesores educativos
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  Agendar cita
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="border-border/50 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                    Envíanos un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="xl:col-span-2">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <label className="text-sm font-medium flex items-center">
                              <User className="w-4 h-4 mr-2 text-primary" />
                              Nombre completo *
                            </label>
                            <div className="relative">
                              <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Tu nombre completo"
                                required
                                className="transition-all duration-300 focus:shadow-glow pl-10"
                              />
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            </div>
                          </motion.div>
                          <motion.div 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <label className="text-sm font-medium flex items-center">
                              <AtSign className="w-4 h-4 mr-2 text-primary" />
                              Email *
                            </label>
                            <div className="relative">
                              <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="tu@email.com"
                                required
                                className="transition-all duration-300 focus:shadow-glow pl-10"
                              />
                              <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            </div>
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <label className="text-sm font-medium flex items-center">
                              <PhoneIcon className="w-4 h-4 mr-2 text-primary" />
                              Teléfono
                            </label>
                            <div className="relative">
                              <Input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="961 123 4567"
                                className="transition-all duration-300 focus:shadow-glow pl-10"
                              />
                              <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            </div>
                          </motion.div>
                          <motion.div 
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="text-sm font-medium flex items-center">
                              <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                              Programa de interés
                            </label>
                            <div className="relative">
                              <Input
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('program')}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Ej: Licenciatura en Enfermería"
                                className="transition-all duration-300 focus:shadow-glow pl-10"
                              />
                              <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            </div>
                          </motion.div>
                        </div>

                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label className="text-sm font-medium flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                            Mensaje *
                          </label>
                          <div className="relative">
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                              placeholder="Cuéntanos cómo podemos ayudarte..."
                              rows={5}
                              required
                              className="transition-all duration-300 focus:shadow-glow resize-none pl-10 pt-3"
                            />
                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Button 
                            type="submit" 
                            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg py-3"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center">
                                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2"></div>
                                Enviando...
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                                Enviar mensaje
                              </div>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </div>

                    {/* Form Tips */}
                    <div className="xl:col-span-1">
                      <div className="sticky top-8">
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                          <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                          Consejos para llenar el formulario
                        </h3>
                        <AnimatePresence mode="wait">
                          {focusedField && (
                            <motion.div
                              key={focusedField}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                            >
                              <p className="text-sm text-muted-foreground">
                                {formTips[focusedField as keyof typeof formTips]}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {!focusedField && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-3"
                          >
                            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                              <User className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                Completa todos los campos obligatorios marcados con *
                              </p>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                              <PhoneIcon className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                Te contactaremos en un plazo máximo de 24 horas
                              </p>
                            </div>
                            <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                              <MessageSquare className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                              <p className="text-sm text-muted-foreground">
                                Sé específico en tu mensaje para brindarte mejor atención
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
'use client';

import { motion } from 'framer-motion';
import { Share2, Mail, MapPin, Calculator } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic campaigns that amplify your brand's voice and engage your audience across all major platforms.",
      badge: null
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Direct and personalized communication strategies to nurture leads and drive high conversions.",
      badge: null
    },
    {
      icon: MapPin,
      title: "Outdoor Media Providing",
      description: "Premium billboard locations and large-scale outdoor advertising solutions for maximum visibility.",
      badge: "Only in Pakistan"
    },
    {
      icon: Calculator,
      title: "Tax Advisory",
      description: "Expert financial guidance and tax planning to ensure compliance and optimize your business finances.",
      badge: null
    }
  ];

  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground/80 max-w-xl mx-auto">
            Tailored solutions to elevate your brand presence.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
              whileHover={{ scale: 1.02 }}
            >
              
              <div className="relative z-10 flex-1 flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex flex-wrap items-center gap-2">
                  {service.title}
                </h3>
                 {service.badge && (
                      <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 mb-3 inline-block">
                          {service.badge}
                      </span>
                  )}
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

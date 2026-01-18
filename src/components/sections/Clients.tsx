'use client';

import { motion } from 'framer-motion';
import { Signal, School, Layers, ShoppingBag } from 'lucide-react';

const Clients = () => {
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

  const clients = [
    {
      icon: ShoppingBag,
      title: "K&N's",
      description: "Managed extensive outdoor media campaigns delivering nationwide visibility for Pakistan's leading poultry brand.",
      type: "Outdoor Media"
    },
    {
      icon: Signal,
      title: "Telenor",
      description: "Executed strategic outdoor advertising placements to enhance brand recall and market penetration.",
      type: "Outdoor Media"
    },
    {
      icon: Signal,
      title: "Zong",
      description: "Provided premium outdoor media solutions supporting high-impact marketing initiatives across key regions.",
      type: "Outdoor Media"
    },
    {
      icon: School,
      title: "Grow Montessori School",
      description: "Developed and managed engaging social media marketing strategies to drive enrollment and community awareness.",
      type: "Social Media Marketing"
    },
    {
      icon: Layers,
      title: "Various Projects", // "Add english from your own" interpreted as general description
      description: "Successfully delivered diverse social media campaigns for multiple brands, focusing on engagement and growth.",
      type: "Social Media Marketing"
    }
  ];

  return (
    <section id="clients" className="py-28 bg-background relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
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
            Trusted <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground/80 max-w-xl mx-auto">
            Partnering with industry leaders to deliver exceptional results.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.title}
              variants={itemVariants}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10 flex-1 flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <client.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="mb-2">
                    <span className="text-[10px] font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20 inline-block mb-2">
                          {client.type}
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {client.title}
                    </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Map, BookOpen, Globe } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: TrendingUp,
      title: "Experience",
      description: "5+ Years"
    },
    {
      icon: Map,
      title: "Legacy",
      description: "Pioneer of Outdoor Media in Pakistan since 1995."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "ACCA qualified, combining financial acumen with creative marketing."
    },
    {
      icon: Globe,
      title: "Reach",
      description: "Delivering nationwide coverage with impactful locations."
    }
  ];


  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto"
          >
            Your trusted partner for impactful Social Media and Outdoor Advertising solutions. 
            Transforming brand visibility across Pakistan.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Journey & Expertise */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  With over five years of experience in social media and outdoor advertising, I have established myself as a strategic partner for brands seeking sustainable growth. 
                  My approach goes beyond advertising; I craft comprehensive narratives that elevate presence and engage audiences.
                </p>
                <p>
                  Carrying forward a pioneer legacy in Pakistan&apos;s outdoor media since 1995, I blend traditional wisdom with digital innovation. 
                  I deliver high-impact campaigns that dominate the visual space and resonate deeply, ensuring your brand leaves a lasting legacy.
                </p>
              </div>
            </motion.div>


          </motion.div>

          {/* Right Side: Cards Grid */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col items-start justify-center text-left"
                  whileHover={{ scale: 1.02 }}
                >
                  <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

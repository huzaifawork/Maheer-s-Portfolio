'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start pt-12 md:pt-20">
            {/* Left Side - Profile Picture */}
          <motion.div
            className="flex justify-center md:justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative w-full max-w-[400px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] blur-2xl opacity-20 animate-pulse" />
              <div className="relative rounded-[2rem] shadow-2xl ring-1 ring-white/10 overflow-hidden">
                <Image
                  src="/heropicture.jpeg"
                  alt="Maheer Nasir"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="text-center md:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-primary/50 to-white bg-clip-text text-transparent filter drop-shadow-lg">
                  Maheer Nasir
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Social Media Marketing & Outdoor Media Provider
              </h2>
              <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light border-l-4 border-primary/50 pl-6">
                Specializing in impactful social media strategies and large-scale outdoor advertising campaigns. 
                I help brands grow their visibility and connect with their audience through creative and data-driven solutions.
                <span className="block mt-4 font-medium text-foreground text-lg">Turning visions into visible results.</span>
              </p>
            </motion.div>

            {/* Logos Area */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap gap-12 justify-center md:justify-start items-center pt-8"
            >
              <motion.div 
                className="relative h-48 w-72"
                 whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/ADWORKSLOGO.png"
                  alt="AdWorks Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div 
                className="relative h-48 w-72"
                 whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/Maheerlogo.png"
                  alt="Maheer Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;

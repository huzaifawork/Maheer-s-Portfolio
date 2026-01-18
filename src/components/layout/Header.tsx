'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Wait for menu close animation
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Left Corner */}
            <div className="flex-shrink-0 w-1/4">
               <motion.div
                className="relative h-40 w-80 -ml-8 mt-6"
                whileHover={{ scale: 1.05 }}
              >
                 <Image
                  src="/ADWORKSLOGO.png"
                  alt="AdWorks Logo"
                  fill
                  className="object-contain object-left"
                  priority
                 />
              </motion.div>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center space-x-8">
              {navItems.map((item) => {


                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    onHoverStart={() => setHoveredPath(item.href)}
                    onHoverEnd={() => setHoveredPath(null)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                       hoveredPath === item.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.href === hoveredPath && (
                      <motion.div
                        className="absolute inset-0 bg-accent/10 rounded-full -z-0"
                        layoutId="nav-hover"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30
                        }}
                      >
                         <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* CTA Button - Right Corner */}
            <div className="hidden md:flex justify-end w-1/4">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold shadow-lg hover:shadow-primary/25 hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden overflow-hidden ${
              isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4 space-y-2 flex flex-col items-center bg-background/95 backdrop-blur-sm rounded-b-2xl border-t border-border/50">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-center px-4 py-3 text-muted-foreground hover:text-primary hover:bg-card/50 transition-colors relative group"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-bold shadow-lg"
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>
        </div>
        
        {/* Scroll Progress Bar Loader */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent origin-left z-50"
          style={{ scaleX }}
        />
      </motion.header>
    </>
  );
};

export default Header;

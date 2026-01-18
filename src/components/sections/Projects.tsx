'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Brain } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "AI Object Detection System",
      description: "A modern web application for real-time object detection using AI. Upload images and get instant object detection with bounding boxes, confidence scores, and downloadable results.",
      technologies: ["Next.js", "TypeScript", "TensorFlow.js", "Tailwind CSS", "COCO-SSD"],
      icon: Brain,
      github: "https://github.com/huzaifawork/Image-object-detection",
      demo: "https://image-object-detection-huzaifawork.vercel.app",
      featured: true
    },
    {
      title: "AI-Based Hotel Management System",
      description: "A comprehensive hotel management system built with MERN stack. Features room booking, food ordering, real-time delivery tracking, and AI-powered recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
      icon: Code,
      github: "https://github.com/huzaifawork/AI-Based-Management-System",
      demo: "https://ai-hotel-management.vercel.app",
      featured: true
    },
    {
      title: "HRMS Hotel Management System",
      description: "Human Resource Management System specifically designed for hotel operations with employee management, scheduling, and performance tracking.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      icon: Smartphone,
      github: "https://github.com/huzaifawork/hrmsnewdeploy",
      demo: "https://hrms-hotel-system.vercel.app",
      featured: false
    },
    {
      title: "Flood Prediction System",
      description: "An AI-powered system for predicting flood risks using machine learning algorithms and weather data analysis with real-time monitoring capabilities.",
      technologies: ["Python", "Machine Learning", "TensorFlow", "Pandas", "NumPy"],
      icon: Brain,
      github: "https://github.com/huzaifawork/Flood-Prediction-System",
      demo: "https://flood-prediction-ai.vercel.app",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Built with Next.js and featuring smooth animations and interactive elements.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      icon: Code,
      github: "https://github.com/huzaifawork/portfolio-site-new",
      demo: "https://huzaifawork-portfolio.vercel.app",
      featured: false
    },
    {
      title: "Bootstrap Implementation Guide",
      description: "A comprehensive guide demonstrating Bootstrap concepts including grids, navbars, carousels, cards, and footers with practical examples.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Jupyter Notebook"],
      icon: Code,
      github: "https://github.com/huzaifawork/Bootstrap-Implementation",
      demo: "https://bootstrap-guide-demo.vercel.app",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI/ML, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold mb-8 text-center"
          >
            Other Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-secondary hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-3 h-3" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-secondary hover:bg-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

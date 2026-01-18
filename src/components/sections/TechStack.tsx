'use client';

import { motion } from 'framer-motion';

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const techCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Redux", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "AI/ML",
      icon: "🤖",
      technologies: [
        { name: "TensorFlow", level: 70 },
        { name: "PyTorch", level: 65 },
        { name: "Python", level: 80 },
        { name: "Scikit-learn", level: 70 }
      ]
    },
    {
      title: "Tools",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Cursor", level: 80 },
        { name: "Postman", level: 75 }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20">
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
            Tech <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Here are the technologies I work with to bring ideas to life.
            I&apos;m always learning and expanding my toolkit to stay current with industry trends.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-xs text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + techIndex * 0.1 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Git', 'Cursor'].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            And many more technologies I&apos;m exploring and learning!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

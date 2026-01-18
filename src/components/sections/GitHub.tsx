'use client';

import { motion } from 'framer-motion';
import { Github, GitBranch, Star, Users } from 'lucide-react';

const GitHub = () => {
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

  // Real GitHub stats based on huzaifawork profile
  const githubStats = {
    totalRepos: 18,
    totalStars: 1,
    totalCommits: 200,
    followers: 6
  };

  const topLanguages = [
    { name: 'JavaScript', percentage: 62.9, color: '#f1e05a' },
    { name: 'TypeScript', percentage: 15, color: '#2b7489' },
    { name: 'Python', percentage: 8, color: '#3572A5' },
    { name: 'CSS', percentage: 7, color: '#1572B6' },
    { name: 'HTML', percentage: 4.1, color: '#e34c26' },
    { name: 'Other', percentage: 3, color: '#8b5cf6' }
  ];

  const recentRepos = [
    {
      name: 'Model-day',
      description: 'Latest JavaScript project for model implementation',
      language: 'JavaScript',
      stars: 0,
      forks: 0
    },
    {
      name: 'Flood-Prediction-System',
      description: 'AI-powered flood prediction system using machine learning',
      language: 'Python',
      stars: 0,
      forks: 1
    },
    {
      name: 'hrmsnewdeploy',
      description: 'Human Resource Management System for hotel operations',
      language: 'JavaScript',
      stars: 0,
      forks: 0
    },
    {
      name: 'Image-object-detection',
      description: 'AI Object Detection System using TensorFlow.js and Next.js',
      language: 'TypeScript',
      stars: 0,
      forks: 0
    }
  ];

  return (
    <section id="github" className="py-20">
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
            GitHub <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Activity</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Here&apos;s a glimpse of my coding activity and contributions on GitHub.
            I believe in open source and love sharing my work with the community.
          </motion.p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Github, label: 'Repositories', value: githubStats.totalRepos },
            { icon: Star, label: 'Stars Earned', value: githubStats.totalStars },
            { icon: GitBranch, label: 'Commits', value: githubStats.totalCommits },
            { icon: Users, label: 'Followers', value: githubStats.followers }
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors group"
              whileHover={{ scale: 1.02 }}
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold mb-1">{value}</div>
              <div className="text-muted-foreground text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Top Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
            >
              <Github className="w-5 h-5 text-primary" />
              Top Languages
            </motion.h3>
            
            <div className="space-y-4">
              {topLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Repositories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
            >
              <GitBranch className="w-5 h-5 text-primary" />
              Recent Repositories
            </motion.h3>
            
            <div className="space-y-4">
              {recentRepos.map((repo) => (
                <motion.div
                  key={repo.name}
                  variants={itemVariants}
                  className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-primary group-hover:text-accent transition-colors">
                      {repo.name}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3 h-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-xs text-muted-foreground">{repo.language}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-6 text-center"
            >
              <motion.a
                href="https://github.com/huzaifawork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                View All Repositories
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;

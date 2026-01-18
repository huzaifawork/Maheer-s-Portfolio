'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error' | string>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const ALL_SERVICES_ID = 'service_sflj21d'; 
    const ALL_TEMPLATE_ID = 'template_5ybkzrh'; 
    const ALL_PUBLIC_KEY = 'QV5rg7oLTSNr8qcpD'; 

    if (form.current) {
        // Update time field right before sending
        const timeField = form.current.querySelector('input[name="time"]') as HTMLInputElement;
        if (timeField) timeField.value = new Date().toLocaleString();

        emailjs.sendForm(ALL_SERVICES_ID, ALL_TEMPLATE_ID, form.current, ALL_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSubmitting(false);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Hide success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error);
                setIsSubmitting(false);
                // Set the actual error text to display
                const errorMessage = error.text || "Failed to send message. Please check your internet connection or try again later.";
                setStatus(errorMessage);
            });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// ... (skip to error display)


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
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6">
            Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto px-4">
            Ready to elevate your brand? Let&apos;s discuss your next project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-full"
          >
            <motion.div variants={itemVariants} className="bg-card p-5 md:p-6 lg:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors shadow-sm h-full flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h3>
                
                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs md:text-sm text-muted-foreground mb-1">Main Email</p>
                            <a href="mailto:maheern60@gmail.com" className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors break-all">maheern60@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                         <div className="p-2 md:p-3 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                             <p className="text-xs md:text-sm text-muted-foreground mb-1">Business Email</p>
                            <a href="mailto:adworksbymaheer@gmail.com" className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors break-all">adworksbymaheer@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                         <div className="min-w-0">
                             <p className="text-xs md:text-sm text-muted-foreground mb-1">Phone</p>
                            <a href="tel:+923177272777" className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors">+92 317 7272777</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                             <p className="text-xs md:text-sm text-muted-foreground mb-1">Location</p>
                            <p className="text-sm md:text-base lg:text-lg font-medium">Flat#17, Cantonment Plaza, Abbottabad</p>
                        </div>
                    </div>
                </div>

                 <div className="flex items-start space-x-3 md:space-x-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50">
                        <div className="p-2 md:p-3 bg-pink-500/10 rounded-lg text-pink-500 flex-shrink-0">
                            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                             <p className="text-xs md:text-sm text-muted-foreground mb-1">Instagram</p>
                            <a href="https://www.instagram.com/maheerexe/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors">maheerexe</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4 mt-3 md:mt-4">
                        <div className="p-2 md:p-3 bg-blue-600/10 rounded-lg text-blue-600 flex-shrink-0">
                            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                             <p className="text-xs md:text-sm text-muted-foreground mb-1">Facebook</p>
                            <a href="https://www.facebook.com/maheer.nasir.9" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors">MA HE ER</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4 mt-3 md:mt-4">
                        <div className="p-2 md:p-3 bg-blue-700/10 rounded-lg text-blue-700 flex-shrink-0">
                            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="min-w-0">
                             <p className="text-xs md:text-sm text-muted-foreground mb-1">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/maheer-nasir-3a2877272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base lg:text-lg font-medium hover:text-primary transition-colors">Maheer Nasir</a>
                        </div>
                    </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card p-5 md:p-6 lg:p-8 rounded-2xl border border-border/50 shadow-sm relative overflow-hidden h-full flex flex-col"
          >
             {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-x-8 -translate-y-8 pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 relative z-10">Send a Message</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10 flex-col flex h-full">
              <input type="hidden" name="time" value="" />
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs md:text-sm font-medium text-muted-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name" // Important: matches EmailJS template variable
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                 <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Important: matches EmailJS template variable
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                 <input
                    type="text"
                    id="subject"
                    name="subject" // Important: matches EmailJS template variable
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  name="message" // Important: matches EmailJS template variable
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg shadow-lg hover:shadow-primary/25 hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-auto"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>

              {status === 'success' && (
                <div className="bg-green-500/10 text-green-500 px-4 py-2 rounded-lg text-center font-medium border border-green-500/20">
                    Message sent successfully!
                </div>
              )}
               {status && status !== 'success' && (
                <div className="bg-red-500/10 text-red-500 px-4 py-2 rounded-lg text-center font-medium border border-red-500/20">
                    {status}
                </div>
              )}

              <div className="text-center mt-4 pt-4">
                  <p className="text-sm text-muted-foreground">
                      Or email directly at{' '}
                      <a 
                        href="mailto:adworksbymaheer@gmail.com" 
                        className="text-primary hover:underline font-medium inline-block"
                      >
                        adworksbymaheer@gmail.com
                      </a>
                  </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

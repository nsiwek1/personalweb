import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.05, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl font-bold text-secondary">
              Contact
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 animate-gradient-x"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.05, delay: 0.1 }}
            className="group rounded-[8px] p-5 transition-all duration-300"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary">
                  Get in Touch
                </h3>
                <p className="mt-2 text-primary/70">
                  Always happy to chat!
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:nataliasiwek@college.harvard.edu" className="flex items-center gap-3 text-primary/70 transition-colors duration-300">
                  <Mail size={20} />
                  <span>nataliasiwek@college.harvard.edu</span>
                </a>
                <div className="flex items-center gap-3 text-primary/70">
                  <MapPin size={20} />
                  <span>Cambridge, MA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.05, delay: 0.2 }}
            className="group rounded-[8px] p-5 transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0)]"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary">
                  Connect
                </h3>
                <p className="mt-2 text-primary/70">
                  Learn more!
                </p>
              </div>

              <div className="space-y-4">
                <a href="https://github.com/nsiwek1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary/70 transition-colors duration-300">
                  <Github size={20} />
                  <span>github.com/nsiwek1/</span>
                </a>
                <a href="https://www.linkedin.com/in/natalia-siwek-640957235/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary/70 transition-colors duration-300">
                  <Linkedin size={20} />
                  <span>linkedin.com/in/nataliasiwek</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



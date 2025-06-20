import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Phone, MessageCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "Enterprise-Grade Intelligence",
    "Cloud-Native Solutions",
    "AI-Powered Innovation",
    "Global Software Excellence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.img
            src="/vm2.png"
            alt="VM2Soft"
            className="w-24 h-24 mx-auto mb-8"
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VM2Soft
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <motion.h2
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-4xl font-semibold text-white"
            >
              Empowering Innovation with{' '}
              <span className="text-blue-400">{heroTexts[currentText]}</span>
            </motion.h2>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Global software company building enterprise-level applications for stakeholders in 
            banking, telecom, healthcare, education, logistics, and government sectors.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:shadow-2xl transition-all duration-300"
          >
            <Phone size={20} />
            <span>Talk to Us</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#services')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Play size={20} />
            <span>Explore Services</span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 border-2 border-white/30 hover:border-white/60 transition-all duration-300"
          >
            <MessageCircle size={20} />
            <span>Get a Quote</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Clients from './components/Clients';
import CaseStudies from './components/CaseStudies';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './contexts/ThemeContext';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Clients />
      <CaseStudies />
      <Careers />
      <Contact />
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.img
            src="/vm2.png"
            alt="VM2Soft"
            className="w-32 h-32 mx-auto mb-8"
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
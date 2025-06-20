import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Users, Award, Zap, Target, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { icon: Globe, label: 'Global Clients', value: '500+' },
    { icon: Users, label: 'Expert Team', value: '200+' },
    { icon: Award, label: 'Projects Delivered', value: '1000+' },
    { icon: Zap, label: 'Years Experience', value: '15+' },
  ];

  const timeline = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform enterprise software' },
    { year: '2012', title: 'Cloud Expansion', description: 'Pioneered cloud-native solutions for enterprises' },
    { year: '2016', title: 'AI Integration', description: 'Integrated AI/ML capabilities into our solutions' },
    { year: '2020', title: 'Global Reach', description: 'Expanded to serve clients across 6 continents' },
    { year: '2024', title: 'Innovation Leader', description: 'Leading the next generation of enterprise intelligence' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600">VM2Soft</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a global software company building enterprise-level applications for stakeholders 
            in banking, telecom, healthcare, education, logistics, and government sectors.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              VM2Soft specializes in software architecture, end-to-end deployment, DevOps, 
              multi-cloud integration, cloud intelligence, and AI/ML-powered solutions. 
              We transform complex business challenges into elegant, scalable software solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Enterprise-grade software architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">Secure, scalable cloud solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">AI-powered intelligent systems</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Key Offerings</h4>
              <ul className="space-y-3">
                <li>• Custom Software Development</li>
                <li>• Enterprise Architecture & Design</li>
                <li>• Multi-cloud Integration (AWS, Azure, GCP)</li>
                <li>• AI & ML Solutions</li>
                <li>• Big Data & Cloud Intelligence</li>
                <li>• CI/CD Automation & DevOps</li>
                <li>• Legacy System Modernization</li>
                <li>• Product Engineering & SaaS Solutions</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <h4 className="text-2xl font-bold text-blue-600 mb-2">{item.year}</h4>
                    <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
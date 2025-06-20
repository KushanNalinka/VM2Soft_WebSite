import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, TrendingUp, Clock, Users, Award } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const caseStudies = [
    {
      title: 'Banking Digital Transformation',
      industry: 'Financial Services',
      client: 'Global Bank Corp',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Legacy banking system modernization with zero downtime',
      solution: 'Microservices architecture with cloud-native deployment',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      results: [
        { metric: 'Processing Speed', improvement: '300%' },
        { metric: 'System Uptime', improvement: '99.9%' },
        { metric: 'Cost Reduction', improvement: '45%' },
        { metric: 'User Satisfaction', improvement: '85%' }
      ],
      duration: '8 months',
      teamSize: '12 developers'
    },
    {
      title: 'Healthcare AI Platform',
      industry: 'Healthcare',
      client: 'MedTech Solutions',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'AI-powered diagnostic system for early disease detection',
      solution: 'Machine learning platform with real-time analytics',
      technologies: ['Python', 'TensorFlow', 'React', 'Azure', 'MongoDB'],
      results: [
        { metric: 'Diagnostic Accuracy', improvement: '94%' },
        { metric: 'Processing Time', improvement: '65%' },
        { metric: 'Patient Throughput', improvement: '120%' },
        { metric: 'Cost Savings', improvement: '35%' }
      ],
      duration: '10 months',
      teamSize: '15 specialists'
    },
    {
      title: 'E-Learning Platform Scale',
      industry: 'Education',
      client: 'EduGlobal Inc',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Scale platform to serve 1M+ concurrent users globally',
      solution: 'Multi-region cloud deployment with CDN optimization',
      technologies: ['Vue.js', 'Java', 'GCP', 'Kubernetes', 'Redis'],
      results: [
        { metric: 'User Capacity', improvement: '1000%' },
        { metric: 'Load Time', improvement: '70%' },
        { metric: 'Global Reach', improvement: '50 countries' },
        { metric: 'Engagement', improvement: '180%' }
      ],
      duration: '6 months',
      teamSize: '10 engineers'
    },
    {
      title: 'Supply Chain Optimization',
      industry: 'Logistics',
      client: 'LogiFlow Systems',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Real-time supply chain visibility and optimization',
      solution: 'IoT-enabled tracking with predictive analytics',
      technologies: ['Angular', '.NET Core', 'Azure IoT', 'Power BI', 'SQL Server'],
      results: [
        { metric: 'Delivery Time', improvement: '40%' },
        { metric: 'Inventory Costs', improvement: '30%' },
        { metric: 'Visibility', improvement: '100%' },
        { metric: 'Customer Satisfaction', improvement: '60%' }
      ],
      duration: '12 months',
      teamSize: '18 developers'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve their digital 
            transformation goals with measurable results.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="lg:w-1/2"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: (index * 0.2) + 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={result.metric}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.2) + (resultIndex * 0.1) + 0.5 
                        }}
                        className="bg-white dark:bg-gray-700 p-4 rounded-xl text-center"
                      >
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {result.improvement}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {result.metric}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
                  >
                    <span>View Full Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve similar transformative results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
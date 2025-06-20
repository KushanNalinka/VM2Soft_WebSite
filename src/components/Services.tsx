import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Cloud, 
  Brain, 
  Database, 
  Settings, 
  Smartphone, 
  Shield, 
  Zap 
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.',
      features: ['Full-stack development', 'Agile methodology', 'Quality assurance', 'Maintenance & support']
    },
    {
      icon: Cloud,
      title: 'Enterprise Architecture & Design',
      description: 'Scalable, robust architecture design that grows with your business and adapts to changing needs.',
      features: ['System architecture', 'Microservices design', 'API development', 'Performance optimization']
    },
    {
      icon: Database,
      title: 'Cloud Integration',
      description: 'Seamless integration with AWS, Azure, and GCP for maximum scalability and reliability.',
      features: ['Multi-cloud strategy', 'Migration services', 'Cost optimization', '24/7 monitoring']
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Intelligent systems powered by machine learning and artificial intelligence technologies.',
      features: ['Predictive analytics', 'Natural language processing', 'Computer vision', 'Automation']
    },
    {
      icon: Settings,
      title: 'Big Data & Cloud Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data warehousing', 'Real-time analytics', 'Business intelligence', 'Data visualization']
    },
    {
      icon: Zap,
      title: 'CI/CD Automation & DevOps',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      features: ['Continuous integration', 'Automated testing', 'Infrastructure as code', 'Monitoring & logging']
    },
    {
      icon: Shield,
      title: 'Legacy System Modernization',
      description: 'Modernize your legacy systems with minimal disruption while maintaining business continuity.',
      features: ['System assessment', 'Migration planning', 'Risk mitigation', 'Training & support']
    },
    {
      icon: Smartphone,
      title: 'Product Engineering & SaaS',
      description: 'End-to-end product development from concept to market-ready SaaS solutions.',
      features: ['Product strategy', 'MVP development', 'Scalable architecture', 'Go-to-market support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
              }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 group-hover:shadow-lg"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can accelerate your digital transformation journey.
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

export default Services;
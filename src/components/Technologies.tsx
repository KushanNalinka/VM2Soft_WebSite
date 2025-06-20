import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Technologies: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const techCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', logo: '⚛️' },
        { name: 'TypeScript', logo: '📘' },
        { name: 'Vue.js', logo: '💚' },
        { name: 'Angular', logo: '🅰️' },
        { name: 'Next.js', logo: '▲' },
        { name: 'Tailwind CSS', logo: '🎨' }
      ]
    },
    {
      category: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', logo: '🟢' },
        { name: 'Python', logo: '🐍' },
        { name: 'Java', logo: '☕' },
        { name: '.NET Core', logo: '🔷' },
        { name: 'Go', logo: '🐹' },
        { name: 'PHP', logo: '🐘' }
      ]
    },
    {
      category: 'Cloud',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'AWS', logo: '☁️' },
        { name: 'Azure', logo: '🌐' },
        { name: 'GCP', logo: '🌤️' },
        { name: 'Docker', logo: '🐳' },
        { name: 'Kubernetes', logo: '⚙️' },
        { name: 'Terraform', logo: '🏗️' }
      ]
    },
    {
      category: 'Database',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'MySQL', logo: '🐬' },
        { name: 'Redis', logo: '🔴' },
        { name: 'Elasticsearch', logo: '🔍' },
        { name: 'Firebase', logo: '🔥' }
      ]
    },
    {
      category: 'AI/ML',
      color: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'TensorFlow', logo: '🧠' },
        { name: 'PyTorch', logo: '🔥' },
        { name: 'OpenAI', logo: '🤖' },
        { name: 'Scikit-learn', logo: '📊' },
        { name: 'Pandas', logo: '🐼' },
        { name: 'Jupyter', logo: '📓' }
      ]
    },
    {
      category: 'DevOps',
      color: 'from-teal-500 to-blue-500',
      technologies: [
        { name: 'Jenkins', logo: '🔧' },
        { name: 'GitLab CI', logo: '🦊' },
        { name: 'Apache Kafka', logo: '📨' },
        { name: 'RabbitMQ', logo: '🐰' },
        { name: 'Prometheus', logo: '📈' },
        { name: 'Grafana', logo: '📊' }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions 
            that drive your business forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                <span className="text-2xl font-bold text-white">
                  {category.category.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.1) + (techIndex * 0.05) 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                    }}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-2xl mb-2">{tech.logo}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tech Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technologies We Master
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Java', '.NET Core',
              'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL',
              'MongoDB', 'TensorFlow', 'PyTorch', 'Jenkins', 'Apache Kafka'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgb(59, 130, 246)',
                  color: 'white'
                }}
                className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 font-medium cursor-pointer transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Certified Excellence</h3>
            <p className="text-xl mb-6 opacity-90">
              Our team holds industry certifications from leading technology providers
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['AWS Certified', 'Azure Expert', 'Google Cloud Professional', 'Kubernetes Certified'].map((cert) => (
                <motion.div
                  key={cert}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-medium"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
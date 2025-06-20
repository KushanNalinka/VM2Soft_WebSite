import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, MapPin, Users } from 'lucide-react';

const Clients: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'FinTech Solutions Inc.',
      country: 'USA',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'VM2Soft transformed our legacy banking system into a modern, cloud-native platform. Their expertise in fintech is unmatched.',
      rating: 5
    },
    {
      name: 'David Chen',
      position: 'CEO',
      company: 'MedTech Innovations',
      country: 'Singapore',
      flag: '🇸🇬',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The AI-powered healthcare solution delivered by VM2Soft has revolutionized patient care in our hospitals.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      position: 'Head of Digital',
      company: 'EduTech Global',
      country: 'UK',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'Their e-learning platform scaled to serve over 1 million students globally. Exceptional engineering quality.',
      rating: 5
    },
    {
      name: 'Raj Patel',
      position: 'CTO',
      company: 'LogiFlow Systems',
      country: 'UAE',
      flag: '🇦🇪',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'VM2Soft\'s logistics optimization system reduced our operational costs by 40% while improving delivery times.',
      rating: 5
    }
  ];

  const clientLogos = [
    { name: 'TechCorp', industry: 'Technology' },
    { name: 'HealthPlus', industry: 'Healthcare' },
    { name: 'EduSmart', industry: 'Education' },
    { name: 'FinanceFlow', industry: 'Banking' },
    { name: 'LogiTech', industry: 'Logistics' },
    { name: 'GovSolutions', industry: 'Government' },
    { name: 'TeleConnect', industry: 'Telecom' },
    { name: 'RetailMax', industry: 'Retail' }
  ];

  const globalStats = [
    { country: 'USA', flag: '🇺🇸', clients: 150 },
    { country: 'UK', flag: '🇬🇧', clients: 80 },
    { country: 'Singapore', flag: '🇸🇬', clients: 60 },
    { country: 'Australia', flag: '🇦🇺', clients: 45 },
    { country: 'UAE', flag: '🇦🇪', clients: 35 },
    { country: 'Sri Lanka', flag: '🇱🇰', clients: 25 }
  ];

  return (
    <section id="clients" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by <span className="text-blue-600">Global Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We've partnered with industry leaders across the globe to deliver transformative 
            software solutions that drive business success.
          </p>
        </motion.div>

        {/* Global Presence Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Global Presence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {globalStats.map((stat, index) => (
              <motion.div
                key={stat.country}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl"
              >
                <div className="text-4xl mb-3">{stat.flag}</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                  {stat.country}
                </h4>
                <p className="text-2xl font-bold text-blue-600 mb-1">
                  {stat.clients}+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Clients
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {client.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {client.industry}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)" }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                        {testimonial.company}
                      </span>
                      <span className="text-lg">{testimonial.flag}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-600 opacity-20" />
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
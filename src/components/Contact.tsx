import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Facebook, 
  Twitter,
  Clock,
  Globe
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@vm2soft.com', 'sales@vm2soft.com'],
      action: 'mailto:info@vm2soft.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+94 11 234 5678'],
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['123 Tech Street', 'Colombo 03, Sri Lanka'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'GMT +5:30'],
      action: null
    }
  ];

  const offices = [
    {
      city: 'Colombo',
      country: 'Sri Lanka',
      flag: '🇱🇰',
      address: '123 Tech Street, Colombo 03',
      phone: '+94 11 234 5678',
      type: 'Headquarters'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
      address: '456 Business Ave, Singapore 018956',
      phone: '+65 6123 4567',
      type: 'Regional Office'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      address: '789 Innovation Hub, London EC2A 4DP',
      phone: '+44 20 7123 4567',
      type: 'European Office'
    },
    {
      city: 'New York',
      country: 'United States',
      flag: '🇺🇸',
      address: '321 Tech Plaza, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      type: 'Americas Office'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/vm2soft' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/vm2soft' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/vm2soft' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/vm2soft' }
  ];

  const services = [
    'Custom Software Development',
    'Enterprise Architecture',
    'Cloud Integration',
    'AI & ML Solutions',
    'DevOps & Automation',
    'Legacy Modernization',
    'Product Engineering',
    'Consulting Services'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge software solutions? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 dark:text-gray-300">
                          {info.action && detailIndex === 0 ? (
                            <a 
                              href={info.action}
                              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Global Offices */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Global Offices
              </h3>
              
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {office.city}, {office.country}
                        </h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          {office.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      {office.address}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {office.phone}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Us
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Find Us on the Map
            </h3>
            <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
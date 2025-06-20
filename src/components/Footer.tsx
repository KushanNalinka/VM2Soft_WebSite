import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Facebook, 
  Twitter,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      'Custom Software Development',
      'Enterprise Architecture',
      'Cloud Integration',
      'AI & ML Solutions',
      'DevOps & Automation',
      'Legacy Modernization'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates',
      'Case Studies',
      'Contact Us'
    ],
    Resources: [
      'Blog',
      'Documentation',
      'Support Center',
      'Community',
      'Partners',
      'Downloads'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR Compliance',
      'Security',
      'Accessibility'
    ]
  };

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/vm2soft' },
    { icon: Github, name: 'GitHub', url: 'https://github.com/vm2soft' },
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/vm2soft' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/vm2soft' }
  ];

  const offices = [
    {
      city: 'Colombo',
      country: 'Sri Lanka',
      address: '123 Tech Street, Colombo 03',
      phone: '+94 11 234 5678'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '456 Business Ave, Singapore 018956',
      phone: '+65 6123 4567'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Innovation Hub, London EC2A 4DP',
      phone: '+44 20 7123 4567'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img src="/vm2.png" alt="VM2Soft" className="h-12 w-auto" />
                <span className="text-2xl font-bold">VM2Soft</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering Innovation with Enterprise-Grade Intelligence. 
                We build cutting-edge software solutions for global enterprises.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).slice(0, 3).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                      >
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:info@vm2soft.com" className="text-gray-300 hover:text-white transition-colors">
                      info@vm2soft.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    123 Tech Street<br />
                    Colombo 03, Sri Lanka
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Offices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-8 text-center">Global Offices</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-gray-800 rounded-lg"
              >
                <h4 className="font-semibold text-white mb-2">
                  {office.city}, {office.country}
                </h4>
                <p className="text-gray-400 text-sm mb-2">{office.address}</p>
                <p className="text-gray-400 text-sm">{office.phone}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 VM2Soft. All rights reserved. | Built with ❤️ for enterprise excellence.
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm">
                {footerLinks.Legal.slice(0, 3).map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
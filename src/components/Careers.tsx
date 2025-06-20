import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Target, 
  Award,
  Upload,
  Filter
} from 'lucide-react';

const Careers: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      location: 'Remote / Colombo',
      type: 'Full-time',
      salary: '$80k - $120k',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript'],
      description: 'Lead development of enterprise-grade applications with modern tech stack.',
      requirements: ['5+ years experience', 'React expertise', 'Cloud platforms', 'Team leadership']
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      location: 'Singapore / Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      description: 'Build and maintain CI/CD pipelines for global enterprise clients.',
      requirements: ['3+ years DevOps', 'Container orchestration', 'Cloud infrastructure', 'Automation']
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      location: 'USA / Remote',
      type: 'Full-time',
      salary: '$100k - $150k',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Azure'],
      description: 'Develop cutting-edge AI solutions for healthcare and fintech clients.',
      requirements: ['ML/AI expertise', 'Python proficiency', 'Research background', 'PhD preferred']
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      location: 'London / Remote',
      type: 'Full-time',
      salary: '$70k - $100k',
      technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      description: 'Design intuitive interfaces for complex enterprise applications.',
      requirements: ['5+ years design', 'Enterprise UX', 'Design systems', 'User research']
    },
    {
      id: 5,
      title: 'Cloud Architect',
      location: 'Dubai / Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform'],
      description: 'Design scalable cloud architectures for global enterprise clients.',
      requirements: ['Cloud certifications', '7+ years experience', 'Multi-cloud expertise', 'Architecture design']
    },
    {
      id: 6,
      title: 'Product Manager',
      location: 'Sydney / Remote',
      type: 'Full-time',
      salary: '$110k - $140k',
      technologies: ['Agile', 'Jira', 'Analytics', 'Strategy'],
      description: 'Drive product strategy and roadmap for enterprise software solutions.',
      requirements: ['Product management', 'Technical background', 'Stakeholder management', 'Data-driven']
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices in everything we do.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in our work and continuously improve our skills.'
    },
    {
      icon: Target,
      title: 'Agility',
      description: 'We adapt quickly to change and deliver value through iterative, collaborative approaches.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible working hours',
    'Remote work options',
    'Professional development budget',
    'Conference and training allowance',
    'Modern equipment and tools',
    'Team building activities',
    'Wellness programs',
    'Parental leave',
    'Performance bonuses',
    'Stock options'
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesRole = !selectedRole || job.title.toLowerCase().includes(selectedRole.toLowerCase());
    const matchesLocation = !selectedLocation || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesTech = !selectedTech || job.technologies.some(tech => 
      tech.toLowerCase().includes(selectedTech.toLowerCase())
    );
    return matchesRole && matchesLocation && matchesTech;
  });

  return (
    <section id="careers" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a global team that's shaping the future of enterprise software. 
            We're looking for passionate individuals who want to make a real impact.
          </p>
        </motion.div>

        {/* Why Join VM2Soft */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Join VM2Soft?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Benefits & Perks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Job Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by:</span>
            </div>
            <input
              type="text"
              placeholder="Role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Technology"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Open Positions ({filteredJobs.length})
          </h3>
          <div className="grid gap-6">
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {job.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Requirements:</strong> {job.requirements.join(', ')}
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CV Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <Upload className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Don't See Your Role?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Upload Your CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const highlights = [
    'Building backend applications with Go (Golang)',
    'Developing REST APIs and web services',
    'Working with PostgreSQL and database design',
    'Exploring system design and distributed systems',
    'Continuously improving problem-solving skills'
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mb-12"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a backend-focused software developer with a passion for building scalable web applications and exploring distributed systems. With expertise in Go and REST APIs, I focus on writing clean, maintainable code that solves complex problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My journey in software development has been driven by curiosity and a commitment to continuous learning. I enjoy tackling challenging problems on platforms like LeetCode and CodeCrafters while staying updated with the latest industry trends.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-cyan-400 mr-4 text-xl">▸</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
              <p className="text-3xl font-bold gradient-text mb-2">5+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
              <p className="text-3xl font-bold gradient-text mb-2">3+</p>
              <p className="text-gray-400">Years Learning</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
              <p className="text-3xl font-bold gradient-text mb-2">10+</p>
              <p className="text-gray-400">Technologies</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition duration-300">
              <p className="text-3xl font-bold gradient-text mb-2">∞</p>
              <p className="text-gray-400">Always Learning</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

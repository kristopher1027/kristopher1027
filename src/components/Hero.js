import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <span className="text-cyan-400 font-semibold text-lg">Welcome! 👋</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mt-4 mb-6"
        >
          Hi, I'm <span className="gradient-text">Christopher Okoh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-400 mb-8 font-light"
        >
          Backend-focused Software Developer building scalable web applications and exploring distributed systems
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Specializing in Go, REST APIs, and system design. Passionate about writing clean code and solving complex problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition duration-300 glow-effect"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold rounded-lg transition duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/kristopher1027"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/okoh-christopher-2b98593ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:okohchristopher1027@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope size={32} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

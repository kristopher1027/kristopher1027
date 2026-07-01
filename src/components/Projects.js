import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ASCII Art Web',
      description: 'A web application that converts text into ASCII art using Go templates and HTTP handlers. Features a clean UI for easy text-to-ASCII conversion.',
      tech: ['Go', 'HTML', 'CSS', 'HTTP'],
      github: 'https://github.com/kristopher1027/ascii-art-web',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'VTU Platform',
      description: 'A virtual top-up platform for airtime, data subscriptions, and bill payments. Built with a focus on reliability and user experience.',
      tech: ['Go', 'PostgreSQL', 'REST API', 'Payment Integration'],
      github: 'https://github.com/kristopher1027',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Go API Server',
      description: 'Learning API development with focus on routing, middleware, authentication, and database integration using Go best practices.',
      tech: ['Go', 'PostgreSQL', 'JWT', 'Middleware'],
      github: 'https://github.com/kristopher1027',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Task Manager API',
      description: 'Backend service for task management built with Go and PostgreSQL. Features task creation, updates, and real-time synchronization.',
      tech: ['Go', 'PostgreSQL', 'Docker', 'REST API'],
      github: 'https://github.com/kristopher1027/rest-task',
      color: 'from-orange-500 to-red-500'
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mb-12"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400 transition duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition duration-300"
                  >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

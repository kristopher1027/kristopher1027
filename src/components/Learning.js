import React from 'react';
import { motion } from 'framer-motion';

const Learning = () => {
  const learningItems = [
    {
      title: 'Advanced Go Concurrency',
      progress: 50,
      description: 'Mastering goroutines, channels, and concurrent patterns'
    },
    {
      title: 'PostgreSQL Optimization',
      progress: 70,
      description: 'Query optimization, indexing, and performance tuning'
    },
    {
      title: 'System Design',
      progress: 40,
      description: 'Scaling applications and designing distributed systems'
    },
    {
      title: 'Docker & Containerization',
      progress: 60,
      description: 'Container orchestration and deployment strategies'
    },
    {
      title: 'Microservices Architecture',
      progress: 40,
      description: 'Building and managing microservices at scale'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section
      id="learning"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Currently Learning</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mb-12"></div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                <span className="text-cyan-400 font-bold text-lg">{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;

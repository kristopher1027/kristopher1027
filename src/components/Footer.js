import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Crafted with <span className="text-cyan-400">❤️</span> by Christopher Okoh
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Building reliable software one commit at a time.
          </p>
          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © {currentYear} Christopher Okoh. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden 
      bg-gradient-to-tr from-indigo-600 via-purple-700 to-pink-600 
      dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      text-white dark:text-gray-100 min-h-screen flex items-center justify-center px-6 md:px-24 transition-colors duration-500"
    >
      {/* Animated Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360, 0],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/4 w-72 h-72 bg-pink-400 opacity-30 dark:opacity-10 filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -360, 0],
          borderRadius: ["40%", "60%", "40%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-400 opacity-25 dark:opacity-10 filter blur-2xl"
      />

      <div className="relative max-w-3xl text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
        >
          Unlock the Value <br /> of Your Unused <br /> Software Licenses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-xl md:text-2xl font-light drop-shadow-md"
        >
          SoftSell helps businesses resell unused software licenses with ease.
        </motion.p>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-white dark:bg-gray-100 text-indigo-700 font-semibold px-10 py-4 rounded-full shadow-lg cursor-pointer select-none transition duration-300 hover:shadow-xl"
        >
          Get a Quote
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

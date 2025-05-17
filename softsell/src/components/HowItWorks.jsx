import React from "react";
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUpload size={48} className="text-indigo-600" />,
    title: "Upload License",
    description: "Submit details of your unused software licenses.",
  },
  {
    icon: <FaSearchDollar size={48} className="text-indigo-600" />,
    title: "Get Valuation",
    description: "Receive an instant and fair valuation.",
  },
  {
    icon: <FaMoneyBillWave size={48} className="text-indigo-600" />,
    title: "Get Paid",
    description: "Receive your payment securely and quickly.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">How It Works</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-indigo-50 dark:bg-indigo-900 rounded-2xl p-8 shadow-lg hover:shadow-xl cursor-default transition-shadow"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-6">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">{step.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;

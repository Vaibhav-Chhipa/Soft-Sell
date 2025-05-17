import React from "react";
import { FaShieldAlt, FaBolt, FaUsers, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShieldAlt size={40} className="text-indigo-600" />,
    title: "Secure Transactions",
    description: "We ensure safe and confidential license sales.",
  },
  {
    icon: <FaBolt size={40} className="text-indigo-600" />,
    title: "Fast Processing",
    description: "Get valuations and payments quickly with minimal hassle.",
  },
  {
    icon: <FaUsers size={40} className="text-indigo-600" />,
    title: "Expert Support",
    description: "Our team is ready to assist you at every step.",
  },
  {
    icon: <FaThumbsUp size={40} className="text-indigo-600" />,
    title: "Trusted by Businesses",
    description: "Join hundreds of companies who rely on SoftSell.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Why Choose Us</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md hover:shadow-lg cursor-default transition-shadow"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-5">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;

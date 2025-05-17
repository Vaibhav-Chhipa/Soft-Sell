import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "IT Manager",
    company: "TechSolutions Inc.",
    text: "SoftSell made it super easy to monetize our unused software licenses. Fast, secure, and reliable!",
  },
  {
    name: "Michael Lee",
    role: "Finance Director",
    company: "Enterprise Corp.",
    text: "The valuation process was transparent and the payment arrived quicker than expected. Highly recommend!",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Customer Testimonials</h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-indigo-50 dark:bg-indigo-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-default"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <FaQuoteLeft size={30} className="text-indigo-600 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
              "{review.text}"
            </p>
            <div className="font-semibold text-indigo-700 dark:text-indigo-300 text-lg">
              {review.name}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {review.role} — {review.company}
            </div>
            <div className="mt-4 flex justify-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;

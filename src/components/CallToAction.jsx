import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="w-4/5 min-h-[500px] flex items-center gap-3.5 py-10 mx-auto">
      <motion.div
        className="flex flex-col gap-3.5 bg-gray-900 p-10 rounded-md"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Take control of your inventory
        </h1>
        <p className="text-sm text-gray-300">
          Stop wasting time with outdated processes. Track your products, manage
          orders, and grow your business—all in one place. Signup now and see
          how simple inventory management can be.
        </p>
        <Link
          to="/signup"
          className="w-fit font-semibold text-white bg-blue-500 hover:bg-blue-700 px-5 py-3.5 rounded-md"
        >
          Start for free now
        </Link>
      </motion.div>
    </section>
  );
}

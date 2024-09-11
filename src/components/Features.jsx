import { motion } from "framer-motion";
import time from "../assets/real-time.png";
import management from "../assets/management.png";
import order from "../assets/order.png";
import analysis from "../assets/analysis.png";

export default function Features() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Powerful features to elevate your supply chain management
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <motion.div
          className="flex flex-col gap-2.5 bg-gray-100 p-5 border rounded-md"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <img src={time} alt="Feature image" className="size-10" />
          <h3 className="text-xl font-semibold text-gray-900">
            Stay updated, stay in control
          </h3>
          <p className="text-sm text-gray-500">
            Monitor stock levels in real time with our intuitive dashboard.
            Whether you're a supplier or business owner, get instant updates on
            product availability to prevent stockouts or overstock.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2.5 bg-gray-100 p-5 border rounded-md"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          viewport={{ once: true }}
        >
          <img src={management} alt="Feature image" className="size-10" />
          <h3 className="text-xl font-semibold text-gray-900">
            Manage inventory with ease
          </h3>
          <p className="text-sm text-gray-500">
            Suppliers can effortlessly add, edit, or remove products, set
            pricing, and categorize inventory for a streamlined management
            experience. Organize your stock with customizable filters and tags.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2.5 bg-gray-100 p-5 border rounded-md"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
          viewport={{ once: true }}
        >
          <img src={order} alt="Feature image" className="size-10" />
          <h3 className="text-xl font-semibold text-gray-900">
            Simplified purchasing for business owners
          </h3>
          <p className="text-sm text-gray-500">
            Find the products you need from trusted suppliers with ease.
            Business owners can browse product catalogs, place orders, and track
            shipments—all from one platform.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2.5 bg-gray-100 p-5 border rounded-md"
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          viewport={{ once: true }}
        >
          <img src={analysis} alt="Feature image" className="size-10" />
          <h3 className="text-xl font-semibold text-gray-900">
            Make data-driven decisions
          </h3>
          <p className="text-sm text-gray-500">
            Gain valuable insights into your inventory and purchasing trends
            with detailed analytics. From sales performance to stock movement,
            access reports that help you optimize your business decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

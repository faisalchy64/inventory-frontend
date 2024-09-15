import about from "../assets/about.jpg";

export default function About() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Revolutionizing inventory management for
        <br className="hidden lg:inline" /> suppliers and business owners
      </h1>

      <div className="h-[350px] rounded-3xl overflow-hidden">
        <img
          src={about}
          alt="About image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3.5">
        <p className="text-sm text-gray-500">
          At Xventory, we believe that managing inventory should be simple,
          efficient, and accessible for businesses of all sizes. That’s why we
          created a powerful platform where suppliers and business owners can
          seamlessly connect, manage products, and grow their operations-all
          from one intuitive system.
        </p>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-semibold text-gray-900">Our mission</h3>
          <p className="text-sm text-gray-500">
            Our mission is to simplify the way businesses handle inventory and
            procurement. Whether you're a supplier looking to streamline your
            product management or a business owner searching for the best
            products to stock your shelves, our platform is designed to save you
            time, reduce costs, and help you grow.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-semibold text-gray-900">Who we are</h3>
          <p className="text-sm text-gray-500">
            Founded by a team of industry experts with years of experience in
            supply chain management and business operations, Xventory was born
            out of a desire to address the common pain points businesses face in
            managing their inventory. We understand the challenges of tracking
            products, managing orders, and maintaining supplier relationships.
            That’s why we built a platform that simplifies these processes,
            helping businesses focus on what really matters—delivering value to
            their customers.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-semibold text-gray-900">
            Our vision for the future
          </h3>
          <p className="text-sm text-gray-500">
            We’re constantly evolving, driven by feedback from our community of
            users. Our goal is to build the most user-friendly, innovative, and
            reliable inventory management platform in the industry-helping
            businesses around the world become more efficient and profitable.
          </p>
        </div>
      </div>
    </section>
  );
}

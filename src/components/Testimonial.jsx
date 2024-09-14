export default function Testimonial() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Your success, our mission, testimonials from thriving businesses
      </h1>
      <div className="grid lg:grid-cols-3 gap-3.5">
        <div className="flex flex-col gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-[100%] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=600"
                alt="Person image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="flex flex-col font-semibold text-gray-700">
              <span>John Doe,</span>
              <span className="text-xs text-gray-500">Owner, ABC Retail</span>
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            "This inventory management app has been a game-changer for my
            business. It's intuitive, efficient, and has streamlined our entire
            supply chain process."
          </p>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-[100%] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&w=600"
                alt="Person image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="flex flex-col font-semibold text-gray-700">
              <span>Sarah Lee,</span>
              <span className="text-xs text-gray-500">
                Supplier, XYZ Wholesaler
              </span>
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            "As a supplier, I've never had an easier time tracking and managing
            my inventory. The app's features make it a breeze to keep everything
            organized and up-to-date."
          </p>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-[100%] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&w=600"
                alt="Person image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="flex flex-col font-semibold text-gray-700">
              <span>Emily Chen,</span>
              <span className="text-xs text-gray-500">
                Owner, Acme Enterprises
              </span>
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            "I was hesitant to try a new inventory management system, but this
            app has exceeded all of my expectations. It's user-friendly, and the
            customer support team is fantastic."
          </p>
        </div>

        <div className="flex flex-col gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-[100%] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&w=600"
                alt="Person image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="flex flex-col font-semibold text-gray-700">
              <span>Michael Johnson,</span>
              <span className="text-xs text-gray-500">
                Owner, Omega Express
              </span>
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            "This app has saved me so much time and money. I can easily compare
            prices, place orders, and monitor my inventory levels all in one
            place."
          </p>
        </div>

        <div className="flex flex-col gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-[100%] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&w=600"
                alt="Person image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="flex flex-col font-semibold text-gray-700">
              <span>Lisa Patel,</span>
              <span className="text-xs text-gray-500">
                Owner, Delta Marketplace
              </span>
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            "As a growing business, we needed a reliable and scalable inventory
            management solution. This app has been the perfect fit, and it's
            helped us streamline our operations."
          </p>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex items-center gap-2.5">
            <div className="size-10 rounded-[100%] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&w=600"
                alt="Person image"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="flex flex-col font-semibold text-gray-700">
              <span>David Lee,</span>
              <span className="text-xs text-gray-500">
                Supplier, Gamma Distributors
              </span>
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            "I highly recommend this inventory management app to any business
            owner or supplier looking to improve their operations. It's been a
            game-changer for us."
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Find the perfect plan to manage your inventory and grow your business.
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {/* Basic */}
        <div className="flex flex-col justify-between gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex flex-col gap-3.5">
            <span className="w-fit text-sm text-gray-900 bg-gray-300 px-3.5 py-1.5 rounded-3xl">
              Basic
            </span>
            <h1 className="text-3xl font-semibold text-gray-900">Free</h1>
            <p className="text-sm text-gray-500">
              For small businesses or startups looking to manage their inventory
              efficiently.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500">
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Manage up to 100 products</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Real-time inventory tracking</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Supplier management</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Order history and basic reporting</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Email support</span>
              </li>
            </ul>
          </div>

          <button className="text-white bg-gray-900 hover:bg-gray-800 px-3.5 py-2.5 rounded-xl">
            Upgrade
          </button>
        </div>

        {/* Standard */}
        <div className="flex flex-col justify-between gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex flex-col gap-3.5">
            <span className="w-fit text-sm text-gray-900 bg-gray-300 px-3.5 py-1.5 rounded-3xl">
              Standard
            </span>
            <h1 className="text-3xl font-semibold text-gray-900">$49/Month</h1>
            <p className="text-sm text-gray-500">
              Ideal for growing businesses that need more advanced control and
              insights.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500">
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Manage up to 1,000 products</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Advanced reporting and analytics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Bulk order processing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Multi-supplier management</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Priority email and chat support</span>
              </li>
            </ul>
          </div>

          <button className="text-white bg-gray-900 hover:bg-gray-800 px-3.5 py-2.5 rounded-xl">
            Upgrade
          </button>
        </div>

        {/* Premium */}
        <div className="flex flex-col justify-between gap-3.5 bg-gray-100 p-5 border rounded-md">
          <div className="flex flex-col gap-3.5">
            <span className="w-fit text-sm text-gray-900 bg-gray-300 px-3.5 py-1.5 rounded-3xl">
              Premium
            </span>
            <h1 className="text-3xl font-semibold text-gray-900">$99/Month</h1>
            <p className="text-sm text-gray-500">
              The all-in-one solution for large businesses with complex
              inventory needs.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-500">
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Unlimited product management</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Custom reports and analytics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Automated restocking notifications</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Integration with accounting and POS systems</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 stroke-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span>Dedicated account manager and 24/7 premium support</span>
              </li>
            </ul>
          </div>

          <button className="text-white bg-gray-900 hover:bg-gray-800 px-3.5 py-2.5 rounded-xl">
            Upgrade
          </button>
        </div>
      </div>
    </section>
  );
}

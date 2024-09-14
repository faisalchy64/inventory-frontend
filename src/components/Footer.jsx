import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gray-950">
      <div className="w-4/5 grid md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-3.5 py-20 mx-auto">
        <div className="flex flex-col gap-3.5">
          <Link to="/" className="text-3xl font-semibold text-white">
            Xventory
          </Link>
          <p className="text-sm text-gray-500">
            Start today with a free trial and see how our platform can make
            inventory management easy and efficient for your business.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-white">
          <h3>Explore</h3>
          <ul className="flex flex-col gap-1.5">
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2.5 text-white">
          <h3>Support</h3>
          <ul className="flex flex-col gap-1.5">
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/help">Help Center</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/api">Api Documentation</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/system">System Status</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2.5 text-white">
          <h3>Legal</h3>
          <ul className="flex flex-col gap-1.5">
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/cookie">Cookie Policy</Link>
            </li>
            <li className="text-sm text-gray-500 hover:text-gray-300">
              <Link to="/data">Data Processing</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-lime-500 p-5">
        <p className="text-sm text-center text-white">
          Xventory {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

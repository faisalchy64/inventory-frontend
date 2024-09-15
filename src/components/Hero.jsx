import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <header className="w-4/5 min-h-[500px] flex flex-col-reverse md:flex-row justify-between items-center gap-5 py-10 mx-auto">
      <div className="w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#27B643] to-[#FFE70B]">
          Streamline Your Inventory, Boost Your Business
        </h1>
        <p className="text-gray-500 my-3.5">
          Manage your products, track your stock, and source new supplies
          effortlessly. Our platform is built to save you time and boost
          productivity, whether you're a supplier or a business owner.
        </p>

        <Link
          to="/signin"
          className="inline-block text-white bg-gray-900 hover:bg-gray-800 px-5 py-3.5 rounded-3xl"
        >
          Start for free
        </Link>
      </div>
      <div className="w-full rounded-3xl overflow-hidden">
        <img
          src={hero}
          alt="Hero image"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

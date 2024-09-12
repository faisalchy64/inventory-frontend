import { Link } from "react-router-dom";

export default function Card() {
  return (
    <article className="bg-gray-100 border rounded-md overflow-hidden">
      <div className="h-60">
        <img
          src="https://images.pexels.com/photos/27835751/pexels-photo-27835751/free-photo-of-a-tree-with-green-apples-on-it.jpeg"
          alt="Product image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3.5">
        <h3 className="text-2xl font-semibold text-gray-800">Apple</h3>
        <p className="text-sm text-gray-500 py-2.5">
          Fresh and organic apple. Fresh and organic apple. Fresh and organic
          apple.
        </p>
        <div className="flex items-center justify-between mt-2.5">
          <h2 className="text-xl font-semibold text-gray-700">$5.00</h2>
          <Link
            to={`/products/${1}`}
            className="text-sm text-white bg-gray-900 hover:bg-gray-800 px-3.5 py-2.5 rounded-2xl"
          >
            Order Now
          </Link>
        </div>
      </div>
    </article>
  );
}

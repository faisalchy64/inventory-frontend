import { Link } from "react-router-dom";

export default function Card({ product }) {
  const {
    _id,
    productName,
    productDescription,
    productPrice,
    productMeasure,
    productImage,
  } = product;

  return (
    <article className="bg-gray-100 border rounded-md overflow-hidden">
      <div className="h-60">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3.5">
        <h3 className="text-2xl font-semibold capitalize text-gray-800">
          {productName}
        </h3>
        <p className="text-sm text-gray-500 py-2.5">{productDescription}</p>
        <div className="flex items-center justify-between mt-2.5">
          <h2 className="text-xl font-semibold uppercase text-gray-700">
            ${productPrice} {productMeasure}
          </h2>
          <Link
            to={`/products/${_id}`}
            className="text-sm text-white bg-gray-900 hover:bg-gray-800 px-3.5 py-2.5 rounded-2xl"
          >
            Order Now
          </Link>
        </div>
      </div>
    </article>
  );
}

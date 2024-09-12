import { Link } from "react-router-dom";
import Card from "./Card";

export default function Container() {
  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Browse, compare and order products from trusted suppliers
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Link
        to="/products"
        className="w-fit text-white bg-gray-900 hover:bg-gray-800 px-5 py-3.5 mx-auto rounded-3xl"
      >
        See all products
      </Link>
    </section>
  );
}

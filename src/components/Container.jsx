import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api";
import ProductLoader from "../uis/ProductLoader";
import Card from "./Card";

export default function Container() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await api.get("/products");
        setProducts(res.data.products);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getProducts();
    setLoading(false);
  }, []);

  return (
    <section className="w-4/5 min-h-[500px] flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Browse, compare and order products from trusted suppliers
      </h1>

      {loading && <ProductLoader />}

      {products.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}

      {products.length === 0 && (
        <div className="h-80 flex items-center justify-center">
          <h3 className="text-gray-500">No products found.</h3>
        </div>
      )}

      <Link
        to="/products"
        className="w-fit text-white bg-gray-900 hover:bg-gray-800 px-5 py-3.5 mx-auto rounded-3xl"
      >
        See all products
      </Link>
    </section>
  );
}

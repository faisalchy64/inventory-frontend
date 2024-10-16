import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../api";
import ProductLoader from "../uis/ProductLoader";
import Card from "../components/Card";

export default function Products() {
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
    <section className="w-4/5 min-h-screen flex flex-col gap-10 py-10 mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Browse and purchase from a wide range of suppliers,
        <br className="hidden lg:inline" /> all from a single, easy-to-use
        platform
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
    </section>
  );
}

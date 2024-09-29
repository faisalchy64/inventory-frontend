import { RouterProvider } from "react-router-dom";
import router from "./router";
import useAuthCheck from "./hooks/useAuthCheck";

export default function App() {
  const loading = useAuthCheck();

  if (loading) {
    return (
      <section className="h-screen flex justify-center items-center bg-white">
        <h1 className="text-gray-500 animate-pulse">Loading...</h1>
      </section>
    );
  }

  return <RouterProvider router={router} />;
}

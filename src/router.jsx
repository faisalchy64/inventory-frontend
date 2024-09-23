import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Dashboard from "./layout/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Root from "./pages/Root";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import CreateProduct from "./pages/CreateProduct";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Root />,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/manage-orders",
        element: <ManageOrders />,
      },
      {
        path: "/dashboard/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;

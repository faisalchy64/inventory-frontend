import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Dashboard from "./layout/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Root from "./pages/Root";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import CreateProduct from "./pages/CreateProduct";
import AdminManageUsers from "./pages/AdminManageUsers";
import AdminManageProducts from "./pages/AdminManageProducts";
import AdminManageOrders from "./pages/AdminManageOrders";
import Profile from "./pages/Profile";
import AuthRoute from "./components/AuthRoute";
import SupplierRoute from "./components/SupplierRoute";
import AdminRoute from "./components/AdminRoute";
import Verify from "./pages/Verify";

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
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "",
    element: <AuthRoute />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Root />,
          },
          {
            path: "",
            element: <SupplierRoute />,
            children: [
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
            ],
          },
          {
            path: "",
            element: <AdminRoute />,
            children: [
              {
                path: "/dashboard/admin-manage-users",
                element: <AdminManageUsers />,
              },
              {
                path: "/dashboard/admin-manage-products",
                element: <AdminManageProducts />,
              },
              {
                path: "/dashboard/admin-manage-orders",
                element: <AdminManageOrders />,
              },
            ],
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/verify/:token",
    element: <Verify />,
  },
]);

export default router;

import { Navigate, Outlet } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";

export default function SupplierRoute() {
  const { auth } = useGlobal();

  if (auth && auth.role === "supplier") {
    return <Outlet />;
  }

  return <Navigate to="/dashboard" />;
}

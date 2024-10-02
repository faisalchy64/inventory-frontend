import { Navigate, Outlet } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";

export default function AdminRoute() {
  const { auth } = useGlobal();

  if (auth && auth.role === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/dashboard" />;
}

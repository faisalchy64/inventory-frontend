import { Navigate, Outlet, useLocation } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";

export default function AuthRoute() {
  const from = useLocation();
  const { auth } = useGlobal();

  if (auth && auth.isVerified) {
    return <Outlet />;
  }

  if (auth) {
    return <Navigate to="/" />;
  }

  return <Navigate to="/signin" state={{ from }} replace />;
}

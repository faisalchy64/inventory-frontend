import toast from "react-hot-toast";
import api from "../api";
import useGlobal from "./useGlobal";

export default function useRefreshToken() {
  const { setAuth } = useGlobal();

  const refresh = async () => {
    try {
      const res = await api.get("/refresh-token", { withCredentials: true });
      setAuth({ ...res.data });
    } catch (err) {
      localStorage.removeItem("auth");
      setAuth(null);
      toast.error(err.response.data.message);
    }
  };

  return refresh;
}

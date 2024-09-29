import { useState, useEffect } from "react";
import useGlobal from "./useGlobal";

export default function useAuthCheck() {
  const [loading, setLoading] = useState(true);
  const { setAuth } = useGlobal();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setAuth(auth);
    }

    setLoading(false);
  }, [setAuth]);

  return loading;
}

import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { apiPrivate } from "../api";

export default function useApiPrivate() {
  const refresh = useRefreshToken();

  useEffect(() => {
    const reqInterceptor = apiPrivate.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error)
    );

    const resInterceptor = apiPrivate.interceptors.response.use(
      (res) => res,
      async (error) => {
        const prevRequest = error.config;

        if (error.response.status === 401 && prevRequest.sent === undefined) {
          prevRequest.sent = true;
          await refresh();
          return apiPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      apiPrivate.interceptors.request.eject(reqInterceptor);
      apiPrivate.interceptors.response.eject(resInterceptor);
    };
  }, [refresh]);

  return apiPrivate;
}

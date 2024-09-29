import { useState, createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(null);
  const state = { open, auth, setOpen, setAuth };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
}

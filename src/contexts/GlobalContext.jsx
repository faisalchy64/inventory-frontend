import { useState, createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const state = { open, setOpen };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import GlobalContextProvider from "./contexts/GlobalContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
      <Toaster position="top-right" />
    </GlobalContextProvider>
  </StrictMode>
);

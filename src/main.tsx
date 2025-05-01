import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Dynamic basename based on environment
const isProduction = import.meta.env.MODE === "production";
const basename = isProduction ? "/cmpe-mentorship-landing" : "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename={basename} >
      <App />
    </HashRouter>
  </StrictMode>
);

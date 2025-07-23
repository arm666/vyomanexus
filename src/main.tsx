import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./views/Home";
import "./index.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);

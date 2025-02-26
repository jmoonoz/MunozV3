import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style/index.sass";
import App from "./App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

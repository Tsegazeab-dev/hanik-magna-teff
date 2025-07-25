import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/plugins.css";
import "./styles/swiper.css";
import "./styles/global.css";
import "./styles/coloring.css";
import "./styles/variables.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

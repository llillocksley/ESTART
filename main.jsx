import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

// Global styles (correct relative paths)
import "./index.css";
import "./assets/css/global.css";
import "./assets/css/style.css";
import "./assets/css/Projects.css";
import "./assets/css/smart-logistics.css";
import "./assets/css/Aboutt.css";
import "./assets/css/transport-dashboard.css";
import "./assets/css/demo.css";
import "./assets/css/navbar.css";
import "./assets/css/CPAlandingfunnel.css";
import "./assets/css/home.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);




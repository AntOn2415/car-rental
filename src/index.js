import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/"> */}
    <BrowserRouter basename="/car-rental">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

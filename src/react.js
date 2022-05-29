import React from "react";
import './react.css'
import ReactDOM from "react-dom/client";
import App from "./App";
import WebVitals from "./reportWebVitals";

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

WebVitals();

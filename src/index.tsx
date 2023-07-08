import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "styles/_reset.css";
import "styles/_fonts.css";
import "styles/_index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

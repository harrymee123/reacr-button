import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { pageStyles } from "./theme";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <main style={pageStyles}>
      <App />
    </main>
  </React.StrictMode>,
  rootElement
);

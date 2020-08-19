import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";

// styles
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

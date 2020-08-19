import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginFormWithYup from "./LoginFormWithYup";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item nav-link">
            <NavLink activeClass="active" to="/login-form-without-yup">
              LoginForm without Yup
            </NavLink>
          </li>
          <li class="nav-item nav-link">
            <NavLink activeClass="active" to="/login-form-with-yup">
              LoginForm with Yup
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/login-form-without-yup" component={LoginForm} />
          <Route path="/login-form-with-yup" component={LoginFormWithYup} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

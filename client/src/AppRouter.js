import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./reset.css";
import "./nk.css";

import Index from "./components/Index";
import Checklists from "./components/Checklists";
import EventChecklists from "./components/Checklists/Events";

const AppRouter = (props) => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/checklists" component={Checklists} />
        <Route
          exact
          path="/checklists/:eventSulg"
          component={EventChecklists}
        />
      </div>
    </Router>
  </div>
);

export default AppRouter;

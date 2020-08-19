import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./reset.css";
import "./nk.css";

import Index from "./components/Index";
import Checklists from "./components/Checklists";

const AppRouter = (props) => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/checklists" component={Checklists} />
      </div>
    </Router>
  </div>
);

export default AppRouter;

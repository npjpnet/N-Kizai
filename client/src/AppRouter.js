import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./AppRouter.css";

import Index from "./components/Index";

const AppRouter = (props) => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Index} />
      </div>
    </Router>
  </div>
);

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './reset.css';
import './nk.scss';

import pkg from './../package.json';

import Index from './components/routes/Index';
// import Login from "./components/routes/Index/login";
import Checklists from './components/routes/Checklists';
import EventChecklists from './components/routes/Checklists/Events';
import AddProducts from './components/routes/Devices/addProducts';
// import AddDevices from "./components/routes/Devices/addDevices";
import Reservations from './components/routes/Reservations';
import EventReservations from './components/routes/Reservations/Events';

const AppRouter = (props) => (
  <div>
    <Router>
      <div>
        <p>N-Kizai v{pkg.version}</p>
        <Link className="nk nk_button" to="/">
          メインメニュー
        </Link>

        <Route exact path="/" component={Index} />
        {/* <Route exact path="/login" component={Login} /> */}

        <Route exact path="/checklists" component={Checklists} />
        <Route
          exact
          path="/checklists/:eventSulg"
          component={EventChecklists}
        />

        <Route exact path="/devices/add-products" component={AddProducts} />
        {/* <Route exact path="/devices/add-devices" component={AddDevices} /> */}

        <Route exact path="/reservations" component={Reservations} />
        <Route
          exact
          path="/reservations/:eventSulg"
          component={EventReservations}
        />
      </div>
    </Router>
  </div>
);

export default AppRouter;

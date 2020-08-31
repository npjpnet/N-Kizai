import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './reset.css';
import './nk.scss';

import Index from './components/routes/Index';

import Checklists from './components/routes/Checklists';
import EventChecklist from './components/routes/Checklists/Events';
import PrintChecklist from './components/routes/Checklists/Events/print';

import SearchProducts from './components/routes/Products/Search';
import AddProduct from './components/routes/Products/add';
import ProductInfo from './components/routes/Products/info';

import Reservations from './components/routes/Reservations';
import EventReservation from './components/routes/Reservations/Events';

const AppRouter = (props) => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        {/* <Route exact path="/login" component={Login} /> */}

        <Route exact path="/checklists" component={Checklists} />
        <Route exact path="/checklists/:eventSulg" component={EventChecklist} />
        <Route
          exact
          path="/checklists/:eventSlug/print"
          component={PrintChecklist}
        />

        <Route exact path="/products/search" component={SearchProducts} />
        <Route exact path="/products/add" component={AddProduct} />
        <Route exact path="/products/id/:productId" component={ProductInfo} />

        <Route exact path="/reservations" component={Reservations} />
        <Route
          exact
          path="/reservations/:eventSulg"
          component={EventReservation}
        />
      </div>
    </Router>
  </div>
);

export default AppRouter;

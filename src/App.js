import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Search from './pages/Search';
import OffersListing from './pages/OffersListing';

let App = () => (
     <Router>
        <Switch>
          <Route path="/offers">
            <OffersListing/>
          </Route>
          <Route path="/">
            <Search/>
          </Route>
        </Switch>
    </Router>
);
export default App;
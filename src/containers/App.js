import React from 'react';
import Offers from '../components/offers';
import Loading from '../components/loadingSpinner'
import OffersListing from '../pages/OffersListing';
import "antd/dist/antd.css";

let App = () => (
  <div>
     <OffersListing/>
     <Loading />
  </div>
);
export default App;
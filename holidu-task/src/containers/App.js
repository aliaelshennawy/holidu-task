import React from 'react';
import Button from '../components/button';
import Offers from '../components/offers';
import Loading from '../components/loadingSpinner'
import OffersListing from '../pages/OffersListing';
let App = () => (
  <div>
     <OffersListing/>
     <Loading />
  </div>
);
export default App;
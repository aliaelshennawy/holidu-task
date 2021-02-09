import  React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getOffers } from '../actions';
import Offers from "../components/offers";

const OffersListing = ({offersList}) => {

  useEffect(() => {
    getOffers();
  });
  return (
    <section>
      <Offers offersList={offersList}/>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    offersList: state.offers,
  };
}
const mapDispatchToProps = {
  getOffers: getOffers,
};

export default connect(mapStateToProps,mapDispatchToProps)(OffersListing);


import  React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Offers from "../components/offers";
import { useSelector} from "react-redux";


const OffersListing = () => {
  const offersList = useSelector(state => state.offers);
  return (
    <section>
      <Offers offersList={offersList}/>
    </section>
  );
};

export default withRouter(OffersListing);

import  React from "react";
import { withRouter } from "react-router-dom";
import Offers from "../components/offers";
import Loading from '../components/loadingSpinner';
import { useSelector} from "react-redux";
import EmptyResults from "../components/noResults";


const OffersListing = () => {
  const offersList = useSelector(state => state.offers);
  const loading = useSelector(state => state.loading);
  const noOffers = useSelector(state => state.noOffers);
  return loading  ? (
      <Loading/>
    ) :
   (
    <section>
      {!noOffers ? <Offers offersList={offersList}/> : <EmptyResults/>}
    </section>
  );
};

export default withRouter(OffersListing);

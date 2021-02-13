import  React from "react";
import { withRouter } from "react-router-dom";
import Offers from "../components/offers";
import Loading from '../components/loadingSpinner';
import { useSelector} from "react-redux";


const OffersListing = () => {
  const offersList = useSelector(state => state.offers);
  const loading = useSelector(state => state.loading);
  return loading  ? (
      <Loading/>
    ) :
   (
    <section>
      <Offers offersList={offersList}/>
    </section>
  );
};

export default withRouter(OffersListing);

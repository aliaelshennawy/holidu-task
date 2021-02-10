import  React, { useEffect } from "react";
import { connect ,  useDispatch} from 'react-redux'
import { getOffers } from '../actions';
import Offers from "../components/offers";

const OffersListing = ({offersList}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch])
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

